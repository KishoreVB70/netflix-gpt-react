const validateInput = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=\\S+$).{4,20}$/.test(password);

    if (!isEmailValid) {
        return "Email not valid"
    } else if (!isPasswordValid) {
        return "Password not valid"
    } else {
        return null;
    }
}