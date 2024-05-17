import chalk from "chalk";
class Person {
    Name;
    f_name;
    age;
    constructor() {
        this.Name = "";
        this.f_name = "";
        this.age = 0;
    }
}
class Student extends Person {
    studentID;
    courses;
    balance;
    constructor(name) {
        super();
        this.Name = name;
        this.f_name = "";
        this.age = 0;
        this.courses = [];
        this.balance = 0;
        this.studentID = this.genrateStudentId();
    }
    genrateStudentId() {
        return Math.floor(10000 + Math.random() * 90000).toString();
    }
    setFatherName(name) {
        this.f_name = name;
    }
    setAge(age) {
        this.age = age;
    }
    enroll(course) {
        this.courses.push(course);
        console.log(chalk.bgCyan.black(`${this.Name} ${this.f_name} is now enrolled in ${course}.`));
    }
    viewBalance() {
        console.log(chalk.bgCyan.black(`${this.Name} ${this.f_name} balance is ${this.balance}`));
    }
    payTutitionFees(fees) {
        console.log(chalk.bgCyan.black(`${this.Name} ${this.f_name} fee successfuly paid $${fees}. `));
    }
    ShowStutas() {
        console.log(chalk.magenta(`Name : ${this.Name}`));
        console.log(chalk.magenta(`f.name : ${this.f_name}`));
        console.log(chalk.magenta(`Age : ${this.age}`));
        console.log(chalk.magenta(`ID : ${this.studentID}`));
        console.log(chalk.magenta(`Balance : $${this.balance}`));
        console.log(chalk.magenta(`enrolled course : ${this.courses}`));
    }
    getBalance() {
        return this.balance;
    }
    setBalance(amount) {
        this.balance += amount;
        console.log(chalk.bgCyan.black(`successfully your money has been deposite to your balance. now you can check your balance.`));
    }
}
export default Student;
