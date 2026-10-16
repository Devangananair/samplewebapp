const greeting = document.getElementById('greeting');
const button = document.getElementById('changeText');

button.addEventListener('click', () => {
  const messages = [
    'Hello, world!',
    'Hello there!',
    'Welcome!',
    'Hi, friend!'
  ];

  const currentText = greeting.textContent;
  let nextText = messages[0];

  for (const message of messages) {
    if (message !== currentText) {
      nextText = message;
      break;
    }
  }

  greeting.textContent = nextText;
});
