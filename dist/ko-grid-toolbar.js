/*
 Copyright (c) 2015, Ben Schulz
 License: BSD 3-clause (http://opensource.org/licenses/BSD-3-Clause)
*/
function b(d){return function(a){return a}(function(a,c){c.defineExtension("ko-grid-toolbar",{b:function(a){a.to("grid").append("toolbar",'<div class="ko-grid-toolbar">  <div class="ko-grid-left-toolbar">\x3c!--left-toolbar--\x3e</div>  <div class="ko-grid-right-toolbar">\x3c!--right-toolbar--\x3e</div></div>')},a:function(){}});return c.declareExtensionAlias("toolbar","ko-grid-toolbar")}({},d))}
"function"===typeof define&&define.amd?define(["ko-grid","ko-data-source","ko-indexed-repeat","knockout"],b):window["ko-grid-toolbar"]=b(window.ko.bindingHandlers.grid);
