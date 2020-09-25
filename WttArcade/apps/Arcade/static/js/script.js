$(document).ready(function(){
    $('#register').on('submit', function (e) {
        e.preventDefault()
        $.ajax({
            url: 'register/',
            method: 'POST',
            data: $('#register').serialize(),
            statusCode: {
                200: function (response) {
                    $("#reg_messages").html(response)
                },
                500: function () {
                    window.location.assign('dashboard/')
                }
            }
            // success: function (response) {
            //     if (statusCode == 200) {
            //         $('#reg_messages').html(response)
            //     }
            // }
        })
    })

    $("#login").on("submit", function (e) {
		e.preventDefault();
		$.ajax({
			url: "login/",
			method: "POST",
            data: $("#login").serialize(),
            // statusCode: {
            //     200: function (response) {
            //         $("#log_messages").html(response)
            //     },
            //     500: function () {
            //         window.location.assign('dashboard/')
            //     }
            // }
            success: function (response) {
                $("#log_messages").html(response)
            },
            error: function (response) {
                window.location.href("dashboard/")
            }
        })
	})
})