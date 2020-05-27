$(document).ready(function() {


    $("form").submit(function(e) {
        e.preventDefault();

    })


    $("div").append($(`<h2>${$("input[name='name']").val()}<h2>`));
    $("h2").mouseover(function(){
            $(this).css({
"background-color": random_bg_color(),
           "border-radius": (Math.random() * 50) + "px"
})
    })


$("input[name='name']").on("keyup", function() {
    if ($("input[name='name']").val() === "") {
        $("#btnSubmit").attr("disabled", false);
    } else {
        $("#btnSubmit").attr("disabled", false);
    }
})

$("body").append($("<div></div>"));






});

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor
}