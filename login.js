


// LOGIN AS MARK LESTER MORENO

  var count = 3;

    function validate() {  
        var un = document.formLogin.username.value;  
        var pw = document.formLogin.password.value;  
        var valid = false;  

        var unArray = ["admin", "admin"]; // my password
        var pwArray = ["123456", "123456"]; // 

        
        for (var i = 0; i < unArray.length; i++) {  
            if ((un == unArray[i]) && (pw == pwArray[i])) {  
                valid = true;  
                break;  
            }  
        }  

        if (valid) {  
        	
            alert("Login was successful");  
            window.location = "index.html";  
            return false;  
        }  

        var t = " tries";  
        if (count == 1) { t = " try" }  
        if (count >= 1) {  
            alert("Invalid username and/or password. You have " + count + t + " left.");  
            document.formLogin.username.value = "";  
            document.formLogin.password.value = "";  
            setTimeout("document.myform.username.focus()",25);  
            setTimeout("document.myform.username.select()", 25);  
            count--;  

        }  
        else {  
            alert("Still incorrect! You have no more tries left!");  
            document.formLogin.username.value = "No more tries allowed!";  
            document.formLogin.password.value = "";  
            document.formLogin.username.disabled = true;  
            document.formLogin.password.disabled = true;  
            return false;  
        }  
    }  



  