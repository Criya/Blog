!function () {
    var view = document.querySelector("#topNav");
    var controller = {
        view: null,
        liTags: null,
        init: function (view) {
            this.view = view;
            this.liTags = view.querySelectorAll("nav ul li")
            this.bindEvents();
            this.scrollFunc();
        },
        bindEvents: function () {
            var liTags = this.liTags;

            for (let i=0; i<liTags.length; i++){
                liTags[i].onmouseenter = function (e) {
                    let li = e.currentTarget;
                    li.classList.add("active");
                }

                liTags[i].onmouseleave = function (e) {
                    let li = e.currentTarget;
                    li.classList.remove("active");
                }
            }
        },
        scrollFunc: function () {
            var aTags = this.view.querySelectorAll("nav > ul > li > a")
            for (let i=0; i<aTags.length; i++){
                aTags[i].onclick = function (e) {
                    e.preventDefault();
                    //获取跳转位置
                    let targetY = document.querySelector(e.currentTarget.getAttribute("href")).offsetTop - 80;
                    let currentY = window.scrollY;
                    let d = (targetY - currentY);
                    let t = Math.abs(300 * d) / 100;
                    t = t>800? 800:t;

                    function animate(time) {
                        requestAnimationFrame(animate);
                        TWEEN.update(time);
                    }
                    requestAnimationFrame(animate);

                    var coords = {y: currentY };
                    var tween = new TWEEN.Tween(coords)
                        .to({y: targetY }, t)
                        .easing(TWEEN.Easing.Cubic.Out)
                        .onUpdate(function() {
                            window.scrollTo(0, coords.y)
                        })
                        .start();
                }
            }
        },

    }

    controller.init(view)
}.call()
