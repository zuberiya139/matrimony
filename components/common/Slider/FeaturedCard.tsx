/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable import/no-unresolved */
import { FC, Key } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import FeaturedProfileCard, { FeaturedProfilesProps } from '../FeaturedProfileCard';
import 'swiper/css';
import 'swiper/css/navigation';

interface FeaturedCardProps {
    couplesCard: Array<FeaturedProfilesProps>;
    slidesPerView: number;
}

const FeaturedCard: FC<FeaturedCardProps> = (props) => {
    const { couplesCard, slidesPerView } = props;
    return (
        <section>
            <div>
                <Swiper
                    className=" p-10  rounded-b-md rounded-tr-md"
                    draggable
                    slidesPerView={5}
                    spaceBetween={100}
                >
                    <div>
                        {couplesCard.map((coupleCard) => (
                            <SwiperSlide key={coupleCard.name}>
                                <FeaturedProfileCard
                                    img={coupleCard.img}
                                    name={coupleCard.name}
                                    age={coupleCard.age}
                                    height={coupleCard.height}
                                    graduation={coupleCard.graduation}
                                    place={coupleCard.place}
                                />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default FeaturedCard;
