import React from 'react';

interface InputFieldProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    id: string
    label: string
    errorMessage?: string
    touched?: boolean
}

const InputField: React.FC<InputFieldProps> = ({errorMessage, id, label, touched = 'false', ...rest}) => {
    return (
        <div className='sm:col-span-3'>
            <label
                htmlFor={id}
                className='block text-sm font-medium text-gray-700'
            >
                {label}
            </label>
            <div className='mt-1'>
                <input
                    id={id}
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    {...rest}
                />
                {errorMessage && touched && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        {errorMessage}
                    </p>
                )}
            </div>
        </div>
    );
};

export default InputField;