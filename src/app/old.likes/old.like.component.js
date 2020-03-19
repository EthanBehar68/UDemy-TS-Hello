"use strict";
// Part of Section 2's Exercise
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_likesCounts, _isSelected) {
        this._likesCounts = _likesCounts;
        this._isSelected = _isSelected;
    }
    LikeComponent.prototype.onClick = function () {
        this._likesCounts += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected;
        console.log("Number of likes is: " + this._likesCounts + " Like button is selected: " + this._isSelected);
    };
    Object.defineProperty(LikeComponent.prototype, "likesCount", {
        get: function () {
            return this._likesCounts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
//# sourceMappingURL=like.component.js.map