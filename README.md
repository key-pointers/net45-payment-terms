# KeyPointers Magento2 Offline Payment module for Net45

    ``keypointers/module-net45``

 - [Main Functionalities](#markdown-header-main-functionalities)
 - [Installation](#markdown-header-installation)
 - [Configuration](#markdown-header-configuration)
 - [Specifications](#markdown-header-specifications)
 - [Attributes](#markdown-header-attributes)


## Main Functionalities
This will enable Net45 offline payment method in Magento using correct interfaces instead of using depricated classes

## Installation
\* = in production please use the `--keep-generated` option

### Type : Zip file

 - Unzip the zip file in `app/code/KeyPointers/Net45`
 - Enable the module by running `php bin/magento module:enable KeyPointers_Net45`
 - Apply database updates by running `php bin/magento setup:upgrade`\*
 - Flush the cache by running `php bin/magento cache:flush`

## Configuration

 - Enabled (payment/net45/active)

 - New Order Status (payment/net45/order_status)


## Specifications




## Attributes



