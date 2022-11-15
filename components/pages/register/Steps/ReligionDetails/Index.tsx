import { FC, Dispatch, SetStateAction, FormEvent } from 'react';
import Button from 'components/form/Button';
import Select from 'react-select';
import { useRegister } from 'store';
import clx from 'utils/clx';
import { toast } from 'react-hot-toast';
import ReligionLinks from 'constants/religionLinks';

const ReligionDetails: FC<{ setNextStep: Dispatch<SetStateAction<number>> }> = ({
    setNextStep,
}) => {
    const { registerDetails, setRegister } = useRegister((state) => state);

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (
            !(
                registerDetails.willingToMarryFrom &&
                registerDetails.wearsHijab &&
                registerDetails.ReadsQuran
            )
        ) {
            return toast.error('please fill out all the fields');
        }

        if (registerDetails.ReligiousValues === '--Select--') {
            return toast.error('please fill out all the fields');
        }
        setNextStep(3);
    };

    return (
        <form onSubmit={submitHandler}>
            <section className="shadow-2xl px-10 ">
                <div className="my-10">
                    <h1 className=" text-xl font-semibold text-primary-background">
                        Please provide us with Religion Details
                    </h1>
                </div>

                <div className="grid grid-cols-2 gap-8 py-6">
                    <div className="col-span-1 space-y-2">
                        <p className="font-semibold text-lg pl-2">Willing to marry from ?</p>
                        <div className="w-full flex ">
                            <Button
                                text="Same Division"
                                additionalButtonStyles={clx(
                                    'rounded-l-md border-r-1 border-[#cccccc]',
                                    registerDetails.willingToMarryFrom === 'Same Division' &&
                                        'bg-primary-background text-white '
                                )}
                                onClick={() => setRegister('willingToMarryFrom', 'Same Division')}
                            />
                            <Button
                                text="Other Division Also"
                                additionalButtonStyles={clx(
                                    'rounded-r-md border-l-0 border-[#cccccc]',
                                    registerDetails.willingToMarryFrom === 'Other Division also' &&
                                        'bg-primary-background text-white'
                                )}
                                onClick={() =>
                                    setRegister('willingToMarryFrom', 'Other Division also')
                                }
                            />
                        </div>
                    </div>

                    <div className="col-span-1 space-y-2">
                        <p className="font-semibold text-lg pl-2">Do you wear ?</p>
                        <div className="w-full flex ">
                            <Button
                                text="Hijab"
                                additionalButtonStyles={clx(
                                    'rounded-l-md border-r-1  border-[#cccccc]',
                                    registerDetails.wearsHijab === 'Hijab' &&
                                        'bg-primary-background text-white'
                                )}
                                onClick={() => setRegister('wearsHijab', 'Hijab')}
                            />
                            <Button
                                text="Niqab"
                                additionalButtonStyles={clx(
                                    'rounded-l-0 border-l-0 border-r-1 border-[#cccccc]',
                                    registerDetails.wearsHijab === 'Niqab' &&
                                        'bg-primary-background text-white'
                                )}
                                onClick={() => setRegister('wearsHijab', 'Niqab')}
                            />
                            <Button
                                text="None"
                                additionalButtonStyles={clx(
                                    'rounded-r-md border-l-0  border-[#cccccc]',
                                    registerDetails.wearsHijab === 'None' &&
                                        'bg-primary-background text-white'
                                )}
                                onClick={() => setRegister('wearsHijab', 'None')}
                            />
                        </div>
                    </div>
                    <div className="col-span-1 space-y-2">
                        <p className="font-semibold text-lg pl-2">Read Quran</p>
                        <div className="flex justify-between ">
                            <div className="w-full space-y-4">
                                <Button
                                    text="Regularly"
                                    additionalButtonStyles={clx(
                                        'rounded-l-md border-r-1 border-[#cccccc]',
                                        registerDetails.ReadsQuran === 'Regularly' &&
                                            'bg-primary-background text-white'
                                    )}
                                    onClick={() => setRegister('ReadsQuran', 'Regularly')}
                                />

                                <Button
                                    text="Occasionally"
                                    additionalButtonStyles={clx(
                                        'rounded-l-md border-r-1 border-[#cccccc]',
                                        registerDetails.ReadsQuran === 'Occasionally' &&
                                            'bg-primary-background text-white'
                                    )}
                                    onClick={() => setRegister('ReadsQuran', 'Occasionally')}
                                />
                            </div>
                            <div className="w-full space-y-4">
                                <Button
                                    text="Only Jumah/Friday"
                                    additionalButtonStyles={clx(
                                        'rounded-r-md border-l-0 border-[#cccccc]',
                                        registerDetails.ReadsQuran === 'Only Jumah/Friday' &&
                                            'bg-primary-background text-white'
                                    )}
                                    onClick={() => setRegister('ReadsQuran', 'Only Jumah/Friday')}
                                />
                                <Button
                                    text="Never Read"
                                    additionalButtonStyles={clx(
                                        'rounded-r-md border-l-0 border-[#cccccc]',
                                        registerDetails.ReadsQuran === 'Never Read' &&
                                            'bg-primary-background text-white'
                                    )}
                                    onClick={() => setRegister('ReadsQuran', 'Never Read')}
                                />
                            </div>
                        </div>
                    </div>

                    <h1 className="  space-y-2  ">
                        <span className="text-lg font-semibold pl-2">Select Religious Values</span>
                        <Select
                            name="select"
                            value={{
                                label: registerDetails.ReligiousValues,
                                value: registerDetails.ReligiousValues,
                            }}
                            options={[
                                {
                                    label: '--Select--',
                                    value: '--Select--',
                                },
                                ...ReligionLinks.map((e) => ({
                                    label: e,
                                    value: e,
                                })),
                            ]}
                            isOptionDisabled={(option) => option.label === '--Select--'}
                            onChange={(e) => {
                                if (e) setRegister('ReligiousValues', e?.value);
                            }}
                        />
                    </h1>
                </div>

                <div className="flex flex-row py-14 space-x-6 font-semibold ">
                    <div className="w-full flex gap-8 hover:bg-primary-background hover:text-white hover:rounded">
                        <Button text="Previous" rounded onClick={() => setNextStep(1)} />
                    </div>
                    <div className="w-full flex gap-8 hover:bg-primary-background hover:text-white hover:rounded">
                        <Button text="Continue" rounded submit />
                    </div>
                </div>
            </section>
        </form>
    );
};
export default ReligionDetails;
