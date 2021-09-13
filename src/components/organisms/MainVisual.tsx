import ReactPlayer from 'react-player';
import 'tailwindcss/tailwind.css';

import TextAnimation from '../molecules/TextAnimation';

const MainVisual = () => {
  return (
    <>
      <ReactPlayer
        className="react-player"
        url="mv.mp4"
        playbackRate={0.4}
        width="100vw"
        height="100vh"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          objectFit: 'cover',
          zIndex: -1,
        }}
        playing
        loop
        muted
        playsinline
      />
      <div
        id="mvText"
        className="flex flex-col justify-center items-left h-screen px-6 font-dotGothic text-white text-4xl font-black leading-loose select-none lg:px-20"
      >
        <TextAnimation section="mvText">
          キッカケヲ、
          <br />
          <span className="pl-6" />ソウゾウスル。
        </TextAnimation>
      </div>
    </>
  );
};

export default MainVisual;
