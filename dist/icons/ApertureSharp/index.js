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
        React.createElement("polygon", { points: "216 48 345.49 176.18 345.49 48 216 48" }),
        React.createElement("polygon", { points: "181.47 58.38 80 134 256 134 181.47 58.38" }),
        React.createElement("polygon", { points: "336 344 464 344 464 216 336 344" }),
        React.createElement("polygon", { points: "454 182 378 80 378 256 454 182" }),
        React.createElement("polygon", { points: "48 166 48 294 176 166 48 166" }),
        React.createElement("polygon", { points: "330 454 432 378 256 378 330 454" }),
        React.createElement("polygon", { points: "58 330 134 432 134 256 58 330" }),
        React.createElement("path", { d: "M345.49,222.12l-55.55-55.46H222.06l-55.55,55.46v67.76l55.62,55.52c.44,0,.88-.06,1.33-.06h66.48l55.55-55.46Z" }),
        React.createElement("polygon", { points: "165.98 336.09 166 464 294 464 165.98 336.09" }));
}
exports.default = SvgComponent;
