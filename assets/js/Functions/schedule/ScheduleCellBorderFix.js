/**
 * Fix missing table cell borders in schedule timetables.
 *
 * Root cause: The hardcoded timetable HTML in schedule_EN.js / schedule_ZH.js
 * has rows where not enough <td> placeholder cells were written. When a row
 * above uses rowspan, the current row's empty columns still need explicit
 * <td></td> elements. Without them, the browser doesn't render borders for
 * those missing positions (e.g., rows for period=2 often only have 2-3 cells
 * when they need 4-5).
 *
 * This fix runs after the schedule mounts. It tracks rowspan state across
 * columns and pads each row with empty <td> cells to fill the missing grid
 * positions.
 */
function fixScheduleTableCellBorders() {
  var tables = document.querySelectorAll('#my-timetable-section .timetable');
  if (!tables || tables.length === 0) return;

  Array.prototype.forEach.call(tables, function (table) {
    var tbody = table.querySelector('tbody');
    if (!tbody) return;

    var rows = Array.prototype.slice.call(tbody.querySelectorAll('tr'));
    if (rows.length === 0) return;

    // Count total columns from header
    var theadRow = table.querySelector('thead tr');
    var totalCols = theadRow
      ? theadRow.querySelectorAll('th').length
      : 9; // default: Period + Period Number + Mon-Sun

    // Track active rowspan per column: rowspanReg[col] = remaining rows (incl current)
    var rowspanReg = [];
    for (var i = 0; i < totalCols; i++) {
      rowspanReg[i] = 0;
    }

    rows.forEach(function (row) {
      // 1. Age the rowspan registry: one row consumed
      for (var c = 0; c < totalCols; c++) {
        if (rowspanReg[c] > 0) rowspanReg[c]--;
      }

      // 2. Count how many columns are still occupied by a rowspan from above
      var occupied = 0;
      for (var c2 = 0; c2 < totalCols; c2++) {
        if (rowspanReg[c2] > 0) occupied++;
      }

      var expected = totalCols - occupied;

      // 3. Walk existing cells to register new rowspans.  <td> elements
      //    are placed by the browser into the first non-occupied columns.
      var cells = Array.prototype.slice.call(row.querySelectorAll('td'));
      var col = 0;
      for (var i2 = 0; i2 < cells.length; i2++) {
        // Skip columns still occupied by prior rowspan
        while (col < totalCols && rowspanReg[col] > 0) col++;
        if (col >= totalCols) break;

        var rs = parseInt(cells[i2].getAttribute('rowspan'), 10) || 1;
        if (rs > 1) {
          // Register: this column is occupied for rs more rows (including current)
          rowspanReg[col] = rs;
        }
        col++;
      }

      // 4. Pad missing cells
      var current = cells.length;
      var missing = expected - current;
      for (var p = 0; p < missing; p++) {
        var td = document.createElement('td');
        row.appendChild(td);
      }
    });
  });
}

// Bootstrap
(function () {
  function attemptFix() {
    if (document.querySelectorAll('#my-timetable-section .timetable tbody tr').length > 0) {
      fixScheduleTableCellBorders();
    }
  }

  attemptFix();

  window.addEventListener('schedule:semesterchange', function () {
    setTimeout(attemptFix, 50);
  });

  window.addEventListener('schedule:viewchange', function (e) {
    if (e && e.detail && (e.detail.view === 'my-timetable' || !e.detail.view)) {
      setTimeout(attemptFix, 50);
    }
  });

  var mount = document.getElementById('mount-schedule');
  if (mount) {
    var obs = new MutationObserver(function () {
      if (document.getElementById('my-timetable-section')) attemptFix();
    });
    obs.observe(mount, { childList: true, subtree: true });
    setTimeout(function () { try { obs.disconnect(); } catch (e) {} }, 15000);
  }
})();