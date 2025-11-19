const createView = document.getElementById('createView');
const decryptView = document.getElementById('decryptView');
const urlInput = document.getElementById('urlInput');
const passwordInput = document.getElementById('passwordInput');
const createBtn = document.getElementById('createBtn');
const generatedUrl = document.getElementById('generatedUrl');
const decryptPasswordInput = document.getElementById('decryptPasswordInput');
const decryptBtn = document.getElementById('decryptBtn');
const errorMessage = document.getElementById('errorMessage');
const aboutLink = document.getElementById('aboutLink');
const aboutModal = document.getElementById('aboutModal');
const closeButton = document.querySelector('.close-button');


const router = () => {
    const hash = window.location.hash.substring(1);
    if (hash) {
        createView.style.display = 'none';
        decryptView.style.display = 'block';
    } else {
        createView.style.display = 'block';
        decryptView.style.display = 'none';
    }
};

createBtn.addEventListener('click', () => {
    const url = urlInput.value;
    const password = passwordInput.value;

    if (!url || !password) {
        alert('Please enter both a URL and a password.');
        return;
    }

    const encrypted = CryptoJS.AES.encrypt(url, password).toString();
    const newUrl = `${window.location.href.split('#')[0]}#${encrypted}`;
    
    generatedUrl.innerHTML = `Your locked URL is: <a href="${newUrl}" class="alert-link">${newUrl}</a>`;
    generatedUrl.style.display = 'block';
});

decryptBtn.addEventListener('click', () => {
    const password = decryptPasswordInput.value;
    const encrypted = window.location.hash.substring(1);

    if (!password) {
        errorMessage.textContent = 'Please enter a password.';
        return;
    }

    try {
        const decrypted = CryptoJS.AES.decrypt(encrypted, password);
        const originalUrl = decrypted.toString(CryptoJS.enc.Utf8);

        if (originalUrl) {
            window.location.href = originalUrl;
        } else {
            errorMessage.textContent = 'Incorrect password.';
        }
    } catch (e) {
        errorMessage.textContent = 'Incorrect password.';
    }
});

aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    aboutModal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    aboutModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == aboutModal) {
        aboutModal.style.display = 'none';
    }
});

window.addEventListener('hashchange', router);
window.addEventListener('load', router);