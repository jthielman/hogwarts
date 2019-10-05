import utilities from '../../helpers/utilities';

import studentData from '../../helpers/data/studentData';
import studentCard from '../studentCard/studentCard';

import './studentList.scss';

const makeStudentList = () => {
  const students = studentData.getStudents();
  let domString = '<ul class="student-list">';
  for (let i = 0; i < students.length; i += 1) {
    domString += studentCard.makeStudentCard(students[i]);
  }
  domString += '</ul>';
  utilities.printToDom('student-container', domString);
};

export default { makeStudentList };
