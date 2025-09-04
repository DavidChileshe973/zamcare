import { account, databases } from "../lib/appwrite";
import { ID } from "appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const USERS_COLLECTION_ID = import.meta.env.VITE_APPWRITE_USERS_ID;

// Signup and create user
export const signup = async (email, password, name, role) => {
  try {
    // Create user account (Appwrite generates a valid unique ID)
    const user = await account.create(ID.unique(), email, password, name);

    // Create user profile in database (document ID matches user ID)
    await databases.createDocument(DATABASE_ID, USERS_COLLECTION_ID, user.$id, {
      userId: user.$id,
      name,
      email,
      role,
      createdAt: new Date().toISOString(),
    });

    return user;
  } catch (error) {
    throw error;
  }
};

// Login a user
export const login = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw error;
  }
};

// Logout current user session
export const logout = async () => {
  try {
    await account.deleteSession("current");
  } catch (error) {
    throw error;
  }
};

// Get current logged-in user
export const getCurrentUser = async () => {
  try {
    const user = await account.get();
    return user;
  } catch (error) {
    throw error;
  }
};

// Get user profile from DB by userId
export const getUserProfile = async (userId) => {
  try {
    const userProfile = await databases.getDocument(
      DATABASE_ID,
      USERS_COLLECTION_ID,
      userId
    );
    return userProfile;
  } catch (error) {
    throw error;
  }
};

// Update user profile in DB
export const updateUserProfile = async (userId, updatedData) => {
  try {
    const updatedProfile = await databases.updateDocument(
      DATABASE_ID,
      USERS_COLLECTION_ID,
      userId,
      updatedData
    );
    return updatedProfile;
  } catch (error) {
    throw error;
  }
};

// Send password reset email
export const sendPasswordResetEmail = async (email) => {
  try {
    await account.createRecovery(email, "https://yourapp.com/reset-password");
  } catch (error) {
    throw error;
  }
};

// Get current user's role
export const getUserRoles = async (userId) => {
  try {
    const userProfile = await getUserProfile(userId);
    return userProfile.role;
  } catch (error) {
    throw error;
  }
};
