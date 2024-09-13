const course = {
    coursename: "JavaScript",
    price: 999,
    courseInstructor: "Saqlain"
}

//  console.log(course.courseInstructor);

// Object destructure

const { courseInstructor: instroctor } = course;
// console.log(courseInstructor);
console.log(instroctor);
 