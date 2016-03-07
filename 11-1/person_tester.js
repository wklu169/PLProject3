/**
 * Created by Owner on 3/7/2016.
 */
$(document).ready(function() {
    $("#join_list").click(function() {
        var isValid = true;

        // validate the first name entry
        if ($("#first_name").val() == "") {
            $("#first_name_error").text("This field is required.");
            isValid = false;
        }
        else {
            $("#first_name_error").text("");
        }

        // validate the last name entry
        if ($("#last_name").val() == "") {
            $("#last_name_error").text("This field is required.");
            isValid = false;
        }
        else {
            $("#last_name_error").text("");
        }

        // validate the email address entry
        if ($("#email_address").val() == "") {
            $("#email_address_error").text("This field is required.");
            isValid = false;
        }
        else {
            $("#email_address_error").text("");
        }

        // validate the final entry
        if ($("#number").val() == "") {
            $("#number_error").text("This field is required.");
            isValid = false;
        }
        else {
            $("#number_error").text("");
        }

        // submit the form if all entries are valid
        if (isValid) {
            $("#form").submit();
        }
    });

    $("#first_name").focus();
});