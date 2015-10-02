//export default class {
class Renderer {
    constructor(handler) {
        this.handler = handler
        this.request = null
        this.start = null
    }

    run() {
        let renderLoop = (now) => {
            if (!this.start) this.start = now
            let frame = now - this.start
            this.handler(frame)
            this.request = window.requestAnimationFrame(renderLoop)
        }
        this.request = window.requestAnimationFrame(renderLoop)
    }

    stop() {
        window.cancelAnimationFrame(this.request)
    }

    stopAfter(timeout) {
        window.setTimeout(() => this.stop(), timeout)
    }
}
