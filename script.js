
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let subject = encodeURIComponent("Portfolio message from " + name);
    let body = encodeURIComponent(
        "Name: " + name + "\nEmail: " + email + "\nMessage: " + message
    );

    window.location.href =
        "mailto:chethansai134@gmail.com?subject=" + subject + "&body=" + body;
});
