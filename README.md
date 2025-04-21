## Team Members

- Heiner Herrera  
- Gabriela Moreno  
- Fabian Pallares  

# X (formerly Twitter)

A simple social media app where users can sign up, authenticate, create posts, like and reply to their own posts. Built using Firebase for the backend and plain HTML, CSS, and JavaScript for the frontend.

## Features

- User authentication with Firebase (including password recovery)
- View user's profile with their own posts
- Timeline that shows only the user's posts, ordered by most recent
- Create and delete posts
- Like and reply to posts

## Installation

> Make sure you have [Visual Studio Code](https://code.visualstudio.com/) installed.

1. Clone the repository:

```bash
git clone https://github.com/dobleh16/X.git
```

2. Open the project folder in Visual Studio Code.

3. Install the **Live Server** extension:
   - Go to the Extensions tab (`Ctrl+Shift+X`)
   - Search for **Live Server** by Ritwick Dey
   - Click **Install**

4. Start the server:
   - Right-click on `index.html` and select **Open with Live Server**

5. The app will open in your browser. You can now sign up and use X!

## Firebase Setup

> This project uses Firebase for authentication and Firestore for the database.

Make sure your `firebaseConfig` in `js/firebase.js` is filled with your Firebase project credentials:

```js
// Example:
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```


