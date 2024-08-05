const binId = '66b0e725ad19ca34f891cc37';
const secretKey = '$2a$10$AzS5eKGPOcy/IunxIm1VZu4ZDCDDLIfyIZCg..dcWcfT2qk4X3xke';

// Function to update the counter
function updateCounter() {
    fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
        headers: {
            'X-Master-Key': secretKey
        }
    })
    .then(response => response.json())
    .then(data => {
        let counter = data.record.counter;
        counter++;

        fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': secretKey
            },
            body: JSON.stringify({ counter: counter })
        })
        .then(() => {
            // Update the counter in all places
            document.querySelectorAll('#counter').forEach(elem => {
                elem.textContent = counter;
            });
        })
        .catch(error => console.error('Error updating counter:', error));
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Call updateCounter function on page load
updateCounter();
