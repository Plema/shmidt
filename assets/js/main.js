
$(document).ready(function () {


    $('.slider').slick({
        infinite:false,
        draggable:true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',
        responsive: [

            {

                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1024,
                settings: {

                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {

                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {


                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {

                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]

    });

    $(function(){
        $(".preview").delay(5000).slideUp(300);

    });
    $('.preview').on("click", function () {

        $(".preview").css('display', 'none');

    });
});
