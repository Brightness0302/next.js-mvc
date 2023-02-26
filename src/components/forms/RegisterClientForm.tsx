import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import InputField from "../InputField";
import SelectField from "../SelectField";
import {IRegisterClient} from "../../types";

interface RegisterClientFormProps {
    handleClose: () => void
    onRegister: (data: IRegisterClient) => void
}

const RegisterClientSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    sex: Yup.string().required('Required'),
    supportTier: Yup.string().required('Required'),
    birthday: Yup.string().required('Required'),
    hourlyRate: Yup.string().required('Required'),
});

const initialValues: IRegisterClient = {
    avatar: '',
    birthday: '',
    email: '',
    firstName: '',
    lastName: '',
    sex: 'male',
    supportTier: 'standard',
    hourlyRate: 0
}

const RegisterClientForm: React.FC<RegisterClientFormProps> = ({handleClose, onRegister}) => {

    const onSubmit = (values: IRegisterClient) => {
        onRegister(values)
        handleClose()
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={RegisterClientSchema}
            onSubmit={onSubmit}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
              }) => (
                <Form className='space-y-8 divide-y divide-gray-200'>
                    <div className='space-y-8 divide-y divide-gray-200'>
                        <div>
                            <div>
                                <h3 className='text-base font-semibold leading-6 text-gray-900'>
                                    Profile
                                </h3>
                                <p className='mt-1 text-sm text-gray-500'>
                                    This information will be displayed publicly so be
                                    careful what you share.
                                </p>
                            </div>

                            <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
                                <div className='sm:col-span-6'>
                                    <label
                                        htmlFor='photo'
                                        className='block text-sm font-medium text-gray-700'
                                    >
                                        Avatar
                                    </label>
                                    <div className='mt-1 flex items-center'>
                                <span className='h-12 w-12 overflow-hidden rounded-full bg-gray-100'>
                                    <svg
                                        className='h-full w-full text-gray-300'
                                        fill='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z'/>
                                    </svg>
                                </span>
                                        <button
                                            type='button'
                                            className='ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                        >
                                            Change
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='pt-8'>
                            <div>
                                <h3 className='text-base font-semibold leading-6 text-gray-900'>
                                    Personal Information
                                </h3>
                                <p className='mt-1 text-sm text-gray-500'>
                                    Use a permanent address where you can receive mail.
                                </p>
                            </div>
                            <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
                                <div className='sm:col-span-3'>
                                    <InputField
                                        label='First name'
                                        touched={touched.firstName}
                                        errorMessage={errors.firstName}
                                        type='text'
                                        name='firstName'
                                        id='firstName'
                                        autoComplete='given-name'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.firstName}
                                    />
                                </div>
                                <div className='sm:col-span-3'>
                                    <InputField
                                        label='Last name'
                                        touched={touched.lastName}
                                        errorMessage={errors.lastName}
                                        type='text'
                                        name='lastName'
                                        id='lastName'
                                        autoComplete='family-name'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.lastName}
                                    />
                                </div>

                                <div className='sm:col-span-4'>
                                    <InputField
                                        label='Email address'
                                        touched={touched.email}
                                        errorMessage={errors.email}
                                        id='email'
                                        name='email'
                                        type='email'
                                        autoComplete='email'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                </div>
                                <div className='sm:col-span-3'>
                                    <InputField
                                        label='Birthday'
                                        touched={touched.birthday}
                                        errorMessage={errors.birthday}
                                        id='birthday'
                                        name='birthday'
                                        type='date'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.birthday}
                                    />
                                </div>

                                <div className='sm:col-span-3'>
                                    <SelectField
                                        label='Sex'
                                        touched={touched.sex}
                                        errorMessage={errors.sex}
                                        id='sex'
                                        name='sex'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.sex}
                                        placeholder='Choose a sex'
                                        options={[
                                            {
                                                value: 'male',
                                                label: 'Male',
                                            },
                                            {
                                                value: 'female',
                                                label: 'Female',
                                            }
                                        ]}
                                    />
                                </div>

                                <div className='sm:col-span-3'>
                                    <SelectField
                                        label='Support tier'
                                        touched={touched.supportTier}
                                        errorMessage={errors.supportTier}
                                        id='supportTier'
                                        name='supportTier'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.supportTier}
                                        placeholder='Choose a tier'
                                        options={[
                                            {
                                                value: 'standard',
                                                label: 'Standard',
                                            },
                                            {
                                                value: 'gold',
                                                label: 'Gold',
                                            },
                                            {
                                                value: 'platinum',
                                                label: 'Platinum',
                                            }
                                        ]}
                                    />
                                </div>
                                <div className='sm:col-span-3'>
                                    <InputField
                                        label='Hourly Rate'
                                        touched={touched.hourlyRate}
                                        errorMessage={errors.hourlyRate}
                                        id='hourlyRate'
                                        name='hourlyRate'
                                        type='number'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.hourlyRate}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pt-5'>
                        <div className='flex justify-end'>
                            <button
                                type='button'
                                onClick={handleClose}
                                className='rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                            >
                                Cancel
                            </button>
                            <button
                                type='submit'
                                className='ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default RegisterClientForm;