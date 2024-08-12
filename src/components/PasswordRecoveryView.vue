<template>
    <div class="recovery-container">
        <h2>Password Recovery</h2>
        <form @submit.prevent="sendRecoveryEmail">
            <div class="form-group">
                <label for="recovery-email">Email:</label>
                <input type="email" id="recovery-email" v-model="recoveryEmail" required />
            </div>
            <button type="submit" class="btn">Send Recovery Email</button>
        </form>

        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <p class="back-to-login">
            <router-link to="/">Back to Login</router-link>
        </p>
    </div>
</template>

<script>
export default {
    name: 'PasswordRecoveryView',
    data() {
        return {
            recoveryEmail: '',
            errorMessage: ''
        };
    },
    methods: {
        sendRecoveryEmail() {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const userExists = users.some(user => user.email === this.recoveryEmail);

            if (userExists) {
                alert('Recovery email sent to ' + this.recoveryEmail);
                this.errorMessage = '';
            } else {
                this.errorMessage = 'Email not found.';
            }
        }
    }
};
</script>

<style scoped>
.recovery-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 20px;
}

.btn {
    display: block;
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.btn:hover {
    background-color: #0056b3;
}

.error {
    color: red;
    margin-top: 10px;
}

.back-to-login {
    margin-top: 20px;
    text-align: center;
}
</style>