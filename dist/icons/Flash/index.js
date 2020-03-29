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
        React.createElement("path", { d: "M194.82,496a18.36,18.36,0,0,1-18.1-21.53l0-.11L204.83,320H96a16,16,0,0,1-12.44-26.06L302.73,23a18.45,18.45,0,0,1,32.8,13.71c0,.3-.08.59-.13.89L307.19,192H416a16,16,0,0,1,12.44,26.06L209.24,489A18.45,18.45,0,0,1,194.82,496Z" }));
}
exports.default = SvgComponent;
