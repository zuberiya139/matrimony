/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import WhyChooseUs from './WhyChooseUs';
import WhyUs from './WhyUs';
import FeaturedProfiles from './FeaturedProfiles';
import SpecialService from './SpecialService';

const Home = () => (
    <section>
        <div className="h-full w-full">
            <SectionOne />
            <SectionTwo />
            <WhyChooseUs />
            <FeaturedProfiles />
            <WhyUs />
            <SpecialService />
        </div>
    </section>
);

export default Home;