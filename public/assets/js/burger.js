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

    $("#burger-me-up-scotty").on("click", function (event) {
        // console.log("#burger_name");
        event.preventDefault();

        var name = $("#name").val();
        console.log(name)

        if (name !== "") {
            var newBurger = {
                burger_name: name,
                devoured: 0
            };

            $.post("/api/burgers", newBurger
            ).then(function () {
                console.log("New Burger Added");
                location.reload();
            });
        }
        // var newBurger = {
        //     burger_name: $("#burger_name").val().trim(),
        //     devoured: 0
        // };
    });
    
})