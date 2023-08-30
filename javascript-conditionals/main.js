/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  const firstLetter = string.slice(0, 1);
  if (firstLetter === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  const ageProperty = person.age;
  if (ageProperty >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  const ageProperty = person.age;
  if (ageProperty >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  const notValid = 'invalid pH level';
  if (pH === 7) {
    console.log('neutral');
  } else if (pH <= 7 && pH >= 0) {
    console.log('acid');
  } else if (pH <= 14 && pH >= 7) {
    console.log('base');
  } else {
    return notValid;
  }
}

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      console.log("We're the warner brothers!");
      break;
    case 'dot':
      console.log("I'm cute~");
      break;
    default:
      console.log('Goodnight everybody!');
  }
}

function recommendMovie(genre) {
  const blankChar = '';
  switch (genre) {
    case 'action':
      console.log('John Wick');
      break;
    case 'comedy':
      console.log('Super Bad');
      break;
    case 'horror':
      console.log('Insidious');
      break;
    case 'drama':
      console.log('Notebook');
      break;
    case 'musical':
      console.log('Sounds of Music');
      break;
    case 'sci-fi':
      console.log('Star Trek');
      break;
    default:
      return blankChar;
  }
}
