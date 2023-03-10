const table = document.querySelector(".table");
var count=1;
const url ="http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students";

function getDetails(){
    fetch(url).then(response=>{
        return response.json();
    }).then(data=>{
        data.forEach(student => {
            const row = document.createElement("tr");
            const Srno = document.createElement("td");
            const nameTd = document.createElement("td");
            const rollNoTd = document.createElement("td");
            const emailTd = document.createElement("td");
            const age = document.createElement("td");
      
            Srno.textContent = count++;
            rollNoTd.textContent = student.rollNo;
            nameTd.textContent = student.name;
            emailTd.textContent = student.email;
            age.textContent = student.age;
      
            row.appendChild(Srno);
            row.appendChild(rollNoTd);
            row.appendChild(nameTd);
            row.appendChild(age);
            row.appendChild(emailTd);
    
            table.appendChild(row);
    
          });
        }).catch(function(error) {
          console.log(error);
        });
}
getDetails();
    // <Age>12</Age>
    // <Date i:nil="true"/>
    // <Email>test@gmail.com</Email>
    // <Id>60545ee0-d128-4daf-ba0e-a4c5b7c15a63</Id>
    // <Name>test01</Name>
    // <RollNo>0</RollNo>
    // <isMale>false</isMale>

const student = {
    rollNo: "1234",
    name: "John Doe",
    age: "30",
    email: "johndoe@example.com"
  };
  
  // // send the API call
  fetch("http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students", {
    method: "POST",
    body: JSON.stringify(student),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin":'*'
    }
  }).then(response => {
      if (response.ok) {
        console.log("Student data sent successfully!");
      } else {
        console.error("Error sending student data: ", response.statusText);
      }
    })
    .catch(error => {
      console.error("Error sending student data: ", error);
    });