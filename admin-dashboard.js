document.addEventListener("DOMContentLoaded", function() {
    const doctorSignupBtn = document.getElementById("doctor-signup-btn");
    const hospitalSignupBtn = document.getElementById("hospital-signup-btn");

    doctorSignupBtn.addEventListener("click", function() {
        // Redirect to doctor signup page or perform related action
        window.location.href = 'doc_signup.html';
    });

    hospitalSignupBtn.addEventListener("click", function() {
        // Redirect to hospital signup page or perform related action
        window.location.href = 'hosp_signup.html';
    });
});
