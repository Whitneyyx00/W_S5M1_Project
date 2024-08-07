function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  /* global quotes, adverbs, nouns, verbs, people */

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgetDivs = document.querySelectorAll('section > div');

  widgetDivs.forEach(div => {
    div.classList.add('widget');
  });

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  console.log(quotes);

  const randomIndex = Math.floor(Math.random() * quotes.length);

  const randomQuote = quotes[randomIndex];

  const quoteDiv = document.querySelector('.quoteoftheday');
  const quoteTextDiv = document.createElement('div');
  const quoteAuthorDiv = document.createElement('div');

  quoteTextDiv.textContent = randomQuote.quote;
  quoteAuthorDiv.textContent = randomQuote.author + (randomQuote.year ? ` in ${randomQuote.year}` : ' in an unknown date');

  quoteDiv.appendChild(quoteTextDiv);
  quoteDiv.appendChild(quoteAuthorDiv);

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  const randomAdverb = adverbs[Math.floor(Math.random() * adverbs.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];

  const corporateSpeakDiv = document.querySelector('.corporatespeak');
  const corporateSpeakText = document.createElement('p');

  corporateSpeakText.textContent = `We need to ${randomVerb} our ${randomNoun} ${randomAdverb} in order to ${randomVerb} our ${randomNoun} ${randomAdverb}.`;

  corporateSpeakDiv.appendChild(corporateSpeakText);

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const countdownDiv = document.querySelector('.countdown');
  const countdownText = document.createElement('p');
  countdownDiv.appendChild(countdownText);

  let countdownValue = 5;

  const countdownInterval = setInterval(() => {
    if (countdownValue > 0) {
      countdownText.textContent = `T-minus ${countdownValue}...`;
      countdownValue--;
    } else {
      countdownText.textContent = 'Liftoff! 🚀';
      clearInterval(countdownInterval);
    }
  }, 1000);

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  const randomPerson = people[Math.floor(Math.random() * people.length)];

  const friendsDiv = document.querySelector('.friends');
  const friendsText = document.createElement('p');

  if (randomPerson.friends.length > 0) {
    const friendsNames = randomPerson.friends.map(friendId => {
      const friend = people.find(person => person.id === friendId);
      return friend.name;
    });
    friendsText.textContent = `${randomPerson.name} was born in ${randomPerson.year} and is friends with ${friendsNames.join(', ').replace(/, ([^,]*)$/, ' and $1')}.`;
  } else {
    friendsText.textContent = `${randomPerson.name} was born in ${randomPerson.year} and has no friends.`;
  }

  friendsDiv.appendChild(friendsText);

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
  const widgets = document.querySelectorAll('.widget');

  widgets.forEach((widget, index) => {
    widget.setAttribute('tabindex', index + 1);
  });

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
