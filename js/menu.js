$(document).ready(function(){
    $(".menu-icon").on("click", function(){
        $("nav ul").toggleClass("showIcon");
    });
});

document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.title', {
        strings: ["Always Learning Always Evolving"],
        typeSpeed: 50
      });
  });

$(document).ready(function(){
    $('#fullpage').fullpage({
        anchors:['page1', 'page2', 'page3','page4']
    });
});

$('nav').localScroll();

