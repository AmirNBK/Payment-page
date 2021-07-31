$(".expiration-line-left").keyup(function () {
    if (this.value.length == this.maxLength) {
        $(this).next('.expiration-line-right').focus();
    }
});
$(".expiration-line-right").keyup(function () {
    if (this.value.length == this.maxLength) {
        $(this).next().focus();
    }
});
$(".cardholder-number-line1").keyup(function () {
    if (this.value.length == this.maxLength) {
        $(this).next().focus();
    }
});
$(".cardholder-number-line2").keyup(function () {
    if (this.value.length == this.maxLength) {
        $(this).next().focus();
    }
});
$(".cardholder-number-line3").keyup(function () {
    if (this.value.length == this.maxLength) {
        $(this).next().focus();
    }
});
$(".cardholder-number-line4").keyup(function z() {
    if (this.value.length == this.maxLength) {
        $(this).next().focus();
    }
});