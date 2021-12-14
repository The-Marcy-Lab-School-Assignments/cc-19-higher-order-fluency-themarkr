//write your code here
const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:22}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:21}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:21},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:21}];

const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin']

const averageAge = (array) => {
    const totalAge = array.reduce((total, person) => total + person.age, 0);
    return Math.floor(totalAge / array.length);
};

console.log(averageAge(alumni));

const bananaBread = array => {
    return array.map(alum => {
        return {...alum, bananaBread: `${alum.name} got banana bread at ${alum.job}` };
    });
};

console.log(bananaBread(alumni));

const ninetiesBabies = array => {
    return array.filter(person => person.age > 21);
};

console.log(ninetiesBabies(alumni));

const addSChool = array => {
    return array.map(person => {
        return{...person, school:'The Marcy Lab School'};
    });
};

console.log(addSChool(alumni));

const allUseJavaScript = array => {
    return array.every(person => person.language === 'JavaScript');
};

console.log(allUseJavaScript(alumni));

const noVowel = array => {
    const regex = /[aeiou]/gi;

    return array.map(animal => animal.replace(regex,'x'));
};

console.log(noVowel(animals));

const onlyVowelA = array => {
    
    return array.filter(animal => animal.includes('a'));
};

console.log(onlyVowelA(animals));

const longerThanSeven = array => {
    const longWords = array.filter(animal => animal.length > 7);
    return longWords.length > 0 ? true : false;
};

console.log(longerThanSeven(animals));