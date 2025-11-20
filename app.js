/*
 * Copyright (c) 2025 Aman Goyal (github.com/goyal-aman). All rights reserved.
 * This work is created by Aman Goyal. If you use or refer to this work, please kindly mention Aman Goyal and link to github.com/goyal-aman.
 */
const createView = document.getElementById('createView');
const decryptView = document.getElementById('decryptView');
const urlInput = document.getElementById('urlInput');
const passwordInput = document.getElementById('passwordInput');
const createBtn = document.getElementById('createBtn');
const generatedUrl = document.getElementById('generatedUrl');
const decryptPasswordInput = document.getElementById('decryptPasswordInput');
const decryptBtn = document.getElementById('decryptBtn');
const errorMessage = document.getElementById('errorMessage');
const unlockedContent = document.getElementById('unlockedContent');
const unlockedUrlDisplay = document.getElementById('unlockedUrlDisplay');
const openUrlBtn = document.getElementById('openUrlBtn');
const goBackBtn = document.getElementById('goBackBtn');
const aboutLink = document.getElementById('aboutLink');
const aboutModal = document.getElementById('aboutModal');
const closeButton = document.querySelector('.close-button');

let unlockedOriginalUrl = ''; // To store the URL after decryption

const router = () => {
    const hash = window.location.hash.substring(1);
    if (hash) {
        createView.style.display = 'none';
        decryptView.style.display = 'block';
        unlockedContent.style.display = 'none'; // Ensure unlocked content is hidden initially
        decryptPasswordInput.value = ''; // Clear password input
        errorMessage.textContent = ''; // Clear error message
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

    // show the input + copy button
    generatedUrl.style.display = 'block';

    // create/select the input and button elements
    const secureLinkInput = document.getElementById('secureLinkInput');
    const copyBtn = document.getElementById('copyBtn');

    secureLinkInput.value = newUrl;

    // make input select all on focus / click for easier copy
    secureLinkInput.addEventListener('click', () => {
        secureLinkInput.select();
    });
    secureLinkInput.addEventListener('focus', () => {
        secureLinkInput.select();
    });

    // copy function with fallback
    async function copyToClipboard(text) {
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(text);
            } else {
                // fallback
                secureLinkInput.select();
                const successful = document.execCommand('copy');
                if (!successful) throw new Error('execCommand copy failed');
            }
            // feedback
            copyBtn.textContent = 'Copied!';
            copyBtn.classList.add('copied');
            setTimeout(() => {
                copyBtn.textContent = 'Copy';
                copyBtn.classList.remove('copied');
            }, 1800);
        } catch (err) {
            // last resort: prompt the user with the link to copy manually
            window.prompt('Copy this link', text);
        }
    }

    // attach handler (remove old listener by cloning to be safe)
    const newCopyBtn = copyBtn.cloneNode(true);
    copyBtn.parentNode.replaceChild(newCopyBtn, copyBtn);
    newCopyBtn.addEventListener('click', () => copyToClipboard(secureLinkInput.value));
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
        const safeOriginalUrl = fixUrl(originalUrl);

        if (originalUrl) {
            unlockedOriginalUrl = safeOriginalUrl; // Store the URL
            const displayUrl = safeOriginalUrl.length > 70 ? safeOriginalUrl.substring(0, 67) + '...' : safeOriginalUrl;
            unlockedUrlDisplay.textContent = displayUrl; // Display the URL
            unlockedContent.style.display = 'block'; // Show the unlocked content
            decryptPasswordInput.style.display = 'none'; // Hide password input
            decryptBtn.style.display = 'none'; // Hide unlock button
            errorMessage.textContent = ''; // Clear any error messages
        } else {
            errorMessage.textContent = 'Incorrect password.';
        }
    } catch (e) {
        errorMessage.textContent = 'Incorrect password.';
    }
});

openUrlBtn.addEventListener('click', () => {
    if (unlockedOriginalUrl) {
        window.open(unlockedOriginalUrl, "_blank");
    }
});

goBackBtn.addEventListener('click', () => {
    unlockedContent.style.display = 'none';
    decryptPasswordInput.style.display = 'block';
    decryptBtn.style.display = 'block';
    decryptPasswordInput.value = '';
    errorMessage.textContent = '';
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

function fixUrl(url) {
    // thanks BulbusThumbledore
    try {
        // If it already parses as an absolute URL, return as-is
      new URL(url);
      return url;
     } catch {
        // Otherwise, prepend https:// and return
      return "https://" + url;
    }
  }