(function () {
  var carousel = document.getElementById("carousel");
  if (!carousel) return;

  var images = Array.prototype.slice.call(carousel.querySelectorAll(".carousel-track img"));
  var dotsWrap = carousel.querySelector(".carousel-dots");
  var prevBtn = carousel.querySelector(".carousel-prev");
  var nextBtn = carousel.querySelector(".carousel-next");
  var index = 0;

  images.forEach(function (_, i) {
    var dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel-dot";
    dot.setAttribute("aria-label", "Go to photo " + (i + 1));
    dot.addEventListener("click", function () {
      show(i);
    });
    dotsWrap.appendChild(dot);
  });

  var dots = Array.prototype.slice.call(dotsWrap.querySelectorAll(".carousel-dot"));

  function show(i) {
    index = (i + images.length) % images.length;
    images.forEach(function (img, n) {
      img.classList.toggle("active", n === index);
    });
    dots.forEach(function (dot, n) {
      dot.classList.toggle("active", n === index);
    });
  }

  prevBtn.addEventListener("click", function () {
    show(index - 1);
  });
  nextBtn.addEventListener("click", function () {
    show(index + 1);
  });

  show(0);
})();
