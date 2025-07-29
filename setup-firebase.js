#!/usr/bin/env node

console.log(`
🔥 Firebase Setup Helper for Rozkaam 🔥

Follow these steps to set up Firebase Authentication:

1. Go to: https://console.firebase.google.com/
2. Click "Create a project" or "Add project"
3. Enter project name: "Rozkaam" (or your preferred name)
4. Follow the setup wizard (you can disable Google Analytics for now)

Once your project is created:

1. In the Firebase console, click "Authentication" in the left sidebar
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable "Email/Password" authentication
5. Click "Save"

To get your Firebase config:

1. Click the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (</>)
5. Register your app with nickname: "Rozkaam Web"
6. Copy the firebaseConfig object

Then update your .env file with the configuration values.

Need help? Check FIREBASE_SETUP.md for detailed instructions.
`);

// Check if .env file exists
const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '.env');
const envExamplePath = path.join(__dirname, 'env.example');

if (!fs.existsSync(envPath)) {
  console.log('\n📝 Creating .env file from template...');
  if (fs.existsSync(envExamplePath)) {
    fs.copyFileSync(envExamplePath, envPath);
    console.log('✅ .env file created! Please update it with your Firebase config.');
  } else {
    console.log('❌ env.example file not found. Please create .env manually.');
  }
} else {
  console.log('\n✅ .env file already exists.');
}

console.log('\n🚀 Ready to configure Firebase!'); 