(function () {
  'use strict';

  window.RESUME_ZH_INNER_HTML = `
    <button id="toggle-btn">
      <span><i class="fas fa-sun"></i></span>
    </button>
    <div id="clock">GMT+8 00:00</div>
    <div class="container">

      <div class="section resume-hero" id="resume-hero">
        <div class="resume-hero-avatar">
          <img src="./assets/images/about/profile.jpg" alt="Profile photo">
        </div>
        <div class="resume-hero-body">
          <div class="resume-hero-name">alienshun</div>
          <div class="resume-hero-chips">
            <span class="contact-pill"><strong>邮箱: </strong><a href="mailto:zszhou@mail.ustc.edu.cn">zszhou@mail.ustc.edu.cn</a></span>
          </div>
          <p class="resume-hero-intro">
          我是中国科学技术大学 (USTC) 地球与空间科学专业本科生. 我主要研究空间物理方向, 尤其关注磁层物理、电离层物理、太阳物理与行星科学.
          <br><br>
          作为空间物理专业的学生, 物理直觉与数据分析能力并重是我的核心训练. 面对观测数据时, 我习惯于从物理机制出发理解现象, 再通过编程工具进行定量分析与验证. 在科研中, 我注重清晰的建模假设与可追溯的推理链条, 力求让每一步分析都有据可依. 多年的编程经验也让我能够高效使用科研软件进行数据处理、可视化与学术写作.
          <br><br>
          在我的学术探索中, 对物理过程背后深层机制的理解尤为重要: 不同尺度的空间物理现象往往共享相似的基本原理. 我最感兴趣的研究, 是揭示这种贯通的物理图像, 并基于此构建更系统、更普适的分析方法.
          </p>
        </div>
      </div>
      
      <div class="section">
        <h2>研究兴趣</h2>
        <ul><li>磁层物理、电离层物理、太阳物理、行星科学.</li></ul>
      </div>

      <div class="section">
        <h2>教育背景</h2>
        <div class="subheading">
          <span class="subheading-title">
            <a class="resume-link" href="https://www.ustc.edu.cn/" target="_blank" rel="noopener noreferrer">中国科学技术大学</a>
          </span>
          <span>2023年9月 -- 2027年7月 (预计)</span>
        </div>

        <div class="subsubheading resume-degree-line">
          <span>
            <a class="resume-link" href="https://ess.ustc.edu.cn/main.htm" target="_blank" rel="noopener noreferrer">地球与空间科学理学学士</a>
          </span>
          <span>中国·合肥</span>
        </div>
      </div>
      
      <div class="section">
        <h2>荣誉与奖项</h2>
        <ul>
          <li><strong>国家奖学金</strong><span style="float:right;">2025</span></li>
          <li><strong>地学攀登奖学金</strong><span style="float:right;">2024</span></li>
          <li><strong>赵九章科技英才班</strong> 成员<span style="float:right;">2024 -- 至今</span></li>
        </ul>
      </div>
      
      <div class="section">
        <h2>科研经历</h2>
        <div class="subheading">
          <span class="subheading-title">基于卫星数据的闪电激发哨声波的季节相关性研究</span>
          <span>2025年5月 -- 至今</span>
        </div>
        <div class="subsubheading">
          <div>项目负责人，国家级大学生创新创业训练计划</div>
          <div>指导教师: <strong>高新亮 教授</strong>，中国科学技术大学</div>
        </div>
        <ul>
          <li>研究了闪电激发的哨声波注入内磁层的路径与物理机制。</li>
          <li>开发了基于范艾伦探测器数据的自动化哨声波识别程序，并构建了内磁层哨声波综合数据库。</li>
          <li>分析了内磁层哨声波与地基闪电数据之间的相关性，评估了其季节依赖性。</li>
        </ul>

        <div class="section">
        <h2>野外实习经历</h2>
        <div class="subheading">
          <span class="subheading-title">海南空间天气野外实习</span>
          <span>2025年7月</span>
        </div>
        <div class="subsubheading">
          <div>课题: 2024年3月3日地磁暴期间电离层响应的多仪器联合分析</div>
        </div>
        <ul>
          <li>利用OMNI、GNSS TEC及子午工程数据，研究了由南向行星际磁场（IMF Bz）驱动的中等强度地磁暴（Dst = -112 nT）期间的电离层动力学过程。</li>
          <li>利用MATLAB与SAOexplorer处理并可视化非相干散射雷达（SYISR）及测高仪数据，有效解决了数据噪声与强扩展F（Spread-F）干扰问题。</li>
          <li>分析了电离层异常行为背后的物理机制，包括F2层高度（hmF2）抬升、结构扭曲及离子反常逆向漂移。</li>
        </ul>
      </div>

      <div class="section">
        <h2>教学经历</h2>

        <div class="subheading">
          <span class="subheading-title">《电动力学》课程助教</span>
          <span>2026年春季</span>
        </div>
        <div class="subsubheading">
          <div>中国科学技术大学 地球和空间科学学院</div>
        </div>

        <div class="subheading">
          <span class="subheading-title">《理论力学A》课程助教</span>
          <span>2025年秋季</span>
        </div>
        <div class="subsubheading">
          <div>中国科学技术大学 地球和空间科学学院</div>
        </div>
      </div>

      <div class="section">
        <h2>个人技能</h2>
        <ul>
          <li><strong>编程语言:</strong> Python, IDL, MATLAB, C++, LaTeX</li>
        </ul>
      </div>
    </div>
    
    <a href="#" class="back-btn" id="resume-back-btn">
      <i class="fas fa-arrow-left"></i>
    </a>
  `;
})();