import * as Yup from 'yup';


export const phoneFormat = (input) => {
    input = input.toString().replace(/\D/g, '');
    var size = input.length;
    if (size > 0) { input = "(" + input }
    if (size > 3) { input = input.slice(0, 4) + ") " + input.slice(4, 11) }
    if (size > 6) { input = input.slice(0, 9) + "-" + input.slice(9) }
    return input;
}

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .required('Required'),
});

export const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
        .defined()
        .required('Required'),
    lastName: Yup.string()
        .defined()
        .required('Required'),
    phone: Yup.string()
        .matches(/.{10,}/, {
            excludeEmptyString: true,
            message: 'Must be 10 digits',
        })
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});