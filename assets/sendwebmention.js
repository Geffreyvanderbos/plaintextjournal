function sendWebMention() {
    const source = document.getElementById('source').value;
    const target = window.location.href;
  
    const endpoint = 'https://webmention.io/geff.re/xmlrpc'; // Replace with your Webmention.io endpoint URL
  
    const data = `
      <methodCall>
        <methodName>pingback.ping</methodName>
        <params>
          <param>
            <value>
              <string>${source}</string>
            </value>
          </param>
          <param>
            <value>
              <string>${target}</string>
            </value>
          </param>
        </params>
      </methodCall>
    `;
  
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml'
      },
      body: data
    })
      .then(response => {
        if (response.ok) {
          const responseMessage = document.getElementById('response-message');
          responseMessage.innerHTML = 'Webmention sent successfully!';
        } else {
          throw new Error('Failed to send webmention. Please try again later.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        const responseMessage = document.getElementById('response-message');
        responseMessage.innerHTML = 'An error occurred. Please try again later.';
      });
  }
  