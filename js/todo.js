$(document).ready(function(){

    //get local storage
    //if statement checks to see if localstorage is empty and loads default list
    //else it loads the user's list
    if(localStorage.getItem("list") === null){
        localStorage.setItem("list", $("#list").html()); 
    }
    else 
        $("#list").html(localStorage.getItem("list"));
    
    //click on list items to toggle them as checked
    $("ul").on('change', "li", (function(){
        $(this).toggleClass("checked");
        localStorage.setItem("list", $("#list").html());
    }));
    
    //update localstorage when editing an item
    $("ul").on('focusout', '.list_text', function(){
        localStorage.setItem("list", $("#list").html());
    });
    
    //add new item
    $("#add_text").keyup(function(evt){
        //adds new item on "enter" press
        if(evt.which === 13){
            var add_data = $("#add_text").val();
            $('#list').append("<li class=\"list_item\"><input type=\"checkbox\" class =\"box\"><span class=\"list_text\" contenteditable=\"true\">" +add_data+ "</span><span class=\"delete\">×</span></li>");
            
            //make text field blank
            $("#add_text").val("");
            
            //adds new item to localstorage
            localStorage.setItem("list", $("#list").html());
        }
    });
    
    //delete an item
    $("ul").on('click', ".delete", (function(){
        $(this).parent("li").remove();
        
        //refresh user's localstorage list
        localStorage.setItem("list", $("#list").html());
        
    }));
});