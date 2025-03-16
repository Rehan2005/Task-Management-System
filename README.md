# TaskMate

TaskMate is a task management application built with React, Redux, and Tailwind CSS. It provides an intuitive UI for managing tasks, users, and progress tracking.

## Features
- User authentication (Login & Signup)
- Task management (Create, Update, Delete, and View tasks)
- Role-based access control
- Responsive UI with Tailwind CSS
- Redux state management
- Sidebar navigation with mobile support

## Tech Stack
- **Frontend:** React, Redux, React Router, Tailwind CSS, Headless UI, Framer Motion
- **State Management:** Redux Toolkit
- **Icons:** Lucide React, React Icons
- **Notifications:** Sonner

## Installation

### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

### Steps to Run
1. Clone the repository:
   ```sh
   git clone https://github.com/Rehan2005/Task-Management-System.git
   ```
2. Navigate to the project directory:
   ```sh
   cd client
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Folder Structure
```
/client
 ├── public/             
 ├── src/
 │   ├── assets/         
 │   ├── components/           
 │   ├── pages/          
 │   │   ├── dashboard/  
 |   |   ├── homepage/   
 |   |   ├── login/      
 |   |   ├── signup/     
 |   |   ├── taskdetails/
 |   |   ├── tasks/      
 |   |   ├── trash/   
 |   |   ├── users/   
 │   ├── redux/          # Redux store and slices
 │   ├── utils/          # Utility functions and helpers
 │   ├── App.jsx         # Main application component
 │   ├── index.css       # Main style components
 │   ├── main.jsx        # React entry point
 ├── package.json        # Project dependencies
 ├── README.md           # Project documentation
```

## Available Scripts
- `npm run dev` – Start the development server
- `npm run build` – Build the project for production
- `npm run lint` – Lint and fix issues in the code

## Contributing
Feel free to contribute by submitting pull requests or reporting issues.

## License
This project is licensed under the MIT License.

---

🚀 Happy Task Management with **TaskMate**!
