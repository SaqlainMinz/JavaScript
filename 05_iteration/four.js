// for in

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObject) {
    console.log(`${key} : ${myObject[key]}`);

}

const myArr = ['js', 'cpp', 'rb', 'swift'];

for (const key in myArr) {
    console.log(key, " ", myArr[key]);

}