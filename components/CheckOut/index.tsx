'use client';
import { Button, Form, Input, Layout } from 'antd';
import { useEffect, useState } from 'react';
import Price from '../../components/price';
import Image from '../../node_modules/.pnpm/next@14.0.0_react-dom@18.2.0_react@18.2.0/node_modules/next/image';
declare global {
  interface Window {
    Razorpay: any;
  }
}
export function CheckOut() {
  const [cartStorage, setCartStorage] = useState<any>({
    id: '',
    checkoutUrl: '',
    cost: {
      subtotalAmount: { amount: '0.0', currencyCode: 'INR' },
      totalAmount: { amount: '0.0', currencyCode: 'INR' },
      totalTaxAmount: { amount: '0.0', currencyCode: 'INR' }
    },
    lines: [],
    totalQuantity: 0
  });
  const [form] = Form.useForm();
  const { Sider, Content } = Layout;

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('finalCart')!);
    setCartStorage(data);
  }, []);

  function readingUserdetails(values: any) {
    console.log(values);
    localStorage.setItem('userDetails', JSON.stringify(values));
    makePayment();
  }
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';

      script.onload = () => {
        console.log('onload');
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert('Razorpay SDK Failed to load');
      return;
    }
    const paymentDetails = {
      amount: cartStorage.cost.totalAmount.amount,
      currency: cartStorage.cost.totalAmount.currencyCode
    };
    console.log(paymentDetails);
    // Make API call to the serverless API
    try {
      console.log(paymentDetails);
      const response = await fetch('api/razorpay', {
        method: 'POST',
        body: JSON.stringify({
          amount: cartStorage.cost.totalAmount.amount,
          currency: cartStorage.cost.totalAmount.currencyCode
        })
      });

      const data = await response.json();
      var options = {
        key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
        name: 'CW suite',
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        description: 'Thankyou for your test donation',
        image: 'https://manuarora.in/logo.png',
        handler: function (response: any) {
          // Validate payment at server - using webhooks is a better idea.
          console.log(response.razorpay_payment_id);
          console.log(response.razorpay_order_id);
          console.log(response.razorpay_signature);
          alert('Payment process success');
        },
        prefill: {
          name: 'CW suite',
          email: 'miss.jyothi.k@gmail.com',
          contact: '9133755874'
        },
        method: {
          upi: '1',
          netbanking: '1',
          card: '1',
          wallet: '1'
        }
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Error creating order:', error);
      // Handle errors appropriately (e.g., display error message to user)
    }
  };

  return (
    <>
      <Layout style={{ margin: '5px', padding: '3px' }}>
        <Sider width="70%" style={{ margin: '5px', padding: '3px', backgroundColor: 'white' }}>
          <Form
            form={form}
            onFinish={readingUserdetails}
            wrapperCol={{
              span: 14
            }}
          >
            <h2>Contact Details</h2>
            <Form.Item name="contact_number">
              <Input placeholder="Contact Number" />
            </Form.Item>
            <h2>Shipping address</h2>
            <Form.Item name="country">
              <Input placeholder="Country/Region" />
            </Form.Item>
            <Form.Item name="f_name">
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item name="l_name">
              <Input placeholder="Last Name" />
            </Form.Item>
            <Form.Item name="address">
              <Input placeholder="Address" />
            </Form.Item>
            <Form.Item name="sub_address">
              <Input placeholder="Apartment,suite,etc.(optional)" />
            </Form.Item>
            <Form.Item name="city">
              <Input placeholder="City" />
            </Form.Item>
            <Form.Item name="state">
              <Input placeholder="State" />
            </Form.Item>
            <Form.Item name="zip_code">
              <Input placeholder="ZIP Code" />
            </Form.Item>
            <Form.Item>
              <Button
                className="block rounded-full bg-blue-600 text-center text-sm font-medium text-white opacity-90 hover:opacity-100"
                htmlType="submit"
                type="primary"
              >
                Continue to shipping
              </Button>
            </Form.Item>
          </Form>
        </Sider>
        <Content>
          <div className="flex h-full flex-col justify-between overflow-hidden p-1">
            <ul className="flex-grow overflow-auto py-4">
              {cartStorage.lines.map((item: any, i: any) => {
                //   const merchandiseSearchParams = {} as MerchandiseSearchParams;

                //   item.merchandise.selectedOptions.forEach(({ name, value }: { name: string; value: any }) => {
                //     if (value !== DEFAULT_OPTION) {
                //       merchandiseSearchParams[name.toLowerCase()] = value;
                //     }
                //   });

                //   const merchandiseUrl = createUrl(
                //     `/product/${item.merchandise.product.handle}`,
                //     new URLSearchParams(merchandiseSearchParams)
                //   );

                return (
                  <li
                    key={i}
                    className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700"
                  >
                    <div className="relative flex w-full flex-row justify-between px-1 py-4">
                      <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                        <Image
                          className="h-full w-full object-cover"
                          width={64}
                          height={64}
                          alt={
                            item.merchandise.product.featuredImage.altText ||
                            item.merchandise.product.title
                          }
                          src={item.merchandise.product.featuredImage.url}
                        />
                      </div>

                      <div className="flex flex-1 flex-col text-base">
                        <span className="leading-tight">{item.merchandise.product.title}</span>
                        {/* {item.merchandise.title !== DEFAULT_OPTION ? (
                                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                    {item.merchandise.title}
                                  </p>
                                ) : null} */}
                      </div>

                      <div className="flex h-16 flex-col justify-between">
                        <Price
                          className="flex justify-end space-y-2 text-right text-sm"
                          amount={item.cost.totalAmount.amount}
                          currencyCode={item.cost.totalAmount.currencyCode}
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
              <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
                <p>Subtotal</p>
                <Price
                  className="text-right text-base text-black dark:text-white"
                  amount={cartStorage.cost.totalAmount.amount}
                  currencyCode={cartStorage.cost.totalAmount.currencyCode}
                />
              </div>
              <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                <p>Shipping</p>
                <p className="text-right">Calculated at checkout</p>
              </div>
              <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                <p>Total</p>
                <Price
                  className="text-right text-base text-black dark:text-white"
                  amount={cartStorage.cost.totalAmount.amount}
                  currencyCode={cartStorage.cost.totalAmount.currencyCode}
                />
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </>
  );
}
