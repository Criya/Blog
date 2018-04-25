//加载动画
window.onload = function () {
    setTimeout(function () {
        loadingSwitch.classList.remove("active");
    }, 0);
};

window.onscroll = function () {
    console.log(window.scrollY)
    if(window.scrollY > 0){
        topNav.classList.add("stick");
    }
    else{
        topNav.classList.remove("stick")
    }
}