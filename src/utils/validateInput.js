export const validateInput = (email, password, name) => {
    const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswordValid = /^[a-z]{4,20}$/.test(password);
    let isNameValid = true;

    if(name.current) {
        isNameValid = name.current.value.length>3?true:false
    };


    if (!isNameValid) {
        return "Name not valid"
    } else if (!isEmailValid) {
        return "Email not valid"
    } else if (!isPasswordValid) {
        return "Password not valid"
    } else  {
        return null;
    }
}