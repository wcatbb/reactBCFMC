import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import {
    Col,
    Row,
    Modal,
    ModalHeader,
    ModalBody,
    Button
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { RegisterSchema, phoneFormat } from '../../utils/validateSchema';

const UserRegisterForm = () => {
    const [registerModalOpen, setRegisterModalOpen] = useState(false);
    // const dispatch = useDispatch();

    // const handleRegister = (values) => {
    //     const newUser = {
    //         id: Date.now(),
    //         firstName: values.firstName,
    //         lastName: values.lastName,

    //     }
    //     dispatch(setCurrentUser(newUser));
    //     setRegisterModalOpen(false);
    // };

    const onSubmit = values => {
        console.log('Values', values);
        setRegisterModalOpen(false);
    }

    return (
        <>
            <Button
                color='primary'
                size='lg'
                onClick={() => setRegisterModalOpen(true)}>Register Today!
            </Button>
            <Modal isOpen={registerModalOpen} className='modal-lg'>
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
                            status: 'student'
                        }}
                        // onSubmit={handleRegister}
                        onSubmit={onSubmit}
                        validationSchema={RegisterSchema}
                    >
                        {({ values, setFieldValue }) => (
                            <Form>
                                <Row>
                                    <div className='form-group row align-items-center'>
                                        <label htmlFor='firstName' className='col-lg-2 col-form-label'>First Name:</label>
                                        <Col className='col-lg-4'>
                                            <Field
                                                id='firstName'
                                                name='firstName'
                                                placeholder='First Name'
                                                className='form-control'
                                            />
                                            <ErrorMessage name='firstName'>
                                                {(msg) => <p className='text-danger'>{msg}</p>}
                                            </ErrorMessage>
                                        </Col>
                                        <label htmlFor='lastName' className='col-lg-2 col-form-label'>Last Name:</label>
                                        <Col className='col-lg-4'>
                                            <Field
                                                id='lastName'
                                                name='lastName'
                                                placeholder='Last Name'
                                                className='form-control'
                                            />
                                            <ErrorMessage name='lastName'>
                                                {(msg) => <p className='text-danger'>{msg}</p>}
                                            </ErrorMessage>
                                        </Col>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='form-group row align-items-center'>
                                        <label htmlFor='phone' className='col-lg-2 col-form-label'>Phone:</label>
                                        <Col className='col-lg-3'>
                                            <Field
                                                id='phone'
                                                name='phone'
                                                placeholder='Phone'
                                                className='form-control'
                                                onChange= {(e) => {
                                                    const value = e.target.value || '';
                                                    setFieldValue('phone', phoneFormat(value));
                                                }}
                                            />
                                            <ErrorMessage name='phone'>
                                                {(msg) => <p className='text-danger'>{msg}</p>}
                                            </ErrorMessage>
                                        </Col>
                                        <label htmlFor='email' className='col-lg-1 col-form-label'>Email:</label>
                                        <Col className='col-lg-6'>
                                            <Field
                                                id='email'
                                                name='email'
                                                placeholder='Email'
                                                className='form-control'
                                            />
                                            <ErrorMessage name='email'>
                                                {(msg) => <p className='text-danger'>{msg}</p>}
                                            </ErrorMessage>
                                        </Col>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='form-group row align-items-center mb-3'>
                                        <label htmlFor='password' className='col-lg-2 col-form-label'>Password:</label>
                                        <Col className='col-lg-3'>
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
                                        </Col>
                                        <label htmlFor='confirmPassword' className='col-lg-3 col-form-label'>Confirm Password:</label>
                                        <Col className='col-lg-4'>
                                            <Field
                                                id='confirmPassword'
                                                name='confirmPassword'
                                                type='password'
                                                placeholder='Confirm Password'
                                                className='form-control'
                                            />
                                            <ErrorMessage name='confirmPassword'>
                                                {(msg) => <p className='text-danger'>{msg}</p>}
                                            </ErrorMessage>
                                        </Col>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='form-group row align-items-center mb-3'>
                                        <label htmlFor='status' className='col-md-2 col-form-label'>I am a:</label>
                                        <Col className='col btn-group btn-group-toggle col-md-4' data-toggle='buttons'>
                                            <Field
                                                component='div'
                                                name='status'
                                            >
                                                <div className='col btn-group btn-group-toggle col-md-4' data-toggle='buttons'>
                                                    <label htmlFor='student' className='btn btn-danger btn-sm active'>Student
                                                        <input
                                                            type='radio'
                                                            id='student'
                                                            defaultChecked={values.status === 'student'}
                                                            name='status'
                                                            value='student'
                                                        />
                                                    </label>
                                                    <label htmlFor='teacher' className='btn btn-warning btn-sm'>Teacher
                                                        <input
                                                            type='radio'
                                                            id='teacher'
                                                            defaultChecked={values.status === 'teacher'}
                                                            name='status'
                                                            value='teacher'
                                                        />
                                                    </label>
                                                    <label htmlFor='volunteer' className='btn btn-success btn-sm'>Volunteer
                                                        <input
                                                            type='radio'
                                                            id='volunteer'
                                                            defaultChecked={values.status === 'volunteer'}
                                                            name='status'
                                                            value='volunteer'
                                                        />
                                                    </label>
                                                </div>

                                            </Field>
                                        </Col>
                                    </div>
                                </Row>
                                <Button type='submit' color='primary'>Register</Button>
                            </Form>
                        )}
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    );
};

export default UserRegisterForm;