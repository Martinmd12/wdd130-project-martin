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

// Shinto Quotes - Display random quote on page load
const shintoQuotes = [
  { text: "The nature of Shinto speaks to our human nature. Shinto speaks to us, to something in us which is deep and permanent.", author: "Donald Richie" },
  { text: "To be fully alive is to have an aesthetic perception of life because a major part of the world's goodness lies in its often unspeakable beauty.", author: "Yukitaka Yamamoto" },
  { text: "Even the wishes of a small ant reach heaven.", author: "Japanese Proverb" },
  { text: "For Shinto, at root, is a religion not of sermons but of awe: which is a sentiment that may or may not produce words, but in either case goes beyond them.", author: "Joseph Campbell" },
  { text: "Japanese mind is synonymous with Shinto mind.", author: "William Gleason" },
  { text: "Shinto lies at the root of the whole of Japanese culture.", author: "Rene Grousset" },
  { text: "Shinto is essentially a religion of gratitude and love.", author: "W.G. Aston" }
];

// Display a random quote on page load
function displayRandomQuote() {
  const quoteElement = document.getElementById('randomQuote');
  if (quoteElement) {
    // Check if we're on the Shinto page
    if (window.location.pathname.includes('shintoism.html')) {
      const randomIndex = Math.floor(Math.random() * shintoQuotes.length);
      const quote = shintoQuotes[randomIndex];
      quoteElement.textContent = `"${quote.text}" — ${quote.author}`;
    } else {
      // Buddhist quotes
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteElement.textContent = `"${quotes[randomIndex]}" — The Buddha`;
    }
  }
}

// Call the function when the page loads
window.addEventListener('DOMContentLoaded', displayRandomQuote);

