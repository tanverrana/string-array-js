function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return "Please provide an arrray of strings."
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ["tanver", "rana", "shakib", "sobur", "tammim", "Mash"];
const myBigBuddy = megaFriend(friends);
console.log(myBigBuddy);

if (friends.indexOf("tanver") != -1) {
    console.log("tanver exists");
}
if (friends.includes("tammim")) {
    console.log("tammim exits by includes");
}

//Concat
const first = [1, 3, 5];
const second = [4, 6, 8, 9];
const combained = first.concat(second);
console.log(combained);