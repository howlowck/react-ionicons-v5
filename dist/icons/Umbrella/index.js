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
        React.createElement("path", { d: "M414.39,113.61A222.26,222.26,0,0,0,278.06,49.07a8.09,8.09,0,0,1-6.88-5.62,15.79,15.79,0,0,0-30.36,0,8.09,8.09,0,0,1-6.88,5.62A224,224,0,0,0,32,271.52a16.41,16.41,0,0,0,7.24,13.87,16,16,0,0,0,20.07-2.08,51.89,51.89,0,0,1,73.31-.06,15.94,15.94,0,0,0,22.6.15,62.59,62.59,0,0,1,81.49-5.87h0a8.24,8.24,0,0,1,3.29,6.59V431.54c0,8.6-6.6,16-15.19,16.44A16,16,0,0,1,208,432a16,16,0,0,0-16.29-16c-9,.16-15.9,8.11-15.7,17.1A48.06,48.06,0,0,0,223.38,480c26.88.34,48.62-21.93,48.62-48.81V284.12a8.24,8.24,0,0,1,3.29-6.59h0a62.59,62.59,0,0,1,81.4,5.78,16,16,0,0,0,22.62,0,51.91,51.91,0,0,1,73.38,0,16,16,0,0,0,19.54,2.41A16.4,16.4,0,0,0,480,271.51,222.54,222.54,0,0,0,414.39,113.61Z" }));
}
exports.default = SvgComponent;
