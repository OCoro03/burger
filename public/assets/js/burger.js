$(function () {
    $(".change-devour").on("click", function (event) {
        // event.preventDefault();

        var id = $(this).data("id")

        var newState = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(function () {
            console.log("Burger has been DEVOURED!");
            location.reload();
        });
    });

    $(".create-form").on("submit", function (event) {
        // console.log("#burger_name");
        event.preventDefault();

        var name = $("[name=burger-name]").val().trim()

        if (name !== "") {
            var newBurger = {
                name: name
            };

            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function () {
                console.log("New Burger Added");
                location.reload();
            });
        }
        // var newBurger = {
        //     burger_name: $("#burger_name").val().trim(),
        //     devoured: 0
        // };
        else {
            $("[name=burger-name]").val("");
        }

    });
    // $(".devoured").on("click", function (event) {
    //     event.preventDefault();

    //     var id = $(this).data("id");

    //     $.ajax({
    //         type: "DELETE",
    //         url: "/api/burgers/" + id
    //     }).then(location.reload());
    // })
})