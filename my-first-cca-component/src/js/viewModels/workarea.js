requirejs.config(
    {
      // create path mapping for input-country module
      paths:
      {
        'hello-world':'jet-composites/hello-world'
      }
    });
define(
    ['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojinputtext'
    , 'hello-world/loader'
],
    function (oj, ko, $) {
        'use strict';
        function WorkareaViewModel() {
            var self = this;

            self.greetingClickedHandler= function(event) {
                console.log('Alert Greeting Clicked  '+JSON.stringify(event.detail));
            }
        }

        return new WorkareaViewModel();
    }
);
