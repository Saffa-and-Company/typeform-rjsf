"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var typeform_rjsf_1 = require("typeform-rjsf");
require("./App.css");
var exampleSchema_json_1 = require("./exampleSchema.json");
var App = function () {
    return (<div className="App">
      <typeform_rjsf_1.FormRenderer schema={exampleSchema_json_1.default}/>
    </div>);
};
exports.default = App;
