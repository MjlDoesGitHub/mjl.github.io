/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';
	
  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["An Entrepreneur.", "A Programmer.", "A Tech-Enthusiast.", "A Photographer.", "An Investor."],
      typeSpeed: 100,
      loop: true,
    });
  });

  
});
