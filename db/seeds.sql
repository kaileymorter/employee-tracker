INSERT INTO departments (name)
VALUES
('Marketing'),
('Human Resources'),
('Operations'),
('Sales'),
('Finance');

INSERT INTO roles (title, salary, department_id)
VALUES
('Manager', 75, 1),
('Employee', 50, 2),
('Director', 80, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Kailey', 'Morter', 1, 1),
('Chelsie', 'Guardado', 2, 2),
('John', 'Smith', 3, 3);