$(function () {
  let sideInnerwidth = $(".side-inner").outerWidth();
  $("#sideNav").css("left", -sideInnerwidth);
  $("#sideNav i.fa-xmark").click(function () {
    if ($(".side-inner").css("left") == "0px") {
      $("#sideNav").animate({ left: -sideInnerwidth }, 500);
    }
  });
  $("#sideNav i.fa-bars").click(function () {
    if ($(".side-inner").css("left") != sideInnerwidth) {
      $("#sideNav").animate({ left: "0px" }, 500);
    }
  });

  ////////////////////////////////according
  $(".singer h3").click(function (e) {
    let singerId = $(e.target).attr("id");
    if (singerId == "singerOne") {
      $("#paraOne").slideToggle(500);
    } else if (singerId == "singerTwo") {
      $("#paraTwo").slideToggle(500);
    }
     else if (singerId == "singerThree") {
      $("#paraThree").slideToggle(500);
    }
     else if (singerId == "singerFour") {
      $("#paraFour").slideToggle(500);
    }
  
    console.log(singerId, paragraph);
  });
  
  
  // Getting formated date from date string
  let deadline = new Date(
    "dec 31, 2025 15:37:25"
).getTime();

// Calling defined function at certain interval
let x = setInterval(function () {

    // Getting current date and time in required format
    let now = new Date().getTime();

    // Calculating difference
    let t = deadline - now;

    // Getting values of days,hours,minutes, seconds
    let days = Math.floor(
        t / (1000 * 60 * 60 * 24)
    );
    let hours = Math.floor(
        (t % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
    );
    let minutes = Math.floor(
        (t % (1000 * 60 * 60)) / (1000 * 60)
    );
    let seconds = Math.floor(
        (t % (1000 * 60)) / 1000
    );

    // Show the output time
    document.getElementById("day")
            .innerHTML = days;
    document.getElementById("hour")
            .innerHTML = hours;
    document.getElementById("minute")
            .innerHTML = minutes;
    document.getElementById("second")
            .innerHTML = seconds;

    // Show overtime output
    if (t < 0) {
        clearInterval(x);
        document.getElementById(
            "demo"
        ).innerHTML = "TIME UP";
        document.getElementById(
            "day"
        ).innerHTML = "0";
        document.getElementById(
            "hour"
        ).innerHTML = "0";
        document.getElementById(
            "minute"
        ).innerHTML = "0";
        document.getElementById(
            "second"
        ).innerHTML = "0";
    }
}, 1000);

//////////////////////////////////////////

 
  
  $('#message').keyup(function(){
    var txtCharCountLength = $(this).val().length;
    if (txtCharCountLength <= 100) {
        var remainingChar = 100 - txtCharCountLength;
      document.getElementById('NumOfCarc').innerHTML=remainingChar;
}})   
  

///smooth scroll
$('a[href^="#"]').click(function(e){
  let aId =$(e.target).attr('href');
  let offsiteSec =$(aId).offset().top;

  $('html,body').animate({scrollTop:offsiteSec},1500)
  })

  let colorOfThemes =$('.color-box');
colorOfThemes.eq(0).css('backgroundColor' ,'black')
colorOfThemes.eq(1).css('backgroundColor' ,'teal')
colorOfThemes.eq(2).css('backgroundColor' ,'orange')
colorOfThemes.eq(3).css('backgroundColor' ,'tomato')
colorOfThemes.eq(4).css('backgroundColor' ,'white')


$('.color-box').click(function(e){
  let colorChange =$(e.target).css('backgroundColor')
$('h1,h2,h3,h4,h5,h6,a').css('color',colorChange)
})

});

