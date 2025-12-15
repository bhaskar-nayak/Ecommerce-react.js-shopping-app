## 🛒 Project Overview

- A production-ready full-stack e-commerce platform built using **React.js + Redux Toolkit** on the frontend
- Backend powered by **Spring Boot**
- Supports secure, scalable, and maintainable architecture
- Includes user authentication, product management, cart functionality, and **Razorpay payment integration**

---

## 🚀 Live Demo

- **Frontend:** <https://ecom-shoppingapp.netlify.app/>
- **Backend API:** <YOUR_BACKEND_DEPLOYMENT_URL>

---

## 🧩 Features

### 👤 User Management
- User registration & login
- Secure authentication & authorization
- Persistent login sessions

### 🛍️ Product Management
- Product listing with images
- Product details page
- Category-based browsing
- Backend CRUD APIs

### 🛒 Cart & Checkout
- Add/remove products from cart
- Quantity management
- Price calculation
- Order summary

### 💳 Payment Integration
- Razorpay payment gateway
- Secure checkout flow
- Payment verification via backend

### ⚙️ Additional Features
- Code splitting with `React.lazy` & `Suspense`
- Centralized state management using Redux Toolkit
- RESTful API architecture
- Email notifications using SendGrid
- Logging using SLF4J
- API testing with Postman

---

## 🏗️ Tech Stack

### Frontend
- React.js
- Redux Toolkit
- React Router
- Code Splitting & Lazy Loading
- Axios
- Create React App

### Backend
- Spring Boot
- Spring Data JPA
- Hibernate ORM
- REST APIs
- Razorpay SDK
- SendGrid (Email Service)
- SLF4J Logging

### Database
- Relational Database (MySQL / PostgreSQL)

### Tools & DevOps
- Postman
- Git & GitHub
- Maven
- npm
- Environment-based configuration
- # Spring Boot + ReactJS Application Flow (Products)

## 🧩 Architecture Overview
- ReactJS sends HTTP requests
- DispatcherServlet receives all requests
- Controller handles the request
- Service contains business logic
- Repository interacts with database
- Response is returned as JSON
- 
### Key Architecture Highlights
- Frontend uses **lazy loading** to reduce initial bundle size
- Backend follows **layered architecture**  
  (Controller → Service → Repository)
- Secure payment processing handled **server-side**

---

## 📸 Screenshots

### 🔐 User Authentication

- **Login Page**  
  ![Login Page](./screenshots/login.png)

- **Register Page**  
  ![Register Page](./screenshots/register.png)

---

### 🏠 Home / Landing Page

- **Home Page**  
  ![Home Page](./screenshots/home.png)

---

### 🛍️ Product Listing

- **Products Page**  
  ![Product Listing](./screenshots/products.png)

---

### 📦 Product Details

- **Product Details Page**  
  ![Product Details](./screenshots/product-details.png)

---

### 🛒 Shopping Cart

- **Cart Page**  
  ![Shopping Cart](./screenshots/cart.png)

---

### 💳 Payment (Razorpay)

- **Payment Checkout Page**  
  ![Payment](./screenshots/payment.png)


