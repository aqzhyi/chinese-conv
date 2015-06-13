(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', '../tongwen/tongwen-st.js', '../tongwen/tongwen-ts.js'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('../tongwen/tongwen-st.js'), require('../tongwen/tongwen-ts.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.tongwenSt, global.tongwenTs);
    global.index = mod.exports;
  }
})(this, function (exports, module, _tongwenTongwenStJs, _tongwenTongwenTsJs) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _tongwenSt = _interopRequireDefault(_tongwenTongwenStJs);

  var _tongwenTs = _interopRequireDefault(_tongwenTongwenTsJs);

  module.exports = {
    sify: _tongwenTs['default'],
    tify: _tongwenSt['default']
  };
});