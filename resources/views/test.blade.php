<!DOCTYPE html>
<html>

<head>

  {{-- <script type="text/javascript" src="https://unpkg.com/js/xZoom/fancybox/source/jquery.fancybox.js"></script>
  <script type="text/javascript" src="https://unpkg.com/xzoom/dist/xzoom.css"></script> --}}
  <style>
    body {
  overflow: hidden;
  margin: 0;

  background: #222;
}

body.active img {
  -webkit-filter: grayscale(1);
}

img {
  display: block;
  margin: 20px auto;

  border: 1px solid rgba(255, 255, 255, 0.2);
  -webkit-transition: -webkit-filter 500ms;
}

#zoom {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 250px;
  height: 250px;
  margin: -125px 0 0 -125px;
  background-repeat: no-repeat;
  box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.5),
    5px 5px 10px 5px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  opacity: 0;
  -webkit-transform: scale(0);
  -webkit-transition: opacity 500ms, -webkit-transform 500ms;
  pointer-events: none;
}

.active #zoom {
  opacity: 1;
  -webkit-transform: scale(1);
}

    </style>
</head>
<body>
    <img height="750" src="http://farm6.staticflickr.com/5474/9765019294_91f9710e92_b_d.jpg" />
    <div id="zoom"></div>

   <script src="https://unpkg.com/xzoom/dist/xzoom.min.js">
(function () {
  var zoom = document.getElementById("zoom"),
    Zw = zoom.offsetWidth,
    Zh = zoom.offsetHeight,
    img = document.querySelector("img");

  var timeout, ratio, Ix, Iy;

  function activate() {
    document.body.classList.add("active");
  }

  function deactivate() {
    document.body.classList.remove("active");
  }

  function updateMagnifier(x, y) {
    zoom.style.top = y + "px";
    zoom.style.left = x + "px";
    zoom.style.backgroundPosition =
      (Ix - x) * ratio + Zw / 2 + "px " + ((Iy - y) * ratio + Zh / 2) + "px";
  }

  function onLoad() {
    ratio = img.naturalWidth / img.width;
    zoom.style.backgroundImage = "url(" + img.src + ")";
    Ix = img.offsetLeft;
    Iy = img.offsetTop;
  }

  function onMousemove(e) {
    clearTimeout(timeout);
    activate();
    updateMagnifier(e.x, e.y);
    timeout = setTimeout(deactivate, 2500);
  }

  function onMouseleave() {
    deactivate();
  }

  img.addEventListener("load", onLoad);
  img.addEventListener("mousemove", onMousemove);
  img.addEventListener("mouseleave", onMouseleave);
})();

</script>
</body>
</html>

