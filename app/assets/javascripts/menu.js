$(".icon-menu").click(function() {
        $(".menu").animate({
            left: "0px"
        }, 200)
    }), $(".icon-close").click(function() {
        $(".menu").animate({
            left: "-240px"
        }, 200)
    });