function SendMail() {
    var params = {
        from_name : document.getElementById("fullname").value,
        email_id : document.getElementById("email_id").value,
        phone_number : document.getElementById("phone_number").value,
        message : document.getElementById("message").value,

    }
    emailjs.send("service_3ypfk8u","template_2qew3rc", params).then(function (res){
        alert("Success!" + res.status);
    })
}