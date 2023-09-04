import { Label } from 'components/typography'
import { Field } from 'formik'

interface Props {
  className?: string
  type: string
  name: string
  value: string
  placeholder: string
  labelText: string
  status: any
  error?: string
  touched?: boolean
  handleBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputTextField = ({ className = '', name, value, placeholder, labelText, status, error, touched, handleBlur, onChange }: Omit<Props, 'type'>) => (
  <div>
    <Label>{labelText}</Label>
    <Field className={`input ${className}`} onChange={onChange} onBlur={handleBlur} value={value} required type='textArea' name={name} placeholder={placeholder} />
  </div>
)

export const Input = ({ className = '', type, name, value, placeholder, labelText, status, error, touched, handleBlur, onChange }: Props) => (
  <div>
    <Label>{labelText}</Label>
    <Field className={`input ${className}`} onChange={onChange} onBlur={handleBlur} value={value} required type={type} name={name} placeholder={placeholder} />
  </div>
)
