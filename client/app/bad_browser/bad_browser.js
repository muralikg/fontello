/*global $, Modernizr*/


"use strict";


var render = require('@/lib/render/client');


module.exports = function (window, N) {
  $(function () {
    // check browser's capabilities
    if (!Modernizr.fontface) {
      N.logger.error("bad browser");

      $(render('app.bad_browser')).modal({
        backdrop: 'static',
        keyboard: false
      });

      return;
    }
  });
};
