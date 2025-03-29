function msgsent(event) {
    event.preventDefault();  // Prevents the form from submitting and refreshing the page

    var data = {
        fbname: document.getElementById("fbname").value,
        fbemail: document.getElementById("fbemail").value,
        fbsubject: document.getElementById("fbsubject").value,
        fbmsg: document.getElementById("fbmsg").value
    };

    emailjs.send("service_9yieeys", "template_z66xjwc", data).then(
        res => {
            // Reset form fields after success
            document.getElementById("fbname").value = "";
            document.getElementById("fbemail").value = "";
            document.getElementById("fbmsg").value = "";
            console.log(res);
            document.getElementById("sent_message").style.opacity = "100%";
        }
    )
        .catch((err) => {
            console.log(err);
            document.getElementById("sent_message").innerHTML = "we have faced some issues, please contact us via email.".style.opacity = "100%";
        });
    setTimeout(function () {
        location.reload();
    }, 5000);
}
