import './FormComponent.css'
import { useState } from 'react'

const FormComponent = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRePassword] = useState('')

  const [errorUserName, setErrorUserName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorRePassword, setErrorRePassword] = useState('')

  const [userNameColor, setUserNameColor] = useState('')
  const [emailColor, setEmailColor] = useState('')
  const [passwordColor, setPasswordColor] = useState('')
  const [repasswordColor, setRepasswordColor] = useState('')

  const validateForm = e => {
    e.preventDefault()
    if (userName.length > 8) {
      setErrorUserName('')
      setUserNameColor('green')
    } else {
      setErrorUserName('Username must be at least 8 characters')
      setUserNameColor('red')
    }

    if (email.includes('@')) {
      setErrorEmail('')
      setEmailColor('green')
    } else {
      setErrorEmail('E-mail is not valid')
      setEmailColor('red')
    }

    if (password.length > 8) {
      setErrorPassword('')
      setPasswordColor('green')
    } else {
      setErrorPassword('Password must be at least 8 characters')
      setPasswordColor('red')
    }

    if (repassword != '' && repassword === password) {
      setErrorRePassword('')
      setRepasswordColor('green')
    } else {
      setErrorRePassword('Password do not match')
      setRepasswordColor('red')
    }
  }

  return (
    <div className='container'>
      <form className='form' onSubmit={validateForm}>
        <h2>Register</h2>
        <div className='form-control'>
          <label>Username</label>
          <input
            type='text'
            value={userName}
            onChange={e => setUserName(e.target.value)}
            style={{ borderColor: userNameColor }}
          />
          <small style={{ color: userNameColor }}>{errorUserName}</small>
        </div>
        <div className='form-control'>
          <label>E-mail</label>
          <input
            type='text'
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ borderColor: emailColor }}
          />
          <small style={{ color: emailColor }}>{errorEmail}</small>
        </div>
        <div className='form-control'>
          <label>Password</label>
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ borderColor: passwordColor }}
          />
          <small style={{ color: passwordColor }}>{errorPassword}</small>
        </div>
        <div className='form-control'>
          <label>Confirm Password</label>
          <input
            type='password'
            value={repassword}
            onChange={e => setRePassword(e.target.value)}
            style={{ borderColor: repasswordColor }}
          />
          <small style={{ color: repasswordColor }}>{errorRePassword}</small>
        </div>
        <button type='submit'>Done</button>
      </form>
    </div>
  )
}

export default FormComponent
