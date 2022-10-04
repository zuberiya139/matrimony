/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const newPassword = () => {
    const [show, setShow] = useState(false);

    return (
        <section className="shadow-2xl bg-gray-300 mx-auto w-[30%] px-6 mt-8">
            <h1 className="font-bold text-lg py-4">Enter New Password</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="py-6 w-full relative">
                    <Input
                        label="New Password"
                        placeholder="enter new password"
                        required
                        rounded
                        type={show ? 'text' : 'password'}
                    />
                    {show ? (
                        <AiOutlineEye
                            onClick={() => setShow(!show)}
                            className="absolute top-1/20 -translate-y-5 right-3"
                        />
                    ) : (
                        <AiOutlineEyeInvisible
                            onClick={() => setShow(!show)}
                            className="absolute top-1/20 -translate-y-5 right-3"
                        />
                    )}
                </div>
                <div className="w-full relative">
                    <Input
                        label="Confirm Password"
                        placeholder="enter confirm password"
                        required
                        rounded
                        type={show ? 'text' : 'password'}
                    />
                    {show ? (
                        <AiOutlineEye
                            onClick={() => setShow(!show)}
                            className="absolute top-1/20 -translate-y-5 right-3"
                        />
                    ) : (
                        <AiOutlineEyeInvisible
                            onClick={() => setShow(!show)}
                            className="absolute top-1/20 -translate-y-5 right-3"
                        />
                    )}
                </div>
                <div className="w-full py-8">
                    <Button text="Submit" color="three" rounded submit />
                </div>
            </form>
        </section>
    );
};

export default newPassword;