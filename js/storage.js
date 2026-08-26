// Local Storage Management Functions

// Classes
function getClasses() {
  const data = localStorage.getItem('classes');
  return data ? JSON.parse(data) : [];
}

function saveClasses(classes) {
  localStorage.setItem('classes', JSON.stringify(classes));
}

// Students
function getStudents() {
  const data = localStorage.getItem('students');
  return data ? JSON.parse(data) : [];
}

function saveStudents(students) {
  localStorage.setItem('students', JSON.stringify(students));
}

// Assignments
function getAssignments() {
  const data = localStorage.getItem('assignments');
  return data ? JSON.parse(data) : [];
}

function saveAssignments(assignments) {
  localStorage.setItem('assignments', JSON.stringify(assignments));
}

// Attendance
function getAttendance() {
  const data = localStorage.getItem('attendance');
  return data ? JSON.parse(data) : [];
}

function saveAttendanceData(attendance) {
  localStorage.setItem('attendance', JSON.stringify(attendance));
}

// Lessons
function getLessons() {
  const data = localStorage.getItem('lessons');
  return data ? JSON.parse(data) : [];
}

function saveLessons(lessons) {
  localStorage.setItem('lessons', JSON.stringify(lessons));
}

// Timetable
function getTimetable() {
  const data = localStorage.getItem('timetable');
  return data ? JSON.parse(data) : [];
}

function saveTimetable(timetable) {
  localStorage.setItem('timetable', JSON.stringify(timetable));
}

// Notices
function getNotices() {
  const data = localStorage.getItem('notices');
  return data ? JSON.parse(data) : [];
}

function saveNotices(notices) {
  localStorage.setItem('notices', JSON.stringify(notices));
}

// Get storage stats
function getStorageStats() {
  let totalSize = 0;
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      totalSize += localStorage[key].length + key.length;
    }
  }
  return (totalSize / 1024).toFixed(2) + ' KB';
}

// Check storage available
function checkStorageAvailable(data) {
  try {
    localStorage.setItem('__test__', data);
    localStorage.removeItem('__test__');
    return true;
  } catch (e) {
    return false;
  }
}
