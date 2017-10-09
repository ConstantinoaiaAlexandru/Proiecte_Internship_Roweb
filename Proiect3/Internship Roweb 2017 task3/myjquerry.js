$(document).ready(function() {

    var aboveHeight = $("header div").first().outerHeight();

    $(window).scroll(function(){

        if ($(window).scrollTop() > aboveHeight){

            $("header div").first().addClass("fixednavbar");

        } else {

            $("header div").first().removeClass("fixednavbar");
        }
    });

    $('.textcol6').addClass('come-in');
    $('.iphone1').addClass('come-in');





    // $(".move").each(function () {
    //
    //     var bottom_of_object=$(this).offset()+$(this).outerHeight();
    //     var bottom_of_window=$(this).scrollTop()+$(this).height();
    //
    //     console.log( bottom_of_object,bottom_of_window);
    //
    //     if(bottom_of_window>bottom_of_object){
    //         $(this).animate({
    //             opacity :"1",
    //             top:"0"
    //         },"slow")
    //     }
    // });

    (function($) {
  /**
         * Copyright 2012, Digital Fusion
         * Licensed under the MIT license.
         * http://teamdf.com/jquery-plugins/license/
         *
         * @author Sam Sehnert
         * @desc A small plugin that checks whether elements are within
         *     the user visible viewport of a web browser.
         *     only accounts for vertical position, not horizontal.
         */
        $.fn.visible = function(partial) {
            var $t            = $(this),
                $w            = $(window),
                viewTop       = $w.scrollTop(),
                viewBottom    = viewTop + $w.height(),
                _top          = $t.offset().top,
                _bottom       = _top + $t.height(),
                compareTop    = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;

          return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
        };
  })(jQuery);

  var win = $(window);
  var allMods = $(".fade-element");

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("already-visible");
    }
  });

  win.scroll(function(event) {
    allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in");
      }
    });
  });

});


