function Student(rollNo, name, age, phyMarks, chemMarks, mathMarks) {
    this.rollNo = rollNo;
    this.name = name;
    this.age = age;
    this.phyMarks = phyMarks;
    this.chemMarks = chemMarks;
    this.mathMarks = mathMarks;
}
Student.prototype.total = function(){
    return this.phyMarks+this.chemMarks+this.mathMarks;
}
Student.prototype.grade = function () {
    let grd;
    if(this.total()>90)grd = 'A';
    else if(this.total()>80)grd = 'B';
    else grd = 'C';
    return grd;
}

var m = new Student(101, 'MM', 21, 90, 95, 91);
console.log(m)
console.log(m.total());
console.log(m.grade());
console.log(m.__proto__.total.call(m));
console.log(m.__proto__.grade.call(m));
console.log(m instanceof Student);
console.log(m instanceof Object);

