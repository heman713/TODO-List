$("ul").on("click","li",function() {
    $(this).toggleClass("delete");
})

$("span").on("click",function(event) {
    $(this).parent().fadeOut(500,function() {
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type=text]").on("keypress", function(event) {
    if(event.which === 13){
        var todo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class="fa fa-trash"></i></span>" +todo+ "</li>");
    }
})

$("#header").click(function(){
    $("input[type=text]").fadeToggle(500,"swing");
})
