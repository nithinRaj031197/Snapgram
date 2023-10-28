// import { Account, Avatars, Client, Databases } from "appwrite";

// export const appwriteConfig = {
//   url: import.meta.env.VITE_APPWRITE_URL ?? "https://cloud.appwrite.io/v1",
//   databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
//   storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
//   userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
//   postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
//   savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
//   projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID ?? "653ca030924a99edad1c",
// };
// console.log(appwriteConfig);

// export const client = new Client();

// client.setEndpoint(appwriteConfig?.url);
// client.setProject(appwriteConfig?.projectId);

// export const account = new Account(client);
// export const databases = new Databases(client);
// export const storage = new Storage(client);
// export const avatars = new Avatars(client);

import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: import.meta.env.VITE_APPWRITE_URL,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
  postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
  savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
