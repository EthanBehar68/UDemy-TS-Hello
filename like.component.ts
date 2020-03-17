
// Part of Section 2's Exercise

export class LikeComponent {
    
    constructor(private _likesCounts: number, private _isSelected: boolean) {
    }

    onClick() {
        this._likesCounts += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected

        console.log(`Number of likes is: ${this._likesCounts} Like button is selected: ${this._isSelected}`);
    }
}