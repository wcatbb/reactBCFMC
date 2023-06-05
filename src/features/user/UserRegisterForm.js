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
// import { validateRegistrationForm } from '../../utils/validateRegistrationForm';

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
                <ModalHeader toggle={() => setRegisterModalOpen(false)}><h4 className='modal-title'>Account Registration</h4></ModalHeader>
                <ModalBody className='container-fluid'>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            address: '',
                            city: '',
                            state: 'TX',
                            zipCode: '',
                            phone: '',
                            email: '',
                            password: '',
                            confirmPassword: '',
                            status: 'student'
                        }}
                        // onSubmit={handleRegister}
                        onSubmit={onSubmit}
                    // validate={validateUserRegisterForm}
                    >
                        {({ values }) => (
                            <Form>
                                <Row>
                                    <div className='form-group row align-items-center'>
                                        <label for='firstName' className='col-lg-2 col-form-label'>First Name:</label>
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
                                        <label for='lastName' className='col-lg-2 col-form-label'>Last Name:</label>
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
                                        <label for='address' className='col-md-2 col-form-label'>Address:</label>
                                        <Col className='col-md-10'>
                                            <Field
                                                id='address'
                                                name='address'
                                                placeholder='Address'
                                                className='form-control'
                                            />
                                            <ErrorMessage name='address'>
                                                {(msg) => <p className='text-danger'>{msg}</p>}
                                            </ErrorMessage>
                                        </Col>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='form-group row align-items-center'>
                                        <label for='city' className='col-md-2 col-form-label'>City:</label>
                                        <Col className='col-md-3'>
                                            <Field
                                                id='city'
                                                name='city'
                                                placeholder='City'
                                                className='form-control'
                                            />
                                            <ErrorMessage name='city'>
                                                {(msg) => <p className='text-danger'>{msg}</p>}
                                            </ErrorMessage>
                                        </Col>
                                        <label for='state' className='col-md-1 col-form-label'>State:</label>
                                        <Col className='col-md-2'>
                                            <Field
                                                id='state'
                                                name='state'
                                                component='select'
                                                className='form-control'
                                            >
                                                <option value="AL">AL</option>
                                                <option value="AK">AK</option>
                                                <option value="AR">AR</option>
                                                <option value="AZ">AZ</option>
                                                <option value="CA">CA</option>
                                                <option value="CO">CO</option>
                                                <option value="CT">CT</option>
                                                <option value="DC">DC</option>
                                                <option value="DE">DE</option>
                                                <option value="FL">FL</option>
                                                <option value="GA">GA</option>
                                                <option value="HI">HI</option>
                                                <option value="IA">IA</option>
                                                <option value="ID">ID</option>
                                                <option value="IL">IL</option>
                                                <option value="IN">IN</option>
                                                <option value="KS">KS</option>
                                                <option value="KY">KY</option>
                                                <option value="LA">LA</option>
                                                <option value="MA">MA</option>
                                                <option value="MD">MD</option>
                                                <option value="ME">ME</option>
                                                <option value="MI">MI</option>
                                                <option value="MN">MN</option>
                                                <option value="MO">MO</option>
                                                <option value="MS">MS</option>
                                                <option value="MT">MT</option>
                                                <option value="NC">NC</option>
                                                <option value="NE">NE</option>
                                                <option value="NH">NH</option>
                                                <option value="NJ">NJ</option>
                                                <option value="NM">NM</option>
                                                <option value="NV">NV</option>
                                                <option value="NY">NY</option>
                                                <option value="ND">ND</option>
                                                <option value="OH">OH</option>
                                                <option value="OK">OK</option>
                                                <option value="OR">OR</option>
                                                <option value="PA">PA</option>
                                                <option value="RI">RI</option>
                                                <option value="SC">SC</option>
                                                <option value="SD">SD</option>
                                                <option value="TN">TN</option>
                                                <option value="TX">TX</option>
                                                <option value="UT">UT</option>
                                                <option value="VT">VT</option>
                                                <option value="VA">VA</option>
                                                <option value="WA">WA</option>
                                                <option value="WI">WI</option>
                                                <option value="WV">WV</option>
                                                <option value="WY">WY</option>
                                            </Field>
                                            <ErrorMessage name='state'>
                                                {(msg) => <p className='text-danger'>{msg}</p>}
                                            </ErrorMessage>
                                        </Col>
                                        <label for='zipCode' className='col-md-1 col-form-label'>Zip:</label>
                                        <Col className='col-md-3'>
                                            <Field
                                                id='zipCode'
                                                name='zipCode'
                                                placeholder='Zip Code'
                                                className='form-control'
                                            />
                                            <ErrorMessage name='zipCode'>
                                                {(msg) => <p className='text-danger'>{msg}</p>}
                                            </ErrorMessage>
                                        </Col>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='form-group row align-items-center'>
                                        <label for='phone' className='col-lg-2 col-form-label'>Phone:</label>
                                        <Col className='col-lg-3'>
                                            <Field
                                                id='phone'
                                                name='phone'
                                                placeholder='Phone'
                                                className='form-control'
                                            />
                                            <ErrorMessage name='phone'>
                                                {(msg) => <p className='text-danger'>{msg}</p>}
                                            </ErrorMessage>
                                        </Col>
                                        <label for='email' className='col-lg-1 col-form-label'>Email:</label>
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
                                        <label for='password' className='col-lg-2 col-form-label'>Password:</label>
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
                                        <label for='confirmPassword' className='col-lg-3 col-form-label'>Confirm Password:</label>
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
                                        <label for='status' className='col-md-2 col-form-label'>I am a:</label>
                                        <Col className='col btn-group btn-group-toggle col-md-4' data-toggle='buttons'>
                                            <Field
                                                component='div'
                                                name='status'
                                            >
                                                <div className='col btn-group btn-group-toggle col-md-4' data-toggle='buttons'>
                                                    <label for='student' className='btn btn-danger btn-sm active'>Student
                                                        <input
                                                            type='radio'
                                                            id='student'
                                                            defaultChecked={values.status === 'student'}
                                                            name='status'
                                                            value='student'
                                                        />
                                                    </label>
                                                    <label for='teacher' className='btn btn-warning btn-sm'>Teacher
                                                        <input
                                                            type='radio'
                                                            id='teacher'
                                                            defaultChecked={values.status === 'teacher'}
                                                            name='status'
                                                            value='teacher'
                                                        />
                                                    </label>
                                                    <label for='volunteer' className='btn btn-success btn-sm'>Volunteer
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