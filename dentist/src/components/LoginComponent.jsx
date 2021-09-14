import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginComponent() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form style={{ width: '24rem', margin: '30% auto' }}>
        Login
        <label>
          <div style={{ display: 'grid', gridTemplateColumns: '120px auto' }}>
            Login:
            <input
              style={{ width: '100%' }}
              type='text'
              id='email'
              placeholder='Введите email'
              name='name'
              onChange={changeHandler}
            />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '120px auto' }}>
            Password:
            <input
              style={{ width: '100%' }}
              id='passwprd'
              placeholder='Введите passwprd'
              type='password'
              name='name'
              onChange={changeHandler}
            />
          </div>
        </label>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '10rem 4rem',
            float: 'right',
          }}
        >
          <Link to='/registration'>
            <input type='submit' value='Зарегистрироваться' />
          </Link>
          <input type='submit' value='Войти' />
        </div>
      </form>
    </div>
  );
}

export default LoginComponent;
