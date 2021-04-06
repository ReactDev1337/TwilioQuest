class Materializer {
    constructor(targetName) {
        this.target = targetName;
        this.activated = false;
    }
    activate() {
        this.activated = true;
    }
    materialize() {
        if (this.activated) {
            return this.target;
        }
    }
}