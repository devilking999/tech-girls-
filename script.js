let shareCount = 0;
const shareBtn = document.getElementById("shareBtn");
const shareCountDisplay = document.getElementById("shareCount");
const shareStatus = document.getElementById("shareStatus");
const form = document.getElementById("registrationForm");

shareBtn.addEventListener("click", () => {
  if (shareCount < 5) {
    shareCount++;
    shareCountDisplay.textContent = `Click count: ${shareCount}/5`;

    const message = encodeURIComponent("Hey Buddy, Join Tech For Girls Community");
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, "_blank");

    if (shareCount === 5) {
      shareBtn.disabled = true;
      shareStatus.textContent = "✅ Sharing complete. Please continue.";
    }
  }
});

form.addEventListener("submit", (e) => {
  if (shareCount < 5) {
    e.preventDefault();
    alert("⚠️ Please complete 5 shares before submitting.");
    return;
  }

  document.getElementById("successMessage").textContent =
    "🎉 Your submission has been sent successfully. Thank you!";
});

// Create neon switch toggle
const toggleWrap = document.createElement("div");
toggleWrap.className = "toggle-switch";
toggleWrap.innerHTML = `
  <div class="track">
    <div class="thumb" id="switchThumb">ON</div>
  </div>
`;
document.body.appendChild(toggleWrap);

// Toggle dark/light mode
toggleWrap.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  document.getElementById("switchThumb").textContent = isDark ? "ON" : "OFF";
});



