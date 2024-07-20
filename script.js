/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    let developers = arr.filter(employee => employee.profession === "developer");

    let formattedDevelopers = developers.map(employee => {
        return `ID: ${employee.id}, Name: ${employee.name}, Age: ${employee.age}, Profession: ${employee.profession}`;
    });
    console.log(developers);

}

function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(employee => {
        if (employee.profession === "developer") {
          console.log(employee); // Logging the employee object
        }
      });

}

function addData() {
    //Write your code here, just console.log
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log(arr);

}

function removeAdmin() {
    //Write your code here, just console.log
    arr = arr.filter(item => item.profession !== 'admin');
    
    console.log(arr);
}

function concatenateArray() {
    //Write your code here, just console.log
    let newArr = [
        { id: 4, name: "deb", age: "22", profession: "designer" },
        { id: 5, name: "argha", age: "23", profession: "manager" },
        { id: 6, name: "debargha", age: "21", profession: "engineer" }
    ];

    // Concatenate the two arrays
    let concatenatedArray = arr.concat(newArr);

    // Log the concatenated array to the console
    console.log(concatenatedArray);
}