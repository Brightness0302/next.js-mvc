import React from 'react';

type OptionType = {
    value: string
    label: string
}
interface SelectFieldProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>{
    id: string
    label: string
    placeholder: string
    options: OptionType[]
    errorMessage?: string
    touched?: boolean
}

const SelectField: React.FC<SelectFieldProps> = ({errorMessage, id, label, placeholder, options, touched = 'false', ...rest}) => {
    return (
        <div className='sm:col-span-3'>
            <label
                htmlFor={id}
                className='block text-sm font-medium text-gray-700'
            >
                {label}
            </label>
            <div className='mt-1'>
                <select
                    id={id}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    {...rest}
                >
                    {options.map(({value, label}) => <option key={value} value={value}>{label}</option>)}
                </select>
                {errorMessage && touched && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        {errorMessage}
                    </p>
                )}
            </div>
        </div>
    );
};

export default SelectField;