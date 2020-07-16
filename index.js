//dependencies
const mysql = require('mysql2');
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const promisemysql = require("mysql2/promise");

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Farmgirl123*',
    database: 'EmployeeTracker_db'
  });

connection.connect(err => {
    if (err) throw err;

    //start main fuction 
    console.log('\n Welcome to Employee Tracker \n');
    mainMenu();
});

const choices = ["View all departments.", "View all roles.", "View all employees.", "Add a department.", "Add a role.", "Add an employee.", "Update an employee role."]

//main menu function
function mainMenu(){
    inquirer.prompt
    (
        {
            name: "selection",
            type: "list",
            message: "MAIN MENU",
            choices: choices
        }
    )
    .then(({selection}) => {
        if (selection === choices[0]) {
            viewDepartments();
        }
        else if (selection === choices[1]) {
            viewRoles();
        }
        else if (selection === choices[2]) {
            viewEmployees();
        }
    })
}

//function to view all departments
async function viewDepartments() {
    connection.promise().query('SELECT * FROM department')
        .then( ([rows, fields]) => {
        console.table(rows);
        promptReturn();
    })
}

//function to view all roles
async function viewRoles() {
    connection.promise().query('SELECT role.id, role.title, department.name AS \"department"\, role.salary FROM role INNER JOIN department ON role.department_id=department.id')
        .then( ([rows, fields]) => {
        console.table(rows);
        promptReturn();
    })
}

//function to view all employees
async function viewEmployees() {
    connection.promise().query('SELECT employee.id, employee.first_name, employee.last_name, role.title AS \"job title"\, role.salary, employee.manager_id FROM employee INNER JOIN role ON employee.role_id=role.id')
        .then( ([rows, fields]) => {
        console.table(rows);
        promptReturn();
    })
}

//function to 

//function to return user to the main menu if desired.
const promptReturn = () => {
    inquirer.prompt
    (
        {
            name: "returnMainMenu",
            type: "confirm",
            message: "Would you like to return to the main menu?",
            default: true
        }
    )
    .then(({returnMainMenu}) => {
        if (returnMainMenu === true) {
            mainMenu();
        } else {
            console.log('Thanks for using the Employee Tracker. Goodbye!')
        }
    })
}