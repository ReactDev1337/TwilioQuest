class Ducktypium {
    constructor(crystalColor) {
        this.validateColor(crystalColor);

        this.color = crystalColor;
        this.calibrationSequence = [];
    }
    
    validateColor(color) {
        const ALLOWED_COLORS = ["red", "blue", "green", "yellow"];

        if(!ALLOWED_COLORS.some((allowed) => allowed === color)) {
            throw new Error("Invalid color!");
        }
    }

    refract(color) {
        this.validateColor(color);

        if (color === this.color) {
            return color;
        }

        const refractedColors = [
            color,
            this.color
        ];

        if (refractedColors.includes("red") && refractedColors.includes("blue")) {
            return "purple";
        } else if (refractedColors.includes("red") && refractedColors.includes("yellow")) {
            return "orange";
        } else if (refractedColors.includes("blue") && refractedColors.includes("yellow")) {
            return "green";
        }
    }

    calibrate(array) {
        this.calibrationSequence = array.sort().map((i) => { return i * 3; });
    }
}