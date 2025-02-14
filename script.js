//const messages = [
  //  "Are you sure?",
   // "Really sure??",
 //   "Are you positive?",
  //  "Pookie please...",
  //  "Just think about it!",
  //  "If you say no, I will be really sad...",
  //  "I will be very sad...",
   // "I will be very very very sad...",
   // "Ok fine, I will stop asking...",
   // "Just kidding, say yes please! ❤️"
//];
const messages = [
    "Kya tum pakka ho? 🤔",
    "Sach mein sure ho?? 😳",
    "Bilkul pakka na? 💖",
    "Pookie please... thoda soch lo! 😘",
    "Ek baar aur soch lo jaan... 🥺",
    "Agar tumne na bola, to mera dil toot jayega... 💔",
    "Main bohot udaas ho jaunga... 😞",
    "Main bohot bohot udaas ho jaunga... 😭",
    "Theek hai, ab aur nahi puchhunga... 😔",
    "Bas mazaak kar raha tha, please haan bol do! ❤️🥰"
];


let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
