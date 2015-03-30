/**
 * @license Copyright (c) 2015, Ben Schulz
 * License: BSD 3-clause (http://opensource.org/licenses/BSD-3-Clause)
 */
;(function(factory) {
    if (typeof define === 'function' && define['amd'])
        define(['ko-grid', 'ko-data-source', 'ko-indexed-repeat', 'knockout'], factory);
    else
        window['ko-grid-toolbar'] = factory(window.ko.bindingHandlers['grid']);
} (function(ko_grid) {
var ko_grid_toolbar_toolbar, ko_grid_toolbar;

ko_grid_toolbar_toolbar = function (module, koGrid) {
  var extensionId = 'ko-grid-toolbar'.indexOf('/') < 0 ? 'ko-grid-toolbar' : 'ko-grid-toolbar'.substring(0, 'ko-grid-toolbar'.indexOf('/'));
  koGrid.defineExtension(extensionId, {
    initializer: function (template) {
      template.to('grid').append('toolbar', [
        '<div class="ko-grid-toolbar">',
        '  <div class="ko-grid-left-toolbar"><!--left-toolbar--></div>',
        '  <div class="ko-grid-right-toolbar"><!--right-toolbar--></div>',
        '</div>'
      ].join(''));
    },
    Constructor: function ToolbarExtension() {
    }
  });
  return koGrid.declareExtensionAlias('toolbar', extensionId);
}({}, ko_grid);
ko_grid_toolbar = function (main) {
  return main;
}(ko_grid_toolbar_toolbar);return ko_grid_toolbar;
}));