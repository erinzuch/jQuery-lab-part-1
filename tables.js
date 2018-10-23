"use strict";
//The form must remain hidden until a user clicks on a table with the class “available”
$(document).ready(() => {
    $(".available").on("click", (event) => {
        $("form").show();
    })

    $(".save").on("click", (event) => {
        $("form").hide();
    })


    $(document).ready("click", ".save", (event) => {
        
        $('.tables.available').removeClass('unavailable').addClass('reserved');
    });


});

//When the user submits the form, the form is hidden, and the class of the selected seat
// is changed from “available” to “reserved”. 


//Change the cursor property to “not-allowed” if the table has a “reserved” class.


//Changes the appearance of an open table when the mouse moves over the table, as
// well as changes the cursor.

//let table=null
//.on("click", ".available" (event) => {
    //table=event.target
//})