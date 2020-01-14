//Javascript freeCodeCamp: Basic Data Structures

// Basic Data Structures: Use an Array to Store a Collection of Data
let yourArray = ['one', 2, 3, true, false, 'four'];

// (0) Basic Data Structures: Access an Array's Contents Using Bracket Notation
myArray[1] = "poop"; // you can put anything in the string and it works.

// (1) Basic Data Structures: Add Items to an Array with push() and unshift()
arr.push(7, "VIII", 9);
arr.unshift('I', 2, 'three');

// (2) Basic Data Structures: Remove Items from an Array with pop() and shift()
let popped = arr.pop();
let shifted = arr.shifted();

// (3) Basic Data Structures: Remove Items Using splice()
arr.splice(1, 4);

// (4) Basic Data Structures: Add Items Using splice()
arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");

// (5) Basic Data Structures: Copy Array Items Using slice()
return arr.slice(2, 4);

// (6) Basic Data Structures: Copy an Array with the Spread Operator
newArr.push([...arr]);

// (7) Basic Data Structures: Combine Arrays with the Spread Operator
let sentence = ['learning', ...fragment, 'is', 'fun'];

// (8) Basic Data Structures: Check For The Presence of an Element With indexOf()
if (arr.indexOf(elem) >= 0) {
    return true;
} else {
    return false;
}

// (9) Basic Data Structures: Iterate Through All an Array's Items Using For Loops
for (let i = 0; i<arr.length; i++) {
    if (arr[i].indexOf(elem) < 0) {
        newArr.push(arr[i]);
    }
}

// (10) Basic Data Structures: Create complex multi-dimensional arrays
['unshift', ['deep', ['deeper', ['deepest']]], false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array'],
    ['mutate', 1327.98, 'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']


// (11)
foods['bananas'] = 13;
foods['grapes'] = 35;
foods['strawberries'] = 27;

// (12) Basic Data Structures: Modify an Object Nested Within an Object
userActivity.data.online = 45;

// (13) Basic Data Structures: Access Property Names with Bracket Notation
return foods[scannedItem];

// (14)
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

// (15)
return [
    'Alan',
    'Jeff',
    'Sarah',
    'Ryan'
].every(i => obj.hasOwnProperty(i));

// (16)
let online = 0;
for (let user in usersObj) {
    if (usersObj[user].online) {
        online++;
    }
}
return online;

// (17)
return Object.keys(obj);

// (18)
userObj.data.friends.push(friend);
return userObj.data.friends;

