$(function () {
    let header = $('#header');
    let logo = $('.logo')
    let navBar = $('.nav-bar');

    console.log("Hello");

    $('#properties-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<a href="#" class="slick-arrow slick-prev">previous</a>',
        nextArrow: '<a href="#" class="slick-arrow slick-next">next</a>',
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });

    $('#testimonials-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<a href="#" class="slick-arrow slick-prev"><</a>',
        nextArrow: '<a href="#" class="slick-arrow slick-next">></a>'
    });

    $(document).scroll(() => {
        let scrollT = $(document).scrollTop();
        if (scrollT > 0) {
            header.css('background-color', '#fff');
            logo.css('color', '#000');
            navBar.addClass('black-orange');
        }
        else {
            header.css('background-color', '');
            logo.css('color', '');
            navBar.removeClass('black-orange');
        }

        if (scrollT < 200) {
            header.css({'padding': '1.5rem', 'box-shadow': 'none'});
        }
        else {
            header.css({'padding': '0.9rem', 'box-shadow': '0 -4px 10px 1px'});
        }
    })

    // document.addEventListener("scroll", (event) => {
    //     let scrollTop = document.scrollTop;
    //     console.log(scrollTop);
    //     console.log("scrolling");

    //     if (scrollTop > 0) {
    //         console.log("Scrolled down");
    //         // $('#header').css('background', '#fff');
    //         console.log("hi");
    //     }
    // });
});