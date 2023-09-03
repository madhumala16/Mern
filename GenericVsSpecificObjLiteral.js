function createStudent(rollNo, name, age, phyMarks, chemMarks, mathMarks) {
    var student = {};
    student.rollNo = rollNo;
    student.name = name;
    student.age = age;
    student.phyMarks = phyMarks;
    student.chemMarks = chemMarks;
    student.mathMarks = mathMarks;
    student.total = function(){
        return this.phyMarks+this.chemMarks+this.mathMarks;
    }
    student.grade = function () {
        let grd ='';
        if((this.total()/3)>=90)grd = 'A';
        else if((this.total()/3)>=80 && (this.total()/3)<90)grd = 'B';
        else grd = 'C';
        return grd;
    }
    return student;
}
var m= createStudent(101, 'Madhu', 21, 90, 95, 91);
console.log(m)
console.log(m.total());
console.log(m.grade());
console.log( m instanceof createStudent);
console.log(m instanceof Object);


