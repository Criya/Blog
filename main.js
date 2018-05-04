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
        let n = 25; //下滑动次数
        let t = 500 / 25; //多久滑一次
        let d = +(targetY - currentY) / 25; //每次滑动距离
        let i = 1;
        let id = setInterval(()=>{
            if (i++ >= n){
                window.clearInterval(id);
                return;
            }
            window.scrollTo(0, currentY + d * i)
        }, t)


    }
}