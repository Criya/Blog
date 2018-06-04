
window.addEventListener("scroll", ()=>{
    //当滚动后，导航栏添加stick效果
    if(window.scrollY > 0){
        topNav.classList.add("stick");
    }
    else{
        topNav.classList.remove("stick");
    }
})
