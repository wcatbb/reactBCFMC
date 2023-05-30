import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, selectCurrentUser } from './userSlice';
import {
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Button
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateUserLoginForm } from '../../utils/validateUserLoginForm';
import defaultAvatar from '../../app/assets/img/user.png';

const UserLoginForm = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    const handleLogin = (values) => {
        const currentUser = {
            id: Date.now(),
            avatar: defaultAvatar,
            email: values.email,
            password: values.password
        }
        dispatch(setCurrentUser(currentUser));
        setLoginModalOpen(false);
    };

    return (
        <>
            <span className='navbar-text ml-auto'>
                {currentUser ? (
                    <div style={{ width: '3rem', height: '3rem' }}>
                        <img
                            src={currentUser.avatar}
                            alt={'user'}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                ) : (
                    <Button
                        outline
                        onClick={() => setLoginModalOpen(true)}
                        style={{ color: 'white', border: '1px solid white' }}
                    >
                        <i className='fa fa-sign-in fa-lg' /> Login
                    </Button>
                )}
                <Modal isOpen={loginModalOpen}>
                    <ModalHeader toggle={() => setLoginModalOpen(false)}><h4 className='modal-title'>Login</h4></ModalHeader>
                    <ModalBody>
                        <Formik
                            initialValues={{
                                email: '',
                                password: ''
                                }}
                            onSubmit={handleLogin}
                            validate={validateUserLoginForm}
                        >
                            <Form>
                                <FormGroup>
                                    <Field
                                        id='email'
                                        name='email'
                                        placeholder='Email'
                                        className='form-control'
                                    />
                                    <ErrorMessage name='email'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <FormGroup>
                                    <Field
                                        id='password'
                                        name='password'
                                        type='password'
                                        placeholder='Password'
                                        className='form-control'
                                    />
                                    <ErrorMessage name='password'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <Button type='submit' color='primary'>Login</Button>
                            </Form>
                        </Formik>
                    </ModalBody>
                </Modal>
            </span >
        </>
    );
};

export default UserLoginForm;