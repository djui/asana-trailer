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

'use strict';

window.onload = function () {
    var W = 800;
    var H = 450;
    var s = Snap('#canvas');

    var backgroundGradient1 = s.paper.gradient('r(1.0, 0.2, 1.0) #FF6060 - #FF629A');
    var background = s.paper.rect(0, 0, W, H).attr({
        fill: backgroundGradient1
    });

    var circle1Path = s.path('m300,350 c50,-20 450,-200 25,-250').attr({ fill: 'none' });

    var circle1 = s.circle(600, 450, 20).attr({ fill: '#ffffff' });

    Snap.animate(0, circle1Path.getTotalLength(), function (v) {
        var point = circle1Path.getPointAtLength(v);
        var bbox = circle1.getBBox(1);
        var x = point.x - bbox.cx;
        var y = point.y - bbox.cy;
        circle1.transform('t' + x + ',' + y);
    }, 3000, mina.easeinout);
};
