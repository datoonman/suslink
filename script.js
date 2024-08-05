const binId = '66b0e725ad19ca34f891cc37';
const secretKey = '$2a$10$AzS5eKGPOcy/IunxIm1VZu4ZDCDDLIfyIZCg..dcWcfT2qk4X3xke';

// Fetch the current counter value
fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
    headers: {
        'X-Master-Key': secretKey
    }
})
.then(response => response.json())
.then(data => {
    let counter = data.record.counter;
    counter++;

    // Update the counter value in the bin
    fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': secretKey
        },
        body: JSON.stringify({ counter: counter })
    })
    .then(() => {
        document.getElementById('counter').textContent = counter;
    });
})
.catch(error => console.error('Error:', error));
