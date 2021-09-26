import { VFC } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Props = {
  info: Array<string> | Array<number>;
};

const NewsList: VFC<Props> = ({ info }) => {
  moment.locale('ja');
  const currentDate = moment().format('YYYY/MM/DD');
  const specifiedDate = moment().add(3, 'd').format('YYYY/MM/DD');

  return (
    <section className="py-6 mb-16 bg-base-200 shadow-inner">
      <h2 className="text-5xl text-center tracking-tight font-bold">News</h2>
      <Swiper
        className="h-48"
        modules={[Autoplay, Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        // autoplay={{ delay: 6000 }}
        // navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {info.map((info) => (
          <SwiperSlide key={info.id}>
            <div className="flex flex-col content-center w-10/12 p-4 border-r border-b-2 bord er-l mt-8 mx-auto bg-base-100 shadow-lg rounded-lg indicator">
              {moment(info.publishedAt).format('YYYY/MM/DD') == currentDate ? (
                <div className="indicator-item badge badge-secondary text-xs">
                  new
                </div>
              ) : null}
              <h3 className="max-h-16 mb-2 text-base tracking-tighter overflow-hidden">
                {info.title}
              </h3>
              <Moment format="YYYY/MM/DD" className="text-xs">
                {info.publishedAt}
              </Moment>
              <Link href={`/info/${info.id}`}>
                <a className="btn btn-outline btn-accent w-2/5 min-h-0 h-8 px-0 mr-0 ml-auto text-xs">
                  lead more
                </a>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NewsList;
