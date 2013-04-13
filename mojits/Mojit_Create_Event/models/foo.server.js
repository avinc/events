/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('Mojit_Create_EventModelFoo', function(Y, NAME) {

/**
 * The Mojit_Create_EventModelFoo module.
 *
 * @module Mojit_Create_Event
 */

    /**
     * Constructor for the Mojit_Create_EventModelFoo class.
     *
     * @class Mojit_Create_EventModelFoo
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
