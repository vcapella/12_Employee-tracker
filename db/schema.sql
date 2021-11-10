DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

use employee_db;

-- Creating Departments Table
CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
    );
    
-- Creating Roles Table
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
        FOREIGN KEY (department_id)
        REFERENCES departments(id)
        ON DELETE SET NULL
);

-- Create Employee Table
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
        FOREIGN KEY (role_id)
        REFERENCES roles(id)
        ON DELETE SET NULL,
        FOREIGN KEY (manager_id)
        REFERENCES employees(id)
        ON DELETE SET NULL    
);