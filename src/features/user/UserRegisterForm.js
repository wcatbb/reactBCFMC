import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Col,
    Row,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Button
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { RegisterSchema, phoneFormat } from '../../utils/validateSchema';
import { setCurrentUser, selectCurrentUser } from './userSlice';
import defaultAvatar from '../../app/assets/img/user.png';

const UserRegisterForm = () => {
    const [registerModalOpen, setRegisterModalOpen] = useState(false);
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    const handleRegister = (values) => {
        console.log('Values', values);
        const currentUser = {
            id: Date.now(),
            firstName: values.firstName,
            lastName: values.lastName,
            phone: values.phone,
            email: values.email,
            password: values.password,
            class: values.class,
            avatar: defaultAvatar
        }
        dispatch(setCurrentUser(currentUser));
        setRegisterModalOpen(false);

    };

    return (
        <>
            {currentUser ? (
                <div></div>) : (
                <Button
                    color='primary'
                    size='lg'
                    onClick={() => setRegisterModalOpen(true)}>Register Today!
                </Button>
            )}
            <Modal isOpen={registerModalOpen} >
                <ModalHeader toggle={() => setRegisterModalOpen(false)}><div className='modal-title'>Account Registration</div></ModalHeader>
                <ModalBody className='container-fluid'>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            phone: '',
                            email: '',
                            password: '',
                            confirmPassword: '',
                            class: 'student'
                        }}
                        onSubmit={handleRegister}
                        validationSchema={RegisterSchema}
                    >
                        {({ values, setFieldValue }) => (
                            <Form>
                                <FormGroup>
                                    <Row className='mb-4'>
                                        <Col>
                                            <Field
                                                id='firstName'
                                                name='firstName'
                                                placeholder='First Name'
                                                className='form-control'
                                            />
                                            <ErrorMessage name='firstName'>
                                                {(msg) => <p className='error'>{msg}</p>}
                                            </ErrorMessage>
                                        </Col>
                                        <Col>
                                            <Field
                                                id='lastName'
                                                name='lastName'
                                                placeholder='Last Name'
                                                className='form-control'
                                            />
                                            <ErrorMessage name='lastName'>
                                                {(msg) => <p className='error'>{msg}</p>}
                                            </ErrorMessage>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row className='mb-4'>
                                        <Col>
                                            <Field
                                                id='phone'
                                                name='phone'
                                                placeholder='Phone'
                                                className='form-control'
                                                onChange={(e) => {
                                                    const value = e.target.value || '';
                                                    setFieldValue('phone', phoneFormat(value));
                                                }}
                                            />
                                            <ErrorMessage name='phone'>
                                                {(msg) => <p className='error'>{msg}</p>}
                                            </ErrorMessage>
                                        </Col>
                                        <Col>
                                            <Field
                                                id='email'
                                                name='email'
                                                placeholder='Email'
                                                className='form-control'
                                            />
                                            <ErrorMessage name='email'>
                                                {(msg) => <p className='error'>{msg}</p>}
                                            </ErrorMessage>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row className='mb-4'>
                                        <Col>
                                            <Field
                                                id='password'
                                                name='password'
                                                type='password'
                                                placeholder='Password'
                                                className='form-control'
                                            />
                                            <ErrorMessage name='password'>
                                                {(msg) => <p className='error'>{msg}</p>}
                                            </ErrorMessage>
                                        </Col>
                                        <Col>
                                            <Field
                                                id='confirmPassword'
                                                name='confirmPassword'
                                                type='password'
                                                placeholder='Confirm Password'
                                                className='form-control'
                                            />
                                            <ErrorMessage name='confirmPassword'>
                                                {(msg) => <p className='error'>{msg}</p>}
                                            </ErrorMessage>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <label htmlFor='class' className='col-md-2 col-form-label'>I am a:</label>
                                        <Col className='col btn-group btn-group-toggle col-md-4' data-toggle='buttons'>
                                            <Field
                                                component='div'
                                                name='class'
                                            >
                                                <div className='col btn-group btn-group-toggle col-md-4' data-toggle='buttons'>
                                                    <label htmlFor='student' className='btn btn-danger btn-sm active'>Student
                                                        <input
                                                            type='radio'
                                                            id='student'
                                                            defaultChecked={values.class === 'student'}
                                                            name='class'
                                                            value='student'
                                                        />
                                                    </label>
                                                    <label htmlFor='teacher' className='btn btn-warning btn-sm'>Teacher
                                                        <input
                                                            type='radio'
                                                            id='teacher'
                                                            defaultChecked={values.class === 'teacher'}
                                                            name='class'
                                                            value='teacher'
                                                        />
                                                    </label>
                                                    <label htmlFor='volunteer' className='btn btn-success btn-sm'>Volunteer
                                                        <input
                                                            type='radio'
                                                            id='volunteer'
                                                            defaultChecked={values.class === 'volunteer'}
                                                            name='class'
                                                            value='volunteer'
                                                        />
                                                    </label>
                                                </div>
                                            </Field>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <Button
                                    type='submit'
                                    color='primary'>Register</Button>
                            </Form>
                        )}
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    );
};

export default UserRegisterForm;