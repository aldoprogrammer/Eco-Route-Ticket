import React from 'react';
import { Input, Button } from "@material-tailwind/react";

const DetailsPayment = () => {
  return (
    <div className="mt-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Purchase Blockchain Domain</h2>
      </div>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
            Full Name
          </label>
          <Input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email address"
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Address
          </label>
          <Input
            type="text"
            id="address"
            placeholder="Enter your address"
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <Input
            type="tel"
            id="phoneNumber"
            placeholder="Enter your phone number"
            className="w-full"
          />
        </div>
        <Button color="indigo" ripple="light" className="w-full">Purchase Now</Button>
      </form>
    </div>
  );
}

export default DetailsPayment;
