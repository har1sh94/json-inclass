document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://raw.githubusercontent.com/KomailK/json-inclass/main/sports-examples/sports.json';

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            displayJSON(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});

const displayJSON = (data) => {
    const jsonDisplay = document.getElementById('jsonDisplay');
    jsonDisplay.innerHTML = JSON.stringify(data, null, 2);
};
