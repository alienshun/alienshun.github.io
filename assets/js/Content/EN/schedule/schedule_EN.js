// ================================
// Course Type Tags (manual config)
// ================================
// NOTE:
// - Types are NOT tied to the course number alone; you can define them per semester.
// - Key format: "<semesterId>|<courseCode>"
//   e.g. "sophomore-first|STAT2002.06": "Major" | "Minor" | "Micro-minor" | "TA"
// - Any missing entry will fall back to "Major".
window.SCHEDULE_DEFAULT_COURSE_TYPE = "Major";
window.SCHEDULE_COURSE_TYPE_BY_KEY = window.SCHEDULE_COURSE_TYPE_BY_KEY || {
};

(function () {
  const mount = document.getElementById("mount-schedule") || document.body;
  mount.insertAdjacentHTML("beforeend", `
  <div id="schedule">
    <button id="toggle-btn-schedule">
      <span><i class="fas fa-sun"></i></span>
    </button>
    <div id="clock-schedule">GMT+8 00:00</div>
    <div class="container">
      <div class="schedule-heading">My Schedule</div>
      
      <div class="schedule-container">
        <div class="schedule-switcher">
          <!-- My Timetable button -->
          <button class="schedule-switch-btn active" data-view="my-timetable">My Timetable</button>
          <!-- USTC Timetable button -->
          <button class="schedule-switch-btn" data-view="ustc-timetable">USTC Timetable</button>
          <button class="schedule-switch-btn" data-view="timetable">Timetable</button>
          <button class="schedule-switch-btn" data-view="calendar">Calendar</button>
        </div>
        
        <!-- My Timetable Section -->
        <div class="schedule-section active" id="my-timetable-section">
          <div class="semester-selector">
            <div class="semester-dropdown">
              <button class="semester-dropdown-btn">
                Select Semester <i class="fas fa-caret-down"></i>
              </button>
              <div class="semester-dropdown-content">
                <a href="#" data-semester="freshman-first">Freshman Year - First Semester</a>
                <a href="#" data-semester="freshman-second">Freshman Year - Second Semester</a>
                <a href="#" data-semester="sophomore-first">Sophomore Year - First Semester</a>
                <a href="#" data-semester="sophomore-second">Sophomore Year - Second Semester</a>
                <a href="#" data-semester="junior-first">Junior Year - First Semester</a>
                <a href="#" data-semester="junior-second">Junior Year - Second Semester</a>
                <a href="#" data-semester="senior-first">Senior Year - First Semester</a>
                <a href="#" data-semester="senior-second">Senior Year - Second Semester</a>
              </div>
            </div>
          </div>
          
          <!-- Freshman Year - First Semester -->
          <div class="semester-timetable-container active" id="freshman-first">
            <h3 class="semester-title">Freshman Year - First Semester</h3>
            <div class="timetable-container">
              <table class="timetable" id="freshman-first-timetable">
                <thead>
                  <tr>
                    <th>Period</th>
                    <th>Period Number</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Morning Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Morning</td>
                    <td class="period-number">1</td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-number">FL1005.19 [2]</div>
                        <div class="course-name">English Reading and Writing I</div>
                        <div class="instructor">Jing Chen</div>
                        <div class="location">2407</div>
                        <div class="weeks">2-4, 6-18 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-number">FL1003.19 [2]</div>
                        <div class="course-name">English Communication I</div>
                        <div class="instructor">Jun Yin</div>
                        <div class="location">2305</div>
                        <div class="weeks">2-4, 6-18 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-number">PHYS1001A.01 [4]</div>
                        <div class="course-name">Mechanics A</div>
                        <div class="instructor">Rongde Lu</div>
                        <div class="location">5106</div>
                        <div class="weeks">2-4, 6-18 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-number">FL1005.19 [2]</div>
                        <div class="course-name">English Reading and Writing I</div>
                        <div class="instructor">Jing Chen</div>
                        <div class="location">2407</div>
                        <div class="weeks">5 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">2</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">3</td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="course-container">
                        <div class="course-number">MATH1006.01 [6]</div>
                        <div class="course-name">Mathematical Analysis (B1)</div>
                        <div class="instructor">Yi Cheng</div>
                        <div class="location">5204</div>
                        <div class="weeks">2-4, 6-18 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="course-container">
                        <div class="course-number">PHYS1001A.01 [4]</div>
                        <div class="course-name">Mechanics A</div>
                        <div class="instructor">Rongde Lu</div>
                        <div class="location">5106</div>
                        <div class="weeks">2-4, 6-13, 15-18 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="course-container">
                        <div class="course-number">MATH1006.01 [6]</div>
                        <div class="course-name">Mathematical Analysis (B1)</div>
                        <div class="instructor">Yi Cheng</div>
                        <div class="location">5204</div>
                        <div class="weeks">2, 4, 6, 7-18 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">12:10</div>
                      <div class="course-container">
                        <div class="course-number">ESS2006.01 [2]</div>
                        <div class="course-name">Fundamentals of Earth and Space Science</div>
                        <div class="instructor">Yixiang Chen, Jinshui Huang, Gaopeng Lu</div>
                        <div class="location">1101</div>
                        <div class="weeks">2-4, 6-15 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="course-container">
                        <div class="course-number">MATH1006.01 [6]</div>
                        <div class="course-name">Mathematical Analysis (B1)</div>
                        <div class="instructor">Yi Cheng</div>
                        <div class="location">5204</div>
                        <div class="weeks">2-3, 6-18 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="course-container">
                        <div class="course-number">MATH1006.01 [6]</div>
                        <div class="course-name">Mathematical Analysis (B1)</div>
                        <div class="instructor">Yi Cheng</div>
                        <div class="location">5204</div>
                        <div class="weeks">5 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="course-container">
                        <div class="course-number">MATH1006.01 [6]</div>
                        <div class="course-name">Mathematical Analysis (B1)</div>
                        <div class="instructor">Yi Cheng</div>
                        <div class="location">5204</div>
                        <div class="weeks">6 week(s)</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="period-number">4</td>
                  </tr>
                  <tr>
                    <td class="period-number">5</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>

                  <!-- Afternoon Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Afternoon</td>
                    <td class="period-number">6</td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-number">CS1001A.09 [4]</div>
                        <div class="course-name">Computer Programming A</div>
                        <div class="instructor">Song Wang</div>
                        <div class="location">5403</div>
                        <div class="weeks">2-4, 6-16 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-number">CS1001A.09 [4]</div>
                        <div class="course-name">Computer Programming A</div>
                        <div class="instructor">Song Wang</div>
                        <div class="location">5403</div>
                        <div class="weeks">2-4, 6-16 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-number">CS1001A.09 [4]</div>
                        <div class="course-name">Computer Programming A</div>
                        <div class="instructor">Song Wang</div>
                        <div class="location">5403</div>
                        <div class="weeks">5 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">7</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">8</td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="course-container">
                        <div class="course-number">HS1531.08 [2]</div>
                        <div class="course-name">Collegiate Psychology</div>
                        <div class="instructor">Xiaosong He</div>
                        <div class="location">5101</div>
                        <div class="weeks">2-4, 6-14 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">17:30</div>
                      <div class="course-container">
                        <div class="course-number">PE1502.01 [1]</div>
                        <div class="course-name">Bridge Basics and Skills</div>
                        <div class="instructor">Xinlong Zhu</div>
                        <div class="location">Central Gym Z102</div>
                        <div class="weeks">1-4, 6-18 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">17:30</div>
                      <div class="course-container">
                        <div class="course-number">MATH1006.01 [6]</div>
                        <div class="course-name">Mathematical Analysis (B1)</div>
                        <div class="instructor">Yi Cheng</div>
                        <div class="location">5204</div>
                        <div class="weeks">3 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="course-container">
                        <div class="course-number">MARX1014.13 [3]</div>
                        <div class="course-name">Introduction to Xi Jinping Thought on Socialism with Chinese Characteristics for a New Era</div>
                        <div class="instructor">Lijun Peng</div>
                        <div class="location">1201</div>
                        <div class="weeks">2-4, 6-18 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="course-container">
                        <div class="course-number">MARX1012.12 [2.5]</div>
                        <div class="course-name">Ideology, Morality, and Rule of Law</div>
                        <div class="instructor">Hailong Liu</div>
                        <div class="location">1302</div>
                        <div class="weeks">2-3, 6-17 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="course-container">
                        <div class="course-number">HS1531.08 [2]</div>
                        <div class="course-name">Collegiate Psychology</div>
                        <div class="instructor">Xiaosong He</div>
                        <div class="location">5101</div>
                        <div class="weeks">5 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="course-container">
                        <div class="course-number">MARX1012.12 [2.5]</div>
                        <div class="course-name">Ideology, Morality, and Rule of Law</div>
                        <div class="instructor">Hailong Liu</div>
                        <div class="location">1302</div>
                        <div class="weeks">6 week(s)</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="period-number">9</td>
                  </tr>
                  <tr>
                    <td class="period-number">10</td>
                    <td></td>
                    <td></td>
                  </tr>

                  <!-- Evening Section -->
                  <tr>
                    <td rowspan="3" class="period-header">Evening</td>
                    <td class="period-number">11</td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">19:30</div>
                      <div class="time-info end-info">21:55</div>
                      <div class="course-container">
                        <div class="course-number">CS1001A.09 [4]</div>
                        <div class="course-name">Computer Programming A</div>
                        <div class="instructor">Song Wang</div>
                        <div class="location">West Campus Electrical Building (1F) Computer Lab (Hall 1)</div>
                        <div class="weeks">6-16 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">19:30</div>
                      <div class="time-info end-info">21:55</div>
                      <div class="overlap-container">
                        <div class="overlap-course">
                          <div class="course-number">FS1001.0Q [1]</div>
                          <div class="course-name">Freshman Seminar</div>
                          <div class="instructor">Lei Zhong, Guest</div>
                          <div class="location">Geospace Building Room 1216</div>
                          <div class="weeks">2-3, 6, 10, 13, 17 week(s)</div>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">19:30</div>
                      <div class="time-info end-info">21:55</div>
                      <div class="course-container">
                        <div class="course-number">FS1001.0Q [1]</div>
                        <div class="course-name">Freshman Seminar</div>
                        <div class="instructor">Lei Zhong</div>
                        <div class="location">Teaching Admin Building Room 1216</div>
                        <div class="weeks">14 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">19:30</div>
                      <div class="time-info end-info">21:55</div>
                      <div class="course-container">
                        <div class="course-number">CS1001A.09 [4]</div>
                        <div class="course-name">Computer Programming A</div>
                        <div class="instructor">Song Wang</div>
                        <div class="location">West Campus Electrical Building (1F) Computer Lab (Hall 1)</div>
                        <div class="weeks">5 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">12</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">13</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- My Classes Table for Freshman First Semester -->
            <div class="my-classes-container">
              <h3 style="text-align: center; margin-top: 20px;">My Classes</h3>
              <table class="my-classes-table">
                <thead>
                  <tr>
                    <th>Course Number</th>
                    <th>Course Name</th>
                    <th>Instructor</th>
                    <th>Time</th>
                    <th>Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>PE1502.01</td>
                    <td>Bridge Basics and Skills</td>
                    <td>Xinlong Zhu</td>
                    <td>2(8-9), 1-4,6-18 week(s)</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>HS1531.08</td>
                    <td>Collegiate Psychology</td>
                    <td>Xiaosong He</td>
                    <td>1(8-10), 2-4,6-14 week(s); 7(8-10), 5 week(s)</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>MATH1006.01</td>
                    <td>Mathematical Analysis (B1)</td>
                    <td>Yi Cheng</td>
                    <td>1(3-4), 2-4,6-18 week(s); 3(3-4), 2,4,6,7-18 week(s); 3(8-9), 3 week(s); 5(3-4), 2-3,6-18 week(s); 6(3-4), 5 week(s); 7(3-4), 6 week(s)</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>MARX1012.12</td>
                    <td>Ideology, Morality, and Rule of Law</td>
                    <td>Hailong Liu</td>
                    <td>5(8-10), 2-3,6-17 week(s); 7(8-10), 6 week(s)</td>
                    <td>2.5</td>
                  </tr>
                  <tr>
                    <td>PHYS1001A.01</td>
                    <td>Mechanics A</td>
                    <td>Rongde Lu</td>
                    <td>2(3-4), 2-4,6-13,15-18 week(s); 4(1-2), 2-4,6-18 week(s)</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>CS1001A.09</td>
                    <td>Computer Programming A</td>
                    <td>Song Wang</td>
                    <td>1(6-7), 2-4,6-16 week(s); 1(11-13), 6-16 week(s); 3(6-7), 2-4,6-16 week(s); 6(6-7), 5 week(s); 6(11-13), 5 week(s)</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>MIL1001.04</td>
                    <td>Military Theory</td>
                    <td>Yangyang Fan</td>
                    <td>Null</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>MIL1002.04</td>
                    <td>Military Skills</td>
                    <td>Xuan Liu</td>
                    <td>Null</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>MARX1014.13</td>
                    <td>Introduction to Xi Jinping Thought on Socialism with Chinese Characteristics for a New Era</td>
                    <td>Lijun Peng</td>
                    <td>4(8-10), 2-4,6-18 week(s)</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>ESS2006.01</td>
                    <td>Fundamentals of Earth and Space Science</td>
                    <td>Yixiang Chen; Jinshui Huang; Gaopeng Lu</td>
                    <td>4(3-5), 2-4,6-15 week(s)</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>FS1001.0Q</td>
                    <td>Freshman Seminar</td>
                    <td>Lei Zhong; Guest</td>
                    <td>2(11-13), 2-3,6,10,13,17 week(s); 5(11-13), 14 week(s)</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>FL1003.19</td>
                    <td>English Communication I</td>
                    <td>Jun Yin</td>
                    <td>3(1-2), 2-4,6-18 week(s)</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>FL1005.19</td>
                    <td>English Reading and Writing I</td>
                    <td>Jing Chen</td>
                    <td>1(1-2), 2-4,6-18 week(s); 6(1-2), 5 week(s)</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>ESS1506.01</td>
                    <td>Earth Exploration and Field Investigation I</td>
                    <td>Ming Ma; Xianghui Xue; Jianqiu Zheng</td>
                    <td>Null</td>
                    <td>0.5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Freshman Year - Second Semester -->
          <div class="semester-timetable-container" id="freshman-second">
            <h3 class="semester-title">Freshman Year - Second Semester</h3>
            <div class="timetable-container">
              <table class="timetable" id="freshman-second-timetable">
                <thead>
                  <tr>
                    <th>Period</th>
                    <th>Period Number</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Morning Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Morning</td>
                    <td class="period-number">1</td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-number">FL1006.22 [2]</div>
                        <div class="course-name">English Reading and Writing II</div>
                        <div class="instructor">Jing Chen</div>
                        <div class="location">2407</div>
                        <div class="weeks">1-15, 17-18 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-number">MATH1009.11 [4]</div>
                        <div class="course-name">Linear Algebra (B1)</div>
                        <div class="instructor">Liming Ma</div>
                        <div class="location">5204</div>
                        <div class="weeks">1-18 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-number">FL1004.09 [2]</div>
                        <div class="course-name">English Communication II</div>
                        <div class="instructor">Jun Yin</div>
                        <div class="location">2304</div>
                        <div class="weeks">1-9, 11-18 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-number">PHYS1004A.08 [4]</div>
                        <div class="course-name">Electromagnetism A</div>
                        <div class="instructor">Rongde Lu, Yi Li</div>
                        <div class="location">5204</div>
                        <div class="weeks">1-5, 7-9, 11-18 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="5">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">12:10</div>
                      <div class="overlap-container">
                        <div class="overlap-course">
                          <div class="course-number">ESS1507.01 [0.5]</div>
                          <div class="course-name">Earth Exploration and Field Investigation II</div>
                          <div class="instructor">Liqun Dai, Zhi Xie, Xiaodong Liu</div>
                          <div class="location">Chizhou Field Investigation</div>
                          <div class="weeks">8 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">FL1004.09 [2]</div>
                          <div class="course-name">English Communication II</div>
                          <div class="instructor">Jun Yin</div>
                          <div class="location">2304</div>
                          <div class="weeks">11 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">MATH1007.01 [6]</div>
                          <div class="course-name">Mathematical Analysis (B2)</div>
                          <div class="instructor">Yi Cheng</div>
                          <div class="location">5204</div>
                          <div class="weeks">11 week(s)</div>
                        </div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-number">PHYS1004A.08 [4]</div>
                        <div class="course-name">Electromagnetism A</div>
                        <div class="instructor">Rongde Lu, Yi Li</div>
                        <div class="location">5204</div>
                        <div class="weeks">10 week(s)</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="period-number">2</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">3</td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="course-container">
                        <div class="course-number">MATH1007.01 [6]</div>
                        <div class="course-name">Mathematical Analysis (B2)</div>
                        <div class="instructor">Yi Cheng</div>
                        <div class="location">5204</div>
                        <div class="weeks">1-15, 17-18 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="course-container">
                        <div class="course-number">PHYS1004A.08 [4]</div>
                        <div class="course-name">Electromagnetism A</div>
                        <div class="instructor">Rongde Lu, Yi Li</div>
                        <div class="location">5204</div>
                        <div class="weeks">1-18 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="overlap-container">
                        <div class="overlap-course">
                          <div class="course-number">MATH1007.01 [6]</div>
                          <div class="course-name">Mathematical Analysis (B2)</div>
                          <div class="instructor">Yi Cheng</div>
                          <div class="location">5204</div>
                          <div class="weeks">1-9, 11-15, 18 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">MATH1007.01</div>
                          <div class="course-name">Mathematical Analysis (B2)</div>
                          <div class="instructor">Yi Cheng</div>
                          <div class="location">2105</div>
                          <div class="weeks">16-17 week(s)</div>
                        </div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="course-container">
                        <div class="course-number">MATH1009.11 [4]</div>
                        <div class="course-name">Linear Algebra (B1)</div>
                        <div class="instructor">Liming Ma</div>
                        <div class="location">5204</div>
                        <div class="weeks">1-5, 7-9, 11-18 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="course-container">
                        <div class="course-number">MATH1007.01 [6]</div>
                        <div class="course-name">Mathematical Analysis (B2)</div>
                        <div class="instructor">Yi Cheng</div>
                        <div class="location">5204</div>
                        <div class="weeks">1-5, 7-9, 11-18 week(s)</div>
                      </div>
                    </td>

                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="overlap-container">
                        <div class="overlap-course">
                          <div class="course-number">MATH1007.01 [6]</div>
                          <div class="course-name">Mathematical Analysis (B2)</div>
                          <div class="instructor">Yi Cheng</div>
                          <div class="location">5204</div>
                          <div class="weeks">7 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">MATH1009.11 [4]</div>
                          <div class="course-name">Linear Algebra (B1)</div>
                          <div class="instructor">Liming Ma</div>
                          <div class="location">5204</div>
                          <div class="weeks">10 week(s)</div>
                        </div>
                      </div>
                    </td>

                  </tr>
                  <tr>
                    <td class="period-number">4</td>
                  </tr>
                  <tr>
                    <td class="period-number">5</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>

                  <!-- Afternoon Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Afternoon</td>
                    <td class="period-number">6</td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-number">PHYS1002A.02 [3]</div>
                        <div class="course-name">Thermology A</div>
                        <div class="instructor">Xinliang Gao</div>
                        <div class="location">5203</div>
                        <div class="weeks">1-9, 11-15 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-number">PHYS1002A.02 [3]</div>
                        <div class="course-name">Thermology A</div>
                        <div class="instructor">Xinliang Gao</div>
                        <div class="location">5203</div>
                        <div class="weeks">1-5, 7-9, 11-15 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="overlap-container">
                        <div class="overlap-course">
                          <div class="course-number">ESS1507.01 [0.5]</div>
                          <div class="course-name">Earth Exploration and Field Investigation II</div>
                          <div class="instructor">Zhi Xie, Xiaodong Liu, Chunsheng Wei</div>
                          <div class="location">Chizhou Field Investigation</div>
                          <div class="weeks">8 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">PHYS1002A.02 [3]</div>
                          <div class="course-name">Thermology A</div>
                          <div class="instructor">Xinliang Gao</div>
                          <div class="location">5203</div>
                          <div class="weeks">11 week(s)</div>
                        </div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-number">PHYS1002A.02 [3]</div>
                        <div class="course-name">Thermology A</div>
                        <div class="instructor">Xinliang Gao</div>
                        <div class="location">5203</div>
                        <div class="weeks">7 week(s)</div>
                      </div>
                    </td>
                  <tr>
                    <td class="period-number">7</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">8</td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="course-container">
                        <div class="course-number">ESS1510.01 [2]</div>
                        <div class="course-name">Cosmic Habitability: Unveiling Planets</div>
                        <div class="instructor">Zhu Mao, Wei Leng</div>
                        <div class="location">5307</div>
                        <div class="weeks">1-14 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">17:30</div>
                      <div class="course-container">
                        <div class="course-number">PE00531.03 [1]</div>
                        <div class="course-name">Billiards (Specialized Training)</div>
                        <div class="instructor">Yang Hu</div>
                        <div class="location">Central Campus Training Hall</div>
                        <div class="weeks">1-16 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="course-container">
                        <div class="course-number">MARX1010.05 [2.5]</div>
                        <div class="course-name">An Outline of Modern and Contemporary Chinese History</div>
                        <div class="instructor">Ying Qi</div>
                        <div class="location">1301</div>
                        <div class="weeks">1-5, 7-9, 11-16 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="overlap-container">
                        <div class="overlap-course">
                          <div class="course-number">ASTRON1501.01 [2]</div>
                          <div class="course-name">Overview of Astrophysics</div>
                          <div class="instructor">Xu Kong</div>
                          <div class="location">5202</div>
                          <div class="weeks">2-5, 7-9, 11-13 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">MARX1010.05 [2.5]</div>
                          <div class="course-name">An Outline of Modern and Contemporary Chinese History</div>
                          <div class="instructor">Ying Qi</div>
                          <div class="location">1301</div>
                          <div class="weeks">10 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">ASTRON1501.01 [2]</div>
                          <div class="course-name">Overview of Astrophysics</div>
                          <div class="instructor">Xu Kong</div>
                          <div class="location">5202</div>
                          <div class="weeks">7 week(s)</div>
                        </div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="course-container">
                        <div class="course-number">ESS1507.01 [0.5]</div>
                        <div class="course-name">Earth Exploration and Field Investigation II</div>
                        <div class="instructor">Zhi Xie, Xiaodong Liu, Chunsheng Wei</div>
                        <div class="location">Chizhou Field Investigation</div>
                        <div class="weeks">8 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">9</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">10</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>

                  <!-- Evening Section -->
                  <tr>
                    <td rowspan="3" class="period-header">Evening</td>
                    <td class="period-number">11</td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">19:30</div>
                      <div class="time-info end-info">21:55</div>
                      <div class="overlap-container">
                        <div class="overlap-course">
                          <div class="course-number">FS1001.8R [1]</div>
                          <div class="course-name">Freshman Seminar</div>
                          <div class="instructor">Lei Zhong</div>
                          <div class="location">Teaching Admin Building Room 1218</div>
                          <div class="weeks">9 week(s)</div>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">19:30</div>
                      <div class="time-info end-info">21:55</div>
                      <div class="course-container">
                        <div class="course-number">PHYS1008B.04 [1]</div>
                        <div class="course-name">College Physics - Base Experimentation B</div>
                        <div class="instructor">……</div>
                        <div class="location">East Campus Teaching Building 1 Physics Lab</div>
                        <div class="weeks">3-9, 11-16 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">19:30</div>
                      <div class="time-info end-info">21:55</div>
                      <div class="overlap-container">
                        <div class="overlap-course">
                          <div class="course-number">FS1001.8R [1]</div>
                          <div class="course-name">Freshman Seminar</div>
                          <div class="instructor">Lei Zhong</div>
                          <div class="location">Teaching Admin Building Room 1216</div>
                          <div class="weeks">3 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">FS1001.8R</div>
                          <div class="course-name">Freshman Seminar</div>
                          <div class="instructor">Lei Zhong</div>
                          <div class="location">Teaching Admin Building Room 1216</div>
                          <div class="weeks">14 week(s)</div>
                        </div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">19:30</div>
                      <div class="time-info end-info">21:55</div>
                      <div class="course-container">
                        <div class="course-number">PHYS1008B.04 [1]</div>
                        <div class="course-name">College Physics - Base Experimentation B</div>
                        <div class="instructor">……</div>
                        <div class="location">East Campus Teaching Building 1 Physics Lab</div>
                        <div class="weeks">11 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">12</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">13</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- My Classes Table for Freshman Second Semester -->
            <div class="my-classes-container">
              <h3 style="text-align: center; margin-top: 20px;">My Classes</h3>
              <table class="my-classes-table">
                <thead>
                  <tr>
                    <th>Course Number</th>
                    <th>Course Name</th>
                    <th>Instructor</th>
                    <th>Time</th>
                    <th>Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>PHYS1002A.02</td>
                    <td>Thermology A</td>
                    <td>Xinliang Gao</td>
                    <td>1(6-7), 1-9,11-15 week(s); 5(6-7), 1-5,7-9,11-15 week(s); 6(6-7), 11 week(s); 7(6-7), 7 week(s)</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>PHYS1004A.08</td>
                    <td>Electromagnetism A</td>
                    <td>Rongde Lu; Yi Li</td>
                    <td>2(3-4), 1-18 week(s); 4(1-2), 1-5,7-9,11-18 week(s); 7(1-2), 10 week(s)</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>PHYS1008B.04</td>
                    <td>College Physics - Base Experimentation B</td>
                    <td>......</td>
                    <td>3(11-13), 3-9,11-16 week(s); 6(11-13), 11 week(s)</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>MATH1007.01</td>
                    <td>Mathematical Analysis (B2)</td>
                    <td>Yi Cheng</td>
                    <td>1(3-4), 1-15,17-18 week(s); 3(3-4), 1-9,11-18 week(s); 5(3-4), 1-5,7-9,11-18 week(s); 6(3-4), 11 week(s); 7(3-4), 7 week(s)</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>MATH1009.11</td>
                    <td>Linear Algebra (B1)</td>
                    <td>Liming Ma</td>
                    <td>2(1-2), 1-18 week(s); 4(3-4), 1-5,7-9,11-18 week(s); 7(3-4), 10 week(s)</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>MARX1010.05</td>
                    <td>An Outline of Modern and Contemporary Chinese History</td>
                    <td>Ying Qi</td>
                    <td>4(8-10), 1-5,7-9,11-16 week(s); 7(8-10), 10 week(s)</td>
                    <td>2.5</td>
                  </tr>
                  <tr>
                    <td>PE00531.03</td>
                    <td>Billiards (Specialized Training)</td>
                    <td>Yang Hu</td>
                    <td>2(8-9), 1-16 week(s)</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>ESS1507.01</td>
                    <td>Earth Exploration and Field Investigation II</td>
                    <td>Liqun Dai; Zhi Xie; Xiaodong Liu; Chunsheng Wei; Jikun Feng</td>
                    <td>6(1-10), 8 week(s)</td>
                    <td>0.5</td>
                  </tr>
                  <tr>
                    <td>ESS1510.01</td>
                    <td>Cosmic Habitability: Unveiling Planets</td>
                    <td>Zhu Mao; Wei Leng</td>
                    <td>1(8-10), 1-14 week(s)</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>ASTRON1501.01</td>
                    <td>Overview of Astrophysics</td>
                    <td>Xu Kong</td>
                    <td>5(8-10), 2-5,7-9,11-13 week(s); 7(8-10), 7 week(s)</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>FL1004.09</td>
                    <td>English Communication II</td>
                    <td>Jun Yin</td>
                    <td>3(1-2), 1-9,11-18 week(s); 6(1-2), 11 week(s)</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>FL1006.22</td>
                    <td>English Reading and Writing II</td>
                    <td>Jing Chen</td>
                    <td>1(1-2), 1-15,17-18 week(s)</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>FS1001.8R</td>
                    <td>Freshman Seminar</td>
                    <td>Lei Zhong</td>
                    <td>1(11-13), 9 week(s); 5(11-12), 3 week(s); 5(11-13), 14 week(s)</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Sophomore Year - First Semester -->
          <div class="semester-timetable-container" id="sophomore-first">
            <h3 class="semester-title">Sophomore Year - First Semester</h3>
            <div class="timetable-container">
              <table class="timetable" id="sophomore-first-timetable">
                <thead>
                  <tr>
                    <th>Period</th>
                    <th>Period Number</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Morning Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Morning</td>
                    <td class="period-number">1</td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-number">001505.06 [3]</div>
                        <div class="course-name">Complex Variable A</div>
                        <div class="instructor">Shumin Li</div>
                        <div class="location">5501</div>
                        <div class="weeks">1-2, 4-5, 7-16 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-number">PHYS1003A.11 [4]</div>
                        <div class="course-name">Optics A</div>
                        <div class="instructor">Geng Chen</div>
                        <div class="location">1202</div>
                        <div class="weeks">1-4, 6-17 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="overlap-container">
                        <div class="overlap-course">
                          <div class="course-number">PHYS1003A.11 [4]</div>
                          <div class="course-name">Optics A</div>
                          <div class="instructor">Geng Chen</div>
                          <div class="location">1202</div>
                          <div class="weeks">6 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">001505.06</div>
                          <div class="course-name">Complex Variable A</div>
                          <div class="instructor">Shumin Li</div>
                          <div class="location">5501</div>
                          <div class="weeks">2 week(s)</div>
                        </div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">2</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">3</td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="course-container">
                        <div class="course-number">PHYS1003A.11 [4]</div>
                        <div class="course-name">Optics A</div>
                        <div class="instructor">Geng Chen</div>
                        <div class="location">1202</div>
                        <div class="weeks">1-2, 4-5, 7-18 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="course-container">
                        <div class="course-number">001505.06 [3]</div>
                        <div class="course-name">Complex Variable A</div>
                        <div class="instructor">Shumin Li</div>
                        <div class="location">5501</div>
                        <div class="weeks">1-4, 6-16 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="course-container">
                        <div class="course-number">022392.08 [4]</div>
                        <div class="course-name">Theoretical Mechanics A</div>
                        <div class="instructor">Yi Li</div>
                        <div class="location">2106</div>
                        <div class="weeks">1-4, 6-18 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">12:10</div>
                      <div class="course-container">
                        <div class="course-number">STAT2002.06 [3]</div>
                        <div class="course-name">Probability Theory and Mathematical Statistics</div>
                        <div class="instructor">Shuguang Zhang</div>
                        <div class="location">5102</div>
                        <div class="weeks">1-4, 6-18 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="overlap-container">
                        <div class="overlap-course">
                          <div class="course-number">PHYS1003A.11 [4]</div>
                          <div class="course-name">Optics A</div>
                          <div class="instructor">Geng Chen</div>
                          <div class="location">1202</div>
                          <div class="weeks">2 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">001505.06</div>
                          <div class="course-name">Complex Variable A</div>
                          <div class="instructor">Shumin Li</div>
                          <div class="location">5501</div>
                          <div class="weeks">6 week(s)</div>
                        </div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">4</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">5</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>

                  <!-- Afternoon Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Afternoon</td>
                    <td class="period-number">6</td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-number">022392.08 [4]</div>
                        <div class="course-name">Theoretical Mechanics A</div>
                        <div class="instructor">Yi Li</div>
                        <div class="location">2106</div>
                        <div class="weeks">1-2, 4, 6, 7-18 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="4">
                      <div class="time-info start-info">14:00</div>
<div class="time-info end-info">17:30</div>
                      <div class="course-container">
                        <div class="course-number">PHYS1009B.06 [0.5]</div>
                        <div class="course-name">College Physics - Comprehensive Experimentation B</div>
                        <div class="instructor">……</div>
                        <div class="location">East Campus Teaching Building 1 Physics Lab</div>
                        <div class="weeks">3-4, 6-18 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-number">022392.08 [4]</div>
                        <div class="course-name">Theoretical Mechanics A</div>
                        <div class="instructor">Yi Li</div>
                        <div class="location">2106</div>
                        <div class="weeks">5 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">7</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">8</td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="course-container">
                        <div class="course-number">MARX1011.08 [2.5]</div>
                        <div class="course-name">Fundamentals of Marxism</div>
                        <div class="instructor">Deguang Zhang</div>
                        <div class="location">1101</div>
                        <div class="weeks">1-2, 4-5, 7-16 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">17:30</div>
                      <div class="course-container">
                        <div class="course-number">PE1501.01 [1]</div>
                        <div class="course-name">Traditional Fitness</div>
                        <div class="instructor">Jinsong Sun</div>
                        <div class="location">Central Gym Z101</div>
                        <div class="weeks">1-2, 4, 6, 7-18 week(s)</div>
                      </div>
                    </td>
<td></td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="course-container">
                        <div class="course-number">BIO1506G.01 [2]</div>
                        <div class="course-name">Introduction to Brain and Cognitive Science</div>
                        <div class="instructor">Yupeng Yang, Xiaochu Zhang, Guoqiang Bi</div>
                        <div class="location">5307</div>
                        <div class="weeks">2-4, 6-14 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="course-container">
                        <div class="course-number">MARX1011.08 [2.5]</div>
                        <div class="course-name">Fundamentals of Marxism</div>
                        <div class="instructor">Deguang Zhang</div>
                        <div class="location">1101</div>
                        <div class="weeks">2 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">17:30</div>
                      <div class="course-container">
                        <div class="course-number">PE1501.01 [1]</div>
<div class="course-name">Traditional Fitness</div>
                        <div class="instructor">Jinsong Sun</div>
                        <div class="location">Central Gym Z101</div>
                        <div class="weeks">5 week(s)</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
<td class="period-number">9</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">10</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>

                  <!-- Evening Section -->
                  <tr>
                    <td rowspan="3" class="period-header">Evening</td>
                    <td class="period-number">11</td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">19:30</div>
                      <div class="time-info end-info">21:55</div>
                      <div class="course-container">
                        <div class="course-number">HS1627.01 [2]</div>
                        <div class="course-name">New Media Visual Art: From Digital Imaging to AI Painting</div>
                        <div class="instructor">Yanxiang Zhang</div>
                        <div class="location">5102</div>
                        <div class="weeks">2, 4, 6, 7-13 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">19:30</div>
                      <div class="time-info end-info">21:55</div>
                      <div class="course-container">
                        <div class="course-number">HS1627.01 [2]</div>
                        <div class="course-name">New Media Visual Art: From Digital Imaging to AI Painting</div>
                        <div class="instructor">Yanxiang Zhang</div>
                        <div class="location">5102</div>
                        <div class="weeks">5 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">12</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">13</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- My Classes Table for Sophomore First Semester -->
            <div class="my-classes-container">
              <h3 style="text-align: center; margin-top: 20px;">My Classes</h3>
              <table class="my-classes-table">
                <thead>
                  <tr>
                    <th>Course Number</th>
                    <th>Course Name</th>
                    <th>Instructor</th>
                    <th>Time</th>
                    <th>Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>MARX1005.02</td>
                    <td>Practice on Chinese Important Thoughts</td>
                    <td>TBA</td>
                    <td>Null</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>MARX1011.08</td>
                    <td>Fundamentals of Marxism</td>
                    <td>Deguang Zhang</td>
                    <td>1(8-10), 1-2,4-5,7-16 week(s); 7(8-10), 2 week(s)</td>
                    <td>2.5</td>
                  </tr>
                  <tr>
                    <td>022392.08</td>
                    <td>Theoretical Mechanics A</td>
                    <td>Yi Li</td>
                    <td>2(6-7), 1-2,4,6,7-18 week(s); 4(3-4), 1-4,6-18 week(s); 7(6-7), 5 week(s)</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>PHYS1003A.11</td>
                    <td>Optics A</td>
                    <td>Geng Chen</td>
                    <td>1(3-4), 1-2,4-5,7-18 week(s); 3(1-2), 1-4,6-17 week(s); 6(1-2), 6 week(s); 6(3-4), 2 week(s)</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>PHYS1009B.06</td>
                    <td>College Physics - Comprehensive Experimentation B</td>
                    <td>……</td>
                    <td>4(6-9), 3-4,6-18 week(s)</td>
                    <td>0.5</td>
                  </tr>
                  <tr>
                    <td>001505.06</td>
                    <td>Complex Variable A</td>
                    <td>Shumin Li</td>
                    <td>1(1-2), 1-2,4-5,7-16 week(s); 3(3-4), 1-4,6-16 week(s); 6(1-2), 2 week(s); 6(3-4), 6 week(s)</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>STAT2002.06</td>
                    <td>Probability Theory and Mathematical Statistics</td>
                    <td>Shuguang Zhang</td>
                    <td>5(3-5), 1-4,6-18 week(s)</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>PE1501.01</td>
                    <td>Traditional Fitness</td>
                    <td>Jinsong Sun</td>
                    <td>2(8-9), 1-2,4,6,7-18 week(s); 7(8-9), 5 week(s)</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>BIO1506G.01</td>
                    <td>Introduction to Brain and Cognitive Science</td>
                    <td>Yupeng Yang; Xiaochu Zhang; Guoqiang Bi; Zhi Zhang; Yan Jin</td>
                    <td>5(8-10), 2-4,6-14 week(s)</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>HS1627.01</td>
                    <td>New Media Visual Art: From Digital Imaging to AI Painting</td>
                    <td>Yanxiang Zhang</td>
                    <td>2(11-13), 2,4,6,7-13 week(s); 7(11-13), 5 week(s)</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Sophomore Year - Second Semester -->
          <div class="semester-timetable-container" id="sophomore-second">
            <h3 class="semester-title">Sophomore Year - Second Semester</h3>
            <div class="timetable-container">
              <table class="timetable" id="sophomore-second-timetable">
                <thead>
                  <tr>
                    <th>Period</th>
                    <th>Period Number</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Morning Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Morning</td>
                    <td class="period-number">1</td>
                    <td></td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-number">210515.02 [4]</div>
                        <div class="course-name">Electronic Circuits</div>
                        <div class="instructor">Li Gu</div>
                        <div class="location">5407</div>
                        <div class="weeks">1-16 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">2</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">3</td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">12:10</div>
                      <div class="course-container">
                        <div class="course-number">210515.02 [4]</div>
                        <div class="course-name">Electronic Circuits</div>
                        <div class="instructor">Li Gu</div>
                        <div class="location">5407</div>
                        <div class="weeks">1-10, 12-14, 16 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">12:10</div>
                      <div class="course-container">
                        <div class="course-number">PHYS1005B.06 [2]</div>
                        <div class="course-name">Atomic Physics B</div>
                        <div class="instructor">Jinshi Xu</div>
                        <div class="location">5207</div>
                        <div class="weeks">9-16 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">12:10</div>
                      <div class="course-container">
                        <div class="course-number">022057.09 [4]</div>
                        <div class="course-name">Electrodynamics</div>
                        <div class="instructor">Xin Tao</div>
                        <div class="location">5304</div>
                        <div class="weeks">1-9, 11-16 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">12:10</div>
                      <div class="course-container">
                        <div class="course-number">MARX1013.12 [2.5]</div>
                        <div class="course-name">Introduction to Mao Zedong Thought and Theoretical System of Socialism with Chinese Characteristics</div>
                        <div class="instructor">Dongqing Wang</div>
                        <div class="location">1101</div>
                        <div class="weeks">1-9, 11-16 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">12:10</div>
                      <div class="course-container">
                        <div class="course-number">ESS2009.01 [2]</div>
                        <div class="course-name">Introduction to Earth Science - Space Science</div>
                        <div class="instructor">Jingnan Guo</div>
                        <div class="location">2307</div>
                        <div class="weeks">1-5, 7-9, 11-14 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">12:10</div>
                      <div class="course-container">
                        <div class="course-number">ESS2009.01 [2]</div>
                        <div class="course-name">Introduction to Earth Science - Space Science</div>
                        <div class="instructor">Jingnan Guo</div>
                        <div class="location">2307</div>
                        <div class="weeks">10 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">4</td>
                  </tr>
                  <tr>
                    <td class="period-number">5</td>
                  </tr>

                  <!-- Afternoon Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Afternoon</td>
                    <td class="period-number">6</td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-number">022057.09 [4]</div>
                        <div class="course-name">Electrodynamics</div>
                        <div class="instructor">Xin Tao</div>
                        <div class="location">5304</div>
                        <div class="weeks">1-10, 12-14, 16 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-number">001506.04 [3]</div>
                        <div class="course-name">Mathematical Physics Equations A</div>
                        <div class="instructor">Shumin Li</div>
                        <div class="location">5201</div>
                        <div class="weeks">1-15 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-number">PHYS1005B.06 [2]</div>
                        <div class="course-name">Atomic Physics B</div>
                        <div class="instructor">Jinshi Xu</div>
                        <div class="location">5207</div>
                        <div class="weeks">9, 11-16 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-number">001506.04 [3]</div>
                        <div class="course-name">Mathematical Physics Equations A</div>
                        <div class="instructor">Shumin Li</div>
                        <div class="location">5201</div>
                        <div class="weeks">1-5, 7-9, 11-15 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-number">001506.04 [3]</div>
                        <div class="course-name">Mathematical Physics Equations A</div>
                        <div class="instructor">Shumin Li</div>
                        <div class="location">5201</div>
                        <div class="weeks">10 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">7</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">8</td>
                    <td></td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">17:30</div>
                      <div class="course-container">
                        <div class="course-number">001506.04 [3]</div>
                        <div class="course-name">Mathematical Physics Equations A</div>
                        <div class="instructor">Shumin Li</div>
                        <div class="location">5201</div>
                        <div class="weeks">9-10 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">17:30</div>
                      <div class="course-container">
                        <div class="course-number">HS1651.03 [2]</div>
                        <div class="course-name">General History of Western Music</div>
                        <div class="instructor">Keren Shao</div>
                        <div class="location">5207</div>
                        <div class="weeks">1-9, 11-16 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">9</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">10</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>

                  <!-- Evening Section -->
                  <tr>
                    <td rowspan="3" class="period-header">Evening</td>
                    <td class="period-number">11</td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">19:30</div>
                      <div class="time-info end-info">21:05</div>
                      <div class="course-container">
                        <div class="course-number">HS1524.01 [1]</div>
                        <div class="course-name">History of Mind in Physics</div>
                        <div class="instructor">Ming Gong</div>
                        <div class="location">5203</div>
                        <div class="weeks">5-15 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">12</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">13</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- My Classes Table for Sophomore Second Semester -->
            <div class="my-classes-container">
              <h3 style="text-align: center; margin-top: 20px;">My Classes</h3>
              <table class="my-classes-table">
                <thead>
                  <tr>
                    <th>Course Number</th>
                    <th>Course Name</th>
                    <th>Instructor</th>
                    <th>Time</th>
                    <th>Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>MARX1013.12</td>
                    <td>Introduction to Mao Zedong Thought and Theoretical System of Socialism with Chinese Characteristics</td>
                    <td>Dongqing Wang</td>
                    <td>4(3-5), 1-9,11-16 week(s)</td>
                    <td>2.5</td>
                  </tr>
                  <tr>
                    <td>ESS2009.01</td>
                    <td>Introduction to Earth Science - Space Science</td>
                    <td>Jingnan Guo</td>
                    <td>5(3-5), 1-5,7-9,11-14 week(s); 7(3-5), 10 week(s)</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>022057.09</td>
                    <td>Electrodynamics</td>
                    <td>Xin Tao</td>
                    <td>1(6-7), 1-10,12-14,16 week(s); 3(3-5), 1-9,11-16 week(s)</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>HS1524.01</td>
                    <td>History of Mind in Physics</td>
                    <td>Ming Gong</td>
                    <td>2(11-12), 5-15 week(s)</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>PHYS1005B.06</td>
                    <td>Atomic Physics B</td>
                    <td>Jinshi Xu</td>
                    <td>2(3-5), 9-16 week(s); 4(6-7), 9,11-16 week(s)</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>210515.02</td>
                    <td>Electronic Circuits</td>
                    <td>Li Gu</td>
                    <td>1(3-5), 1-10,12-14,16 week(s); 3(1-2), 1-16 week(s)</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>001506.04</td>
                    <td>Mathematical Physics Equations A</td>
                    <td>Shumin Li</td>
                    <td>3(6-7), 1-15 week(s); 3(8-9), 9-10 week(s); 5(6-7), 1-5,7-9,11-15 week(s); 7(6-7), 10 week(s)</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>HS1651.03</td>
                    <td>General History of Western Music</td>
                    <td>Keren Shao</td>
                    <td>4(8-9), 1-9,11-16 week(s)</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>MARX1503.01</td>
                    <td>History of Reform and Open-up</td>
                    <td>Hao Ding</td>
                    <td>Null</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

<!-- Junior Year - First Semester -->
          <div class="semester-timetable-container" id="junior-first">
            <h3 class="semester-title">Junior Year - First Semester</h3>
            <div class="timetable-container">
              <table class="timetable" id="junior-first-timetable">
                <thead>
                  <tr>
                    <th>Period</th>
                    <th>Period Number</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Morning Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Morning</td>
                    <td class="period-number">1</td>
                    <td></td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-number">PE00118.01 [1]</div>
                        <div class="course-name">Health Preservation (2)</div>
                        <div class="instructor">Tengfei Xiao</div>
                        <div class="location">East Campus Humanities Building 1F</div>
                        <div class="weeks">1-3, 6-18 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="course-container">
                        <div class="course-number">PE00118.01 [1]</div>
                        <div class="course-name">Health Preservation (2)</div>
                        <div class="instructor">Tengfei Xiao</div>
                        <div class="location">East Campus Humanities Building 1F</div>
                        <div class="weeks">5 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">2</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">3</td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">12:10</div>
                      <div class="course-container">
                        <div class="course-number">007185.01 [3]</div>
                        <div class="course-name">Plasma Physics</div>
                        <div class="instructor">Yi Li</div>
                        <div class="location">2306</div>
                        <div class="weeks">1-4, 6-18 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">12:10</div>
                      <div class="overlap-container">
                        <div class="overlap-course">
                          <div class="course-number">007282.01 [3]</div>
                          <div class="course-name">Principles and Methods of Space Detection Instruments</div>
                          <div class="instructor">Xianghui Xue</div>
                          <div class="location">2507</div>
                          <div class="weeks">1-3, 5-12 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">007282.01</div>
                          <div class="course-name">Principles and Methods of Space Detection Instruments</div>
                          <div class="instructor">Xianghui Xue</div>
                          <div class="location">2507</div>
                          <div class="weeks">14 week(s)</div>
                        </div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">12:10</div>
                      <div class="course-container">
                        <div class="course-number">022095.01 [3]</div>
                        <div class="course-name">Quantum Mechanics C</div>
                        <div class="instructor">Yang Zhang</div>
                        <div class="location">5107</div>
                        <div class="weeks">2-3, 5-16, 18 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">12:10</div>
                      <div class="overlap-container">
                        <div class="overlap-course">
                          <div class="course-number">022095.01 [3]</div>
                          <div class="course-name">Quantum Mechanics C</div>
                          <div class="instructor">Yang Zhang</div>
                          <div class="location">5107</div>
                          <div class="weeks">18 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">007282.01</div>
                          <div class="course-name">Principles and Methods of Space Detection Instruments</div>
                          <div class="instructor">Xianghui Xue</div>
                          <div class="location">2507</div>
                          <div class="weeks">4 week(s)</div>
                        </div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">4</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">5</td>
                    <td></td>
                    <td></td>
                  </tr>

                  <!-- Afternoon Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Afternoon</td>
                    <td class="period-number">6</td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-number">MATH2001.04 [3]</div>
                        <div class="course-name">Computational Methods</div>
                        <div class="instructor">Quan Zhao</div>
                        <div class="location">2121</div>
                        <div class="weeks">1-4, 6-15 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-number">007282.01 [3]</div>
                        <div class="course-name">Principles and Methods of Space Detection Instruments</div>
                        <div class="instructor">Xianghui Xue</div>
                        <div class="location">2507</div>
                        <div class="weeks">1-4, 6-11, 13-15 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-number">MATH2001.04 [3]</div>
                        <div class="course-name">Computational Methods</div>
                        <div class="instructor">Quan Zhao</div>
                        <div class="location">2121</div>
                        <div class="weeks">1-3, 6-15 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-number">MATH2001.04 [3]</div>
                        <div class="course-name">Computational Methods</div>
                        <div class="instructor">Quan Zhao</div>
                        <div class="location">2121</div>
                        <div class="weeks">5 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">7</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">8</td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="course-container">
                        <div class="course-number">GEOP4010.01 [2]</div>
                        <div class="course-name">Space Environment and Aerospace Engineering</div>
                        <div class="instructor">Tong Dang</div>
                        <div class="location">5106</div>
                        <div class="weeks">1-4, 6-14 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="overlap-container">
                        <div class="overlap-course">
                          <div class="course-number">GEOP4011.01 [3]</div>
                          <div class="course-name">Remote Sensing Technology</div>
                          <div class="instructor">Tao Li</div>
                          <div class="location">5305</div>
                          <div class="weeks">1-4, 6-10 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">GEOP4011.01</div>
                          <div class="course-name">Remote Sensing Technology</div>
                          <div class="instructor">Xin Fang</div>
                          <div class="location">5305</div>
                          <div class="weeks">11-14 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">GEOP4011.01</div>
                          <div class="course-name">Remote Sensing Technology</div>
                          <div class="instructor">Wen Yi</div>
                          <div class="location">5305</div>
                          <div class="weeks">15-18 week(s)</div>
                        </div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="course-container">
                        <div class="course-number">022095.01 [3]</div>
                        <div class="course-name">Quantum Mechanics C</div>
                        <div class="instructor">Yang Zhang</div>
                        <div class="location">5307</div>
                        <div class="weeks">1 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="overlap-container">
                        <div class="overlap-course">
                          <div class="course-number">GEOP3007.01 [2]</div>
                          <div class="course-name">Fluid Mechanics</div>
                          <div class="instructor">Rongsheng Wang</div>
                          <div class="location">2305</div>
                          <div class="weeks">1-3, 5-9, 11-14 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">GEOP3007.01</div>
                          <div class="course-name">Fluid Mechanics</div>
                          <div class="instructor">Rongsheng Wang</div>
                          <div class="location">5107</div>
                          <div class="weeks">15 week(s)</div>
                        </div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">17:30</div>
                      <div class="course-container">
                        <div class="course-number">HS1505.01 [2]</div>
                        <div class="course-name">The Origin of Scientific Spirit and Scientific Method</div>
                        <div class="instructor">Yunli Shi</div>
                        <div class="location">5206</div>
                        <div class="weeks">2-3, 5-16, 18 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">15:55</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="overlap-container">
                        <div class="overlap-course">
                          <div class="course-number">GEOP3007.01 [2]</div>
                          <div class="course-name">Fluid Mechanics</div>
                          <div class="instructor">Rongsheng Wang</div>
                          <div class="location">2305</div>
                          <div class="weeks">4 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">HS1505.01 [2]</div>
                          <div class="course-name">The Origin of Scientific Spirit and Scientific Method</div>
                          <div class="instructor">Yunli Shi</div>
                          <div class="location">5206</div>
                          <div class="weeks">18 week(s)</div>
                        </div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">9</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">10</td>
                    <td></td>
                  </tr>

                  <!-- Evening Section -->
                  <tr>
                    <td rowspan="3" class="period-header">Evening</td>
                    <td class="period-number">11</td>
                    <td></td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">19:30</div>
                      <div class="time-info end-info">21:55</div>
                      <div class="overlap-container">
                        <div class="overlap-course">
                          <div class="course-number">208701.01 [3]</div>
                          <div class="course-name">Interdisciplinary Research Practice</div>
                          <div class="instructor">Rui Li</div>
                          <div class="location">5405</div>
                          <div class="weeks">2-3, 6-7 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">208701.01</div>
                          <div class="course-name">Interdisciplinary Research Practice</div>
                          <div class="instructor">Meng Xing</div>
                          <div class="location">5405</div>
                          <div class="weeks">8-11 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">208701.01</div>
                          <div class="course-name">Interdisciplinary Research Practice</div>
                          <div class="instructor">Fang Huang</div>
                          <div class="location">5405</div>
                          <div class="weeks">12-15 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">208701.01</div>
                          <div class="course-name">Interdisciplinary Research Practice</div>
                          <div class="instructor">Huajian Yao</div>
                          <div class="location">5405</div>
                          <div class="weeks">16, 18-20 week(s)</div>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">19:30</div>
                      <div class="time-info end-info">21:55</div>
                      <div class="course-container">
                        <div class="course-number">208701.01 [3]</div>
                        <div class="course-name">Interdisciplinary Research Practice</div>
                        <div class="instructor">Rui Li</div>
                        <div class="location">5405</div>
                        <div class="weeks">5 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">12</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">13</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- My Classes Table for Junior First Semester -->
            <div class="my-classes-container">
              <h3 style="text-align: center; margin-top: 20px;">My Classes</h3>
              <table class="my-classes-table">
                <thead>
                  <tr>
                    <th>Course Number</th>
                    <th>Course Name</th>
                    <th>Instructor</th>
                    <th>Time</th>
                    <th>Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>HS1505.01</td>
                    <td>The Origin of Scientific Spirit and Scientific Method</td>
                    <td>Yunli Shi</td>
                    <td>5(8-9), 2-3,5-16,18 week(s); 7(8-9), 18 week(s)</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>022095.01</td>
                    <td>Quantum Mechanics C</td>
                    <td>Yang Zhang</td>
                    <td>3(8-10), 1 week(s); 5(3-5), 2-3,5-16,18 week(s); 7(3-5), 18 week(s)</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>GEOP4011.01</td>
                    <td>Remote Sensing Technology</td>
                    <td>Tao Li; Xin Fang; Wen Yi; Chengyun Yang</td>
                    <td>2(8-10), 1-4,6-18 week(s)</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>GEOP3007.01</td>
                    <td>Fluid Mechanics</td>
                    <td>Rongsheng Wang</td>
                    <td>4(8-10), 1-3,5-9,11-15 week(s); 7(8-10), 4 week(s)</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>007185.01</td>
                    <td>Plasma Physics</td>
                    <td>Yi Li</td>
                    <td>1(3-5), 1-4,6-18 week(s)</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>007282.01</td>
                    <td>Principles and Methods of Space Detection Instruments</td>
                    <td>Xianghui Xue</td>
                    <td>2(6-7), 1-4,6-11,13-15 week(s); 4(3-5), 1-3,5-12,14 week(s); 7(3-5), 4 week(s)</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>GEOP4010.01</td>
                    <td>Space Environment and Aerospace Engineering</td>
                    <td>Tong Dang</td>
                    <td>1(8-10), 1-4,6-14 week(s)</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>PE00118.01</td>
                    <td>Health Preservation (2)</td>
                    <td>Tengfei Xiao</td>
                    <td>3(1-2), 1-3,6-18 week(s); 6(1-2), 5 week(s)</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>MATH2001.04</td>
                    <td>Computational Methods</td>
                    <td>Quan Zhao</td>
                    <td>1(6-7), 1-4,6-15 week(s); 3(6-7), 1-3,6-15 week(s); 6(6-7), 5 week(s)</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>MARX1006.02</td>
                    <td>Situation and Policy (Lecture)</td>
                    <td>Xuxin Hu</td>
                    <td>Null</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>208701.01</td>
                    <td>Interdisciplinary Research Practice</td>
                    <td>Rui Li; Meng Xing; Fang Huang; Huajian Yao</td>
                    <td>3(11-13), 2-3,6-20 week(s); 6(11-13), 5 week(s)</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>EDUS1001.34</td>
                    <td>Labor Education</td>
                    <td>Yi Xie</td>
                    <td>Null</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>HS1003.17</td>
                    <td>Art Practice</td>
                    <td>Yi Xie</td>
                    <td>Null</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

              <div class="semester-timetable-container" id="junior-second">
            <h3 class="semester-title">Junior Year - Second Semester</h3>
            <div class="timetable-container">
              <table class="timetable" id="junior-second-timetable">
                <thead>
                  <tr>
                    <th>Period</th>
                    <th>Period Number</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Morning Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Morning</td>
                    <td class="period-number">1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">7:50</div>
                      <div class="time-info end-info">9:25</div>
                      <div class="overlap-container">
                        <div class="overlap-course">
                          <div class="course-number">GEOP3009.01 [4]</div>
                          <div class="course-name">Introduction to Space Physics</div>
                          <div class="instructor">Quanming Lu</div>
                          <div class="location">5505</div>
                          <div class="weeks">1-2 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">GEOP3009.01</div>
                          <div class="course-name">Introduction to Space Physics</div>
                          <div class="instructor">Quanming Lu</div>
                          <div class="location">5507</div>
                          <div class="weeks">3-6 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">GEOP3009.01</div>
                          <div class="course-name">Introduction to Space Physics</div>
                          <div class="instructor">Chuanbing Wang</div>
                          <div class="location">5507</div>
                          <div class="weeks">7-8, 10-12 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">GEOP3009.01</div>
                          <div class="course-name">Introduction to Space Physics</div>
                          <div class="instructor">Xiaoli Luan</div>
                          <div class="location">5507</div>
                          <div class="weeks">13-16 week(s)</div>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">2</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">3</td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">12:10</div>
                      <div class="course-container">
                        <div class="course-number">007167.01 [2]</div>
                        <div class="course-name">General Astronomy</div>
                        <div class="instructor">Chenglong Shen</div>
                        <div class="location">5107</div>
                        <div class="weeks">2-5, 7-9, 11-16 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">11:20</div>
                      <div class="overlap-container">
                        <div class="overlap-course">
                          <div class="course-number">022063.02 [3]</div>
                          <div class="course-name">Thermodynamics and Statistical Physics B</div>
                          <div class="instructor">Meng Xing</div>
                          <div class="location">2121</div>
                          <div class="weeks">1-3 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">022063.02</div>
                          <div class="course-name">Thermodynamics and Statistical Physics B</div>
                          <div class="instructor">Huinan Zheng</div>
                          <div class="location">2121</div>
                          <div class="weeks">4-9, 11-15 week(s)</div>
                        </div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">12:10</div>
                      <div class="overlap-container">
                        <div class="overlap-course">
                          <div class="course-number">GEOP3009.01 [4]</div>
                          <div class="course-name">Introduction to Space Physics</div>
                          <div class="instructor">Quanming Lu</div>
                          <div class="location">5505</div>
                          <div class="weeks">1-2 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">GEOP3009.01</div>
                          <div class="course-name">Introduction to Space Physics</div>
                          <div class="instructor">Quanming Lu</div>
                          <div class="location">5507</div>
                          <div class="weeks">3-6 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">GEOP3009.01</div>
                          <div class="course-name">Introduction to Space Physics</div>
                          <div class="instructor">Chuanbing Wang</div>
                          <div class="location">5507</div>
                          <div class="weeks">7-12 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">GEOP3009.01</div>
                          <div class="course-name">Introduction to Space Physics</div>
                          <div class="instructor">Xiaoli Luan</div>
                          <div class="location">5507</div>
                          <div class="weeks">13-16 week(s)</div>
                        </div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">12:10</div>
                      <div class="course-container">
                        <div class="course-number">GEOP3008.01 [2]</div>
                        <div class="course-name">Magnetohydrodynamics</div>
                        <div class="instructor">Yuming Wang</div>
                        <div class="location">5205</div>
                        <div class="weeks">1-7, 9-14 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">12:10</div>
                      <div class="course-container">
                        <div class="course-number">PLNT3006.01 [3]</div>
                        <div class="course-name">Astrobiology</div>
                        <div class="instructor">Jihua Hao</div>
                        <div class="location">5305</div>
                        <div class="weeks">1-8, 10-16 week(s)</div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">9:45</div>
                      <div class="time-info end-info">12:10</div>
                      <div class="course-container">
                        <div class="course-number">007167.01 [2]</div>
                        <div class="course-name">General Astronomy</div>
                        <div class="instructor">Chenglong Shen</div>
                        <div class="location">5107</div>
                        <div class="weeks">10 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">4</td>
                  </tr>
                  <tr>
                    <td class="period-number">5</td>
                    <td></td>
                  </tr>

                  <!-- Afternoon Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Afternoon</td>
                    <td class="period-number">6</td>
                    <td class="has-class event-cell" rowspan="4">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="overlap-container">
                        <div class="overlap-course">
                          <div class="course-number">GEOP3006.01 [2]</div>
                          <div class="course-name">Comprehensive Experiment of Space Exploration</div>
                          <div class="instructor">Yu Liu</div>
                          <div class="location">2502</div>
                          <div class="weeks">2 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">GEOP3006.01</div>
                          <div class="course-name">Comprehensive Experiment of Space Exploration</div>
                          <div class="instructor">Yu Liu</div>
                          <div class="location">East Campus New Geospace Building (6F) Lab</div>
                          <div class="weeks">3-5, 7-8 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">GEOP3006.01</div>
                          <div class="course-name">Comprehensive Experiment of Space Exploration</div>
                          <div class="instructor">Yiren Li</div>
                          <div class="location">East Campus New Geospace Building (6F) Lab</div>
                          <div class="weeks">11-15 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">GEOP3006.01</div>
                          <div class="course-name">Comprehensive Experiment of Space Exploration</div>
                          <div class="instructor">Xin Fang</div>
                          <div class="location">East Campus New Geospace Building (6F) Lab</div>
                          <div class="weeks">16 week(s)</div>
                        </div>
                      </div>
                    </td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="course-container">
                        <div class="course-number">PLNT3006.01 [3]</div>
                        <div class="course-name">Astrobiology</div>
                        <div class="instructor">Jihua Hao</div>
                        <div class="location">5305</div>
                        <div class="weeks">14-16 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="2">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">15:35</div>
                      <div class="overlap-container">
                        <div class="overlap-course">
                          <div class="course-number">022063.02 [3]</div>
                          <div class="course-name">Thermodynamics and Statistical Physics B</div>
                          <div class="instructor">Meng Xing</div>
                          <div class="location">2121</div>
                          <div class="weeks">1-3 week(s)</div>
                        </div>
                        <div class="overlap-course">
                          <div class="course-number">022063.02</div>
                          <div class="course-name">Thermodynamics and Statistical Physics B</div>
                          <div class="instructor">Huinan Zheng</div>
                          <div class="location">2121</div>
                          <div class="weeks">4-15 week(s)</div>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="4">
                      <div class="time-info start-info">14:00</div>
                      <div class="time-info end-info">18:20</div>
                      <div class="course-container">
                        <div class="course-number">GEOP3006.01 [2]</div>
                        <div class="course-name">Comprehensive Experiment of Space Exploration</div>
                        <div class="instructor">Yiren Li, Yu Liu</div>
                        <div class="location">East Campus New Geospace Building (6F) Lab</div>
                        <div class="weeks">10 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">7</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">8</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">9</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">10</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>

                  <!-- Evening Section -->
                  <tr>
                    <td rowspan="3" class="period-header">Evening</td>
                    <td class="period-number">11</td>
                    <td></td>
                    <td class="has-class event-cell" rowspan="3">
                      <div class="time-info start-info">19:30</div>
                      <div class="time-info end-info">21:55</div>
                      <div class="course-container">
                        <div class="course-number">GEOP3006.01 [2]</div>
                        <div class="course-name">Comprehensive Experiment of Space Exploration</div>
                        <div class="instructor">Yu Liu</div>
                        <div class="location">East Campus New Geospace Building (6F) Lab</div>
                        <div class="weeks">9 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="has-class event-cell">
                      <div class="time-info start-info">18:30</div>
                      <div class="time-info end-info">19:15</div>
                      <div class="course-container">
                        <div class="course-number">208702.01 [1]</div>
                        <div class="course-name">Earth System Science Lecture</div>
                        <div class="instructor">TBA</div>
                        <div class="location">Department Arrangement</div>
                        <div class="weeks">1-4, 6-8, 11-16 week(s)</div>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">12</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">13</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- My Classes Table for Junior Second Semester -->
            <div class="my-classes-container">
              <h3 style="text-align: center; margin-top: 20px;">My Classes</h3>
              <table class="my-classes-table">
                <thead>
                  <tr>
                    <th>Course Number</th>
                    <th>Course Name</th>
                    <th>Instructor</th>
                    <th>Time</th>
                    <th>Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>022063.02</td>
                    <td>Thermodynamics and Statistical Physics B</td>
                    <td>Huinan Zheng; Meng Xing</td>
                    <td>2(3-4), 1-9,11-15 week(s); 4(6-7), 1-15 week(s)</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>PLNT3006.01</td>
                    <td>Astrobiology</td>
                    <td>Jihua Hao</td>
                    <td>2(6-7), 14-16 week(s); 5(3-5), 1-8,10-16 week(s)</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>GEOP3009.01</td>
                    <td>Introduction to Space Physics</td>
                    <td>Quanming Lu; Chuanbing Wang; Xiaoli Luan</td>
                    <td>3(3-5), 1-16 week(s); 5(1-2), 1-8,10-16 week(s)</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>GEOP3008.01</td>
                    <td>Magnetohydrodynamics</td>
                    <td>Yuming Wang</td>
                    <td>4(3-5), 1-7,9-14 week(s)</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>GEOP3006.01</td>
                    <td>Comprehensive Experiment of Space Exploration</td>
                    <td>Yu Liu; Yiren Li; Xin Fang</td>
                    <td>1(6-9), 2-5,7-8,11-16 week(s); 2(11-13), 9 week(s); 6(6-9), 10 week(s)</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>208702.01</td>
                    <td>Earth System Science Lecture</td>
                    <td>TBA</td>
                    <td>6(11), 1-4,6-8,11-16 week(s)</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>007167.01</td>
                    <td>General Astronomy</td>
                    <td>Chenglong Shen</td>
                    <td>1(3-5), 2-5,7-9,11-16 week(s); 6(3-5), 10 week(s)</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Senior Year - First Semester -->
          <div class="semester-timetable-container" id="senior-first">
            <h3 class="semester-title">Senior Year - First Semester</h3>
            <div class="timetable-container">
              <table class="timetable" id="senior-first-timetable">
                <!-- Empty timetable structure same as freshman-second -->
                <thead>
                  <tr>
                    <th>Period</th>
                    <th>Period Number</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Morning Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Morning</td>
                    <td class="period-number">1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">2</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">3</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">4</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">5</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  
                  <!-- Afternoon Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Afternoon</td>
                    <td class="period-number">6</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">7</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">8</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">9</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">10</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  
                  <!-- Evening Section -->
                  <tr>
                    <td rowspan="3" class="period-header">Evening</td>
                    <td class="period-number">11</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">12</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">13</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- My Classes Table for Senior First Semester -->
            <div class="my-classes-container">
              <h3 style="text-align: center; margin-top: 20px;">My Classes</h3>
              <table class="my-classes-table">
                <thead>
                  <tr>
                    <th>Course Number</th>
                    <th>Course Name</th>
                    <th>Instructor</th>
                    <th>Time</th>
                    <th>Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- No classes in this semester -->
                </tbody>
              </table>
            </div>
          </div>
          
          <!-- Senior Year - Second Semester -->
          <div class="semester-timetable-container" id="senior-second">
            <h3 class="semester-title">Senior Year - Second Semester</h3>
            <div class="timetable-container">
              <table class="timetable" id="senior-second-timetable">
                <!-- Empty timetable structure same as freshman-second -->
                <thead>
                  <tr>
                    <th>Period</th>
                    <th>Period Number</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Morning Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Morning</td>
                    <td class="period-number">1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">2</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">3</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">4</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">5</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  
                  <!-- Afternoon Section -->
                  <tr>
                    <td rowspan="5" class="period-header">Afternoon</td>
                    <td class="period-number">6</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">7</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">8</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">9</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">10</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  
                  <!-- Evening Section -->
                  <tr>
                    <td rowspan="3" class="period-header">Evening</td>
                    <td class="period-number">11</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">12</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="period-number">13</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- My Classes Table for Senior Second Semester -->
            <div class="my-classes-container">
              <h3 style="text-align: center; margin-top: 20px;">My Classes</h3>
              <table class="my-classes-table">
                <thead>
                  <tr>
                    <th>Course Number</th>
                    <th>Course Name</th>
                    <th>Instructor</th>
                    <th>Time</th>
                    <th>Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- No classes in this semester -->
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- USTC Timetable Section -->
        <div class="schedule-section" id="ustc-timetable-section">
          <div class="ustc-local-save-hint">
            <i class="fas fa-info-circle"></i>
            <span>Your actions will be saved locally, allowing you to pick up right where you left off next time.</span>
          </div>
          <div class="timetable-container">
            <table class="timetable" id="ustc-timetable">
              <thead>
                <tr>
                  <th>Period</th>
                  <th>Period Number</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody>
                <!-- Morning Section -->
                <tr>
                  <td rowspan="5" class="period-header">Morning</td>
                  <td class="period-number">1</td>
                  <td data-period="1" data-day="1"></td>
                  <td data-period="1" data-day="2"></td>
                  <td data-period="1" data-day="3"></td>
                  <td data-period="1" data-day="4"></td>
                  <td data-period="1" data-day="5"></td>
                  <td data-period="1" data-day="6"></td>
                  <td data-period="1" data-day="0"></td>
                </tr>
                <tr>
                  <td class="period-number">2</td>
                  <td data-period="2" data-day="1"></td>
                  <td data-period="2" data-day="2"></td>
                  <td data-period="2" data-day="3"></td>
                  <td data-period="2" data-day="4"></td>
                  <td data-period="2" data-day="5"></td>
                  <td data-period="2" data-day="6"></td>
                  <td data-period="2" data-day="0"></td>
                </tr>
                <tr>
                  <td class="period-number">3</td>
                  <td data-period="3" data-day="1"></td>
                  <td data-period="3" data-day="2"></td>
                  <td data-period="3" data-day="3"></td>
                  <td data-period="3" data-day="4"></td>
                  <td data-period="3" data-day="5"></td>
                  <td data-period="3" data-day="6"></td>
                  <td data-period="3" data-day="0"></td>
                </tr>
                <tr>
                  <td class="period-number">4</td>
                  <td data-period="4" data-day="1"></td>
                  <td data-period="4" data-day="2"></td>
                  <td data-period="4" data-day="3"></td>
                  <td data-period="4" data-day="4"></td>
                  <td data-period="4" data-day="5"></td>
                  <td data-period="4" data-day="6"></td>
                  <td data-period="4" data-day="0"></td>
                </tr>
                <tr>
                  <td class="period-number">5</td>
                  <td data-period="5" data-day="1"></td>
                  <td data-period="5" data-day="2"></td>
                  <td data-period="5" data-day="3"></td>
                  <td data-period="5" data-day="4"></td>
                  <td data-period="5" data-day="5"></td>
                  <td data-period="5" data-day="6"></td>
                  <td data-period="5" data-day="0"></td>
                </tr>
                
                <!-- Afternoon Section -->
                <tr>
                  <td rowspan="5" class="period-header">Afternoon</td>
                  <td class="period-number">6</td>
                  <td data-period="6" data-day="1"></td>
                  <td data-period="6" data-day="2"></td>
                  <td data-period="6" data-day="3"></td>
                  <td data-period="6" data-day="4"></td>
                  <td data-period="6" data-day="5"></td>
                  <td data-period="6" data-day="6"></td>
                  <td data-period="6" data-day="0"></td>
                </tr>
                <tr>
                  <td class="period-number">7</td>
                  <td data-period="7" data-day="1"></td>
                  <td data-period="7" data-day="2"></td>
                  <td data-period="7" data-day="3"></td>
                  <td data-period="7" data-day="4"></td>
                  <td data-period="7" data-day="5"></td>
                  <td data-period="7" data-day="6"></td>
                  <td data-period="7" data-day="0"></td>
                </tr>
                <tr>
                  <td class="period-number">8</td>
                  <td data-period="8" data-day="1"></td>
                  <td data-period="8" data-day="2"></td>
                  <td data-period="8" data-day="3"></td>
                  <td data-period="8" data-day="4"></td>
                  <td data-period="8" data-day="5"></td>
                  <td data-period="8" data-day="6"></td>
                  <td data-period="8" data-day="0"></td>
                </tr>
                <tr>
                  <td class="period-number">9</td>
                  <td data-period="9" data-day="1"></td>
                  <td data-period="9" data-day="2"></td>
                  <td data-period="9" data-day="3"></td>
                  <td data-period="9" data-day="4"></td>
                  <td data-period="9" data-day="5"></td>
                  <td data-period="9" data-day="6"></td>
                  <td data-period="9" data-day="0"></td>
                </tr>
                <tr>
                  <td class="period-number">10</td>
                  <td data-period="10" data-day="1"></td>
                  <td data-period="10" data-day="2"></td>
                  <td data-period="10" data-day="3"></td>
                  <td data-period="10" data-day="4"></td>
                  <td data-period="10" data-day="5"></td>
                  <td data-period="10" data-day="6"></td>
                  <td data-period="10" data-day="0"></td>
                </tr>
                
                <!-- Evening Section -->
                <tr>
                  <td rowspan="3" class="period-header">Evening</td>
                  <td class="period-number">11</td>
                  <td data-period="11" data-day="1"></td>
                  <td data-period="11" data-day="2"></td>
                  <td data-period="11" data-day="3"></td>
                  <td data-period="11" data-day="4"></td>
                  <td data-period="11" data-day="5"></td>
                  <td data-period="11" data-day="6"></td>
                  <td data-period="11" data-day="0"></td>
                </tr>
                <tr>
                  <td class="period-number">12</td>
                  <td data-period="12" data-day="1"></td>
                  <td data-period="12" data-day="2"></td>
                  <td data-period="12" data-day="3"></td>
                  <td data-period="12" data-day="4"></td>
                  <td data-period="12" data-day="5"></td>
                  <td data-period="12" data-day="6"></td>
                  <td data-period="12" data-day="0"></td>
                </tr>
                <tr>
                  <td class="period-number">13</td>
                  <td data-period="13" data-day="1"></td>
                  <td data-period="13" data-day="2"></td>
                  <td data-period="13" data-day="3"></td>
                  <td data-period="13" data-day="4"></td>
                  <td data-period="13" data-day="5"></td>
                  <td data-period="13" data-day="6"></td>
                  <td data-period="13" data-day="0"></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <button class="add-event-btn" id="add-ustc-event">
            <i class="fas fa-plus"></i> Add Class
          </button>
          
          <!-- USTC Classes List -->
          <div class="ustc-classes-container" id="ustc-classes-container">
            <h3 style="text-align: center; margin-top: 20px;">My Classes</h3>
            <table class="ustc-classes-table" id="ustc-classes-table">
              <thead>
                <tr>
                  <th>Period Range</th>
                  <th>Course Name</th>
                  <th>Instructor</th>
                  <th>Location</th>
                  <th>Weeks</th>
                  <th>Days</th>
                  <th>Credits</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="ustc-classes-body">
                <!-- Classes will be added here -->
              </tbody>
            </table>
          </div>
        </div>

        <!-- Timetable Section -->
        <div class="schedule-section" id="timetable-section">
          <div class="week-navigation">
            <button class="week-nav-btn" id="prev-week-btn">
              <i class="fas fa-chevron-left"></i>
            </button>
            <div class="week-title" id="current-week">Week of Mon, Jan 1 - Sun, Jan 7</div>
            <button class="week-nav-btn" id="next-week-btn">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
          
          <div class="timetable-container">
            <table class="timetable" id="timetable">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody id="timetable-body">
                <!-- Timetable rows will be generated by JavaScript -->
              </tbody>
            </table>
          </div>
          
          <button class="add-event-btn" id="add-timetable-event">
            <i class="fas fa-plus"></i> Add Class/Event
          </button>
        </div>

        <!-- Calendar Section -->
        <div class="schedule-section" id="calendar-section">
          <div id="calendar-container"></div>
          <button class="add-event-btn" id="add-calendar-event">
            <i class="fas fa-plus"></i> Add Event
          </button>
        </div>
      </div>
    </div>
    
    <a href="#" class="back-btn" id="schedule-back-btn">
      <i class="fas fa-arrow-left"></i>
    </a>
    
    <!-- Event Modal -->
    <div class="event-modal" id="event-modal">
      <div class="event-modal-content">
        <span class="event-modal-close" id="event-modal-close">&times;</span>
        <h3 class="event-modal-title" id="event-modal-title">Add New Class</h3>
        
        <form id="event-form">
          <input type="hidden" id="event-id">
          <input type="hidden" id="event-type">
          
          <div class="event-form-group">
            <label for="ustc-period-start">Period Start</label>
            <select id="ustc-period-start" class="event-form-control" required>
              <option value="1">1 (7:50-8:35)</option>
              <option value="2">2 (8:40-9:25)</option>
              <option value="3">3 (9:45-10:30)</option>
              <option value="4">4 (10:35-11:20)</option>
              <option value="5">5 (11:25-12:10)</option>
              <option value="6">6 (14:00-14:45)</option>
              <option value="7">7 (14:50-15:35)</option>
              <option value="8">8 (15:55-16:40)</option>
              <option value="9">9 (16:45-17:30)</option>
              <option value="10">10 (17:35-18:20)</option>
              <option value="11">11 (19:30-20:15)</option>
              <option value="12">12 (20:20-21:05)</option>
              <option value="13">13 (21:10-21:55)</option>
            </select>
          </div>
          
          <div class="event-form-group">
            <label for="ustc-period-end">Period End</label>
            <select id="ustc-period-end" class="event-form-control" required>
              <option value="1">1 (7:50-8:35)</option>
              <option value="2">2 (8:40-9:25)</option>
              <option value="3">3 (9:45-10:30)</option>
              <option value="4">4 (10:35-11:20)</option>
              <option value="5">5 (11:25-12:10)</option>
              <option value="6">6 (14:00-14:45)</option>
              <option value="7">7 (14:50-15:35)</option>
              <option value="8">8 (15:55-16:40)</option>
              <option value="9">9 (16:45-17:30)</option>
              <option value="10">10 (17:35-18:20)</option>
              <option value="11">11 (19:30-20:15)</option>
              <option value="12">12 (20:20-21:05)</option>
              <option value="13">13 (21:10-21:55)</option>
            </select>
          </div>
          
          <div class="event-form-group">
            <label for="ustc-course-name">Course Name</label>
            <input type="text" id="ustc-course-name" class="event-form-control" required>
          </div>
          
          <div class="event-form-group">
            <label for="ustc-instructor">Instructor</label>
            <input type="text" id="ustc-instructor" class="event-form-control" required>
          </div>
          
          <div class="event-form-group">
            <label for="ustc-location">Location</label>
            <input type="text" id="ustc-location" class="event-form-control" required>
          </div>
          
          <!-- Added Credits field -->
          <div class="event-form-group">
            <label for="ustc-credits">Credits</label>
            <input type="number" id="ustc-credits" class="event-form-control" required>
          </div>
          
          <div class="event-form-group">
            <label>Days</label>
            <div class="days-container">
              <label><input type="checkbox" name="ustc-day" value="1"> Mon</label>
              <label><input type="checkbox" name="ustc-day" value="2"> Tue</label>
              <label><input type="checkbox" name="ustc-day" value="3"> Wed</label>
              <label><input type="checkbox" name="ustc-day" value="4"> Thu</label>
              <label><input type="checkbox" name="ustc-day" value="5"> Fri</label>
              <label><input type="checkbox" name="ustc-day" value="6"> Sat</label>
              <label><input type="checkbox" name="ustc-day" value="0"> Sun</label>
            </div>
          </div>
          
          <div class="event-form-group weeks-container">
            <div class="weeks-title">Teaching Weeks (1-18)</div>
            <div class="weeks-grid" id="weeks-grid">
              <!-- Weeks checkboxes will be generated here -->
            </div>
            <div class="week-display" id="week-display"></div>
          </div>
          
          <div class="event-form-actions">
            <button type="button" class="event-form-btn event-form-btn-delete" id="event-delete-btn" style="display: none;">Delete</button>
            <button type="button" class="event-form-btn event-form-btn-cancel" id="event-cancel-btn">Cancel</button>
            <button type="submit" class="event-form-btn event-form-btn-save">Save</button>
          </div>
        </form>
      </div>
    </div>
    
    <!-- General event modal -->
    <div class="event-modal" id="general-event-modal">
      <div class="event-modal-content">
        <span class="event-modal-close" id="general-event-modal-close">&times;</span>
        <h3 class="event-modal-title" id="general-event-modal-title">Add New Event</h3>
        
        <form id="general-event-form">
          <input type="hidden" id="general-event-id">
          <input type="hidden" id="general-event-type">
          
          <div class="event-form-group">
            <label for="event-title">Event Title</label>
            <input type="text" id="event-title" class="event-form-control" required>
          </div>
          
          <div class="event-form-group">
            <label for="event-description">Description</label>
            <textarea id="event-description" class="event-form-control" rows="3"></textarea>
          </div>
          
          <div class="event-form-group">
            <label for="event-start">Start</label>
            <input type="datetime-local" id="event-start" class="event-form-control" required>
          </div>
          
          <div class="event-form-group">
            <label for="event-end">End</label>
            <input type="datetime-local" id="event-end" class="event-form-control" required>
          </div>
          
          <div class="event-form-group" id="recurring-container" style="display: none;">
            <label>
              <input type="checkbox" id="event-recurring"> Recurring Event
            </label>
          </div>
          
          <div class="event-form-actions">
            <button type="button" class="event-form-btn event-form-btn-delete" id="general-event-delete-btn" style="display: none;">Delete</button>
            <button type="button" class="event-form-btn event-form-btn-cancel" id="general-event-cancel-btn">Cancel</button>
            <button type="submit" class="event-form-btn event-form-btn-save">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
`);
})();
