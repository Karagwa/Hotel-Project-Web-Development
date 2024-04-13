function submitForm() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        if (!name || !email || !message) {
            alert("Please fill all the fields");
            return;
        } else {
            alert("Thank you for contacting us. We'll get back to you as soon as possible");
        }
    }    

        
        
