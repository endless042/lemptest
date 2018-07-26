var page = {
	init : function() {

		page.initInterface();

	},

	initInterface : function() {

		$("#login_btn").click(function() {
			// LEMP API를 사용해서 MAN0001.html 페이지로 이동
			/*
			 * LEMP.Window.open({ "_sPagePath" : "MAN/html/MAN0001.html",
			 * "_oMessage" : { "name" : "kim", "company" : "ldcc", "class" : 1 }
			 * });
			 */

			var userId = $("#user_id").val().trim();
			var userPw = $("#user_pw").val().trim();

			if (userId != '' && userPw != '') {

				LEMP.Network.requestLogin({
					"_sUserId" : userId,
					"_sPassword" : userPw,
					"_sTrcode" : "DM0001",
					"_oBody" : {
						"userId" : userId,
						"password" : userPw
					},
					"_fCallback" : function(resDM0001) {
						// alert(JSON.stringify(resDM0001));
						console.log(resDM0001);

						var result = resDM0001.header.result;

						if (result) {

							LEMP.Window.open({
								"_sPagePath" : "MAN/html/MAN0001.html"
							
							});
						} else {

							alert("id 또는 비밀번호가 잘못되었습니다.");
						}

					}
				})

			} else {

				alert("id와 비밀번호를 입력해 주세요");
			}

		});

	},

	callback : function(args) {
		console.log(args);
	}

}