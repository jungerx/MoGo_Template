$(window).scroll(function (event) {
  if ($(this).scrollTop() >= $("#about").offset().top - 1) {
    $(".menu").addClass("fixed-top");
    $(".home").addClass("dummy-padding");
  } else {
    $(".menu").removeClass("fixed-top");
    $(".home").removeClass("dummy-padding");
  }
});

const counters = document.querySelectorAll(".fact-number");
counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute("data-target"));
    const count = parseInt(counter.innerText);
    if (count > target) {
      counter.innerText = target;
    } else {
      counter.innerText = count + 1;
      setTimeout(updateCount, 50);
    }
  };
  updateCount();
});
// function countAnimation() {
//   if (isScrolledIntoView($(".about")) && !viewed) {
//     viewed = true;
//     $(".about.fact-number").each(function () {
//       $(this)
//         .prop("Counter", 1)
//         .animate(
//           {
//             Counter: $(this).text(),
//           },
//           {
//             duration: 2000,
//             easing: "swing",
//             step: function (now) {
//               $(this).text(Math.ceil(now));
//             },
//           }
//         );
//     });
//   }
// }
