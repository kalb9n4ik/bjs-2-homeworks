function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if ("marks" in this) {
  	this.marks.push(...marks)
  }
}

Student.prototype.getAverage = function () {
  if ("marks" in this && this.marks.length > 0) {
  	const sum = this.marks.reduce((acc, number) => acc + number, 0);
    const length = this.marks.length;
  	return sum / length;
  	
  } else {
  	return 0
  }
}

Student.prototype.exclude = function (reason) {
  console.log(this);
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
  console.log(this.subject);
}
