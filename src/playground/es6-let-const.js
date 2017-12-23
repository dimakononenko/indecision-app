// var names = ['Dima', 'Lena', 'Mark'];
// var yob = [1994, 1974, 2010];

// console.log(names[2]);
// console.log(names);

// var Dima = ['Dima', 'Kononenko', 1994, 'Software Engenier']

// Dima.push(true);
// Dima.unshift('Mr.')
// console.log(Dima)

// var denis = 'Dima Kononenko 1994';

const getFirstName = (fullname) => {
    return fullname.split(' ')[0];
}
console.log(getFirstName('Dima Kononenko'));

//========================================================

const getFirstName2 = (fullname) => fullname.split(' ')[0]
console.log(getFirstName2('Miss Ukraine'));