$( document ).ready(function(){

	// method for login
	
	$("#loginButton").click(function(){
		var username = $("#username").val();
		var password = $("#password").val();


		$.getJSON('user.json', function(data) {
			var isUsernameExist = false;
			$.each(data.users, function(i, userAccount){
				if(username == userAccount.username){
					isUsernameExist = true;
					if(password == userAccount.password){
						alert("login berhasil, sukses!");
						localStorage.setItem("username", userAccount.username);
						window.location = "index_main.html";
					} else {
						$("#wrongPassword").css("display", "inline-block");
						//alert("login salah, salah password");
					}
				}
			});

			if(!isUsernameExist){
				//$("#wrongPassword").text("Username is not registered");
				$("#wrongPassword").css("display", "inline-block");				
			}

		});

	});

});