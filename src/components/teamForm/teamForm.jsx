import React, { useState } from 'react';
import './index.scss';

const TeamForm = () => {
  const [formData, setFormData] = useState({
    Contact: '',
    Email: '',
    Phone: '',
    Eircode: '',
    Address: '',
    AddressNumber: '',
    Complement: '',
    Services: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const tempErrors = {};
    let isValid = true;

    if (!formData.Contact.trim()) {
      tempErrors.Contact = 'Name is required';
      isValid = false;
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(formData.Email)) {
      tempErrors.Email = 'Email invalid';
      isValid = false;
    }

    if (!formData.Phone.trim()) {
      tempErrors.Phone = 'Phone number is required';
      isValid = false;
    }

    if (!formData.Eircode.trim()) {
      tempErrors.Eircode = 'Eircode is required';
      isValid = false;
    }

    if (!formData.Address.trim()) {
      tempErrors.Address = 'Address is required';
      isValid = false;
    }

    if (!formData.AddressNumber.trim()) {
      tempErrors.AddressNumber = 'Number is required';
      isValid = false;
    }

    if (!formData.Services.trim()) {
      tempErrors.Services = 'Services are required';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch('https://api.sheetmonkey.io/form/uyWHi5PnxssqqGdNRyVw3o', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Form submitted successfully');
          setFormData({
            Contact: '',
            Email: '',
            Phone: '',
            Eircode: '',
            Address: '',
            AddressNumber: '',
            Complement: '',
            Services: '',
          });
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
      <form onSubmit={handleSubmit}>
        <div className='Form_Team_Grop'>
          <label htmlFor='Contact'>Contact</label>
          <input
            type='text'
            id='Contact'
            name='Contact'
            value={formData.Contact}
            onChange={handleChange}
            placeholder='Enter your name'
          />
          {errors.Contact && <p className='error'>{errors.Contact}</p>}
        </div>
        <div className='Form_Team_Grop'>
          <label htmlFor='Email'>Email</label>
          <input
            type='email'
            id='Email'
            name='Email'
            value={formData.Email}
            onChange={handleChange}
            placeholder='Enter your Email'
          />
          {errors.Email && <p className='error'>{errors.Email}</p>}
        </div>
        <div className='Form_Team_Grop'>
          <label htmlFor='Phone'>Phone</label>
          <input
            type='tel'
            id='Phone'
            name='Phone'
            value={formData.Phone}
            onChange={handleChange}
            placeholder='Enter your phone number'
          />
          {errors.Phone && <p className='error'>{errors.Phone}</p>}
        </div>
        <div className='Form_Team_Grop'>
          <label htmlFor='Eircode'>Eircode</label>
          <input
            type='text'
            id='Eircode'
            name='Eircode'
            value={formData.Eircode}
            onChange={handleChange}
            placeholder='Enter your Eircode'
          />
          {errors.Eircode && <p className='error'>{errors.Eircode}</p>}
        </div>
        <div className='Form_Team_Grop'>
          <label htmlFor='Address'>Address</label>
          <input
            type='text'
            id='Address'
            name='Address'
            value={formData.Address}
            onChange={handleChange} // Campo editável
            placeholder='Enter your Address'
          />
          {errors.Address && <p className='error'>{errors.Address}</p>}
        </div>
        <div className='Form_Team_Grop'>
          <label htmlFor='AddressNumber'>Number</label>
          <input
            type='text'
            id='AddressNumber'
            name='AddressNumber'
            value={formData.AddressNumber}
            onChange={handleChange}
            placeholder='Enter your house number'
          />
          {errors.AddressNumber && <p className='error'>{errors.AddressNumber}</p>}
        </div>
        <div className='Form_Team_Grop'>
          <label htmlFor='Complement'>Complement</label>
          <input
            type='text'
            id='Complement'
            name='Complement'
            value={formData.Complement}
            onChange={handleChange}
            placeholder='Enter complement of your address'
          />
        </div>
        <div className='Form_Team_Grop'>
          <label htmlFor='Services'>Services</label>
          <input
            type='text'
            id='Services'
            name='Services'
            value={formData.Services}
            onChange={handleChange}
            placeholder='Inform the services provided'
          />
          {errors.Services && <p className='error'>{errors.Services}</p>}
        </div>
        <button type="submit">Submit my request</button>
      </form>
    </section>
  );
};

export default TeamForm;
