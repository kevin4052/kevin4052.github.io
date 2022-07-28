"use strict";

//Validation forms
function validateForm(selector) {
    Array.from(document.querySelectorAll(selector)).forEach((item) => {
        item.addEventListener("input", (e) => {
            if (e.target.value === "") {
                item.dataset.touched = false;
                console.log("1", item.dataset.touched);
            }
        });
        item.addEventListener("invalid", () => {
            item.dataset.touched = true;
            console.log("2", item.dataset.touched);
        });
        item.addEventListener("blur", () => {
            if (item.value !== "") item.dataset.touched = true;
            console.log("3", item.dataset.touched);
        });
    });
}

validateForm(".js-form .form-field");

var formName = ".js-form";
var form = document.querySelector(formName);

form.addEventListener("submit", function (e) {
    // e.preventDefault();
    submitForm(e, formName);
});

function submitForm(e, formName) {
    e.preventDefault();
    var name = $(formName + " .js-field-name").val();
    var email = $(formName + " .js-field-email").val();
    var message = $(formName + " .js-field-message").val();

    var formData = {
        name: name,
        email: email,
        message: message,
    };

    console.log(formData);

    $.ajax({
        type: "POST",
        url: "mail.php",
        data: formData,
        success: function (result) {
            console.log("success", result);
            //...
        },
        error: function (error) {
            console.log("error", error);
            //...
        },
    });
}
