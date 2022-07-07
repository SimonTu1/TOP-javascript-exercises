const findTheOldest = function (people) {
    return people.reduce((oldest, currentPerson) => {
      const oldAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(
        currentPerson.yearOfBirth,
        currentPerson.yearOfDeath
      );
      if (oldAge < currentAge) {
        return currentPerson;
      } else {
        return oldest;
      }
    });
  };

  const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

  module.exports = findTheOldest;