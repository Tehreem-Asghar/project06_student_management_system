#! /usr/bin/env node
import Student from "./student.js";
import inquirer from "inquirer";
import chalk from "chalk";

async function main() {
  console.log(
    chalk.bgMagenta(`*******************************************
        Student Management System          
*******************************************`)
  );

  let confirmedAdd;
  do {
    // Ask if the user wants to add a new student
    confirmedAdd = await inquirer.prompt({
      message: chalk.blue("Do you want to add new student?"),
      type: "confirm",
      name: "addstudent",
    });

    if (confirmedAdd.addstudent) {
      // Collect student details
      let studentName = await inquirer.prompt({
        name: "name",
        message: chalk.green("Enter Student Name."),
        type: "input",
      });
      // Instantiate Student object
      let student = new Student(studentName.name);
      let fatherName = await inquirer.prompt({
        message: chalk.magenta("Please Enter Student's Father Name."),
        type: "input",
        name: "f_name",
      });
      student.setFatherName(fatherName.f_name); // Assuming setFatherName method exists in Student class

      let age = await inquirer.prompt({
        message: chalk.cyan("Enter student age."),
        type: "number",
        name: "stuAge",
      });
      student.setAge(age.stuAge); // Assuming setAge method exists in Student class
      let course = await inquirer.prompt({
        message: chalk.red(
          "please select a course in which you want to enroll"
        ),
        type: "list",
        name: "selected",
        choices: [
          "Html, fee : 2000",
          "CSS, fee : 3000",
          "JavaScript, fee : 4000",
          "TypeScript,  fee : 5000",
        ],
      });
      student.enroll(course.selected); // Enroll student in selected course

      let payment = await inquirer.prompt({
        message: chalk.blue(" please pay the course fees"),
        type: "number",
        name: "pay",
      });
      student.payTutitionFees(payment.pay); // Assuming payTuitionFees method exists in Student class
      let performAgain;
      do {
        // Operations to perform on student
        let perform = await inquirer.prompt({
          message: chalk.green("What do you want to perform: select please"),
          type: "list",
          name: "Operation",
          choices: [
            "Set Balance",
            "View Balance",
            "Pay Tution Fee",
            "Enroll",
            "Check Stutas",
          ],
        });
        switch (perform.Operation) {
          case "Check Stutas":
            student.ShowStutas();
            break;
          case "Set Balance":
            let amount = await inquirer.prompt({
              message: chalk.magenta("please enter amount:"),
              type: "number",
              name: "balancAcount",
            });
            student.setBalance(amount.balancAcount);
            break;
          case "Pay Tution Fee":
            student.payTutitionFees(payment.pay);
            break;
          case "Enroll":
            student.enroll(course.selected);
            break;
          case "View Balance":
            student.viewBalance();
            break;
          default:
            break;
        }
        // Ask if the user wants to perform another operation
        performAgain = await inquirer.prompt({
          message: chalk.cyan("Do you want to perform another operation?"),
          type: "confirm",
          name: "againRun",
        });
      } while (performAgain.againRun);
    }
  } while (confirmedAdd.addstudent);

  console.log(chalk.bgBlue.white("Exite"));
}

main();
