const anthem = "Amar Sonar Bangla Ami Tomai Valobashi";
const words = anthem.split(" ");
const withoutA = anthem.split("a");
console.log(withoutA);

//using slice() for a part of word
const smallSlice = anthem.slice(5, 13);
console.log(smallSlice);

//subStar
const anotherPart = anthem.substr(11, 6);
console.log(anotherPart);

//substring
const anotheAnotherPart = anthem.substring(11, 16);
console.log(anotheAnotherPart);

//concat
const first = "Amader";
const second = "City";
//const fullString = first + second;
const fullString = first.concat(second).concat("different Concat");
console.log(fullString);

//join
const words2 = ["a", "b", "c", "d"];
const allJoined = words2.join("");
const allJoined2 = words2.join(",");
console.log(allJoined);
console.log(allJoined2);