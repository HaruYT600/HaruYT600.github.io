const creatorCodes = ["Haru", "Lovvburn", "Artiman", "IseanQu", "Web", "Yokai"];

function redirectToGame(gameUrl) {
    window.location.href = gameUrl;
}

function validateCreatorCode() {
    const input = document.getElementById('creatorCodeInput').value.trim().toUpperCase();
    const messageDiv = document.getElementById('message');

    if (creatorCodes.map(code => code.toUpperCase()).includes(input)) {
        localStorage.setItem('creatorcodes', input);
        messageDiv.textContent = `You're now supporting: ${input}`;
        messageDiv.className = 'message success';
        document.getElementById('creatorCodeInput').value = input;
    } else {
        messageDiv.textContent = 'Invalid creator code. Please check!';
        messageDiv.className = 'message error';
    }
}

window.onload = function() {
    const storedCreatorCode = localStorage.getItem('creatorcodes');
    const messageDiv = document.getElementById('message');

    if (storedCreatorCode) {
        messageDiv.textContent = `Currently supporting: ${storedCreatorCode}`;
        messageDiv.className = 'message success';
        document.getElementById('creatorCodeInput').value = storedCreatorCode;
    }
};
