// Given two strings, write a function to determine if the second string is an anagram of the first

function validAnagram(string1, string2){
  if (string1.length !== string2.length) {
      console.log('false');
  }
  const sortedString1 = string1.split('').sort().join('');
  const sortedString2 = string2.split('').sort().join('');
  let anagram1 = {}
  let anagram2 = {}
  for (let value of sortedString1) {
      anagram1[value] = (anagram1[value] || 0) + 1
  }
  for (let value of sortedString2) {
      anagram2[value] = (anagram2[value] || 0) + 1
  }
  console.log(anagram1, anagram2)
  console.log(JSON.stringify(anagram1) === JSON.stringify(anagram2))
}

validAnagram('rraacce', 'racecag');
validAnagram('rraacce', 'racecare');
validAnagram('rraacce', 'racecar');