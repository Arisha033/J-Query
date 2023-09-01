//Changing attributes using jQuery
$("a").attr("href", "https://yahoo.com");

//Add class
$("h1").addClass("big-title");

//Add event listener
// $("button").click(function () {
//   $("h1").css("color", "purple");
// });

//Add keypress event
$("input").keypress(function (event) {
  console.log(event.key);
});

//Add event using "on" method
$("h1").on("mouseover", function () {
  $("h1").text("Good Morning");
});

//Remove the elements from the page
$("a").remove();

//Add element before html element
$("a").before("<button>Before Button</button>");
//Add element before html content
$("h1").prepend("<button>Prepend Button</button>");

//Add element after html element
$("a").after("<button> After Button </button>");
//Add element after html content
$("h1").append("<button> Append Button </button>");

//Hide & show element on button click
// $("button").on("click",function(){
//     $("h1").toggle();
// });


// fadeOut & fadeIn decreases the opacity of the element
// $("button").on("click",function(){
//     $("h1").fadeOut();
// });


//slide up and down on click
// $("button").on("click",function(){
//     $("h1").slideToggle();
// });


//Create animation
$("button").on("click", function () {
  $("h1").animate({ opacity: 0.5 });
});


