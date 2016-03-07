/**
 * Created by Owner on 3/7/2016.
 */
$(document).ready(function() {
    $("#join_list").click(function() {
        var firstName = $("#first_name").val()
        var lastName = $("#last_name").val()
        var emailAddress = $("#email_address").val()
        var number = $("#number").val()
        var isValid = true;

        // validate the first name entry
        if (firstName == "") {
            $("#first_name_error").text("This field is required.");
            isValid = false;
        }
        else {
            $("#first_name_error").text("");
        }

        // validate the last name entry
        if (lastName == "") {
            $("#last_name_error").text("This field is required.");
            isValid = false;
        }
        else {
            $("#last_name_error").text("");
        }

        // validate the email address entry
        if (emailAddress == "") {
            $("#email_address_error").text("This field is required.");
            isValid = false;
        }
        else {
            $("#email_address_error").text("");
        }

        // validate the final entry
        if (number == "") {
            $("#number_error").text("This field is required.");
            isValid = false;
        }
        else {
            $("#number_error").text("");
        }

        // submit the form if all entries are valid
        if (isValid) {
            alert (firstName + " " + lastName + "\n" + emailAddress +  "\n" + number);
            $("#form").submit();
        }
    });

    $("#continue").click(function () {
        $("#return").submit();
    });

    $("#first_name").focus();
});