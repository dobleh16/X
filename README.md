## Team Members

- Heiner Herrera  
- Gabriela Moreno  
- Fabian Pallares  

# X (formerly Twitter)

A simple social media web app where users can sign up, authenticate, create posts, like, and reply to their own posts. Built using Firebase for the backend and plain HTML, CSS, and JavaScript for the frontend.

## Features

- User authentication with Firebase (including password recovery)
- View user's profile with their own posts
- Timeline that displays only the user's posts, ordered by most recent
- Create, delete, like, and reply to posts
- **Feature Flags** using [GrowthBook](https://www.growthbook.io/) for conditional rendering
- **Error Monitoring** with [Sentry](https://sentry.io/)
- **Unit Tests** with [Jest](https://jestjs.io/)
- **Continuous Integration (CI)** with GitHub Actions

## Final Deliverable Updates

This last delivery includes:
- ✅ Integration with **Sentry** for real-time error logging in the frontend.
- ✅ Setup of **GrowthBook feature flags** with conditional rendering (`featureFlags.js` and `main.js`).
- ✅ Creation of at least **3 unit tests** using Jest in `utils.test.js` and `timeline.test.js`.
- ✅ Configuration of a **GitHub Actions CI workflow** that runs tests automatically on push.
- ✅ (Optional) **Chrome Extension** feature still in progress (to be decided).

## Installation

> Make sure you have [Visual Studio Code](https://code.visualstudio.com/) installed.

1. Clone the repository:

```bash
git clone https://github.com/dobleh16/X.git

-This project uses Firebase for authentication and Firestore for the database.
// Example:
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

## Run Unit Tests:
-Navigate to the project root and install dependencies:

npm install

## Run tests:

npm test

-Continuous Integration
This project includes a GitHub Actions workflow (.github/workflows/tests.yml) that runs all Jest tests automatically on push

