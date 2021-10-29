/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

/* @api */
define([
    'uiComponent',
    'Magento_Checkout/js/model/payment/renderer-list'
], function (Component, rendererList) {
    'use strict';

    rendererList.push(
        {
            type: 'keypointers_net45',
            component: 'KeyPointers_Net45/js/view/payment/method-renderer/net45-method'
        }
    );

    /** Add view logic here if needed */
    return Component.extend({});
});
