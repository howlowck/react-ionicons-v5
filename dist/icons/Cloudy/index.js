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
        React.createElement("path", { d: "M376,432H116c-32.37,0-60.23-8.57-80.59-24.77C12.24,388.78,0,361.39,0,328c0-57.57,42-90.58,87.56-100.75a16,16,0,0,0,12.12-12.39c7.68-36.68,24.45-68.15,49.18-92A153.57,153.57,0,0,1,256,80c35.5,0,68.24,11.69,94.68,33.8a156.24,156.24,0,0,1,42.05,56,16,16,0,0,0,11.37,9.16c27,5.61,51.07,17.33,69.18,33.85C498.61,235.88,512,267.42,512,304c0,36-14.38,68.88-40.49,92.59C446.36,419.43,412.44,432,376,432Z" }));
}
exports.default = SvgComponent;
