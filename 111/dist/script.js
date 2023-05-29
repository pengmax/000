document.write("HELLO我是彭郁宸")
var count = 0;
    var counterElement = document.getElementById("counter");

    function increment() {
      count+=2;
      counterElement.textContent = count;
    }
