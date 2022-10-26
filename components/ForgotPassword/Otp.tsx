import { FC, Dispatch, SetStateAction } from 'react';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import { USeForgotPassword } from 'store';

const OTP: FC<{
    setNext: Dispatch<SetStateAction<number>>;
}> = ({ setNext }) => {
    const otp = USeForgotPassword((state: any) => state.otp);
    const setOtp = USeForgotPassword((state: any) => state.setOtp);
    const phoneNumber = USeForgotPassword((state: any) => state.phoneNumber);

    return (
        <section className="shadow-2xl mx-auto mt-8 bg-gray-300 w-[30%] px-8">
            <h1 className="font-bold text-lg py-6">Enter otp sent to your email/mobile</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="tw-flex tw-pb-9 tw-space-x-5">
                    <p className="tw-pt-2">+91{phoneNumber}</p>
                </div>

                <div className="w-full py-6">
                    <Input
                        label="Enter OTP"
                        placeholder="enter otp"
                        required
                        rounded
                        type="number"
                        value={otp?.toString()}
                        changeHandler={(e) => setOtp(e.target.value)}
                    />
                </div>
                <div className="py-6">
                    <Button text="Submit" w-full submit color="three" onClick={() => setNext(3)} />
                </div>
            </form>
        </section>
    );
};

export default OTP;
