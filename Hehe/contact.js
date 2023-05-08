$(document).ready(() => {
    $('#popup').hide()
    $('#submit').click(() => {
        $('#popup').show()
    })
    $('#reset').click(() => {
        $('#submit').attr('disabled', 'disabled')
    })
    $('#confirm').click(() => {
        location.reload()
        $('#popup').hide()
    })
    $('#cancel').click(() => {
        $('#popup').hide()
    })
    
    $('input, textarea').keyup(function() {
        var valid = true
        $('input[placeholder="Name"]').each(function() {
            if (!$(this).val().match(/^[a-zA-Z]+$/)) {
                valid = false
            }
        });
        $('input[placeholder="Phone Number"]').each(function() {
            if (!$(this).val().match(/^\d{7}$/)) {
                valid = false
            }
        });
        $('input[placeholder="Email"]').each(function() {
            if (!$(this).val().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                valid = false
            }
        });
        $('input[placeholder="Subject"]').each(function() {
            if ($(this).val() == '' || $(this).val().length > 40) {
                valid = false
            }
        });
        $('textarea[placeholder="Explanation"]').each(function() {
            if ($(this).val() == '' || $(this).val().length > 250) {
                valid = false
            }
        });
        if (valid) {
            $('#submit').removeAttr('disabled')
        } else {
            $('#submit').attr('disabled', 'disabled')
        }
    });
})