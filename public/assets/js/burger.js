$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger_name").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("New Burger Added");
            location.reload();
        });
    });
    $(".eatburger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id")
        var devoured = {
            devoured: 1
        }
        $.ajax("/api/burgers/" + id, {
            type: PushSubscription,
            data: devoured
        }).then(function () {
            console.log("Burger has been DEVOURED!");
            location.reload();
        });
    });

    $(".trashburger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    })
})