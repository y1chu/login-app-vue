# login-app-vue

This is a simple Vue.js application that provides basic user authentication features, including sign-up, login, and password recovery. This project is designed as a starting point for implementing authentication in Vue.js applications, using `localStorage` for data persistence and `vue-router` for navigation.

## Features

- **User Registration (Sign-Up):**
  - Users can create an account by providing an email and password.
  - Password confirmation to ensure accuracy.
  
- **User Login:**
  - Users can log in with their registered email and password.
  - Basic validation to prevent empty submissions and incorrect logins.

- **Password Recovery:**
  - Users can initiate a password recovery process by providing their email.
  - Simulated recovery email notification.

## Tech Used

- **Vue.js:** The JavaScript framework used to build the application.
- **Vue Router:** For managing the different routes within the application.
- **localStorage:** For storing user data within the browser.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/vueauth-starter.git
   ```
2. Navigate to the project directory:
  ```bash
   cd vueauth-starter
  ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Running the App:
   
   To start the development server, run:
   ```bash
   npm run serve
   ```
   The application will be available at http://localhost:8080.

### Project Structure
- src/components/: Contains the Vue components for Login, Sign-Up, and Password Recovery views.
- src/router/: Configures the routes for the application.
- src/App.vue: The main application component.
- src/main.js: The entry point of the application, where the router is initialized.

