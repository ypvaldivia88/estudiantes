module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      grade : {
        type: Sequelize.STRING
      },
    });
  
    return Student;
  };