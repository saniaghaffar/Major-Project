import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice';

const CheckoutSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

function CheckoutPage() {
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Checkout</h1>
      <Formik
        initialValues={{ name: '', address: '', email: '' }}
        validationSchema={CheckoutSchema}
        onSubmit={(values) => {
          console.log(values);
          dispatch(clearCart());
          alert('Order placed successfully!');
        }}
      >
        {({ errors, touched }) => (
          <Form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <Field name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              {errors.name && touched.name ? <div className="text-red-500 text-xs mt-2">{errors.name}</div> : null}
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
              <Field name="address" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              {errors.address && touched.address ? <div className="text-red-500 text-xs mt-2">{errors.address}</div> : null}
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <Field name="email" type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              {errors.email && touched.email ? <div className="text-red-500 text-xs mt-2">{errors.email}</div> : null}
            </div>
            <div className="flex items-center justify-center">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Place Order
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CheckoutPage;
