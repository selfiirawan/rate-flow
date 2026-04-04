// search bar
$(document).ready(function() {
    $('#fromCurrency, #toCurrency').select2({
        placeholder: "Select currency",
        allowClear: true
    });
});

// reverse button
$("#reverseBtn").on("click", function() {
    const from = $("#fromCurrency").val();
    const to = $("#toCurrency").val();

    $("#fromCurrency").val(to).trigger("change");
    $("#toCurrency").val(from).trigger("change");
});
