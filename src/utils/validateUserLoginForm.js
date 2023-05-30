export const validateUserLoginForm = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Required';
    }
    else if (values.email.length < 2) {
        errors.email = 'Must be at least 2 characters.';
    }
    else if (values.email.length > 15) {
        errors.email = 'Must be 15 characters or less.';
    }

    if (!values.password) {
        errors.password = 'Required';
    }
    else if (values.password.length < 8) {
        errors.password = 'Must be at least 8 characters.';
    }

    return errors;
};