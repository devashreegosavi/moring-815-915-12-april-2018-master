var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Mobile = /** @class */ (function (_super) {
    __extends(Mobile, _super);
    function Mobile(nm, num) {
        var _this = _super.call(this) || this;
        _this.nm = nm;
        _this.num = num;
        return _this;
    }
    Mobile.prototype.whatNum = function (num) {
    };
    Mobile.prototype.whatNm = function (nm) {
        if (nm === void 0) { nm = 'android'; }
    };
    return Mobile;
}(Shape));
var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Box;
}(Shape));
var mob = new Mobile();
mob.whatNum('something');
