"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scene = (function () {
    _createClass(Scene, null, [{
        key: "colors",

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

        get: function get() {
            //colors() {
            return ["#21324C", "#FFD300", "#FF6060", "#FFA35D", "#FC2695", "#FF629A", "#4F56BB", "#8487FF", "#1189DD", "#4FE7E7"];
        }
    }]);

    function Scene(id) {
        _classCallCheck(this, Scene);

        this.id = document.querySelector(id);
        this.id.style.backgroundColor = "#25334D";
    }

    _createClass(Scene, [{
        key: "render",
        value: function render(frame) {
            var i = Math.floor(frame % Scene.colors.length);
            this.id.style.backgroundColor = Scene.colors[i];
        }
    }]);

    return Scene;
})();

var AnimationEngine = (function () {
    function AnimationEngine(callback) {
        _classCallCheck(this, AnimationEngine);

        this.animation = null;
        this.startTimestamp = null;
    }

    _createClass(AnimationEngine, [{
        key: "start",
        value: function start(callback) {
            var _this = this;

            var animationHandler = function animationHandler(timestamp) {
                if (!_this.startTimestamp) _this.startTimestamp = timestamp;
                var frame = timestamp - _this.startTimestamp;
                callback(frame);
                _this.animation = window.requestAnimationFrame(animationHandler);
            };
            this.animation = window.requestAnimationFrame(animationHandler);
        }
    }, {
        key: "stop",
        value: function stop() {
            window.cancelAnimationFrame(this.animation);
        }
    }]);

    return AnimationEngine;
})();

(function () {
    var scene = new Scene("#scene");

    var frameHandler = function frameHandler(frame) {
        scene.render(frame);
    };

    var engine = new AnimationEngine();
    engine.start(frameHandler);
    window.setTimeout(function () {
        return engine.stop();
    }, 1000);
})();
