
// $(".nai").empty();
// $(".name").empty();
// $(".position").empty();




$("nav").hover(function() {
  $(".profile_image").attr("src","./Utils/images/MASTERSHEET-White 1.png");
  $("body .left-gap").css("width","24%");
  $("body nav").css("left","0px");
  $("nav .wrap .navbar .top-nav .logo").css("margin-right","0px");
  $("nav .wrap .navbar .user").css("width","100%");
  $("nav .wrap .navbar .user img").css("width","50px");
  $("nav .wrap .navbar .user").css("align-items","center");
  $("nav .navbar .top-nav img").css("height","25px");
  $("nav .navbar .user img").addClass("text-center");
  $("nav .navbar .menu-list a p").removeClass("nai")
  $("nav .wrap .navbar .user .name").removeClass("nai");
  $("nav .wrap .navbar .user .position").removeClass("nai");
  $("nav .logout a p").removeClass("nai");
});


$("nav").mouseleave(function() {
  $(".profile_image").attr("src","./Utils/images/MASTERSHEET ROUND 1.png");
  $("body .left-gap").css("width","180px");
  $("body nav").css("left","60px");
  $("nav .wrap .navbar .top-nav .logo").css("margin-right","130px");
  $("nav .navbar .top-nav img").css("height","50px");
  $("nav .navbar .user img").css("height","50px");
  $("nav .navbar .menu-list a p").addClass("nai");
  $("nav .logout a p").addClass("nai");
  $("nav .wrap .navbar .user .name").addClass("nai");
  $("nav .wrap .navbar .user .position").addClass("nai");
});


// $(this).css("background-color","red")

 
