import React from 'react';
import { Link } from 'react-router-dom';

function RegistrationComponent() {
  return (
    <div>
      <form style={{ width: '24rem', margin: '24% auto' }}>
        Registration
        <label>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '120px auto',
              gridGap: '1rem',
            }}
          >
            <div style={{ textAlign: 'right' }}>Name:</div>
            <input
              style={{ width: '100%' }}
              placeholder='Введите ваше имя'
              type='text'
              name='name'
            />
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '120px auto',
              gridGap: '1rem',
            }}
          >
            <div style={{ textAlign: 'right' }}>Surename:</div>
            <input
              style={{ width: '100%' }}
              type='text'
              placeholder='Введите вашу фамилию'
              name='name'
            />
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '120px auto',
              gridGap: '1rem',
            }}
          >
            <div style={{ textAlign: 'right' }}>Passport ID:</div>
            <input
              style={{ width: '100%' }}
              type='text'
              placeholder='Введите Passport ID'
              name='name'
            />
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '120px auto',
              gridGap: '1rem',
            }}
          >
            <div style={{ textAlign: 'right' }}>Login:</div>
            <input
              style={{ width: '100%' }}
              type='text'
              id='email'
              placeholder='Введите email'
              name='name'
            />
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '120px auto',
              gridGap: '1rem',
            }}
          >
            <div style={{ textAlign: 'right' }}>Password:</div>
            <input
              style={{ width: '100%' }}
              id='passwprd'
              placeholder='Введите passwprd'
              type='password'
              name='name'
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
          <Link to='/login'>
            <input type='submit' value='Есть аккаунт' />
          </Link>
          <input type='submit' value='Создать' />
        </div>
      </form>
    </div>
  );
}

export default RegistrationComponent;
