!function(){
    var view = View("#topNav");
    var controller = Controller({
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
    })

    controller.init(view);
}.call();

