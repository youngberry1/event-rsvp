import React, { useState } from 'react';
import './EventRSVPForm.css';

export function EventRSVPForm() {
   // Form input state
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      attendees: 1,
      dietary: '',
      guests: false,
   });

   // Track if form has been submitted
   const [isSubmitted, setIsSubmitted] = useState(false);

   const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: type === 'checkbox' ? checked : value,
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitted(true);
   };

   return (
      <div className='rsvp-form-container'>
         <h2>Event RSVP</h2>
         <p>Please fill out the form below to confirm your attendance.</p>

         {/* Display submitted state */}
         {isSubmitted && (
            <div className='submission-summary'>
               <h3>Submitted Information:</h3>
               <p>
                  <strong>Name:</strong>{' '}
                  <span id='name-display'>{formData.name}</span>
               </p>
               <p>
                  <strong>Email:</strong>{' '}
                  <span id='email-display'>{formData.email}</span>
               </p>
               <p>
                  <strong>Number of Attendees:</strong>{' '}
                  <span id='attendees-display'>{formData.attendees}</span>
               </p>
               <p>
                  <strong>Dietary Preferences:</strong>{' '}
                  <span id='dietary-display'>{formData.dietary || 'None'}</span>
               </p>
               <p>
                  <strong>Bringing Additional Guests? </strong>
                  <span id='guests-display'>
                     {formData.guests ? 'Yes' : 'No'}
                  </span>
               </p>
            </div>
         )}

         <form onSubmit={handleSubmit} className='rsvp-form'>
            <div className='form-group'>
               <label htmlFor='name'>Name *</label>
               <input
                  id='name'
                  name='name'
                  type='text'
                  placeholder='Please Enter Your Name'
                  value={formData.name}
                  onChange={handleChange}
                  required
               />
            </div>

            <div className='form-group'>
               <label htmlFor='email'>Email *</label>
               <input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='Please Enter Your Email'
                  value={formData.email}
                  onChange={handleChange}
                  required
               />
            </div>

            <div className='form-group'>
               <label htmlFor='attendees'>Number of Attendees *</label>
               <input
                  id='attendees'
                  name='attendees'
                  type='number'
                  min='1'
                  value={formData.attendees}
                  onChange={handleChange}
                  required
               />
            </div>

            <div className='form-group'>
               <label htmlFor='dietary'>Dietary Preferences (Optional)</label>
               <input
                  id='dietary'
                  name='dietary'
                  type='text'
                  placeholder='e.g., Vegetarian, Gluten-Free'
                  value={formData.dietary}
                  onChange={handleChange}
               />
            </div>

            <div className='form-group checkbox'>
               <label htmlFor='guests'>
                  <input
                     id='guests'
                     name='guests'
                     type='checkbox'
                     checked={formData.guests}
                     onChange={handleChange}
                  />
                  Bringing Additional Guests?
               </label>
            </div>

            <button type='submit' className='submit-btn'>
               Submit RSVP
            </button>
         </form>
      </div>
   );
}
