// Increase counter value every second

function counterFirst() {
  let counter = $(".counter").html();
  const interval = setInterval(function () {
    counter++;
    $(".counter").html(counter);
  }, 1000); //timeout
}

counterFirst();

// End

// Increase the counter by a random value after 5 seconds.

function counterRandom() {
  let counterRand = $(".counter-random").html();
  const interval = setInterval(function () {
    counterRand = +counterRand + randomInteger();
    $(".counter-random").html(counterRand);
  }, 5000); //timeout
}

counterRandom();

// End

// Increase the counter by a random value after clicking on the button

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
