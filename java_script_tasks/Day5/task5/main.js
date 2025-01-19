let studentID = 1;


function addStudent() {
    var namestudent = document.getElementById("name");
    var agestudent = document.getElementById("age");

    var errorname = document.getElementById("errorName");

    var errorage = document.getElementById("errorAge");
    var tablestudent = document.getElementById("studentTable");

    var name = namestudent.value.trim();
    var age = parseInt(agestudent.value);

   
    errorname.textContent = "";
    errorage.textContent = "";

    
    var isValid = true;

    if (!name) {
        errorname.textContent = "-Student Name is required.";
        isValid = false;
    } else if (name.length <= 3) {
        errorname.textContent = "-Name of student length must be greater than 3.";
        isValid = false;
    }

    if (!age) {
        errorage.textContent = "-Sorry Age is required.";
        isValid = false;
    } else if (age <= 18) {
        errorage.textContent = "Student age must be greater than 18.";
        isValid = false;
    }

    if (!isValid) return;

    
    var row = document.createElement("tr");
    row.innerHTML = `
        <td>${studentID}</td>
        <td>${name}</td>
        <td>${age}</td>
        <td><span class="delete" onclick="deleteStudent(this)">Delete Student</span></td>
    `;
    tablestudent.appendChild(row);

    
    nameInput.value = "";
    ageInput.value = "";

    
    studentID++;
}

function deleteStudent(deleteButton) {
    var row = deleteButton.parentElement.parentElement;
    row.remove();
}
