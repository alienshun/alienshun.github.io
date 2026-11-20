#!/usr/bin/env node

'use strict';

/*
  Check consistency of the Activities & Moments module.

  Run from the repository root:

      node scripts/check_activities_moments.js

  This script has no third-party dependencies.
*/

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');

const DATE_KEY_RE = /^\d{4}_\d{2}_\d{2}$/;
const CONTENT_FILE_RE = /^activities_moments_(\d{4}_\d{2}_\d{2})\.js$/;

// Avoid writing the old slug literally, otherwise this script would flag itself.
const OLD_SLUG = 'activities' + '-moments';

const TEXT_EXTENSIONS = new Set([
  '.html',
  '.css',
  '.js',
  '.json',
  '.md',
  '.txt',
  '.py',
  '.yml',
  '.yaml',
  '.xml'
]);

const IMAGE_EXTENSIONS = new Set([
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.gif'
]);

const SKIP_DIR_NAMES = new Set([
  '.git',
  'node_modules',
  '__pycache__',
  '.vscode',
  '.idea',
  'dist',
  'build'
]);

const CONFIG_FILE = path.join(ROOT, 'assets/js/Config/SiteResources.js');
const EN_DIR = path.join(ROOT, 'assets/js/Content/EN/life');
const ZH_DIR = path.join(ROOT, 'assets/js/Content/ZH/life');
const LIFE_ROUTE_DIR = path.join(ROOT, 'life/activities_moments');
const IMAGE_ROOT_DIR = path.join(ROOT, 'assets/images/life/activities_moments');

const reporter = {
  errors: [],
  warnings: [],

  error(message) {
    this.errors.push(message);
  },

  warn(message) {
    this.warnings.push(message);
  },

  print() {
    console.log('\n=== Activities & Moments consistency check ===\n');

    if (this.errors.length > 0) {
      console.log(`Errors: ${this.errors.length}`);
      this.errors.forEach((message, index) => {
        console.log(`  [E${String(index + 1).padStart(2, '0')}] ${message}`);
      });
      console.log('');
    } else {
      console.log('Errors: 0\n');
    }

    if (this.warnings.length > 0) {
      console.log(`Warnings: ${this.warnings.length}`);
      this.warnings.forEach((message, index) => {
        console.log(`  [W${String(index + 1).padStart(2, '0')}] ${message}`);
      });
      console.log('');
    } else {
      console.log('Warnings: 0\n');
    }

    if (this.errors.length > 0) {
      console.log('Result: FAILED');
      return 1;
    }

    console.log('Result: PASSED');
    return 0;
  }
};

function rel(filePath) {
  return path.relative(ROOT, filePath).replace(/\\/g, '/');
}

function exists(filePath) {
  return fs.existsSync(filePath);
}

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function isDirectory(filePath) {
  return exists(filePath) && fs.statSync(filePath).isDirectory();
}

function isFile(filePath) {
  return exists(filePath) && fs.statSync(filePath).isFile();
}

function shouldSkip(filePath) {
  const parts = rel(filePath).split('/');
  return parts.some((part) => SKIP_DIR_NAMES.has(part));
}

function validateDateKey(dateKey, source) {
  if (typeof dateKey !== 'string' || !DATE_KEY_RE.test(dateKey)) {
    const value = typeof dateKey === 'string' ? `\`${dateKey}\`` : typeof dateKey;
    reporter.error(`Invalid dateKey ${value} in ${source}. Expected a YYYY_MM_DD string.`);
    return false;
  }

  const [year, month, day] = dateKey.split('_').map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day));

  const valid =
    parsed.getUTCFullYear() === year &&
    parsed.getUTCMonth() === month - 1 &&
    parsed.getUTCDate() === day;

  if (!valid) {
    reporter.error(`Invalid calendar date \`${dateKey}\` in ${source}.`);
  }

  return valid;
}

function expectedISO(dateKey) {
  return dateKey.replace(/_/g, '-');
}

function expectedLabel(dateKey) {
  return dateKey.replace(/_/g, '.');
}

