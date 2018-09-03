

$(document).ready(function() {

  dopackage();

  $(".arrow.up").addClass('hidden');

  $('.arrow.down').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(window).height()+60 }, 800);
      //$(".arrow.up").toggle('show');
  });

  $('.arrow.up').click(function (event) {
    //$(".arrow.up").toggle('show');
  });
asdasd

  $(window).on('scroll', function() {

    if (document.body.scrollTop > document.documentElement.clientHeight/5 ||
        document.documentElement.scrollTop > document.documentElement.clientHeight/5) {
      document.getElementById("navbar").style.top = "0";
      $(".arrow.up").removeClass('hidden');
      $(".arrow.up").removeClass('hidden');
      $(".mainCont").addClass('hidden');
    } else {
      document.getElementById("navbar").style.top = "-60px";
      $(".arrow.up").addClass('hidden');
      $(".mainCont").removeClass('hidden');
    }
  });


  function randomColor()
  {
      return '#' + (function (color)
      {
          return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)])
          && (color.length == 6) ? color : arguments.callee(color);
      })('');
  };

  function dopackage()
  {
    var boxdemo = $("#boxdemo"),
        boxstyle = $("#boxstyle"),
        html, style, cls;

      var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

          //  alert(w);
          //        alert(h);
      var v = 100;

      cls = ("shape-prism");
      var pack = prism(w, h, v, cls);
      if (!pack) {
          return;
      }
      html = pack.html;
      style = pack.style;
      var css = "";
      for (var k in style) {
          css += k + "{";
          var prop = style[k];
          for (var j in prop) {
              css += j + ": " + prop[j] + ";";
          }
          css += "}"
      }
      boxdemo.show().html(html);
      pack.transform = pack.transform || ("rotateX(" + $("#rangex").val() + "deg) rotateY(" + $("#rangey").val() +
          "deg) rotateZ(" + $("#rangez").val() + "deg)");
      boxstyle.html(css);
      boxstyle.next("style").html("." + cls + "{transform:" + pack.transform + ";margin: 0 auto}");
  }


  function prism(w, h, v, cls)
  {
      var html = '<div class="' + cls + '-demo animate">\n' +
          '<div class="tcface sbottom"></div>\n' +
          '<div class="tcface sfront"></div>\n' +
          '    <div class="tcface sback"></div>\n' +
          '   <div class="tcface sleft"></div>\n' +
          '\t<div class="tcface sright"></div>\n' +
          '</div>';
      var c = "." + cls;
      var angle = Math.atan(h / v / 2) * 180 / Math.PI, sidev = Math.sqrt(h * h / 4 + v * v);
      var style = {};
      style[c] = {
          width: w + "px",
          height: h + "px",
          "transform-style": "preserve-3d"
      };
      style[c + " .tcface"] = {
          width: "100%",
          height: "100%",
          position: "absolute"
      };
      style[c + " .sfront"] = {
          height: sidev + "px",
          "transform-origin": "50% 0",
          background: randomColor(),
          "transform": "rotateX(-" + angle + "deg)"
      };
      style[c + " .sback"] = {
          height: sidev + "px",
          "transform-origin": "50% 0",
          background: randomColor(),
          "transform": "rotateX(" + angle + "deg)"
      };
      style[c + " .sleft"] = {
          width: 0,
          height: 0,
          "border-left": h / 2 + "px solid transparent",
          "border-right": h / 2 + "px solid transparent",
          "border-bottom": v + "px solid " + randomColor(),
          transform: "rotateY(-90deg)",
          left: -h / 2 + "px"
      };
      style[c + " .sright"] = {
          width: 0,
          height: 0,
          "border-left": h / 2 + "px solid transparent",
          "border-right": h / 2 + "px solid transparent",
          "border-bottom": v + "px solid " + randomColor(),
          transform: "rotateY(-90deg)",
          left: (w - h / 2 ) + "px"
      };
      style[c + " .sbottom"] = {
          transform: "rotateX(90deg)",
          background: randomColor(),
          top: (v - h / 2) + "px"
      };
      return {
          style: style,
          html: html
      };
  }

});
