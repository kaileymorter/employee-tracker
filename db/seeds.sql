USE EmployeeTracker_db;

INSERT INTO department (name)
VALUES ("Sales"), ("Marketing"), ("Finance"),('Human Resources');

INSERT INTO role (title, salary, department_id)
VALUES
("VP Sales", 100000, 1),
("Salesperson", 80000, 1),
("Marketing Director", 150000, 2), 
("Designer", 120000, 2),
("Accountant", 125000, 3),
('VP Human Resources', 190000, 4), 
('Human Resource Generalist', 65000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Kailey", "Morter", 1, null), 
("John", "Smith", 3, null),
("Mary", "Jane", 4, 2),
("Chris", "Hall", 6, null),
("Kenzie", "Rollins", 2, 1),
("Taylor", "Smith", 2, 1);