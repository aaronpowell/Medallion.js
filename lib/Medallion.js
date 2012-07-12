(function () {
    'use strict';

    var notifications = Windows.UI.Notifications;
    var manager = notifications.BadgeUpdateManager;
    var numberTemplate = notifications.BadgeTemplateType.badgeNumber;
    var glyphTemplate = notifications.BadgeTemplateType.badgeGlyph;

    WinJS.Namespace.define('Medallion', {
        show: function (options) {
            if (typeof options.value === undefined) {
                return;
            }

            var template = options.value.constructor === Number ?
                manager.getTemplateContent(numberTemplate) :
                manager.getTemplateContent(glyphTemplate);

            var textNode = template.selectSingleNode('/badge');
            textNode.attributes[0].nodeValue = '' + options.value;

            var notification = notifications.BadgeNotification(template);

            notification.expirationTime = options.expiry;
            manager.createBadgeUpdaterForApplication().update(notification);
        },
        hide: function () {
            manager.createBadgeUpdaterForApplication().clear();
        }
    });
})();