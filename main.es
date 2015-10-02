/*
    #21324C #FFD300 #FF6060 #FC2695 #4F56BB #1189DD
                    #FFA35D #FF629A #8487FF #4FE7E7
    #
    #4F56BB #4FE7E7
    #FF629A #FF6060
    #1189DD #4FE7E7
    #
    #4FE7E7 #8487FF
    #FC2695 #FFD300
    #
    #FFA35D #FF629A
    #
    #4FE7E7 #1189DD
    #FF629A #FC2695
    #
    #FC2695 #FFD300
    #4FE7E7 #4F56BB
*/

window.onload = init
function init() {
    var s = Snap("#canvas")
    console.log(s);
    let bigCircle = s.circle(150, 150, 100)
    bigCircle.attr({
        fill: "#bada55",
        stroke: "#000",
        strokeWidth: 5
    })
    let smallCircle = s.circle(100, 150, 70)
}
