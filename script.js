function selectCard(cardNumber) {
    // Remove the 'selected' class from all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('selected'));

    // Add the 'selected' class to the clicked card
    const selectedCard = document.querySelector(`.card:nth-child(${cardNumber})`);
    selectedCard.classList.add('selected');
}

function redirectTo(url) {
    window.location.href = url;
}

document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box"); // Use querySelectorAll to select all boxes

    boxes.forEach(function (box) {
        box.addEventListener("click", function () {
            const hiddenText = box.querySelector(".hidden-text");
            hiddenText.style.display = hiddenText.style.display === "none" ? "block" : "none";
        });
    });
});

function copyCode() {
    document.getElementById("codeBlock").innerText;
  }  