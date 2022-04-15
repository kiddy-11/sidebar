$ (function () {
    $('.sidebar').slimScroll()

    $('#menu_toggle').on('click' , function () {
        $('.sidebar, .main_content, #menu_toggle').toggleClass('active')
    })
})