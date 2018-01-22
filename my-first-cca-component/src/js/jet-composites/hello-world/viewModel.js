/**
  Copyright (c) 2015, 2017, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(
    ['ojs/ojcore', 'knockout', 'jquery'], function (oj, ko, $) {
        'use strict';

        function ExampleComponentModel(context) {
            var self = this;
            self.composite = context.element;
            //Example observable
            self.messageText = ko.observable('Hello from Example Component');

            context.props.then(function (propertyMap) {
                //Store a reference to the properties for any later use
                self.properties = propertyMap;

                //Parse your component properties here 

            });

            self.clickHandler = function (event) {
                var eventParams = {
                    'bubbles': true,
                    'cancelable': false,
                    'detail': {
                        'timestamp': new Date()
                        , 'greetee': self.properties['name']
                    }
                };
                //Raise the custom event on the composite component
                self.composite.dispatchEvent(
                    new CustomEvent('greetingClicked', eventParams));
            }
        };

        //Lifecycle methods - uncomment and implement if necessary 
        //ExampleComponentModel.prototype.activated = function(context){
        //};

        //ExampleComponentModel.prototype.attached = function(context){
        //};

        //ExampleComponentModel.prototype.bindingsApplied = function(context){
        //};

        //ExampleComponentModel.prototype.detached = function(context){
        //};

        return ExampleComponentModel;
    });