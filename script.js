// Buddhist Quotes - Display random quote on page load
const quotes = [
  "The mind is everything. What you think, you become.",
  "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
  "Happiness will never come to those who fail to appreciate what they already have.",
  "Pain is inevitable. Suffering is optional.",
  "What you think, you become. What you feel, you attract. What you imagine, you create.",
  "Letting go gives us freedom, and freedom is the only condition for happiness.",
  "If you light a lamp for somebody, it will also brighten your path.",
  "Every morning we are born again. What we do today is what matters most.",
  "The root of suffering is attachment.",
  "To abstain from lying is essentially wholesome."
];

// Display a random quote on page load
function displayRandomQuote() {
  const quoteElement = document.getElementById('randomQuote');
  if (quoteElement) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = `"${quotes[randomIndex]}" — The Buddha`;
  }
}

// Call the function when the page loads
window.addEventListener('DOMContentLoaded', displayRandomQuote);
