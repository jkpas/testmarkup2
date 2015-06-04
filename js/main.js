jQuery(function ($) {

    //region ===== .sidebar-filter =====
    $(".sidebar-filter > li").on("click", function () {
        $(this).addClass("active-sidebar-filter").siblings().removeClass("active-sidebar-filter");
    });
    //endregion



    //region ===== .main-navigation-tab =====
    $(".main-navigation-list > li").on("click", function () {
        $(this).addClass("nav-active").siblings().removeClass("nav-active");
    });
    //endregion



    //region ===== .film-page-tab =====
    $("#cadrs-tab").on("click", function () {
            $(".cadrs-wrapper").css("display", "block");
            $(".comments-wrapper, .trailer-wrapper, .description-wrapper").css("display", "none");
            $("#cadrs-tab").addClass("active-film-menu");
            $("#comments-tab, #trailer-tab, #description-tab").removeClass("active-film-menu");
    });

    $("#trailer-tab").on("click", function () {
            $(".trailer-wrapper").css("display", "block");
            $(".comments-wrapper, .cadrs-wrapper, .description-wrapper").css("display", "none");
            $("#trailer-tab").addClass("active-film-menu");
            $("#comments-tab, #cadrs-tab, #description-tab").removeClass("active-film-menu");
    });

    $("#description-tab").on("click", function () {
            $(".description-wrapper").css("display", "block");
            $(".comments-wrapper, .trailer-wrapper, .cadrs-wrapper").css("display", "none");
            $("#description-tab").addClass("active-film-menu");
            $("#comments-tab, #cadrs-tab, #trailer-tab").removeClass("active-film-menu");
    });

    $("#comments-tab").on("click", function () {
            $(".comments-wrapper").css("display", "block");
            $(".description-wrapper, .trailer-wrapper, .cadrs-wrapper").css("display", "none");
            $("#comments-tab").addClass("active-film-menu");
            $("#trailer-tab, #cadrs-tab, #description-tab").removeClass("active-film-menu");
    });

    //endregion

});
