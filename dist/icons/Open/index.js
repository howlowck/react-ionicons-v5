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
        React.createElement("path", { d: "M224,304a16,16,0,0,1-11.31-27.31L370.63,118.75A55.7,55.7,0,0,0,344,112H104a56.06,56.06,0,0,0-56,56V408a56.06,56.06,0,0,0,56,56H344a56.06,56.06,0,0,0,56-56V168a55.7,55.7,0,0,0-6.75-26.63L235.31,299.31A15.92,15.92,0,0,1,224,304Z" }),
        React.createElement("path", { d: "M448,48H336a16,16,0,0,0,0,32h73.37l-38.74,38.75a56.35,56.35,0,0,1,22.62,22.62L432,102.63V176a16,16,0,0,0,32,0V64A16,16,0,0,0,448,48Z" }));
}
exports.default = SvgComponent;
