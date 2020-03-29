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
        React.createElement("path", { d: "M424.44,227.25a16,16,0,0,1-12.12-12.39c-7.68-36.68-24.45-68.15-49.18-92A153.57,153.57,0,0,0,256,80c-35.5,0-68.24,11.69-94.68,33.8a156.24,156.24,0,0,0-42,56,16,16,0,0,1-11.37,9.15c-27,5.62-51.07,17.34-69.18,33.87C13.39,235.88,0,267.42,0,304c0,36,14.38,68.88,40.49,92.59C65.64,419.43,99.56,432,136,432H396c32.37,0,60.23-8.57,80.59-24.77C499.76,388.78,512,361.39,512,328,512,270.43,470,237.42,424.44,227.25Zm-95.2-8.94-107.8,128a16,16,0,0,1-12,5.69h-.27a16,16,0,0,1-11.88-5.28l-45.9-50.87c-5.77-6.39-5.82-16.33.3-22.4a16,16,0,0,1,23.16.63l33.9,37.58,96-114a16,16,0,1,1,24.48,20.62Z" }));
}
exports.default = SvgComponent;
