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
        let a = e.currentTarget;
        let aHref = a.getAttribute("href");
        let element = document.querySelector(aHref);
        let top = element.offsetTop;
        window.scrollTo(0, top-80)

    }
}