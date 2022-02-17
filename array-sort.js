const numbers = [2, 4, 6, 8, 1, 3, 9, 7, 5];
const sortedNumbers = numbers.sort();
console.log(sortedNumbers);

const friends = ["tanver", "rana", "sobur", "mashrafee", "smith", "david"];
console.log(friends);
//reverse
const reversed = friends.reverse();
console.log(reversed);
//sorted
const sortedFriends = friends.sort();
console.log(sortedFriends);

//Mega Number sorting fun
const bigNumbers = [45, 56, 23, 89, 97, 14, 44, 122, 12]
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumbers);