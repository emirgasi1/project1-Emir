document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('togglebutton');
    const body = document.body;

    toggle.onclick = function() {
        body.classList.toggle('dark-theme'); // ugasena svjetla
    }
});

$(document).ready(function() {
    $('#togglebutton').click(function() {
        $(this).toggleClass('active');
    });
});
