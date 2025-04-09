document.getElementById('card-form').addEventListener('input', updateCardPreview);
document.getElementById('card-form').addEventListener('submit', addCardToTable);

function updateCardPreview() {
    const bankName = document.getElementById('bank-name').value;
    const paymentSystem = document.getElementById('payment-system').value;
    const cardNumber = document.getElementById('card-number').value;
    const cardHolder = document.getElementById('card-holder').value;
    const expiryDate = document.getElementById('expiry-date').value;

    document.getElementById('bank-logo').textContent = bankName;
    document.getElementById('payment-logo').textContent = paymentSystem;
    document.getElementById('preview-card-number').textContent = formatCardNumber(cardNumber);
    document.getElementById('preview-card-holder').textContent = cardHolder;
    document.getElementById('preview-expiry-date').textContent = expiryDate;
}

function formatCardNumber(number) {
    return number.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ').trim();
}

function addCardToTable(event) {
    event.preventDefault();

    if (!validateForm()) {
        return;
    }

    const bankName = document.getElementById('bank-name').value;
    const paymentSystem = document.getElementById('payment-system').value;
    const cardNumber = document.getElementById('card-number').value;
    const cardHolder = document.getElementById('card-holder').value;
    const expiryDate = document.getElementById('expiry-date').value;

    const table = document.getElementById('card-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = bankName;
    newRow.insertCell(1).textContent = paymentSystem;
    newRow.insertCell(2).textContent = formatCardNumber(cardNumber);
    newRow.insertCell(3).textContent = cardHolder;
    newRow.insertCell(4).textContent = expiryDate;

    document.getElementById('card-form').reset();
    updateCardPreview();
}

function validateForm() {
    const cardNumber = document.getElementById('card-number').value;
    const cardHolder = document.getElementById('card-holder').value;
    const expiryDate = document.getElementById('expiry-date').value;

    const cardNumberValid = /^\d{16}$/.test(cardNumber.replace(/\s+/g, ''));
    const cardHolderValid = /^[A-Za-z\s]+$/.test(cardHolder);
    const expiryDateValid = /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate);

    document.getElementById('card-number-error').textContent = cardNumberValid ? '' : 'Номер карты должен содержать 16 цифр.';
    document.getElementById('card-holder-error').textContent = cardHolderValid ? '' : 'Имя держателя должно содержать только латинские буквы.';
    document.getElementById('expiry-date-error').textContent = expiryDateValid ? '' : 'Срок действия должен быть в формате MM/YY.';

    return cardNumberValid && cardHolderValid && expiryDateValid;
} 