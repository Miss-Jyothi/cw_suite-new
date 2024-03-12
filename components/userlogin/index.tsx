'use client';
import { Button, Form, Input } from 'antd';
import { SignInResponse, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
export function Login() {
  const router = useRouter();
  const [info, setInfo] = useState({ email: '', password: '' });
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
    if (!values.email || !values.password) {
      setError('Must provide all credentials.');
    }
    console.log(values, 'login details');
    try {
      setPending(true);
      const res = (await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false
      })) as SignInResponse;
      if (res.error) {
        setError('Invalid Credentials.');
        setPending(false);
        return;
      }
      router.replace('/checkout');
    } catch (error) {
      console.log('errrrrrrrrrrrr');
      setPending(false);
      setError('something went wrong');
    }
  }
  function openRegister() {
    router.replace('/register');
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '8px' }}>
      <div>
        <Form form={form} onFinish={readData}>
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
              {pending ? 'logging in' : 'login'}
            </Button>
          </Form.Item>
        </Form>
        <div>
          <div>
            <span> have not created account yet? </span>
            <a
              onClick={openRegister}
              href="#"
              style={{ textDecoration: 'underline', color: 'blue' }}
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
