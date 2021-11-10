insert into departments (name)
values  ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal"),
        ("Heads");

insert into roles (title,salary,department_id)
values  ("Sales Lead",100000,1),
        ("Salesperson",80000,1),
        ("Lead Engineer",150000,2),
        ("Software Engineer",120000,2),
        ("Account Manager",160000,3),
        ("Accountant",125000,3),
        ("CEO", 300000,5),
        ("CFO", 220000,5),
        ("Legal Team Lead", 200000,4);

insert into employees (first_name,last_name,role_id,manager_id)
values  ("John","Doe",1,null),
        ("Mike","Chan",2,1),
        ("Ashley","Rodriguez",3,2),
        ("Kevin","Tupik",4,2),
        ("Kunal","Singh",5,2),
        ("Malia","Brown",6,2),
        ("Sara","Lourd",7,2),
        ("Tom","Allen",8,2),
        ("Led","Zeppelin",9,2);
        
        
select * from departments;

