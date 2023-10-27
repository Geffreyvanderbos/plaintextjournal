function sendWebMention() {
    const source = document.getElementById('source').value;
    const target = window.location.href;
  
    const endpoint = 'https://webmention.io/geff.re/webmention';
  
    const data = {
      source: source,
      target: target
    };
  
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        const responseMessage = document.getElementById('response-message');
        if (data.success) {
          responseMessage.innerHTML = 'Webmention sent successfully!';
        } else {
          responseMessage.innerHTML = 'Failed to send webmention. Please try again later.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        const responseMessage = document.getElementById('response-message');
        responseMessage.innerHTML = 'An error occurred. Please try again later.';
      });
  }