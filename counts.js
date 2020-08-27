// Increase counter value every second
// Увеличение значения счетчика каждую секунду

function counterFirst() {
  let counter = $(".counter").html();
  setInterval(function () {
    counter++;
    $(".counter").html(counter);
  }, 1000); //timeout
}

counterFirst();

// End

// Increase the counter by a random value after 5 seconds.
// Увеличение значения счетчика на случайное значение каждые 5 секунд.

function counterRandom() {
  let counterRand = $(".counter-random").html();
  setInterval(function () {
    counterRand = +counterRand + randomInteger();
    $(".counter-random").html(counterRand);
  }, 5000); //timeout
}

counterRandom();

// End

// Increase the counter by a random value after clicking on the button
// Увеличение значения счетчика на случайное значение при клике на кнопку.

function counterClick() {
  let counterClicking = $(".counter-click").html();
  counterClicking = +counterClicking + randomInteger();
  $(".counter-click").html(counterClicking);
}
// END

$("button").click(function () {
  counterClick();
});

// Random
function randomInteger(min = 5, max = 30) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}
// END Random
