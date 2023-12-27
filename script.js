function selectCard(cardNumber) {
    // Remove the 'selected' class from all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('selected'));

    // Add the 'selected' class to the clicked card
    const selectedCard = document.querySelector(`.card:nth-child(${cardNumber})`);
    selectedCard.classList.add('selected');
}
