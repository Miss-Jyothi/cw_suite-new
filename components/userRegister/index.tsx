'use client';
import { Button, Form, Input } from 'antd';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
export function Register() {
  const router = useRouter();
  const [info, setInfo] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);
  const [form] = Form.useForm();
  function readData(values: any) {
    console.log(values, 'user data');
    setInfo(values);
    sendData(values);
  }

  async function sendData(values: any) {
    console.log(values, 'values');
    if (!values.username || !values.email || !values.password) {
      setError('Must provide all credentials.');
    }
    try {
      setPending(true);
      const res = await fetch('api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      if (res.ok) {
        setPending(false);
        form.resetFields();
        router.push('/login');
        console.log('user registered');
      } else {
        const errordata = await res.json();
        setError(errordata.message);
        setPending(false);
        console.log('else');
      }
    } catch (error) {
      setPending(false);
      console.log('catch error');
      setError('something went wrong');
    }
  }
  function openLogin() {
    router.replace('/login');
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '8px' }}>
      <div>
        <Form form={form} onFinish={readData}>
          <Form.Item name="username" label="Name">
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password />
          </Form.Item>
          {error && <span>{error}</span>}
          <Form.Item>
            <Button
              className="block w-full rounded-full bg-blue-600 text-center text-sm font-medium text-white opacity-90 hover:opacity-100"
              type="primary"
              disabled={pending ? true : false}
              htmlType="submit"
            >
              {pending ? 'Registering' : 'Register'}
            </Button>
          </Form.Item>
        </Form>
        <div>
          <span> If account already created? </span>
          <a href="#" onClick={openLogin} style={{ textDecoration: 'underline', color: 'blue' }}>
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
