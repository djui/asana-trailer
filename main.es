class Scene {
    // #21324C
    //
    // #4F56BB #4FE7E7
    // #FF629A #FF6060
    // #1189DD #4FE7E7
    //
    // #4FE7E7 #8487FF
    // #FC2695 #FFD300
    //
    // #FFA35D #FF629A
    //
    // #4FE7E7 #1189DD
    // #FF629A #FC2695
    //
    // #FC2695 #FFD300
    // #4FE7E7 #4F56BB
    //
    //
    // #FFD300 #FF6060 #FC2695 #4F56BB #1189DD
    //         #FFA35D #FF629A #8487FF #4FE7E7

    static get colors() {
    //colors() {
        return [
            "#21324C",
            "#FFD300",
            "#FF6060", "#FFA35D",
            "#FC2695", "#FF629A",
            "#4F56BB", "#8487FF",
            "#1189DD", "#4FE7E7",
        ]
    }

    constructor(id) {
        this.id = document.querySelector(id)
        this.id.style.backgroundColor = "#25334D"
    }

    render(frame) {
        let i = Math.floor(frame % Scene.colors.length)
        this.id.style.backgroundColor = Scene.colors[i]
    }
}

class AnimationEngine {
    constructor(callback) {
        this.animation = null
        this.startTimestamp = null
    }

    start(callback) {
        let animationHandler = (timestamp) => {
            if (!this.startTimestamp) this.startTimestamp = timestamp
            let frame = timestamp - this.startTimestamp
            callback(frame)
            this.animation = window.requestAnimationFrame(animationHandler)
        }
        this.animation = window.requestAnimationFrame(animationHandler)
    }

    stop() {
        window.cancelAnimationFrame(this.animation)
    }
}

() => {
    let scene = new Scene("#scene")

    let frameHandler = (frame) => {
        scene.render(frame)
    }

    let engine = new AnimationEngine()
    engine.start(frameHandler)
    window.setTimeout(() => engine.stop(), 1000)
}()
