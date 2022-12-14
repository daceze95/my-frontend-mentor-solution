// Set the date we're counting down to
var countDownDate = new Date("Oct 23, 2022 15:20:00").getTime();

var now = new Date().getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("count").innerHTML = days + "d : " + hours + "h : "
  + minutes + "m : " + seconds + "s";

  console.log(distance)

  /****************remove element after count down */
  let elementID = ".download"

  if (distance <= 0) {
    clearInterval(x);

    function hideDiv(elementID,timeout) {
  window.setTimeout(function() {
      document.querySelector(elementID).style.display = "none";
      document.getElementById("count").style.display = "none"
  },timeout);
}
}

hideDiv(elementID, distance == 84610000)

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count").innerHTML = "EXPIRED";
  }
}, 1000);


// console.log(countDownDate - now)
