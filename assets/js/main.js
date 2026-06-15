// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Core script to initialize global handlers
    console.log('FinFunds core script loaded securely.');

    // Enquiry Form Submission Handler (Web3Forms API)
    const enquiryForm = document.getElementById('enquiryForm');
    const formResult = document.getElementById('formResult');

    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent page reload
            
            const button = enquiryForm.querySelector('button[type="submit"]');
            const originalText = button.innerHTML;
            button.innerHTML = "Sending...";
            button.disabled = true;
            if(formResult) {
                formResult.innerHTML = "Please wait...";
                formResult.style.color = "var(--text-muted)";
            }
            
            const formData = new FormData(enquiryForm);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);
            
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let jsonResponse = await response.json();
                if (response.status === 200) {
                    if(formResult) {
                        formResult.innerHTML = "Thank you! Your enquiry has been sent successfully.";
                        formResult.style.color = "green";
                    }
                    enquiryForm.reset();
                } else {
                    console.error(response);
                    if(formResult) {
                        // Display the exact error message from Web3Forms
                        formResult.innerHTML = jsonResponse.message || "Something went wrong! Please try again later.";
                        formResult.style.color = "red";
                    }
                }
            })
            .catch(error => {
                console.error(error);
                if(formResult) {
                    formResult.innerHTML = "Network error: " + error.message;
                    formResult.style.color = "red";
                }
            })
            .finally(() => {
                button.innerHTML = originalText;
                button.disabled = false;
                
                // Clear the success message after 5 seconds
                setTimeout(() => {
                    if(formResult) {
                        formResult.innerHTML = "";
                    }
                }, 5000);
            });
        });
    }

    // Initialize GSAP ScrollTrigger for Partner Marquee
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        const scrollViewport = document.querySelector('#scroll-viewport');
        const horizontalTrack = document.querySelector('#horizontal-track');

        if (scrollViewport && horizontalTrack) {
            function getScrollAmount() {
                let trackWidth = horizontalTrack.scrollWidth;
                return -(trackWidth - window.innerWidth + 100); 
            }

            const tween = gsap.to(horizontalTrack, {
                x: () => getScrollAmount(),
                ease: "none"
            });

            ScrollTrigger.create({
                trigger: scrollViewport,
                start: "top top",
                end: "bottom bottom",
                animation: tween,
                scrub: 1,
                invalidateOnRefresh: true
            });
        }
    }
});
