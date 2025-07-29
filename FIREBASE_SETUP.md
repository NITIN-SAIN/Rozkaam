# Firebase Authentication Setup

This project has been configured with Firebase Authentication. Follow these steps to complete the setup:

## 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter your project name (e.g., "Rozkaam")
4. Follow the setup wizard

## 2. Enable Authentication

1. In your Firebase project console, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Go to the "Sign-in method" tab
4. Enable "Email/Password" authentication
5. Click "Save"

## 3. Get Your Firebase Configuration

1. In your Firebase project console, click the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (</>)
5. Register your app with a nickname (e.g., "Rozkaam Web")
6. Copy the Firebase configuration object

## 4. Update Firebase Configuration

Replace the placeholder values in `src/firebase.ts` with your actual Firebase configuration:

```typescript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

## 5. Environment Variables (Recommended)

For better security, create a `.env` file in the project root and add your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

Then update `src/firebase.ts` to use environment variables:

```typescript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
```

## 6. Test the Authentication

1. Run the development server: `npm run dev`
2. Try to sign up with a new account
3. Try to log in with the created account
4. Test the logout functionality

## Features Included

- ✅ Email/Password Authentication
- ✅ User Registration with Display Name
- ✅ User Login/Logout
- ✅ Protected Routes
- ✅ User Profile Display
- ✅ Password Visibility Toggle
- ✅ Loading States
- ✅ Error Handling
- ✅ Responsive Design
- ✅ Modern UI with Tailwind CSS

## Security Notes

- Never commit your Firebase configuration to version control
- Use environment variables for sensitive data
- Enable Firebase Security Rules for your database
- Consider implementing email verification
- Add password strength requirements if needed

## Additional Features You Can Add

- Google Sign-in
- Facebook Sign-in
- Phone Number Authentication
- Email Verification
- Password Reset
- User Profile Updates
- Profile Picture Upload
- Session Management 