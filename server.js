const express = require("express");
const inquirer = require("inquirer");
const { db } = require("./config/connection");

const PORT = process.env.PORT || 3000;

const options = [
  {
    type: "list",
    message: "Choose an option",
    name: "optionsMenu",
    choices: [
      "View All Departments",
      "View All Roles",
      "View All Employees",
      "Add a Department",
      "Add a Role",
      "Add an Employee",
      "Update An Employee Role",
      "Exit Team Tracker",
    ],
  },
];

const departmentQuestions = [
  {
    type: "input",
    name: "addDept",
    message: "What department do you want to add?",
    validate: (addDept) => {
      if (addDept) {
        console.log("\n");
        return true;
      } else {
        console.log("Please enter a department");
        return false;
      }
    },
  },
];
const main = () => {
  inquirer.prompt(options).then(async (answer) => {
    const navigate = answer.optionsMenu;
    switch (navigate) {
      case "View All Departments":
        const viewDepartments = await viewDepart();
        console.log("test");
        console.table(viewDepartments[0]);
        main();
        break;
      case "View All Roles":
        const viewRoles = await viewRole();
        console.table(viewRoles[0]);
        main();
        break;
      case "View All Employees":
        const viewEmployees = await viewEmploy();
        console.table(viewEmployees[0]);
        main();
        break;
      case "Add a Department":
        const addDepartment = await addDepart();
        const viewDepartments2 = await viewDepart();
        console.log("\n");
        console.table(viewDepartments2[0]);
        main();
        break;
      case "Add a Role":
        const addRole = await addRole();
        const viewRoles2 = await viewRoles();
        console.table(viewRoles2[0]);
        main();
        break;
      case "Add an Employee":
        const addEmployee = await AddEmploy();
        const viewEmployees2 = await viewEmploy();
        console.table(viewEmployees2[0]);
        main();
        break;
      case "Update An Employee Role":
        const updateRole = await updateRole();
        console.table(updateRole[0]);
        main();
        break;

      default:
        console.log("HERE IT IS");
        process.exit();
    }
  });
};

function viewDepart() {
  let query = "select distinct name from employee_db.departments";
  return db.promise().query(query);
}
function addDepart() {
  inquirer.prompt(departmentQuestions).then((answer) => {
    const query = "insert into employee_db.departments(name) values(?)";
    return db.promise().query(query, [answer.addDept]);
  });
}

function updateDepart(updateDepartment) {
  let query = "update employee_db.departments set name=?";
  return db.promise().query(query, [newDepartment]);
}

function viewRole() {
  let query = "select distinct title from employee_db.roles";
  return db.promise().query(query);
}
function viewEmploy() {
  let query = `select first_name, last_name, title, salary, name AS department_name
    from employee_db.employees
    join roles 
    on role_id = roles.id
    join departments
    on department_id = departments.id`;
  return db.promise().query(query);

  return db.promise().query(query);
}

function addDept() {
  console.log("\x1b[32m", "add dept working √");
  return inquirer
    .prompt([
      {
        type: "input",
        name: "newDept",
        message: "What is the name of the new department?",
      },
    ])
    .then((answer) => {
      const sql = `
                  insert into departments (name)
                  values ("${answer.newDept}")`;
      db.promise().query(sql);
    });
  // process.exit();
}

main();
