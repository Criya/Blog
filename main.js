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

/*显示二级菜单*/
let liTags = document.getElementsByClassName("submenuTrigger");
for (let i=0; i<liTags.length; i++){
    liTags[i].onmouseenter = function (e) {
        let li = e.currentTarget;
        let ol = li.getElementsByTagName('ol')[0];
        ol.classList.add("active");
    }

    liTags[i].onmouseleave = function (e) {
        let li = e.currentTarget;
        let ol = li.getElementsByTagName('ol')[0];
        ol.classList.remove("active");
    }
}