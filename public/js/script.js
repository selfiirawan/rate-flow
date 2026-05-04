$(document).ready(function() {
    // search bar
    $('#fromCurrency, #toCurrency').select2({
        placeholder: "Select currency",
        allowClear: true,
        dropdownParent: $('body'),
        // full formatting of options (code + name) in dropdown
        templateResult: function(option) {
            if (!option.id) return option.text;
            return $('<span>' + option.text + '</span>');
        },

        // only show code in the selected value
        templateSelection: function(option) {
            if (!option.id) return option.text;
            return $('<span>' + option.id + '</span>');
        }
    });

    // reverse button
    $(document).on("click", "#reverseBtn", function() {
        const from = $("#fromCurrency").val();
        const to = $("#toCurrency").val();

        $("#fromCurrency").val(to).trigger("change");
        $("#toCurrency").val(from).trigger("change");
    });
});
