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
        React.createElement("path", { d: "M256,368a16,16,0,0,1-7.94-2.11L108,285.84a8,8,0,0,0-12,6.94V368a16,16,0,0,0,8.23,14l144,80a16,16,0,0,0,15.54,0l144-80A16,16,0,0,0,416,368V292.78a8,8,0,0,0-12-6.94L263.94,365.89A16,16,0,0,1,256,368Z" }),
        React.createElement("path", { d: "M495.92,190.5s0-.08,0-.11a16,16,0,0,0-8-12.28l-224-128a16,16,0,0,0-15.88,0l-224,128a16,16,0,0,0,0,27.78l224,128a16,16,0,0,0,15.88,0L461,221.28a2,2,0,0,1,3,1.74V367.55c0,8.61,6.62,16,15.23,16.43A16,16,0,0,0,496,368V192A14.76,14.76,0,0,0,495.92,190.5Z" }));
}
exports.default = SvgComponent;
