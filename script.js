function applyUniversity(){

let university = document.getElementById("uniName").value;
let country = document.getElementById("country").value;

let applications = JSON.parse(localStorage.getItem("applications")) || [];

applications.push({
university: university,
country: country,
status: "Submitted"
});

localStorage.setItem("applications", JSON.stringify(applications));

alert("Application Submitted Successfully");

loadApplications();

}

function loadApplications(){

let table = document.getElementById("applicationsTable");

if(!table) return;

let applications = JSON.parse(localStorage.getItem("applications")) || [];

table.innerHTML = `
<tr>
<th>University</th>
<th>Country</th>
<th>Status</th>
</tr>
`;

applications.forEach(app => {

let row = document.createElement("tr");

row.innerHTML =
"<td>" + app.university + "</td>" +
"<td>" + app.country + "</td>" +
"<td>" + app.status + "</td>";

table.appendChild(row);

});

}

function loadConsultantDashboard(){

let table = document.getElementById("consultantTable");

if(!table) return;

let applications = JSON.parse(localStorage.getItem("applications")) || [];

table.innerHTML = `
<tr>
<th>Student</th>
<th>Email</th>
<th>University</th>
<th>Status</th>
<th>Action</th>
</tr>
`;

applications.forEach((app,index) => {

let row = document.createElement("tr");

row.innerHTML =
"<td>Student</td>" +
"<td>student@email.com</td>" +
"<td>" + app.university + "</td>" +
"<td>" + app.status + "</td>" +
"<td>" +
"<button onclick='approveApplication("+index+")' style='background:green;color:white;border:none;padding:5px 10px;margin-right:5px;'>Approve</button>" +
"<button onclick='rejectApplication("+index+")' style='background:red;color:white;border:none;padding:5px 10px;'>Reject</button>" +
"</td>";

table.appendChild(row);

});

}

function approveApplication(index){

let applications = JSON.parse(localStorage.getItem("applications")) || [];

applications[index].status = "Approved";

localStorage.setItem("applications", JSON.stringify(applications));

alert("Application Approved");

location.reload();

}



function rejectApplication(index){

let applications = JSON.parse(localStorage.getItem("applications")) || [];

applications[index].status = "Rejected";

localStorage.setItem("applications", JSON.stringify(applications));

alert("Application Rejected");

location.reload();

}

function showSection(section){

let dashboard = document.getElementById("dashboardSection");
let apply = document.getElementById("applySection");
let applications = document.getElementById("applicationsSection");

if(dashboard) dashboard.style.display = "none";
if(apply) apply.style.display = "none";
if(applications) applications.style.display = "none";

if(section === "dashboard" && dashboard){
dashboard.style.display = "block";
}

if(section === "apply" && apply){
apply.style.display = "block";
}

if(section === "applications" && applications){
applications.style.display = "block";
}

}



function logout(){

alert("Logout Successful");

window.location.href = "login.html";

}
