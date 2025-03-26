# 🚀 TaskMate

A **Cloud-Based Task Manager** built with the **MERN stack** to streamline team task management. This application provides a **user-friendly interface** for efficient **task assignment, tracking, and collaboration**. Designed for **both administrators and regular users**, it enhances productivity and organization.

---

## 📌 Why This Project?

In today's dynamic work environment, **efficient task management** is crucial for team success. Traditional tracking methods (spreadsheets, manual notes) can be **inefficient and error-prone**.  
This **Cloud-Based Task Manager** provides a **centralized solution**, ensuring **seamless collaboration, improved workflow efficiency, and enhanced communication**.

---

## 🔍 Background  

With the rise of **remote work and distributed teams**, there is a **growing need** for tools that facilitate **effective communication and task coordination**.  

This project leverages **modern web technologies** to provide an **intuitive and responsive task management solution**.  
- The **MERN stack** ensures **scalability and performance**.  
- **Redux Toolkit, Headless UI, and Tailwind CSS** improve the **user experience**.  

---

## ✨ Features  

### 👨‍💼 Admin Features:
- **User Management**: Create admin accounts, add/manage team members.  
- **Task Assignment**: Assign tasks to individuals or multiple users, update details/status.  
- **Task Properties**: Label tasks (`To-Do`, `In Progress`, `Completed`), set priority levels, manage sub-tasks.  
- **Asset Management**: Upload task assets (images, files).  
- **User Account Control**: Activate/deactivate users, delete/trash tasks.  

### 👤 User Features:
- **Task Interaction**: Change task status (`In Progress` or `Completed`), view task details.  
- **Communication**: Add comments or chat in task activities.  

### 🔐 General Features:
- **Authentication & Authorization**: Secure login, role-based access control.  
- **Profile Management**: Update user profiles.  
- **Password Management**: Secure password changes.  

---

## 🛠️ Tech Stack  

### **Frontend:**
- React (Vite)  
- Redux Toolkit (State Management)  
- Headless UI  
- Tailwind CSS  

### **Backend:**
- Node.js  
- Express.js  

### **Database:**
- MongoDB  

## SETUP INSTRUCTIONS


# Server Setup

## Environment variables
First, create the environment variables file `.env` in the server folder. The `.env` file contains the following environment variables:

- MONGODB_URI = `your MongoDB URL`
- JWT_SECRET = `any secret key - must be secured`
- PORT = `8800` or any port number
- NODE_ENV = `development`


&nbsp;

## Set Up MongoDB:

1. Setting up MongoDB involves a few steps:
    - Visit MongoDB Atlas Website
        - Go to the MongoDB Atlas website: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).

    - Create an Account
    - Log in to your MongoDB Atlas account.
    - Create a New Cluster
    - Choose a Cloud Provider and Region
    - Configure Cluster Settings
    - Create Cluster
    - Wait for Cluster to Deploy
    - Create Database User
    - Set Up IP Whitelist
    - Connect to Cluster
    - Configure Your Application
    - Test the Connection

2. Create a new database and configure the `.env` file with the MongoDB connection URL. 

## Steps to run server

1. Open the project in any editor of choice.
2. Navigate into the server directory `cd server`.
3. Run `npm i` or `npm install` to install the packages.
4. Run `npm start` to start the server.

If configured correctly, you should see a message indicating that the server is running successfully and `Database Connected`.

&nbsp;

# Client Side Setup

## Environment variables
First, create the environment variables file `.env` in the client folder. The `.env` file contains the following environment variables:

- VITE_APP_BASE_URL = `http://localhost:8800` #Note: Change the port 8800 to your port number.
- VITE_APP_FIREBASE_API_KEY = `Firebase api key`

## Steps to run client

1. Navigate into the client directory `cd client`.
2. Run `npm i` or `npm install` to install the packages.
3. Run `npm start` to run the app on `http://localhost:3000`.
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


---
