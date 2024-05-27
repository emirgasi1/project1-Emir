document.addEventListener("DOMContentLoaded", function() {
    var app = $.spapp({ pageNotFound : 'error_404' }); // initialize

    // Define routes
    app.route({ view: 'home', load: 'home.html' });
    app.route({ view: 'about', load: 'about.html' });
    app.route({ view: 'projects', load: 'projects.html' });
    app.route({ view: 'services', load: 'services.html' });
    app.route({ view: 'tools', load: 'tools.html' });
    app.route({ view: 'contact', load: 'contact.html' });
    app.route({ view: 'comments', load: 'comments.html' }); // New route for comments

    app.run();
});

function toggleComments() {
    var comment1 = document.getElementById("comment1");
    var comment2 = document.getElementById("comment2");

    if (comment1.style.display === "none") {
        comment1.style.display = "block";
        comment2.style.display = "block";
    } else {
        comment1.style.display = "none";
        comment2.style.display = "none";
    }
}