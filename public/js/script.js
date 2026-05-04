$(document).ready(function() {
    // search bar
    $(document).ready(function() {
        $('#fromCurrency, #toCurrency').select2({
            placeholder: "Select currency",
            allowClear: true
        });
    });

    // reverse button
    $(document).on("click", "#reverseBtn", function() {
        const from = $("#fromCurrency").val();
        const to = $("#toCurrency").val();

        $("#fromCurrency").val(to).trigger("change");
        $("#toCurrency").val(from).trigger("change");
    });
});
