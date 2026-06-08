// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Core script to initialize global handlers
    console.log('FinFunds core script loaded securely.');

    // Enquiry Form Submission Handler (Web3Forms API)
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent page reload
            
            const button = enquiryForm.querySelector('button[type="submit"]');
            const originalText = button.innerHTML;
            button.innerHTML = "Sending...";
            button.disabled = true;
            
            const formData = new FormData(enquiryForm);
            
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status === 200) {
                    alert("Thank you! Your enquiry has been sent successfully.");
                    enquiryForm.reset();
                } else {
                    console.error(response);
                    alert("Something went wrong! Please try again later.");
                }
            })
            .catch(error => {
                console.error(error);
                alert("An error occurred. Please check your connection and try again.");
            })
            .finally(() => {
                button.innerHTML = originalText;
                button.disabled = false;
            });
        });
    }
});
