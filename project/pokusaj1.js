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
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts-container');
  
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        data.posts.forEach(post => {
          const postElement = document.createElement('div');
          postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
          `;
          postsContainer.appendChild(postElement);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
});

  
