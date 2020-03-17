"use strict";
// Part of Section 2's Exercise
exports.__esModule = true;
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
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
