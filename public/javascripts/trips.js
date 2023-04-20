$(document).ready(function () {   
    // Show add trip form.
    $(".add-trip-btn").click(function (e) {
        $(this).next().toggle();
    });
    // Show add activity form.
    $(".add-activity-btn").click(function (e) {
        $(this).next().toggle();
    });
    // Show update trip form.
    $(".update-trip-btn").click(function (e) {
        $(this).parent().next().toggle();
    });
    // Handle delete trip click.
    $(".delete-trip-btn").click(function (e) {
        const id = $(this).data("id");
        $.ajax({
            url: `/api/trips/${id}`,
            type: 'DELETE',
            success: function(result) {
                window.location.replace('/trips');
            }
        });
    })
});