import React, { useState } from 'react';
import Section from "./Section";
import { service1, check } from "../assets";
import { brainwaveServices } from "../constants";
import Generating from "./Generating";
import Button from "./Button";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setIsLoading(true);
        console.log('Form submitted');
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsLoading(false);
        setErrors({});
        setEmail('');
        setPassword(''); 
        alert('Form submitted');
    };

    const validateForm = () => {
        const errors = {};
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email address is invalid';
        }
        if (!password) {
            errors.password = 'Password is required';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }
        return errors;
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    return (
        <Section>
            <div className="container lg:flex">
                <div className="relative z-1 flex items-center h-[36rem] mb-5 p-8 overflow-hidden lg:p-20 xl:h-[36rem] lg:block md:block hidden">
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                        <img
                            className="w-full h-full object-cover md:object-right"
                            width={800}
                            alt="Smartest AI"
                            height={730}
                            src={service1}
                        />
                    </div>

                    <div className="relative z-1 max-w-[35rem] ml-auto">
                        <h4 className="h4 mb-4">Smartest AI</h4>
                        <p className="body-2 mb-[3rem] text-n-3">
                            Brainwave unlocks the potential of AI-powered applications
                        </p>
                        <ul className="body-2">
                            {brainwaveServices.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start py-4 border-t border-n-6"
                                >
                                    <img width={24} height={24} src={check} />
                                    <p className="ml-4">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
                </div>
                <div className="lg:ml-auto xl:h-[36rem] xl:w-[45rem] lg:px-24 lg:py-10 md:px-24 md:py-10 p-3 bg-n-7">
                    <div className="text-center items-center">
                        <h4 className="h4 mb-2">Sign in</h4>
                        <p className="body-2 mb-[3rem] text-n-3">
                            Brainwave unlocks the potential of AI-powered applications
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="relative flex items-center flex-col">
                            <label className="text-white text-[13px] bg-n-7 absolute px-2 top-[-9px] left-[18px] font-semibold">Email</label>
                            <input
                                type="email"
                                placeholder="example@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`px-4 py-3.5 bg-n-7 w-full text-sm border ${errors.email ? 'border-red-500' : 'border-n-1/10'} focus:border-purple-400 rounded-3xl outline-none`}
                            />
                            {errors.email && <small className="text-red-500 text-sm mt-2 self-start">{errors.email}</small>}
                        </div>
                        <div className="relative flex items-center flex-col mt-12">
                            <label className="text-white text-[13px] bg-n-7 absolute px-2 top-[-9px] left-[18px] font-semibold">Password</label>
                            <input
                                type={isPasswordVisible ? 'text' : 'password'}
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`px-4 py-3.5 bg-n-7 w-full text-sm border ${errors.password ? 'border-red-500' : 'border-n-1/10'} focus:border-purple-400 rounded-3xl outline-none pr-10`}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 flex items-center px-3"
                            >
                                {isPasswordVisible ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                            </button>
                        </div>
                        {errors.password && <small className="text-red-500 text-sm mt-2 self-start">{errors.password}</small>}

                        <div className="my-14">
                            <Button onClick={handleSubmit} className="w-full text-xl lg:flex" isLoading={isLoading}>
                                Sign in
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Section >
    );
};

export default Login;