function extractRegisteredDates() {
  if (!isFile(CONFIG_FILE)) {
    reporter.error(`Missing config file: ${rel(CONFIG_FILE)}`);
    return [];
  }

  const context = { window: {} };
  try {
    vm.runInNewContext(readText(CONFIG_FILE), context, {
      filename: CONFIG_FILE,
      timeout: 1000
    });
  } catch (error) {
    reporter.error(`Failed to evaluate ${rel(CONFIG_FILE)}: ${error.message}`);
    return [];
  }

  const source = `${rel(CONFIG_FILE)} activitiesMoments.dates`;
  const configuredDates = context.window.SiteResources?.activitiesMoments?.dates;
  if (!Array.isArray(configuredDates)) {
    reporter.error(`Expected an array in ${source}.`);
    return [];
  }

  const dates = Array.from(configuredDates).filter((dateKey) => validateDateKey(dateKey, source));

  const seen = new Set();
  const duplicates = new Set();

  dates.forEach((dateKey) => {
    if (seen.has(dateKey)) {
      duplicates.add(dateKey);
    }
    seen.add(dateKey);
  });

  if (duplicates.size > 0) {
    reporter.error(
      `Duplicate date keys in ${source}: ${Array.from(duplicates).sort().join(', ')}`
    );
  }

  return dates;
}

function findContentDates(directory, lang) {
  const dates = new Set();

  if (!isDirectory(directory)) {
    reporter.error(`Missing ${lang} content directory: ${rel(directory)}`);
    return dates;
  }

  fs.readdirSync(directory).forEach((name) => {
    const filePath = path.join(directory, name);
    if (!isFile(filePath)) return;

    const match = name.match(CONTENT_FILE_RE);
    if (match) {
      dates.add(match[1]);
    }
  });

  return dates;
}

function collectDetailDates() {
  const dates = new Set();

  if (!isDirectory(LIFE_ROUTE_DIR)) {
    reporter.error(`Missing route directory: ${rel(LIFE_ROUTE_DIR)}`);
    return dates;
  }

  fs.readdirSync(LIFE_ROUTE_DIR).forEach((name) => {
    const filePath = path.join(LIFE_ROUTE_DIR, name);
    if (!isDirectory(filePath)) return;

    if (DATE_KEY_RE.test(name)) {
      dates.add(name);
    } else {
      reporter.warn(`Unexpected non-date directory under ${rel(LIFE_ROUTE_DIR)}: ${name}`);
    }
  });

  return dates;
}

function collectImageDates(required) {
  const dates = new Set();

  if (!isDirectory(IMAGE_ROOT_DIR)) {
    if (required || exists(IMAGE_ROOT_DIR)) {
      reporter.error(`Expected an image root directory at ${rel(IMAGE_ROOT_DIR)}.`);
    }
    return dates;
  }

  fs.readdirSync(IMAGE_ROOT_DIR).forEach((name) => {
    const filePath = path.join(IMAGE_ROOT_DIR, name);
    if (!isDirectory(filePath)) return;

    if (DATE_KEY_RE.test(name)) {
      dates.add(name);
    } else {
      reporter.warn(`Unexpected non-date directory under ${rel(IMAGE_ROOT_DIR)}: ${name}`);
    }
  });

  return dates;
}

