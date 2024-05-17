import chalk from "chalk";
class Person {
  protected Name: string;
  protected f_name: string;
  protected age: number;

  constructor() {
    this.Name = "";
    this.f_name = "";
    this.age = 0;
  }
}

class Student extends Person {
  private studentID: string;
  private courses: string[];
  private balance: number;

  constructor(name: string) {
    super();
    this.Name = name;
    this.f_name = "";
    this.age = 0;
    this.courses = [];
    this.balance = 0;
    this.studentID = this.genrateStudentId();
  }

  private genrateStudentId(): string {
    return Math.floor(10000 + Math.random() * 90000).toString();
  }
  public setFatherName(name: string) {
    this.f_name = name;
  }

  public setAge(age: number) {
    this.age = age;
  }

  public enroll(course: string): void {
    this.courses.push(course);
    console.log(
      chalk.bgCyan.black(
        `${this.Name} ${this.f_name} is now enrolled in ${course}.`
      )
    );
  }

  public viewBalance(): void {
    console.log(
      chalk.bgCyan.black(
        `${this.Name} ${this.f_name} balance is ${this.balance}`
      )
    );
  }

  public payTutitionFees(fees: number): void {
    console.log(
      chalk.bgCyan.black(
        `${this.Name} ${this.f_name} fee successfuly paid $${fees}. `
      )
    );
  }

  public ShowStutas(): void {
    console.log(chalk.magenta(`Name : ${this.Name}`));
    console.log(chalk.magenta(`f.name : ${this.f_name}`));
    console.log(chalk.magenta(`Age : ${this.age}`));
    console.log(chalk.magenta(`ID : ${this.studentID}`));
    console.log(chalk.magenta(`Balance : $${this.balance}`));
    console.log(chalk.magenta(`enrolled course : ${this.courses}`));
  }
  getBalance(): number {
    return this.balance;
  }
  setBalance(amount: number): void {
    this.balance += amount;
    console.log(
      chalk.bgCyan.black(
        `successfully your money has been deposite to your balance. now you can check your balance.`
      )
    );
  }
}
export default Student;
