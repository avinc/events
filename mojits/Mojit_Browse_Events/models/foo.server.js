/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('Mojit_Browse_EventsModelFoo', function(Y, NAME) {

/**
 * The Mojit_Browse_EventsModelFoo module.
 *
 * @module Mojit_Browse_Events
 */

    /**
     * Constructor for the Mojit_Browse_EventsModelFoo class.
     *
     * @class Mojit_Browse_EventsModelFoo
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
