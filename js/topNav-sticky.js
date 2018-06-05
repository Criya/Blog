!function(){
    var view = document.querySelector("#topNav");
    var controller = {
        view: null,
        init: function (view) {
            this.view = view;
            this.bindEvent();
        },
        bindEvent: function () {
            window.addEventListener("scroll", ()=>{
                //当滚动后，导航栏添加stick效果
                if(window.scrollY > 0){
                    this.active();
                }
                else{
                    this.deactive();
                }
            })
        },
        active: function () {
            this.view.classList.add("stick");
        },
        deactive: function () {
            this.view.classList.remove("stick");
        }
    }

    controller.init(view);
}.call();

