<template>
    <div class="signup-container">
        <h2>Sign Up</h2>
        <form @submit.prevent="handleSignUp">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required />
            </div>

            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required />
            </div>

            <div class="form-group">
                <label for="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" v-model="confirmPassword" required />
            </div>

            <button type="submit" class="btn">Sign Up</button>
        </form>

        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

        <!-- Add the login link here -->
        <p class="login-link">
            Already have an account? <router-link to="/">Login here</router-link>
        </p>
    </div>
</template>


<script>
export default {
    name: 'SignUpView',
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: '',
            errorMessage: ''
        };
    },
    methods: {
        handleSignUp() {
            if (this.password !== this.confirmPassword) {
                this.errorMessage = 'Passwords do not match.';
                return;
            }

            // Mock sign-up process (replace with real backend call)
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const userExists = users.some(user => user.email === this.email);

            if (userExists) {
                this.errorMessage = 'User already exists.';
            } else {
                users.push({ email: this.email, password: this.password });
                localStorage.setItem('users', JSON.stringify(users));
                alert('Sign up successful!');
                this.$router.push('/');
            }
        }
    }
};
</script>

<style scoped>
.signup-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

.form-group input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.btn {
    display: block;
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.error {
    color: red;
    margin-top: 10px;
}

.login-link {
    margin-top: 20px;
    text-align: center;
}

.login-link a {
    color: #007bff;
    text-decoration: none;
}

.login-link a:hover {
    text-decoration: underline;
}
</style>