let arrOfStrings = ["cook", "save", "taste", "aves", "vase", "state", "map"];

function splitStrToArr(str) {
  let output = [];

  for (let i = 0; i < str.length; i++) {
    output.push(str[i]);
  }

  return output;
};

function joinArrToStr(arr) {
  let output = "";

  for (let i = 0; i < arr.length; i++) {
    output = output + arr[i]
  }

  return output;
}

function sortLetter(str) {
  let splittedStr = splitStrToArr(str);

  for (let i = 0; i < splittedStr.length; i++) {
    for (let j = 0; j < splittedStr.length - i - 1; j++) {
      if (splittedStr[j] > splittedStr[j + 1]) {
        const temp = splittedStr[j];
        splittedStr[j] = splittedStr[j + 1];
        splittedStr[j + 1] = temp;
      }
    }
  }

  return joinArrToStr(splittedStr);
};

function groupAnagram(arr) {
  // {
  //   ckoo: [ 'cook' ],
  //   aesv: [ 'save', 'aves', 'vase' ],
  //   aestt: [ 'taste', 'state' ],
  //   amp: [ 'map' ]
  // }
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    if (!map.hasOwnProperty(sortLetter(arr[i]))) {
      map[sortLetter(arr[i])] = [arr[i]];
    } else {
      map[sortLetter(arr[i])].push(arr[i]);
    }
  }

  return map;
}

function mapAnagram(arr) {
  // [
  //   [ 'cook' ],
  //   [ 'save', 'aves', 'vase' ],
  //   [ 'taste', 'state' ],
  //   [ 'map' ]
  // ]
  let output = [];
  let objOfGroupAnagram = groupAnagram(arr);

  for (const key in objOfGroupAnagram) {
    let subOutput = [];
    for (let i = 0; i < objOfGroupAnagram[key].length; i++) {
      subOutput.push(objOfGroupAnagram[key][i]); 
    }
    output.push(subOutput);
  }

  return output;
}

console.log(mapAnagram(arrOfStrings));


SELECT students.id, students.name, parents.parent_name 
FROM students 
INNER JOIN parents 
ON students.parent_id = parents.id;