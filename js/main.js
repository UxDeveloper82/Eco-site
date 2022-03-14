function reverseString(str) {
    // const strArr = str.split('');
    // strArr.reverse();
    // console.log(strArr);
    // return strArr.join('');

    // return str.split('').reverse().join('');

    // let revString = '';
    // for(let i = str.length -1; i >= 0 ; i--) {
    //     revString = revString + str[i];
    // }
    // return revString;

    //  let revString = '';
    // for(let i = 0; i <= str.length -1 ; i++) {
    //     revString = str[i] + revString;
    // }
    // return revString;

    //   let revString = '';
    // for(let char of str) {
    //     revString = char + revString;
    // }
    // return revString;
   
    //let revString = '';

}

function isPalindrome(str) {
    const revString = str.split('').reverse().join('');

    return revString === str;
}













const output = reverseString('Hello');

console.log(output);