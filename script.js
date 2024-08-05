fetch('https://api.countapi.xyz/hit/datoonman/visit-counter')
    .then(response => response.json())
    .then(data => {
        document.getElementById('counter').textContent = data.value;
    });
