import { auth } from '../firebase';
import { signInAnonymously } from 'firebase/auth';

export async function testFirebaseConnection() {
  try {
    // Try to sign in anonymously to test the connection
    const result = await signInAnonymously(auth);
    console.log('✅ Firebase connection successful!', result.user.uid);
    
    // Sign out immediately
    await auth.signOut();
    console.log('✅ Firebase authentication working properly');
    
    return true;
  } catch (error) {
    console.error('❌ Firebase connection failed:', error);
    return false;
  }
}

// Test the connection when this module is imported
testFirebaseConnection(); 