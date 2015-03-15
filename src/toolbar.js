'use strict';

define(['module', 'ko-grid'], function (module, koGrid) {
    var extensionId = module.id.indexOf('/') < 0 ? module.id : module.id.substring(0, module.id.indexOf('/'));

    koGrid.defineExtension(extensionId, {
        initializer: function (template) {
            template.to('grid').append('toolbar', [
                '<div class="ko-grid-toolbar">',
                '  <div class="ko-grid-left-toolbar"><!--left-toolbar--></div>',
                '  <div class="ko-grid-right-toolbar"><!--right-toolbar--></div>',
                '</div>'
            ].join(''));
        },
        Constructor: function ToolbarExtension() {}
    });

    return koGrid.declareExtensionAlias('toolbar', extensionId);
});
