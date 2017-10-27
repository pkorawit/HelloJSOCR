$(function () {
    window.Tesseract = Tesseract.create({
        langPath: '/tessdata/'
    })   

    $("#ocr").click(function () {
        var photofile = $("#photo").prop("files")[0];
        // console.log(photofile);
        // $("#preview").attr("src", photofile);
        window.Tesseract.recognize(photofile, {
            //tessedit_char_whitelist: "0123456789",
            lang: "letsgodigital"
        })
            .progress(function (p) {
                console.log('progress', p)
            })
            .then(function (result) {
                console.log('result', result);
                $("#result").empty();
                $("#result").append(result.text);
            })
    });
});