🔐 Password Vault — Secure Password Manager (Next.js + MongoDB)

A full-stack Password Vault Application built using Next.js (App Router) for the frontend and backend + MongoDB for the database.
Users can securely sign up, log in, and manage their passwords in a private, encrypted vault.
This project demonstrates authentication with JWT, REST API integration, and clean, modular component architecture in Next.js.

🚀 Features

✅ User Authentication (JWT)

Secure login & signup using JSON Web Tokens

Passwords stored securely in MongoDB

✅ Personal Password Vault

Add, edit, delete, and search saved passwords

Each user’s data is completely isolated

✅ Clean Modular Architecture

Frontend: Next.js App Router + Tailwind CSS

Backend APIs: /api/passwords, /api/auth

MongoDB for data persistence

✅ Modern UI / UX

Responsive design

Neatly separated components (VaultForm, VaultTable, SearchBar)

Smooth transitions and feedback messages

🛠️ Tech Stack
Layer	Technology
Frontend	Next.js (App Router), React, Tailwind CSS
Backend	 Next.js API Routes
Database	MongoDB + Mongoose
Authentication	JSON Web Token (JWT)
Deployment	Vercel
📂 Project Structure
📦 project-root
 ┣ 📂 app
 ┃ ┣ 📂 api
 ┃ ┃ ┣ 📂 auth         → login/signup routes
 ┃ ┃ ┣ 📂 passwords    → CRUD routes for password vault
 ┃ ┣ 📂 login          → login page
 ┃ ┣ 📂 signup         → signup page
 ┃ ┣ 📂 vault          → main password vault page
 ┣ 📂 components        → reusable UI components
 ┣ 📂 lib               → database connection & models
 ┣ 📄 .env.local        → environment variables (JWT_SECRET, MONGO_URI)
 ┣ 📄 README.md
 ┗ 📄 package.json

⚙️ Installation & Setup

1️⃣ Clone this repository

git clone https://github.com/yourusername/password-vault.git
cd password-vault


2️⃣ Install dependencies

npm install
# or
yarn install


3️⃣ Setup environment variables
Create a .env.local file in the root:

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


4️⃣ Run the development server

npm run dev


5️⃣ Open in browser
Visit 👉 http://localhost:3000

🔑 Usage

Sign up for a new account

Log in to your dashboard

Add website credentials (website, username, password, etc.)

Edit or delete existing entries

Use the search bar to quickly find a saved password

📸 Screenshots

Add your screenshots here (e.g. login page, dashboard, vault UI)

🧩 Future Enhancements

🔒 Client-side password encryption

☁️ Cloud sync & backup

📱 Mobile-friendly responsive layout

🧠 Password strength indicator

👨‍💻 Author

Vinay Kumar
💼 Full-Stack Developer (Next.js | MongoDB)
📧 https://portfolio-seven-pied-92.vercel.app/
🔗 https://github.com/Vinaykumar1510