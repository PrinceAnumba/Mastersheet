
// Dragging to upload an image
"use strict";
function dragNdrop(event) {
    var fileName = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("preview");
    var previewImg = document.createElement("img");
    previewImg.setAttribute("src", fileName);
    preview.innerHTML = "";
    preview.appendChild(previewImg);
}
function drag() {
    document.getElementById('uploadFile').parentNode.className = 'draging dragBox';
}
function drop() {
    document.getElementById('uploadFile').parentNode.className = 'dragBox';
}


// Sise Bar Mechanics

$("nav").hover(function() {
  $(".profile_image").attr("src","../../Utils/images/MASTERSHEET-White 1.png");
  $("body .left-gap").css("width","23%");
  $("body nav").css("left","0px");
  $("nav .wrap .navbar .top-nav .logo").css("margin-right","0px");
  $("nav .wrap .navbar .user").css("width","100%");
  $("nav .wrap .navbar .user img").css("width","50px");
  $("nav .wrap .navbar .user").css("align-items","center");
  $("nav .navbar .top-nav img").css("height","25px");
  $("nav .navbar .user img").addClass("text-center");
  $("nav .navbar .menu-list a p").show();
  $("nav .navbar .menu-list a").css("justify-content","left");
  $("nav .navbar .menu-list a i").css("padding-left","1rem");
  $("nav .navbar .menu-list a i").css("padding-top","0rem");
  $("nav .navbar .menu-list a i").css("padding-bottom","0rem");
  $("nav .wrap .navbar .user .name").removeClass("nai");
  $("nav .wrap .navbar .user .position").removeClass("nai");
  $("nav .logout a p").removeClass("nai");
});


$("nav").mouseleave(function() {
  $(".profile_image").attr("src","../../Utils/images/MASTERSHEET ROUND 1.png");
  $("body .left-gap").css("width","180px");
  $("body nav").css("left","60px");
  $("nav .wrap .navbar .top-nav .logo").css("margin-right","130px");
  $("nav .navbar .top-nav img").css("height","50px");
  $("nav .navbar .user img").css("height","50px");
  $("nav .navbar .menu-list a p").hide();
  $("nav .navbar .menu-list a i").css("padding-left","0");
  $("nav .navbar .menu-list a").css("justify-content","center");
  $("nav .navbar .menu-list a i").css("padding-top","0.7rem");
  $("nav .navbar .menu-list a i").css("padding-bottom","0.7rem");
  $("nav .logout a p").addClass("nai");
  $("nav .wrap .navbar .user .name").addClass("nai");
  $("nav .wrap .navbar .user .position").addClass("nai");
});


// $(this).css("background-color","red")

//  Course Matherial drawer

$(".Upload_course_1").on("click", function(){ 
  $("#upload_details").css("display","flex");
  $(".back-arrow").css("display","block");
   
 });