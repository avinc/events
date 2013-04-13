/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('Mojit_FooterModelFoo', function(Y, NAME) {

/**
 * The Mojit_FooterModelFoo module.
 *
 * @module Mojit_Footer
 */

    /**
     * Constructor for the Mojit_FooterModelFoo class.
     *
     * @class Mojit_FooterModelFoo
     * @constructor
     */
    Y.namespace('mojito.models')[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method that will be invoked by the mojit controller to obtain data.
         *
         * @param callback {function(err,data)} The callback function to call when the
         *        data has been retrieved.
         */
        getData: function(callback) {
            callback(null, { some: 'data' });
        }

    };

}, '0.0.1', {requires: []});
