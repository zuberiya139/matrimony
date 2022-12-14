import { FC, Dispatch, SetStateAction } from 'react';
import UploadFile from 'components/Form/FileInput';
import Navbar from 'components/common/Navbar/Navbar';
import Button from 'components/Form/Button';

const ProfImage: FC<{ setProfNext: Dispatch<SetStateAction<number>> }> = ({ setProfNext }) => (
    <section>
        <div>
            <Navbar />
        </div>
        <div className="shadow-2xl bg-gray-300 mx-auto my-8 w-[40%] py-8 px-20 ">
            <h1 className="py-4 font-semi-bold text-lg">
                Congrats! Your Profile is been created successfully.{' '}
            </h1>
            <h2 className="py-4 font-semi-bold text-lg">Upload Photo and get better Matches</h2>
            <UploadFile label="Upload your Photo" multiple />
            <div className="pt-5 text-white">
                <Button text="Submit" color="one" onClick={() => setProfNext(2)} />
            </div>
        </div>
    </section>
);

export default ProfImage;
