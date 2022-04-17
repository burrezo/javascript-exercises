const findTheOldest = function(arrayObj) {

    arrayObj.forEach(person => person.yearOfDeath ||= (new Date).getFullYear());

    const arrayObjSort = arrayObj.sort((previous, current) => (current.yearOfDeath - current.yearOfBirth) - (previous.yearOfDeath - previous.yearOfBirth));

    return arrayObjSort[0];
    
};

// Do not edit below this line
module.exports = findTheOldest;
