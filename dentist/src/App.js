import React from 'react';
import './App.css';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function App() {
  return (
    <div className='App'>
      <Input size='large' placeholder='large size' prefix={<UserOutlined />} />
    </div>
  );
}

export default App;
