function sendWebMention() {
const sourceUrl = document.getElementById('source').value;
const targetUrl = window.location.href;

fetch('https://webmention.io/geff.re/webmention', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Bearer Ot5ayLa8KB_zd4gWrKLbyw'
    },
    body: `source=${encodeURIComponent(sourceUrl)}&target=${encodeURIComponent(targetUrl)}`
})
.then(response => response.text())
.then(result => {
    document.getElementById('response-message').innerHTML = result;
})
.catch(error => {
    console.error('Error sending webmention:', error);
    document.getElementById('response-message').innerHTML = 'Error sending webmention.';
});
}
