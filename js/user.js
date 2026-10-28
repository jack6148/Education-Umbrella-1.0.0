$(document).ready(function () {

    function setLanguage(lang) {
        localStorage.setItem('language', lang);

        // Show the button for switching to the other language
        $('#btnBangla, #btnEnglish').removeClass('active-language');

        if (lang === 'bn') {
            $('#btnEnglish').addClass('active-language');
        } else {
            $('#btnBangla').addClass('active-language');
        }

        // Show content in the selected language
        $('.bn').not('#btnBangla').toggle(lang === 'bn');
        $('.en').not('#btnEnglish').toggle(lang === 'en');
    }

    $('#btnBangla').on('click', function (e) {
        e.preventDefault();
        setLanguage('bn');
    });

    $('#btnEnglish').on('click', function (e) {
        e.preventDefault();
        setLanguage('en');
    });

    setLanguage(localStorage.getItem('language') || 'en');

});