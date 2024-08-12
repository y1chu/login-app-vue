<template>
  <div class="login-container">
    <h2 v-if="!recoveryMode">Login</h2>
    <h2 v-else>Password Recovery</h2>

    <form @submit.prevent="handleSubmit">
      <div v-if="!recoveryMode">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>

        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>

        <button type="submit" class="btn">Login</button>
        <p class="recovery-link" @click="toggleRecoveryMode">Forgot Password?</p>
      </div>

      <div v-else>
        <div class="form-group">
          <label for="recovery-email">Email:</label>
          <input type="email" id="recovery-email" v-model="recoveryEmail" required />
        </div>

        <button type="submit" class="btn">Send Recovery Email</button>
        <p class="back-to-login" @click="toggleRecoveryMode">Back to Login</p>
      </div>
    </form>

    <!-- Add the sign-up link here -->
    <p v-if="!recoveryMode" class="signup-link">
      Don't have an account? <router-link to="/signup">Sign Up</router-link>
    </p>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>


<script>
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      recoveryEmail: '',
      recoveryMode: false,
      errorMessage: ''
    };
  },
  methods: {
    handleSubmit() {
      if (this.recoveryMode) {
        this.sendRecoveryEmail();
      } else {
        this.login();
      }
    },
    login() {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(user => user.email === this.email && user.password === this.password);

      if (user) {
        alert('Login successful!');
        this.errorMessage = '';
      } else {
        this.errorMessage = 'Invalid email or password.';
      }
    },
    sendRecoveryEmail() {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userExists = users.some(user => user.email === this.recoveryEmail);

      if (userExists) {
        alert('Recovery email sent to ' + this.recoveryEmail);
        this.errorMessage = '';
      } else {
        this.errorMessage = 'Email not found.';
      }
    },
    toggleRecoveryMode() {
      //console.log('Toggle Recovery Mode called');
      this.recoveryMode = !this.recoveryMode;
      this.errorMessage = '';
    }

  }
};
</script>


<style scoped>
.login-container {
  width: 300px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.btn {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #45a049;
}

.recovery-link,
.back-to-login {
  margin-top: 10px;
  color: #007BFF;
  cursor: pointer;
  text-align: center;
}

.error {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>