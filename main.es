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

window.onload = function () {
    let W = 800
    let H = 450
    let s = Snap('#canvas')

    let backgroundGradient1 = s.paper.gradient('r(1.0, 0.2, 1.0) #FF6060 - #FF629A')
    let background = s.paper
        .rect(0, 0, W, H)
        .attr({
            fill: backgroundGradient1
        })

    let circle1Path = s.path('m301.5,353.5c46,-19 460,-218 27,-267')
        .attr({fill: 'none'})

    let circle1 = s.circle(600, 450, 20)
        .attr({fill: '#ffffff'})

    Snap.animate(0, circle1Path.getTotalLength(), function(v) {
        let point = circle1Path.getPointAtLength(v)
        let bbox = circle1.getBBox(1)
        let x = point.x - bbox.cx
        let y = point.y - bbox.cy
        circle1.transform(`t${x},${y}`)
    }, 3000, mina.easeinout)
}
