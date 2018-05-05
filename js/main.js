//加载动画
window.onload = function () {
    setTimeout(function () {
        loadingSwitch.classList.remove("active");
    }, 0);
};

//加载about, skill, project的位置
var navPosition = document.querySelectorAll("[data-z]");

window.onscroll = function () {
    //当滚动后，导航栏添加stick效果
    if(window.scrollY > 0){
        topNav.classList.add("stick");
    }
    else{
        topNav.classList.remove("stick");
    }

    //定位当前位置，导航栏高亮位置

    let index = 0;
    for (let i=1; i<navPosition.length; i++){
        let currentPosition = window.scrollY;
        if(Math.abs(navPosition[index].offsetTop - currentPosition) > Math.abs(navPosition[i].offsetTop - currentPosition)){
            index = i;
        }
    }
    let tagId = navPosition[index].id;

    let li = document.querySelector('[href="#'+tagId+'"]').parentNode
    let bro = li.parentNode.childNodes;
    console.log(li.parentNode.childNodes[0].nodeType);
    for (let i = 0; i < bro.length; i++){
        if (bro[i].nodeType != 3)
            bro[i].classList.remove("active");
    }
    li.classList.add("active");


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
        let d = (targetY - currentY);
        console.log(d);
        let t = Math.abs(300 * d) / 100;
        t = t>800? 800:t;
        console.log(t);

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