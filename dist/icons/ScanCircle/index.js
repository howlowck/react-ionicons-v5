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
        React.createElement("path", { d: "M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM216,368H188a44.05,44.05,0,0,1-44-44V296a16,16,0,0,1,32,0v28a12,12,0,0,0,12,12h28a16,16,0,0,1,0,32Zm0-192H188a12,12,0,0,0-12,12v28a16,16,0,0,1-32,0V188a44.05,44.05,0,0,1,44-44h28a16,16,0,0,1,0,32ZM368,324a44.05,44.05,0,0,1-44,44H296a16,16,0,0,1,0-32h28a12,12,0,0,0,12-12V296a16,16,0,0,1,32,0Zm0-108a16,16,0,0,1-32,0V188a12,12,0,0,0-12-12H296a16,16,0,0,1,0-32h28a44.05,44.05,0,0,1,44,44Z" }));
}
exports.default = SvgComponent;
