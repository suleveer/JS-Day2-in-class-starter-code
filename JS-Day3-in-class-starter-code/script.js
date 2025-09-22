const members = [
    {first_name:"John", last_name: "Doe", email:"johndoe@example.com", birthdate:"1999-12-31", salary:80000},
    {first_name:"Jane", last_name: "Smith", email:"janesmith@example.com", birthdate:"2015-09-01", salary:75000}
];



//OLD WAY DEMO - CONSTRUCTOR FUNCTION
// function Employee(firstName, lastName, email, birthdate, salary) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.birthdate = birthdate;
//     this.salary = salary;
//   }

//   Employee.addEmployee = function(firstName, lastName, email, birthdate, salary) {
//     return new Employee(firstName, lastName, email, birthdate, salary);
//   };

//   Employee.prototype.editEmployee = function(updates) {
//     Object.assign(this, updates);
//   };

//   // Usage example:
//   const bill = Employee.addEmployee("Bill", "Doe", "bill@example.com", "1990-01-01", 50000);
//   console.log(bill);

//   bill.editEmployee({ salary: 7777777, email: "xxxxxxx@example.com" });
//   console.log(bill);


//ES6 way - CLASSES - Create a new Employee class that adds a new employee and console logs them
// Goals:
// 1. Create a new Employee class with a constructor for Employee giving them a firstname, lastname, email, and birthdate

class Employee {

  constructor(firstname, lastname, email, birthdate){
  
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.birthdate = birthdate;
  }

  getEmployee(){
    return `First Name: ${this.firstname}; Last Name: ${this.lastname}; Email: ${this.email}; Birthdate: ${this.birthdate}`;
  }

  editEmployee({firstname, lastname, email, birthdate}){
    if (firstname)
      {this.firstname = firstname;}
    if (lastname)
      {this.lastname = lastname;}
    if (email)
      {this.email = email;}
    if (birthdate)
      {this.birthdate = birthdate;}

    Employee.updateTable();
  }

  static employees = []

  static addEmployee(){
    document.getElementById("addEmp")?.addEventListener("submit", function(e){
      e.preventDefault();
      let firstname = document.getElementById("first_name").value;
      let lastname = document.getElementById("last_name").value;
      let email = document.getElementById("email").value;
      let birthdate = document.getElementById("birthdate").value;
      Employee.employees.push(new Employee(firstname, lastname, email, birthdate));
      Employee.updateTable();

      //following used to prove edit method is working properly
      if (Employee.employees.length > 1)
        {Employee.employees[0].editEmployee({firstname: "Proof of edit method functionality"});}
        
      })
    }

  static updateTable(){
    let tableElement = document.getElementById("employeeTable");
      if (tableElement){
        tableElement.innerHTML = "";

        let tr = document.createElement("tr");

        let fname = document.createElement("th");
        fname.textContent = "First Name";
        tr.appendChild(fname);
        
        let lname = document.createElement("th");
        lname.textContent = "Last Name";
        tr.appendChild(lname);

        let emailth = document.createElement("th");
        emailth.textContent = "Email";
        tr.appendChild(emailth);

        let birthdateth = document.createElement("th");
        birthdateth.textContent = "Birthdate"
        tr.appendChild(birthdateth);

        tableElement.appendChild(tr);
        
        for (let emp of Employee.employees){
          let {firstname, lastname, email, birthdate} = emp;

          let tr = document.createElement("tr");

          let fnametd = document.createElement("td");
          fnametd.textContent = firstname;
          tr.appendChild(fnametd);

          let lnametd = document.createElement("td");
          lnametd.textContent = lastname;
          tr.appendChild(lnametd);

          let emailtd = document.createElement("td");
          emailtd.textContent = email;
          tr.appendChild(emailtd);

          let birthdatetd = document.createElement("td");
          birthdatetd.textContent = birthdate;
          tr.appendChild(birthdatetd);

          tableElement.appendChild(tr);
        }
      }
  }
}


// 2. Instantiate (i.e. create a new instance) of an Employee with your info and save it to a const with your first name

const veer = new Employee("Veer", "Sule", "suleveer@gmail.com", "10/30/2004");


// 3. After step 2, console log your const and then try to console.log parts of the object


console.log(veer);
console.log(veer.firstname);
console.log(veer.lastname);
console.log(veer.email);
console.log(veer.birthdate);


// 4. Then create a const array that creates many "new Employee" objects and says to an array.  Console this object as a whole and parts of it

const empArr = [new Employee("Ved", "Sule", "suleved@gmail.com", "08/12/2008"), 
new Employee("John", "Smith", "js@js.com", "01/01/01"), 
new Employee("Jane", "Doe", "janedoe@yahoo.com", "10/20/10")]

console.log(empArr);
console.log(empArr[2].email);
console.log(empArr[0].firstname);
console.log(empArr[1].lastname);
console.log("")


// 5. Add methods to your class to "getEmployees" which just returns all the fields in the object.
//    Also add methods to addEmployee (this will be static) and a method to editEmployee
//    Test your methods using JS

console.log(veer.getEmployee());


console.log(veer.lastname);
veer.editEmployee({lastname:"new last name"});
console.log(veer.lastname);


// 6. Try to get instances of your class object to display in the table.  You can set the innerhtml of the
//    of the table to be empty and then replace it with the looped-through values of your object

Employee.addEmployee();
//USE FORM ON PAGE TO ADD EMPLOYEES TO TABLE


//Try to output 3 instances of your class object into the table

//Use form on site


//Callback challenge

function verifyPayment(total, callback)
{callback(total) ? console.log("resolve"):console.log("reject");}

verifyPayment(3000, x => x<5000);
verifyPayment(6000, x => x<5000);


//Promise challenge


function verifyPaymentPromise(total) 
{return new Promise(function(resolve,reject) {
  if (total < 5000)
    {resolve("Success")}
  else 
    {reject("Failure")}
    })
}


verifyPaymentPromise(3000).then(message => console.log(message), message => console.log(message));
verifyPaymentPromise(6000).then(message => console.log(message), message => console.log(message));


// Async/await 


async function verifyPaymentAsync(total){
  let promise = new Promise(function(resolve,reject) {
    if (total < 5000)
    {resolve("Success")}
    else 
      {reject("Failure")}
  })

  try{
    let message = await promise;
    console.log(message);
  }
  catch(err){
    console.log(err);
  }

}

verifyPaymentAsync(3000);
verifyPaymentAsync(6000);



  
  



