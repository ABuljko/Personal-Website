function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.classList.add('no-scroll'); // Disable scrolling on the body
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.classList.remove('no-scroll'); // Enable scrolling on the body
}

document.addEventListener('DOMContentLoaded', () => {
    const navBtn = document.querySelector('#navbar-toggler');
    const navDiv = document.querySelector('.navbar-collapse');

    if (navBtn) {
        navBtn.addEventListener('click', () => {
            navDiv.classList.toggle('showNav');
        });
    }

    // Stopping animation and transition during window resizing
    let resizeTimer;
    window.addEventListener('resize', () => {
        document.body.classList.add('resize-animation-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove('resize-animation-stopper');
        }, 400);
    });

    function validateEmail() {
        const emailField = document.getElementById("email");
        const emailError = document.getElementById("emailError");
        const allowedDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];

        const emailValue = emailField.value.trim();
        const emailDomain = emailValue.split("@")[1];

        if (!emailDomain || !allowedDomains.includes(emailDomain)) {
            emailError.style.display = "block";
            return false; // Prevent form submission
        } else {
            emailError.style.display = "none";
            return true; // Allow form submission
        }
    }

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        let modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => {
            if (event.target === modal) {
                modal.style.display = "none";
                document.body.classList.remove('no-scroll'); // Enable scrolling on the body
            }
        });
    };

    // Adjust modal content dynamically when resizing the screen
    window.addEventListener('resize', () => {
        const modals = document.querySelectorAll('.modal-content');
        modals.forEach(modal => {
            if (window.innerWidth < 768) {
                modal.style.width = '90%'; // Adjust width for smaller screens
                modal.style.margin = '20% auto'; // Adjust margin
            } else {
                modal.style.width = ''; // Reset to default for larger screens
                modal.style.margin = ''; // Reset to default
            }
        });
    });
});



