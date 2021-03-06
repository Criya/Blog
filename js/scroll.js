!function () {
    //加载about, skill, project的位置
    var navPosition = document.querySelectorAll("[data-z]");

    for (let i=0; i<navPosition.length; i++){
        navPosition[i].classList.add("offset");

    }
    findClosetRemoveOffset()


    //定位当前位置，导航栏高亮位置
    window.addEventListener("scroll", ()=>{
        findClosetRemoveOffset();
    })

    function findClosetRemoveOffset(){
        let index = 0;

        for (let i=1; i<navPosition.length; i++){
            let currentPosition = window.scrollY;
            if(Math.abs(navPosition[index].offsetTop - currentPosition) > Math.abs(navPosition[i].offsetTop - currentPosition)){
                index = i;
            }
        }
        let tagId = navPosition[index].id;

        //一开始在下部加载时上浮上部
        let upFlow = index
        while(upFlow-- > 1){
            navPosition[upFlow].classList.remove("offset");
        }

        let li = document.querySelector('[href="#'+tagId+'"]').parentNode
        let bro = li.parentNode.childNodes;
        for (let i = 0; i < bro.length; i++){
            if (bro[i].nodeType != 3)
                bro[i].classList.remove("highlight");
        }
        li.classList.add("highlight");

        //移除offset
        navPosition[index].classList.remove("offset");
    }

}.call()
