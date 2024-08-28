$(document).ready(function () {


    $(".mgnb_wrap").hide();
    $(".mgnb_button").click(function () {
        $(".mgnb_wrap").stop().slideToggle();
    });

    $(".mgnb li").click(function () {
        $(".mgnb_wrap").stop().slideUp();
    });






    const content = "Are you looking for a designer?";

    function typingEffect(className) {
        const textElement = document.querySelector(className);
        let i = 0;

        function typing() {
            let txt = content[i++];
            textElement.innerHTML += txt;
            if (i > content.length) {
                textElement.textContent = "";
                i = 0;
            }
        }

        setInterval(typing, 200);
    }

    typingEffect(".message_txt");
    typingEffect(".message2_txt");



    $(".more_buttom").hide();
    $(".team_list > li").click(function () {
        const isActive = $(this).hasClass("active");

        $(".more_buttom").fadeOut();
        $(".team_list > li").removeClass("active");

        if (!isActive) {
            $(this).find(".more_buttom").fadeIn();
            $(this).addClass("active");
        }
    });


    $(".contact_tit, .contact_txt").hide();
    $(".button").click(function () {
        $(".epilogue_tit, .epilogue_txt").stop().fadeOut(500, function () {
            $(".contact_tit, .contact_txt").stop().fadeIn(700);
        });
    });


    $(".modal").hide();

    $(".design_son").click(function () {
        $(".modal_son").stop().show();
        document.body.classList.add('modal-open');
        $(".modal_son").scrollTop(0);
    });

    $(".design_br").click(function () {
        $(".modal_br").stop().show();
        document.body.classList.add('modal-open');
        $(".modal_br").scrollTop(0);
    });

    $(".design_dragon").click(function () {
        $(".modal_dragon").stop().show();
        document.body.classList.add('modal-open');
        $(".modal_dragon").scrollTop(0);
    });


    $(".close_button").click(function () {
        $(".modal").stop().hide();
        document.body.classList.remove('modal-open');
    });



});