// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click on X to delete Todos
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Watch for enter
$("input[type='text']").keypress(function(event){
    //verify if enter was pressed
    if(event.which === 13){
        //grab new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
});

//Toggle input
$(".fa-pencil-square-o").click(function(){
    $("input[type='text'").fadeToggle(500, "swing");
});