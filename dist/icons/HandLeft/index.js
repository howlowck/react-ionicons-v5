"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
function SvgComponent(props) {
    return React.createElement("svg", Object.assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("path", { d: "M432.8,211.44h0c-15.52-8.82-34.91-2.28-43.31,13.68l-41.38,84.41a7,7,0,0,1-8.93,3.43h0a7,7,0,0,1-4.41-6.52V72c0-13.91-12.85-24-26.77-24s-26,10.09-26,24V228.64A11.24,11.24,0,0,1,271.21,240,11,11,0,0,1,260,229V24c0-13.91-10.94-24-24.86-24S210,10.09,210,24V228.64A11.24,11.24,0,0,1,199.21,240,11,11,0,0,1,188,229V56c0-13.91-12.08-24-26-24s-26,11.09-26,25V244.64A11.24,11.24,0,0,1,125.21,256,11,11,0,0,1,114,245V120c0-13.91-11.08-24-25-24s-25.12,10.22-25,24V336c0,117.41,72,176,160,176h16c88,0,115.71-39.6,136-88l68.71-169C451.33,237,448.31,220.25,432.8,211.44Z" }));
}
exports.default = SvgComponent;
