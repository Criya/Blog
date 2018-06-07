window.Controller = function (options) {
    /** Controller的作用是封装view和model的初始化并且
     *  调用用户的自定义init和bindEvent */

    //扩展的init方法
    var init = options.init;

    let object = {
        init: function (view, model) {
            this.view = view;
            this.model = model;
            this.model.init();
            //this绑定的是当前封装过的object
            init.call(this, view, model);
            this.bindEvent();
        },

    }
    //绑定自定义的controller方法
    for (let key in options){
        if (key !== "init") {
            object[key] = options[key];
        }

    }

    return object;
}