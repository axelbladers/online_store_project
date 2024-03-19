document.addEventListener("DOMContentLoaded", function () {
    const cardNumberInput = document.getElementById('card-number');
    const expirationDateInput = document.getElementById('expiration-date');
    const cvvInput = document.getElementById('cvv');
    const payNowButton = document.getElementById('pay-now');
    const paymentForm = document.getElementById('payment-form');

    payNowButton.addEventListener('click', function () {
        const cardNumber = cardNumberInput.value.trim();
        const expirationDate = expirationDateInput.value.trim();
        const cvv = cvvInput.value.trim();

        if (validateCardDetails(cardNumber, expirationDate, cvv)) {
            alert('Payment successful!');
            window.location.href = 'store.html';
        } else {
            alert('Invalid card details. Please check and try again.');
        }
    });

    function validateCardDetails(cardNumber, expirationDate, cvv) {
        return cardNumber !== '' && expirationDate !== '' && cvv !== '';
    }
});
