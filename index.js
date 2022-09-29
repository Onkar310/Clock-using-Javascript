setInterval(showTime, 100);

function showTime() {
  const time = new Date();
  const optionsTime = {
    hour: "numeric",
    second: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const optionsDay = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  document.getElementById("time").innerHTML = time.toLocaleString(
    "en-US",
    optionsTime
  );
  document.getElementById("day").innerHTML = time.toLocaleString(
    "en-US",
    optionsDay
  );
}
