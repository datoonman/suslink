fetch('https://api.countapi.xyz/hit/datoonman/suslink')
    .then(response => response.json())
    .then(data => {
        document.getElementById('counter').textContent = data.value;
    })
    .catch(error => console.error('Error:', error));
