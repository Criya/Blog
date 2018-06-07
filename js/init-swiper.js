!function () {
    var view = View("#mySwiper");
    var controller = Controller({
        init: function (view) {
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
    })
    controller.init(view)
}.call()
