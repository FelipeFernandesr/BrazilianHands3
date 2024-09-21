import React, { useState } from 'react';
import * as yup from 'yup';
import './index.scss';

const schema = yup.object().shape({
  Contact: yup.string().required('Name is required'),
  Email: yup.string().required('Email is required').matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    'Email must be a valid format (e.g., name@example.com)'
  ),
  Phone: yup.string().required('Phone number is required'),
  Eircode: yup.string().required('Eircode is required'),
  Address: yup.string().required('Address is required'),
  AddressNumber: yup.string().required('Number is required'),
  Services: yup.string().required('Services are required'),
});

const fields = [
  { name: 'Contact', type: 'text', label: 'Contact', required: true, className: 'contact-field'},
  { name: 'Email', type: 'email', label: 'Email', required: true, className: 'email-field'},
  { name: 'Phone', type: 'tel', label: 'Phone', required: true, className: 'phone-field' },
  { name: 'Eircode', type: 'text', label: 'Eircode', required: true, className: 'eircode-field' },
  { name: 'Address', type: 'text', label: 'Address', required: true, className: 'address-field'},
  { name: 'AddressNumber', type: 'text', label: 'Number', required: true, className: 'number-field'},
  { name: 'Complement', type: 'text', label: 'Complement', className: 'complement-field'},
  { name: 'Services', type: 'text', label: 'Services', required: true, className: 'services-field'},
];

const TeamForm = () => {
  const [formData, setFormData] = useState(fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {}));
  const [errors, setErrors] = useState({});

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value.trim() }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = async () => {
    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (validationErrors) {
      const formattedErrors = validationErrors.inner.reduce((acc, error) => {
        acc[error.path] = error.message;
        return acc;
      }, {});
      setErrors(formattedErrors);
      return false;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validate();
    if (isValid) {
      try {
        const response = await fetch('https://api.sheetmonkey.io/form/uyWHi5PnxssqqGdNRyVw3o', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Form submitted successfully');
          setFormData(fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {}));
        } else {
          alert('Error adding form data to Google Sheets');
        }
      } catch (error) {
        alert('Error adding form data to Google Sheets');
      }
    }
  };

  return (
    <section className='Form_Team'>
      <form onSubmit={onSubmit}>
        {fields.map(({ name, type, label, required, className }) => (
          <div className='Form_Team_Grop' key={name}>
            <label htmlFor={name}>{label}</label>
            <input
              type={type}
              id={name}
              name={name}
              value={formData[name]}
              onChange={onInputChange}
              required={required}
              className={className}
            />
            {errors[name] && <p className='error'>{errors[name]}</p>}
          </div>
        ))}
        <button type="submit">Submit my request</button>
      </form>
    </section>
  );
};

export default TeamForm;
