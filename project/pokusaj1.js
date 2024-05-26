let slideIndex = 1;
        
function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("gallery-image");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

showSlides(slideIndex);
  //Image Gallery



document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('togglebutton');
    const body = document.body;

    toggle.onclick = function() {
        body.classList.toggle('dark-theme'); // ugasena svjetla
    }
});

document.querySelectorAll('.read').forEach(button => {
    button.addEventListener('click', function() {
        const moreText = this.previousElementSibling; //unutar read more element
        const dots = moreText.previousElementSibling;//samo sa ...
        
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            button.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            button.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    });
});

let navbar=document.querySelector('.lista');

document.querySelector('#menu-btn').onclick=function(){
    navbar.classList.toggle('active')
}



$(document).ready(function() {
    $("#contactForm").validate({
        rules: {
            firstName: "required",
            lastName: "required",
            email: {
                required: true,
                email: true
            },
            subject: "required",
            date: {
                required: true,
                date: true
            },
            password: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            firstName: "Please enter your first name",
            lastName: "Please enter your last name",
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            subject: "Please enter a subject",
            date: {
                required: "Please enter a date",
                date: "Please enter a valid date"
            },
            password: {
                required: "Please enter a password",
                minlength: "Your password must be at least 8 characters long"
            }
        },
        submitHandler: function(form) {
            $(".inputs").addClass("hidden");
            $("#successMessage").removeClass("hidden");
            $("#errorMessage").addClass("hidden");
            // Here you can submit the form using Ajax or any other method
        },
        invalidHandler: function(event, validator) {
            $("#errorMessage").removeClass("hidden");
        }
    });
});


document.getElementById("password").addEventListener("input", function () {
    const strengthIndicator = document.getElementById("password-strength");
    const password = this.value;
    let strength = 0;
  
    if (password.match(/[a-z]/)) {
      strength += 1;
    }
    if (password.match(/[A-Z]/)) {
      strength += 1;
    }
    if (password.match(/[0-9]/)) {
      strength += 1;
    }
    if (password.match(/[$@#!%*?&]/)) {
      strength += 1;
    }
  
    strengthIndicator.style.width = strength * 25 + "%";
  
    if (strength === 0) {
      strengthIndicator.className = "";
      strengthIndicator.style.width = "0%";
    } else if (strength === 1) {
      strengthIndicator.className = "strength-weak";
    } else if (strength === 2) {
      strengthIndicator.className = "strength-medium";
    } else if (strength >= 3) {
      strengthIndicator.className = "strength-strong";
    }
  });


  $(document).ready(function() {
    $.ajax({
        url: 'comments.json',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            var commentsContainer = $('#comments-container');
            data.forEach(function(comment) {
                var commentElement = `
                    <div class="comment"> 
                        <div class="username">${comment.username}</div>
                        <div class="timestamp">${comment.timestamp}</div>
                        <div class="content">${comment.comment}</div>
                    </div>
                `;
                commentsContainer.append(commentElement);
            });
        },
        error: function(xhr, status, error) {
            console.error('Error fetching comments:', status, error);
        }
    });
});

$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Serialize form data
        var formData = $(this).serialize();

        // Simulate AJAX request to save form data
        setTimeout(function() {
            console.log('Data received:', formData); // For demonstration purposes
            // Display success message using toastr
            toastr.success('Data saved successfully!');
            // Optionally clear the form
            $('#contactForm')[0].reset();
        }, 500); // Simulate a delay of 500ms

        // Example for error handling (uncomment to use)
        // setTimeout(function() {
        //     console.error('Error saving data');
        //     toastr.error('Failed to save data. Please try again.');
        // }, 500); // Simulate a delay of 500ms
    });
});


