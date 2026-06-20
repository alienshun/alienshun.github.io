(function () {
  'use strict';

  window.RESUME_EN_INNER_HTML = `
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
            <span class="contact-pill"><strong>Email: </strong><a href="mailto:zszhou@mail.ustc.edu.cn">zszhou@mail.ustc.edu.cn</a></span>
          </div>
          <p class="resume-hero-intro">
          I am an undergraduate at the University of Science and Technology of China (USTC), majoring in Earth and Space Sciences. My primary research interests lie in space physics, with a particular focus on magnetospheric physics, ionospheric physics, solar physics, and planetary science.
          <br><br>
          As a space physics student, I value the balance between physical intuition and data analysis skills. When working with observational data, I start by understanding the physical mechanisms behind phenomena, then use programming tools for quantitative analysis and verification. I strive to keep my modeling assumptions clear and my reasoning chain traceable, ensuring every step of analysis is well-grounded. Years of programming experience also allow me to use research software efficiently for data processing, visualization, and academic writing.
          <br><br>
          In my academic exploration, I am especially drawn to understanding the deeper mechanisms underlying physical processes: space physics phenomena across different scales often share similar fundamental principles. I am most excited by research that reveals these unifying principles and builds more systematic and general analysis methods based on them.
          </p>
        </div>
      </div>
      
      <div class="section">
        <h2>Research Interests</h2>
        <ul><li>Magnetospheric Physics, Ionospheric Physics, Solar Physics, Planetary Science.</li></ul>
      </div>

      <div class="section">
        <h2>Education</h2>
        <div class="subheading">
          <span class="subheading-title">
            <a class="resume-link" href="https://www.ustc.edu.cn/" target="_blank" rel="noopener noreferrer">University of Science and Technology of China</a>
          </span>
          <span>Sep. 2023 -- Jul. 2027 (Expected)</span>
        </div>

        <div class="subsubheading resume-degree-line">
          <span>
            <a class="resume-link" href="https://ess.ustc.edu.cn/main.htm" target="_blank" rel="noopener noreferrer">B.Sc. in Earth and Space Sciences</a>
          </span>
          <span>Hefei, China</span>
        </div>
      </div>
      
      <div class="section">
        <h2>Honors & Awards</h2>
        <ul>
          <li><strong>National Scholarship</strong><span style="float:right;">2025</span></li>
          <li><strong>Geosciences Climbing Scholarship</strong><span style="float:right;">2024</span></li>
          <li><strong>Member of the Zhao Jiuzhang Honored Class</strong><span style="float:right;">2024 -- Present</span></li>
        </ul>
      </div>
      
      <div class="section">
        <h2>Research Experience</h2>
        <div class="subheading">
          <span class="subheading-title">Study on the Seasonal Correlation of Lightning-Generated Whistler Waves with Satellite Data</span>
          <span>May 2025 -- Present</span>
        </div>
        <div class="subsubheading">
          <div>Principal Investigator, National Student Innovation Training Program</div>
          <div>Advisor: <strong>Prof. Xinliang Gao</strong>, USTC</div>
        </div>
        <ul>
          <li>Investigated the pathways and mechanisms of lightning-generated whistler waves injecting into the inner magnetosphere.</li>
          <li>Developed an automated detection program to identify whistler waves from Van Allen Probes data and constructed a comprehensive database for the inner magnetosphere.</li>
          <li>Analyzed the correlation between inner magnetospheric whistler waves and ground-based lightning data to evaluate their seasonal dependence.</li>
        </ul>
      </div>

      <div class="section">
        <h2>Field Study Experience</h2>
        <div class="subheading">
          <span class="subheading-title">Space Weather Field Internship, Hainan</span>
          <span>Jul. 2025</span>
        </div>
        <div class="subsubheading">
          <div>Topic: Multi-Instrument Analysis of Ionospheric Response to the Mar. 3, 2024 Geomagnetic Storm</div>
        </div>
        <ul>
          <li>Investigated ionospheric dynamics during a medium-intensity geomagnetic storm (Dst = -112 nT) driven by southward IMF Bz using OMNI, GNSS TEC, and Meridian Project data.</li>
          <li>Processed and visualized Incoherent Scatter Radar (SYISR) and ionosonde data utilizing MATLAB and SAOexplorer, actively resolving data noise and strong Spread-F interference.</li>
          <li>Analyzed physical mechanisms behind anomalous ionospheric behaviors, including F2-layer height (hmF2) elevation, structure distortion, and anomalous ion reverse drifts.</li>
        </ul>
      </div>

      <div class="section">
        <h2>Teaching Experience</h2>

        <div class="subheading">
          <span class="subheading-title">Teaching Assistant for Electrodynamics</span>
          <span>Spring 2026</span>
        </div>
        <div class="subsubheading">
          <div>School of Earth and Space Sciences, USTC</div>
        </div>

        <div class="subheading">
          <span class="subheading-title">Teaching Assistant for Theoretical Mechanics A</span>
          <span>Fall 2025</span>
        </div>
        <div class="subsubheading">
          <div>School of Earth and Space Sciences, USTC</div>
        </div>
      </div>

      <div class="section">
        <h2>Skills</h2>
        <ul>
          <li><strong>Programming Languages:</strong> Python, IDL, MATLAB, C++, LaTeX</li>
        </ul>
      </div>
    </div>
    
    <a href="#" class="back-btn" id="resume-back-btn">
      <i class="fas fa-arrow-left"></i>
    </a>
  `;
})();