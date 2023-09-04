import Button, { HoverButton } from 'components/button'
import { Input, InputTextField } from 'components/input'
import { Form, useFormik } from 'formik'
import { validationSchemaContact } from 'lib/validation'

const ContactForm = () => {
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        userName: '',
        email: '',
        message: '',
      },
      validationSchema: validationSchemaContact,
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2))
      },
    })

  return (
    <form className='contactForm' onSubmit={handleSubmit}>
      <Input
        labelText='name*'
        name='userName'
        placeholder='name'
        type='text'
        value={values.userName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.userName}
        touched={touched.userName}
      />
      <Input
        labelText='email*'
        name='email'
        placeholder='email'
        type='text'
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email}
        touched={touched.email}
      />
      <InputTextField
        labelText='message*'
        name='message'
        placeholder='message'
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.message}
        touched={touched.message}
      />
      <HoverButton type='submit'>Submit</HoverButton>
    </form>
  )
}

export default ContactForm
