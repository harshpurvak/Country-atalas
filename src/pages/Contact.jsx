import React from 'react'

const Contact = () => {
  return (
    <section className='section-contact'>

      <h2 className='container-title'>Contact Us</h2>
      <div className='container contact-wrapper'>

      <form action="">
        <input type="text"
          required
          autoComplete='false'
          placeholder='Enter Your Name'
          name='username'
        />

        <input type="email"
          required
          className='form-control'
          placeholder='Enter Your Email'
          name='email'
          autoComplete='false'
        />
        <textarea
          className='form-control'
          rows="10"
          placeholder='Enter Your Message'
          name='message'
          required
          autoComplete='false'
        >

        </textarea>
        <button type='submit'>Send</button>
      </form>
      </div>
    </section>
  )
}

export default Contact
