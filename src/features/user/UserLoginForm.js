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
import { Formik, Field, Form } from 'formik';
import defaultAvatar from '../../app/assets/img/user.png';
import { LoginSchema } from '../../utils/validateSchema';

const UserLoginForm = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    const handleLogin = (values) => {
        console.log(values);
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
        <div className='navbar-text ml-auto'>
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
            <Modal isOpen={loginModalOpen}
                toggle={() => setLoginModalOpen(false)}
            >
                <ModalHeader toggle={() => setLoginModalOpen(false)}><div className='modal-title'>Login</div></ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        validationSchema={LoginSchema}
                        onSubmit={handleLogin}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <FormGroup>
                                    <Field
                                        id='email'
                                        name='email'
                                        placeholder='Email'
                                        className='form-control'
                                    />
                                    {errors.email && touched.email ? (
                                        <div className='text-danger'>{errors.email}</div>
                                    ) : null}
                                </FormGroup>
                                <FormGroup>
                                    <Field
                                        id='password'
                                        name='password'
                                        type='password'
                                        placeholder='Password'
                                        className='form-control'
                                    />
                                    {errors.password && touched.password ? (
                                        <div className='text-danger'>{errors.password}</div>
                                    ) : null}
                                </FormGroup>
                                <Button type='submit' color='primary'>Login</Button>
                            </Form>
                        )}
                    </Formik>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default UserLoginForm;