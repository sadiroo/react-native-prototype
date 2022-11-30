export default class Timer {

    get time() {
        return this.#time;
    }
    set time(value) {
        this.#time = value;
    }

    timeChanged = new Event('timeChanged');

    timeFormatted() {
        const minFloat = this.#time / 60
        const min = Math.floor(minFloat);
        const sec = (minFloat - min) * 60;
        const minString = min < 10 ? "0" + min : min;
        const secString = sec < 10 ? "0" + sec : sec;
        return minString + ":" + secString;
    }


}