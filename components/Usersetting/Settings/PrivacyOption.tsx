/* eslint-disable react/jsx-key */
/* eslint-disable import/named */
import Link from 'next/link';
import { FC } from 'react';
import { UserPrivacyList } from 'constants/SettingLinks';
import SettingLayout from 'Layouts/SettingSideBar';
import Row from './Row';

const PrivacyOption: FC = () => (
    <SettingLayout pageTitle="Hello">
        <section>
            <h1 className="text-xl text-gray-400 font-bold">Privacy Options</h1>
            <div className="bg-white px-4 mt-4">
                <table className=" ">
                    <tbody>
                        {UserPrivacyList.map((pravicy) => (
                            <Row key={pravicy.url} {...pravicy} />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    </SettingLayout>
);

export default PrivacyOption;
