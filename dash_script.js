document.addEventListener('DOMContentLoaded', () => {
  // Function to populate patient list (replace with backend data)
  function populatePatientList() {
    const tbody = document.querySelector('.patient-list tbody');
    // Simulated patient data (replace with actual data)
    const patients = [
      { name: 'Patient 1', age: 35, contact: '9876543210', symptoms: 'Fever', severity: 'Mild' },
      { name: 'Patient 2', age: 45, contact: '1234567890', symptoms: 'Cough', severity: 'Moderate' },
      // Add more patients here
    ];

    patients.forEach(patient => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${patient.name}</td>
        <td>${patient.age}</td>
        <td>${patient.contact}</td>
        <td>${patient.symptoms}</td>
        <td>${patient.severity}</td>
        <td><button class="mark-cured-btn">Mark as Cured</button></td>
      `;
      tbody.appendChild(row);
    });
  }

  // Remove a patient from the list
  function removePatient(row) {
    row.remove();
  }

  // Populate patient list on page load
  populatePatientList();

  // Attach event listeners when the page loads
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('mark-cured-btn')) {
      const row = event.target.closest('tr');
      removePatient(row);
    }
  });
});
