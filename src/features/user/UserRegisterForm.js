import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import {
    Row,
    Modal,
    ModalHeader,
    ModalBody,
    Dropdown,
    FormGroup,
    Label,
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
                <ModalHeader toggle={() => setRegisterModalOpen(false)}><h4 className='modal-title'>Register</h4></ModalHeader>
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
                            studentTeacher: 'student'
                        }}
                        // onSubmit={handleRegister}
                        onSubmit={onSubmit}
                    // validate={validateUserRegisterForm}
                    >
                        {({ values }) => (
                            <Form>
                                <Row>
                                    <FormGroup style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Label htmlFor='firstName'>First Name:</Label>
                                        <Field
                                            id='firstName'
                                            name='firstName'
                                            placeholder='First Name'
                                            className='form-control'
                                        />
                                        <ErrorMessage name='firstName'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage>
                                        <Label htmlFor='lastName'>Last Name:</Label>
                                        <Field
                                            id='lastName'
                                            name='lastName'
                                            placeholder='Last Name'
                                            className='form-control'
                                        />
                                        <ErrorMessage name='lastName'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage>
                                    </FormGroup>
                                </Row>
                                <FormGroup>
                                    <Label htmlFor='address'>Address</Label>
                                    <Field
                                        id='address'
                                        name='address'
                                        placeholder='Address'
                                        className='form-control'
                                    />
                                    <ErrorMessage name='address'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='city'>City</Label>
                                    <Field
                                        id='city'
                                        name='city'
                                        placeholder='City'
                                        className='form-control'
                                    />
                                    <ErrorMessage name='city'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='state'>State</Label>
                                    <Field
                                        component='select'
                                        name='state'
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
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='zipCode'>Zip Code</Label>
                                    <Field
                                        id='zipCode'
                                        name='zipCode'
                                        placeholder='Zip Code'
                                        className='form-control'
                                    />
                                    <ErrorMessage name='address'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='phone'>Phone</Label>
                                    <Field
                                        id='phone'
                                        name='phone'
                                        placeholder='Phone'
                                        className='form-control'
                                    />
                                    <ErrorMessage name='address'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='email'>E-Mail</Label>
                                    <Field
                                        id='email'
                                        name='email'
                                        placeholder='E-Mail'
                                        className='form-control'
                                    />
                                    <ErrorMessage name='address'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='password'>Password</Label>
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
                                <FormGroup>
                                    <Field
                                        component='div'
                                        name='studentTeacher'
                                    >
                                        <input
                                            type='radio'
                                            id='student'
                                            defaultChecked={values.studentTeacher === 'student'}
                                            name='studentTeacher'
                                            value='student'
                                        />
                                        <label htmlFor='student'>Student</label>
                                        <input
                                            type='radio'
                                            id='teacher'
                                            defaultChecked={values.studentTeacher === 'teacher'}
                                            name='studentTeacher'
                                            value='teacher'
                                        />
                                        <label htmlFor='teacher'>Teacher</label>
                                    </Field>
                                </FormGroup>
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