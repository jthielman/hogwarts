import './studentCard.scss';

const makeStudentCard = (student, house) => {
  const domString = `
    <li class="student-${house.name.toLowerCase()}">
      <div class="img-holder">
        <img src="${student.picture}">
      </div>
      <h2>${student.name}</h2>
    </li>
  `;
  return domString;
};

export default { makeStudentCard };
