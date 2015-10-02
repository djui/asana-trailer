//export default class {
class Scene {
    static get colors() {
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
