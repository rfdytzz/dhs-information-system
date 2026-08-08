# DHS SIS

## Dyta High School Information System

DHS SIS is a modern School Information System designed to digitize school services and information management. This platform provides centralized access to school information, academic services, and administrative management for students, teachers, and administrators.

## Features

### Public Features

- School News and Articles
- Announcements
- School Events and Agenda
- Gallery
- Student Achievements
- Teacher Information
- Document Downloads
- School Profile

### User Features

- Authentication System
- User Profile Management
- Learning Materials
- Online Registration
- Notifications

### Admin Features

- Dashboard Overview
- User Management
- News Management
- Announcement Management
- Event Management
- Gallery Management
- Document Management
- System Settings

- ## 📁 Project Structure

```text
project/
│
├── backend/
│   │
│   ├── app/
│   │   ├── Http/
│   │   │   ├── Controllers/
│   │   │   ├── Requests/
│   │   │   └── Resources/
│   │   │
│   │   ├── Models/
│   │   └── Services/
│   │
│   ├── database/
│   │   ├── factories/
│   │   ├── migrations/
│   │   └── seeders/
│   │
│   ├── routes/
│   │   ├── api.php
│   │   └── web.php
│   │
│   ├── config/
│   ├── storage/
│   ├── tests/
│   ├── .env
│   └── composer.json
│
├── frontend/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   └── layout/
│   │   │
│   │   ├── composables/
│   │   │   ├── useLogin.js
│   │   │   ├── useUsers.js
│   │   │   └── useProducts.js
│   │   │
│   │   ├── lib/
│   │   │   └── axios.js
│   │   │
│   │   ├── stores/
│   │   │   ├── index.js
│   │   │   └── auth.js
│   │   │
│   │   ├── router/
│   │   │   └── index.js
│   │   │
│   │   ├── views/
│   │   │   ├── auth/
│   │   │   │   └── Login.vue
│   │   │   │
│   │   │   ├── dashboard/
│   │   │   │   └── Dashboard.vue
│   │   │   │
│   │   │   ├── users/
│   │   │   │   ├── UserList.vue
│   │   │   │   ├── UserCreate.vue
│   │   │   │   └── UserEdit.vue
│   │   │   │
│   │   │   └── products/
│   │   │       ├── ProductList.vue
│   │   │       ├── ProductCreate.vue
│   │   │       └── ProductEdit.vue
│   │   │
│   │   ├── App.vue
│   │   └── main.js
│   │
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

## Tech Stack

### Frontend

- Vue.js
- Tailwind CSS
- Axios
- Pinia
- Vue Router

### Backend

- Laravel
- Laravel Sanctum
- REST API

### Database

- MySQL
