/*
* Function to animate leaving a page
*/
/*$.fn.leavePage = function() {

  this.click(function(event){

    // Don't go to the next page yet.
    event.preventDefault();
    var linkLocation = this.href;

    // Fade out this page first.
    $('body').fadeOut(500, function(){

      // Then go to the next page.
      window.location = linkLocation;
    });
  });
};*/


/*
* Call the leavePage function upon link clicks with the "transition" class
*/
//$('.transition').leavePage();

$("#contactForm").validator().on("submit", function (event){
  if(event.isDefaultPrevented()) {
    //handle the invalid form
    formError();
    submitMSG(false, "Did you fill in the form properly?");
    alert(testing fail);
  } else {
    // everything looks good!
    event.preventDefault();
    submitForm();
  }
});

function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var message = $("#message").val();

    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "name=" + name + "&email=" + email + "&phone" + phone + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
               submitMSG(false,text);
            }
        }
    });
}
function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!");
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
        var msgClasses;
    if(valid){
        msgClasses = "h3 text-center tada animated text-success";
    } else {
        msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
