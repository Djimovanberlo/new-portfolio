import Button from 'components/button'
import { Input, InputTextField } from 'components/input'
import { Form, useFormik } from 'formik'

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      message: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <form className='contactForm' onSubmit={formik.handleSubmit}>
      <Input labelText='name' name='userName' placeholder='name' type='text' status={formik.status} value={formik.values.userName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
      <Input labelText='email' name='email' placeholder='email' type='text' status={formik.status} value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
      <InputTextField labelText='message' name='message' placeholder='message' status={formik.status} value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur} />
      <Button type='submit'>SUBMIT</Button>
    </form>
  )
}

export default ContactForm
