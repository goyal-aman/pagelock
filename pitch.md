Hey Product Hunt! 👋

I'm Aman, and I built PageLock to solve a problem I kept running into: how do you share sensitive links without trusting a third-party service with your data?

The Problem: Ever needed to share a private Google Drive link, a confidential document, or beta access URL? Most link shorteners require you to trust them completely with your data. Some track everything. Others store your links in plaintext.

The Solution: PageLock uses client-side AES-256 encryption. Your password and original URL are encrypted in your browser before anything is stored. This means:

✅ I literally cannot decrypt your links without the password
✅ Zero-knowledge architecture - your secrets stay yours
✅ No signup, no tracking of your encrypted data
✅ 100% free
How it works:

Paste any URL you want to protect
Set a password
Share the encrypted link
Recipient enters password → gets access
Use cases I've found helpful:

Sharing private documents with clients
Distributing beta access links
Sending confidential resources to team members
Protecting sensitive URLs from public access
Tech stack: Pure frontend (React + TypeScript) with Web Crypto API for encryption.

I'd love to hear your feedback! What would make this more useful for you? Are there features you'd want to see?

Try it out and let me know what you think! 🔒

