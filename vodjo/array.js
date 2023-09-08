const arrayA = ['Alice', 'Bob', 'Charlie', 'David'];
const arrayB = ['Charlie', 'Eve', 'Frank'];
const mergedArray = arrayA.concat(arrayB);

const resultArray = [];

mergedArray.forEach((element) => {
  if (!resultArray.includes(element)) {
    resultArray.push(element);
  }
});

console.log(resultArray.sort());
