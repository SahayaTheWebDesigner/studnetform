// Get references to form and table
const form = document.getElementById('userForm');
const dataTable = document.getElementById('dataTable').querySelector('tbody');

// Handle form submission
document.getElementById("save_btn").addEventListener("click", function() {

  // Get form values
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var course = document.getElementById('course').value;
  var email = document.getElementById('email').value;
  var deleteButton = document.createElement("button")

  if (!name || !age || !gender || !course || !email) {
    alert("Please fill out all fields.");
    return;
}

// Create a new row in the display table
var table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
var newRow = table.insertRow(table.rows.length); // Adds a row at the end

// Insert new cells into the row
var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var cell3 = newRow.insertCell(2);
var cell4 = newRow.insertCell(3);
var cell5 = newRow.insertCell(4);
var cell6 = newRow.insertCell(5);


// Set the text content of the new cells
cell1.textContent = name;
cell2.textContent = age;
cell3.textContent = gender;
cell4.textContent = course;
cell5.textContent = email;
var deleteBtn=document.createElement("button");
deleteBtn.textContent="Delete";
deleteBtn.onclick=function()
{
    table.deleteRow(newRow.rowIndex - 1);
};
cell6.appendChild(deleteBtn);


// Optionally clear the form after saving
document.getElementById("form").reset();
});