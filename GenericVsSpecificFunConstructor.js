function Student(rollNo, name, age, phyMarks, chemMarks, mathMarks) {
    this.rollNo = rollNo;
    this.name = name;
    this.age = age;
    this.phyMarks = phyMarks;
    this.chemMarks = chemMarks;
    this.mathMarks = mathMarks;
    this.total = function(){
        return this.phyMarks+this.chemMarks+this.mathMarks;
    }
    this.grade = function () {
        let grd;
        if(this.total()>90)grd = 'A';
        else if(this.total()>80)grd = 'B';
        else grd = 'C';
        return grd;
    }
}

var m = new Student(101, 'Madhu', 21, 90, 95, 91);
console.log(m)
console.log(m.total());
console.log(m.grade());
console.log("m instanceof Student : ",m instanceof Student);
console.log("m instanceof Object : ", m instanceof Object);

var v = new Student(101, 'varsha', 23, 76, 93, 85);
console.log(v)
console.log(v.total());
console.log(v.grade());
console.log("v instanceof Student : ", v instanceof Student);
console.log("v instanceof Object : ", v instanceof Object);


