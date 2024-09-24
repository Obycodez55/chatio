# Chatio

Chatio is a full-stack chat application designed for real-time communication between users. Built with NestJS for the backend and React with Tailwind CSS for the frontend, this application provides a seamless and engaging chat experience. It supports user authentication, real-time messaging, and is designed with scalability and performance in mind.

## Table of Contents
- [Technologies](#technologies)
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Technologies

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types for improved code quality.
- **Vite**: A build tool for faster development and a leaner experience.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

### Backend
- **Node.js**: A JavaScript runtime for building scalable applications.
- **NestJS**: A progressive framework for building efficient server-side applications.
- **Prisma**: An ORM for managing database operations.
- **WebSockets**: For real-time bidirectional communication between clients and server.
- **JWT**: For secure user authentication.
- **Bcrypt**: For hashing user passwords securely.

### Database
- **MySQL**: A relational database for storing user and chat data.

## Features
- **User Authentication**: Sign up, log in, and log out securely.
- **Real-time Chat**: Send and receive messages instantly with WebSockets.
- **User Profiles**: Update profile information and settings.
- **Password Reset**: Easily reset forgotten passwords.
- **Token Refresh**: Secure mechanism to keep users logged in without re-entering credentials.
- **Message History**: Store and retrieve past messages for a better user experience.


## Setup and Installation

### Prerequisites
- Node.js (>= 14.x)
- npm (>= 6.x)
- MySQL database

### Installation
Clone the repository:
   ```bash
   git clone <repository-url>
   cd chat-app
    cd server
    npm install
    cd ../client
    npm install
    cd server
npm run start:dev

