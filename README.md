# PageLockURL

PageLockURL is a simple, serverless, client-side tool to password-protect a URL. It allows you to take any existing URL, add a password, and generate a new, unique link. Anyone who opens the new link will be prompted for a password before being redirected to the original URL.

This entire process happens in the user's browser, meaning no data is ever sent to a server. It's a quick and secure way to share links with a specific audience.

## Features

- **Serverless:** No backend required. Everything is handled by the browser.
- **Secure:** Uses AES encryption to protect the original URL. The password is never stored.
- **Easy to Use:** A simple and intuitive interface for creating and unlocking links.
- **Open Source:** Free to use, modify, and distribute.


## How to Use

### Creating a Locked Link
1.  Open `index.html` in your web browser.
2.  Enter the URL you want to protect in the "Enter URL to lock" field.
3.  Enter a password in the "Enter password" field.
4.  Click the "Create Link" button.
5.  A new, unique URL will be generated. Copy this URL and share it.

### Opening a Locked Link
1.  Open the generated PageLockURL link in your web browser.
2.  You will be prompted to enter a password.
3.  Enter the correct password and click "Unlock".
4.  If the password is correct, you will be redirected to the original URL.

## Disclaimer

PageLockURL is provided "as is", without warranty of any kind, express or implied. The authors and contributors are not responsible for any misuse of this tool. Users are responsible for the links they create and share.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
