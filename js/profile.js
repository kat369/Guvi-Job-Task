if(localStorage.getItem("user")==null){
    location.href="login.html"
  }
  else{
    $("#email").val(localStorage.getItem("user"));
    $("#user").html(localStorage.getItem("user"));
  }


  function logout(){
    localStorage.removeItem("user");
    location.href="login.html"
  }


  $("#submit").on("click", function (e) {
    console.log($("#input_form").serialize());
    
    e.preventDefault();
    $.ajax({
      url: "./php/profile.php",
      type: "POST",
      data: $("#input_form").serialize(),

      success: function (response) {
        $("#alerts").html(response);
        console.log(response);
      },
    });
  });