function regexField(text, fieldName) {
  const pattern = new RegExp(`\\b${escapeRegExp(fieldName)}\\s*:\\s*(['"])(.*?)\\1`, 's');
  const match = text.match(pattern);
  return match ? match[2] : null;
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function extractAssetPaths(text, dateKey) {
  const pattern = new RegExp(
    `(['"])((?:\\.\\/|\\/)?assets\\/images\\/life\\/activities_moments\\/${escapeRegExp(dateKey)}\\/[^'"]+)\\1`,
    'g'
  );

  const paths = [];
  const seen = new Set();

  let match;
  while ((match = pattern.exec(text)) !== null) {
    const assetPath = match[2];

    if (!seen.has(assetPath)) {
      seen.add(assetPath);
      paths.push(assetPath);
    }
  }

  return paths;
}

function normalizeAssetPath(pathString) {
  let normalized = String(pathString || '').trim();

  if (normalized.startsWith('./')) {
    normalized = normalized.slice(2);
  }

  if (normalized.startsWith('/')) {
    normalized = normalized.slice(1);
  }

  return path.join(ROOT, normalized);
}

function parseContentFile(filePath, lang, dateKey) {
  const text = readText(filePath);

  return {
    lang,
    date: dateKey,
    filePath,
    dateKey: regexField(text, 'dateKey'),
    dateISO: regexField(text, 'dateISO'),
    dateLabel: regexField(text, 'dateLabel'),
    title: regexField(text, 'title'),
    location: regexField(text, 'location'),
    cover: regexField(text, 'cover'),
    assetPaths: extractAssetPaths(text, dateKey)
  };
}

function checkContentFile(filePath, lang, dateKey) {
  if (!isFile(filePath)) {
    reporter.error(`Missing ${lang} content file for ${dateKey}: ${rel(filePath)}`);
    return null;
  }

  const meta = parseContentFile(filePath, lang, dateKey);

  if (meta.dateKey !== dateKey) {
    reporter.error(`${rel(filePath)} has dateKey \`${meta.dateKey}\`, expected \`${dateKey}\`.`);
  }

  const dateISO = expectedISO(dateKey);
  if (meta.dateISO !== dateISO) {
    reporter.error(`${rel(filePath)} has dateISO \`${meta.dateISO}\`, expected \`${dateISO}\`.`);
  }

  const dateLabel = expectedLabel(dateKey);
  if (meta.dateLabel !== dateLabel) {
    reporter.error(`${rel(filePath)} has dateLabel \`${meta.dateLabel}\`, expected \`${dateLabel}\`.`);
  }

  if (!meta.title) {
    reporter.error(`${rel(filePath)} is missing a title field.`);
  }

  if (!meta.location) {
    reporter.warn(`${rel(filePath)} is missing a location field.`);
  }

  if (!meta.cover) {
    reporter.error(`${rel(filePath)} is missing a cover field.`);
  } else {
    const coverFile = normalizeAssetPath(meta.cover);
    if (!isFile(coverFile)) {
      reporter.error(`${rel(filePath)} references missing cover image: ${meta.cover}`);
    }
  }

  if (meta.assetPaths.length === 0) {
    reporter.warn(
      `${rel(filePath)} does not reference any images under assets/images/life/activities_moments/${dateKey}/.`
    );
  }

  meta.assetPaths.forEach((assetPath) => {
    const assetFile = normalizeAssetPath(assetPath);

    if (!isFile(assetFile)) {
      reporter.error(`${rel(filePath)} references missing image: ${assetPath}`);
    }
  });

  return meta;
}

function checkLanguagePair(dateKey, enMeta, zhMeta) {
  if (!enMeta || !zhMeta) return;

  const fields = ['dateKey', 'dateISO', 'dateLabel', 'cover'];

  fields.forEach((field) => {
    if (enMeta[field] !== zhMeta[field]) {
      reporter.error(
        `EN/ZH mismatch for ${dateKey}: \`${field}\` is \`${enMeta[field]}\` in EN but \`${zhMeta[field]}\` in ZH.`
      );
    }
  });
}

function checkListEntry() {
  const listIndex = path.join(LIFE_ROUTE_DIR, 'index.html');

  if (!isFile(listIndex)) {
    reporter.error(`Missing list entry: ${rel(listIndex)}`);
    return;
  }

  const text = readText(listIndex);

  const requiredFragments = [
    '<base href="../../">',
    'assets/js/Config/SiteResources.js',
    'assets/js/Functions/general/SiteEarlyBoot.js',
    'assets/js/Functions/general/SiteResourceLoader.js',
    'id="mount-life"'
  ];

  requiredFragments.forEach((fragment) => {
    if (!text.includes(fragment)) {
      reporter.error(`${rel(listIndex)} is missing required fragment: ${fragment}`);
    }
  });
}

function checkDetailEntry(dateKey) {
  const detailIndex = path.join(LIFE_ROUTE_DIR, dateKey, 'index.html');

  if (!isFile(detailIndex)) {
    reporter.error(`Missing detail entry for ${dateKey}: ${rel(detailIndex)}`);
    return;
  }

  const text = readText(detailIndex);

  const requiredFragments = [
    '<base href="../../../">',
    'assets/js/Config/SiteResources.js',
    'assets/js/Functions/general/SiteEarlyBoot.js',
    'assets/js/Functions/general/SiteResourceLoader.js',
    'id="mount-life"'
  ];

  requiredFragments.forEach((fragment) => {
    if (!text.includes(fragment)) {
      reporter.error(`${rel(detailIndex)} is missing required fragment: ${fragment}`);
    }
  });
}

function checkImageDirectory(dateKey) {
  const imageDir = path.join(IMAGE_ROOT_DIR, dateKey);

  if (!isDirectory(imageDir)) {
    reporter.error(`Missing image directory for ${dateKey}: ${rel(imageDir)}`);
    return;
  }

  const imageFiles = fs.readdirSync(imageDir)
    .map((name) => path.join(imageDir, name))
    .filter((filePath) => {
      return isFile(filePath) && IMAGE_EXTENSIONS.has(path.extname(filePath).toLowerCase());
    });

  if (imageFiles.length === 0) {
    reporter.warn(`No image files found in ${rel(imageDir)}.`);
  }

  const hasCover = imageFiles.some((filePath) => {
    return path.basename(filePath, path.extname(filePath)).toLowerCase() === 'cover';
  });

  if (!hasCover) {
    reporter.warn(`No cover.* image found in ${rel(imageDir)}.`);
  }
}

function checkUnregisteredFiles(registeredDates, allKnownDates) {
  Array.from(allKnownDates)
    .filter((dateKey) => !registeredDates.has(dateKey))
    .sort()
    .forEach((dateKey) => {
      reporter.error(
        `Date \`${dateKey}\` has files or directories but is not listed in activitiesMoments.dates.`
      );
    });

  Array.from(registeredDates)
    .filter((dateKey) => !allKnownDates.has(dateKey))
    .sort()
    .forEach((dateKey) => {
      reporter.error(
        `Date \`${dateKey}\` is listed in activitiesMoments.dates, but no matching content, detail, or image directory was found.`
      );
    });
}

function walkFiles(startDir, callback) {
  if (!exists(startDir)) return;

  const entries = fs.readdirSync(startDir, { withFileTypes: true });

  entries.forEach((entry) => {
    const filePath = path.join(startDir, entry.name);

    if (shouldSkip(filePath)) return;

    if (entry.isDirectory()) {
      walkFiles(filePath, callback);
    } else if (entry.isFile()) {
      callback(filePath);
    }
  });
}

function walkPaths(startDir, callback) {
  if (!exists(startDir)) return;

  const entries = fs.readdirSync(startDir, { withFileTypes: true });

  entries.forEach((entry) => {
    const filePath = path.join(startDir, entry.name);

    if (shouldSkip(filePath)) return;

    callback(filePath, entry);

    if (entry.isDirectory()) {
      walkPaths(filePath, callback);
    }
  });
}

function scanOldSlug() {
  walkPaths(ROOT, (filePath, entry) => {
    const relative = rel(filePath);

    if (relative.includes(OLD_SLUG)) {
      reporter.error(
        `Old hyphen slug found in path: ${relative}. Use activities_moments instead.`
      );
    }

    if (!entry.isFile()) return;

    const ext = path.extname(filePath).toLowerCase();

    if (!TEXT_EXTENSIONS.has(ext)) return;

    let text;

    try {
      text = readText(filePath);
    } catch (error) {
      return;
    }

    text.split(/\r?\n/).forEach((line, index) => {
      if (line.includes(OLD_SLUG)) {
        reporter.error(
          `Old hyphen slug found in ${relative}:${index + 1}. Use activities_moments instead.`
        );
      }
    });
  });
}

function unionSets(...sets) {
  const result = new Set();

  sets.forEach((set) => {
    set.forEach((value) => result.add(value));
  });

  return result;
}

function main() {
  const registeredDates = new Set(extractRegisteredDates());

  const enDates = findContentDates(EN_DIR, 'EN');
  const zhDates = findContentDates(ZH_DIR, 'ZH');
  const detailDates = collectDetailDates();
  const imageDates = collectImageDates(registeredDates.size > 0);

  const allKnownDates = unionSets(enDates, zhDates, detailDates, imageDates);

  checkUnregisteredFiles(registeredDates, allKnownDates);
  checkListEntry();

  Array.from(registeredDates)
    .sort()
    .forEach((dateKey) => {
      const enFile = path.join(EN_DIR, `activities_moments_${dateKey}.js`);
      const zhFile = path.join(ZH_DIR, `activities_moments_${dateKey}.js`);

      const enMeta = checkContentFile(enFile, 'EN', dateKey);
      const zhMeta = checkContentFile(zhFile, 'ZH', dateKey);

      checkLanguagePair(dateKey, enMeta, zhMeta);
      checkDetailEntry(dateKey);
      checkImageDirectory(dateKey);
    });

  Array.from(enDates)
    .filter((dateKey) => !zhDates.has(dateKey))
    .sort()
    .forEach((dateKey) => {
      reporter.error(`EN content exists but ZH content is missing for ${dateKey}.`);
    });

  Array.from(zhDates)
    .filter((dateKey) => !enDates.has(dateKey))
    .sort()
    .forEach((dateKey) => {
      reporter.error(`ZH content exists but EN content is missing for ${dateKey}.`);
    });

  scanOldSlug();

  return reporter.print();
}

process.exit(main());
