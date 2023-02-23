window.onload = function () {
    d = new Date();
    day = d.getDate()
    console.log(day)
    today = document.getElementById("single_day" + day);
    console.log(today)
    today.classList.add("active")
    for (i = 0; i <= day - 1; i++) {
      console.log(day - i)
      today = document.getElementById("single_day" + (day - i));
      today.classList.add("happened");
    }

    var maturita = new Date("May 16, 2023 07:30:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

      // Get today's date and time
      var ted = new Date().getTime();

      // Find the od between now and the count down date
      var od = maturita - ted;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(od / (1000 * 60 * 60 * 24));
      var hours = Math.floor((od % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((od % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((od % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("timer").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (od < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
      }
    }, 1000);
}

var countToDate = new Date("May 16, 2023 07:30:00");
let previousTimeBetweenDates
setInterval(() => {
  const currentDate = new Date()
  const timeBetweenDates = countToDate - currentDate;
  flipAllCards(timeBetweenDates)

  previousTimeBetweenDates = timeBetweenDates
}, 250)

function flipAllCards(time) {
  var days = Math.floor(time / (1000 * 60 * 60 * 24));
  var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time % (1000 * 60)) / 1000);


  flip(document.querySelector("[data-days-tens]"), Math.floor(days / 10))
  flip(document.querySelector("[data-days-ones]"), days % 10)
  flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10))
  flip(document.querySelector("[data-hours-ones]"), hours % 10)
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10))
  flip(document.querySelector("[data-minutes-ones]"), minutes % 10)
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10))
  flip(document.querySelector("[data-seconds-ones]"), seconds % 10)
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top")
  const startNumber = parseInt(topHalf.textContent)
  if (newNumber === startNumber) return

  const bottomHalf = flipCard.querySelector(".bottom")
  const topFlip = document.createElement("div")
  topFlip.classList.add("top-flip")
  const bottomFlip = document.createElement("div")
  bottomFlip.classList.add("bottom-flip")

  top.textContent = startNumber
  bottomHalf.textContent = startNumber
  topFlip.textContent = startNumber
  bottomFlip.textContent = newNumber

  topFlip.addEventListener("animationstart", e => {
    topHalf.textContent = newNumber
  })
  topFlip.addEventListener("animationend", e => {
    topFlip.remove()
  })
  bottomFlip.addEventListener("animationend", e => {
    bottomHalf.textContent = newNumber
    bottomFlip.remove()
  })
  flipCard.append(topFlip, bottomFlip)
}

function buttonFunc() {
  location.href("calendar.html#single_day" + day)
}
