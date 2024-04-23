// JavaScript code for the front-end logic
document.addEventListener("DOMContentLoaded", function () {
    const registerPatientBtn = document.getElementById("register-patient-btn");
    const patientList = document.getElementById("patient-list");

    // Simulated data for registered patients
    const registeredPatients = [
        { name: "Patient 1", age: 30, condition: "Fever" },
        { name: "Patient 2", age: 45, condition: "Injury" }
    ];

    // Function to display registered patients
    function displayRegisteredPatients() {
        patientList.innerHTML = "";
        registeredPatients.forEach(patient => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>Name:</strong> ${patient.name}, <strong>Age:</strong> ${patient.age}, <strong>Condition:</strong> ${patient.condition}`;
            patientList.appendChild(listItem);
        });
    }

    // Event listener for the "Register a Patient" button
    registerPatientBtn.addEventListener("click", function () {
        window.location.href = "patient.html";
    });

    // Display initial list of registered patients
    displayRegisteredPatients();
});
