# 🏨 Hotel Booking System (MERN + React + Vite)

## 📌 Overview

The **Hotel Booking System** is a full-stack web application that allows users to browse hotels, view room details, and make bookings online. It also provides a dedicated interface for hotel owners to manage their properties.

This project is built using modern web technologies and follows a clean, scalable folder structure to support both frontend and backend development.

---

## 🚀 Features

### 👤 User Features

* Browse available hotels and rooms
* View detailed room information
* Book rooms online
* Manage personal bookings

### 🏨 Hotel Owner Features

* Register as a hotel owner
* Add and manage rooms
* View booking records
* Update hotel listings

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Context API (State Management)
* Axios (API Requests)
* CSS

### Backend

* Node.js
* Express.js
* MongoDB

---

## 📂 Project Structure

```
HOTLE-BOOKING/
│
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   │
│   ├── assets/
│   ├── components/
│   │   ├── HotelCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── HotelReg.jsx
│   │   ├── Footer.jsx
│   │   └── hotelOwner/
│   │
│   ├── context/
│   │   └── AppContext.jsx
│   │
│   └── pages/
│       ├── Home.jsx
│       ├── AllRooms.jsx
│       ├── RoomDetails.jsx
│       ├── MyBookings.jsx
│       └── hotelOwner/
│
├── index.html
├── vite.config.js
└── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-link>
cd HOTLE-BOOKING
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Run Development Server

```bash
npm run dev
```

The app will start at:

```
http://localhost:5173/
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory and add:

```
VITE_API_URL=http://localhost:5000
```

---

## 🎯 Future Improvements

* Payment Integration
* User Authentication (JWT)
* Admin Dashboard
* Reviews & Ratings System
* Real-time Booking Status

---

## 👩‍💻 Author

**Fahima Azizi**
Full-Stack Developer | AI & Web Enthusiast

---

## 📜 License

This project is for educational and demonstration purposes.
