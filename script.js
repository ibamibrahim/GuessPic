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
						alert("login berhasil, sukses!")
					} else {
						alert("login salah, salah password")
					}
				}
			});

			if(!isUsernameExist){
				alert("username tidak terdaftar");
			}

		});

	});

});