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
        React.createElement("path", { d: "M231.8,272V224H376l8-48H231.8v-8.12c0-38.69,16.47-62.56,87.18-62.56,28.89,0,61.45,2.69,102.5,9.42l10.52-70A508.54,508.54,0,0,0,315.46,32C189.26,32,135,76.4,135,158.46V176l-55,0v48h55v48H80v48h55v33.54C135,435.6,189.23,480,315.43,480a507.76,507.76,0,0,0,116.44-12.78l-10.58-70c-41.05,6.73-73.46,9.42-102.35,9.42-70.7,0-87.14-20.18-87.14-67.94V320H360.27l7.87-48Z" }));
}
exports.default = SvgComponent;