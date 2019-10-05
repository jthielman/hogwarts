import utilities from '../../helpers/utilities';

import houseData from '../../helpers/data/houseData';
import studentData from '../../helpers/data/studentData';
import studentCard from '../studentCard/studentCard';

import './studentList.scss';

const makeStudentList = () => {
  const students = studentData.getStudents();
  const houses = houseData.getHouses();
  let domString = '<ul class="student-list">';
  for (let i = 0; i < students.length; i += 1) {
    for (let j = 0; j < houses.length; j += 1) {
      if (students[i].houseId === houses[j].id) {
        domString += studentCard.makeStudentCard(students[i], houses[j]);
      }
    }
  }
  domString += '</ul>';
  utilities.printToDom('student-container', domString);
};

export default { makeStudentList };
