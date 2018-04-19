function disableF5(e) { if ((e.which || e.keyCode) == 116) e.preventDefault(); };
$( document ).ready(function() {  
    window.onbeforeunload = function(e) {
      var dialogText = "don't leave this page.";
      e.returnValue = dialogText;
      return dialogText;
    };
    $(document).on("keydown", disableF5);
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };
    $('.modal').modal();



    function toggleFullscreen(elem) {
        elem = elem || document.documentElement;
        if (!document.fullscreenElement && !document.mozFullScreenElement &&
          !document.webkitFullscreenElement && !document.msFullscreenElement) {
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
          } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
          } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
          }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          }
        }
      }
      
      document.getElementById('btnFullscreen').addEventListener('click', function() {
        toggleFullscreen(this);
      });
});
