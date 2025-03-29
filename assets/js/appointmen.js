function appointmentMail(event) {
    event.preventDefault();  // Prevents the form from submitting and refreshing the page

    var data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        telno: document.getElementById("phone").value,
        date: document.getElementById("date").value,
        therapy: document.getElementById("therapy").value,
        doctor: document.getElementById("doctor").value,
        message: document.getElementById("message").value
    };
    emailjs.init({
        publicKey: "LfN-naQH2dhV_wc8B",
      });
    emailjs.send("service_x4o8kl2", "template_8wl1c2j", data).then(
        res => {
            // Reset form fields after success
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            document.getElementById("status_message").style.opacity = "100%";
        }
    )
        .catch((err) => {
            console.log(err);
            document.getElementById("status_message").innerHTML = "we have faced some issues, please contact us via email.".style.opacity = "100%";
        });
    setTimeout(function () {
        location.reload();
    }, 5000);
}
