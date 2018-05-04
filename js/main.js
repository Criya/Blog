//加载动画
window.onload = function () {
    setTimeout(function () {
        loadingSwitch.classList.remove("active");
    }, 0);
};

window.onscroll = function () {
    if(window.scrollY > 0){
        topNav.classList.add("stick");
    }
    else{
        topNav.classList.remove("stick");
    }
}

let liTags = document.querySelectorAll("#topNav nav ul li")
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

let aTags = document.querySelectorAll("#topNav nav > ul > li > a")
for (let i=0; i<aTags.length; i++){
    aTags[i].onclick = function (e) {
        e.preventDefault();
        //获取跳转位置
        let targetY = document.querySelector(e.currentTarget.getAttribute("href")).offsetTop - 80;
        let currentY = window.scrollY;

        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);

        var coords = {y: currentY };
        var tween = new TWEEN.Tween(coords)
            .to({y: targetY }, 1000)
            .easing(TWEEN.Easing.Cubic.Out)
            .onUpdate(function() {
                console.log(coords.y)
                window.scrollTo(0, coords.y)
            })
            .start();
    }
}