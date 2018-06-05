!function () {
    var view = document.querySelector("#mySwiper");
    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.swiperInit()
        },
        swiperOption: {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        },
        swiperInit: function () {
            new Swiper ('.swiper-container',this.swiperOption )
        }
    }
    controller.init(view)
}.call()
