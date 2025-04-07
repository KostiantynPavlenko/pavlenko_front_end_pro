function Student(firstName, lastName, bornYear, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.bornYear = bornYear;
  this.grades = grades;
  this.attendance = new Array(25).fill(null);
}

Student.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

Student.prototype.averageGrade = function() {
  return this.grades.reduce((acc, grade) => acc += grade, 0) / this.grades.length;
}

Student.prototype.present = function() {
  const indexOfEmptyCol = this.attendance.indexOf(null);

  if (indexOfEmptyCol !== -1) {
    this.attendance[indexOfEmptyCol] = true;
  }
}

Student.prototype.absent = function() {
  const indexOfEmptyCol = this.attendance.indexOf(null);

  if (indexOfEmptyCol !== -1) {
    this.attendance[indexOfEmptyCol] = false;
  }
}

Student.prototype.summary = function() {
  const sumAttendance = this.attendance.reduce((acc, visit) => {
    if (visit) {
      acc++;
    }

    return acc;
  });
  const averageAttendance = sumAttendance / this.attendance.length;
  const averageScore = this.averageGrade();

  if (averageScore > 90 && averageAttendance > 0.9){
    return 'Молодець!'
  } else if (averageScore < 90 && averageAttendance < 0.9) {
    return 'Редиска!';
  } else {
    return 'Добре, але можна краще';
  }
}

const kostya = new Student('Kostiantyn', 'Pavlenko', 2001, [92, 95, 90, 100, 83]);
const anna = new Student('Anna', 'Kovalchuk', 2002, [98, 92, 85, 91, 87]);
const denys = new Student('Denys', 'Yevchenko', 2000, [100, 100, 70, 65, 82]);

for (let i = 0; i < 25; i++) {
  kostya.present();
}


for (let i = 0; i < 5; i++) {
  anna.absent()
}
for (let i = 0; i < 20; i++) {
  anna.present()
}

for (let i = 0; i < 10; i++) {
  anna.present()
}
for (let i = 0; i < 15; i++) {
  anna.absent()
}

console.log(kostya.fullName());
console.log('Середній бал:', kostya.averageGrade());
console.log('Підсумок:', kostya.summary());

console.log(anna.fullName());
console.log('Середній бал:', anna.averageGrade());
console.log('Підсумок:', anna.summary());

console.log(denys.fullName());
console.log('Середній бал:', denys.averageGrade());
console.log('Підсумок:', denys.summary());