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

// Confucianism Quotes - Display random quote on page load
const confucianismQuotes = [
  { text: "One can still find happiness if one has only simple food to eat, water to drink, and a bent arm for a pillow. Wealth and high rank attained unrighteously are to me but floating clouds.", author: "Confucius, Analects 7.16" },
  { text: "In terms of human nature, people are much alike. But in terms of practice and effort, they are quite different.", author: "Confucius, Analects 17.2" },
  { text: "Honorable people are modest in what they say but surpassing in what they do.", author: "Confucius, Analects 14.29" },
  { text: "Persons possessed of humanity [ren] are like this: wanting to develop themselves, they also develop others; wanting to achieve things themselves, they also allow others to achieve what they want.", author: "Confucius, Analects 6.30" },
  { text: "When [Confucius] sacrificed to the ancestral spirits, he did so as if they were actually present... The master said, 'If I do not really take part in the sacrifice, it is as if I did not sacrifice at all.'", author: "Confucius, Analects 3.12" },
  { text: "A great man is hard on himself; a small man is hard on others.", author: "Paraphrasing Confucius, Analects 15.20" }
];

// Daoism Quotes - Display random quote on page load
const daoismQuotes = [
  { text: "It is not because I grasp the instructions of our teacher better, but because for a long time you closed your mind to learning new things. You thought you had learned all there was to learn. Your intelligence became an obstacle to your training. Learning is limitless. Not many can fully grasp this idea.", author: "Paraphrasing Ma Tanyang" },
  { text: "You must let go of the illusion of control", author: "Master Oogway" }
];

// Christianity Quotes - Display random quote on page load
const christianityQuotes = [
  { text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", author: "John 3:16" },
  { text: "Love your neighbor as yourself.", author: "Mark 12:31" },
  { text: "Do to others as you would have them do to you.", author: "Luke 6:31" },
  { text: "Faith is the substance of things hoped for, the evidence of things not seen.", author: "Hebrews 11:1" },
  { text: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.", author: "Ephesians 4:32" },
  { text: "I can do all things through Christ who strengthens me.", author: "Philippians 4:13" }
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
    } else if (window.location.pathname.includes('confucianism.html')) {
      // Confucianism quotes
      const randomIndex = Math.floor(Math.random() * confucianismQuotes.length);
      const quote = confucianismQuotes[randomIndex];
      quoteElement.textContent = `"${quote.text}" — ${quote.author}`;
    } else if (window.location.pathname.includes('daoism.html')) {
      // Daoism quotes
      const randomIndex = Math.floor(Math.random() * daoismQuotes.length);
      const quote = daoismQuotes[randomIndex];
      quoteElement.textContent = `"${quote.text}" — ${quote.author}`;
    } else if (window.location.pathname.includes('christianity.html')) {
      // Christianity quotes
      const randomIndex = Math.floor(Math.random() * christianityQuotes.length);
      const quote = christianityQuotes[randomIndex];
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

