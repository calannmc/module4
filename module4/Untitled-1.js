const helloSpeaker = require(...module4\SpeakHello.js); // replace with the path to your helloSpeaker file

test('helloSpeaker should say hello to the provided name', () => {
  const name = 'John';
  const expectedOutput = 'Hello, ' + name;
  const actualOutput = helloSpeaker.speak(name);

  expect(actualOutput).toBe(expectedOutput);
});