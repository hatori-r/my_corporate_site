import { ReactElement, useCallback } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Props = {
  children: React.ReactNode;
  section: string;
};

const TextAnimation = (props: Props): ReactElement => {
  const textRef = useCallback((node) => {
    if (node !== null) {
      const text = node.innerHTML;
      const height = node.clientHeight;
      node.innerHTML = '';
      node.style.height = height + 'px';
      setAnimation(text);
    }
  }, []);

  const setAnimation = (text) => {
    const numText = text.length;
    const selector = '#' + props.section;

    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(`${selector} .animation-text`, {
      duration: numText * 0.08,
      text: {
        value: text,
      },
      ease: 'none',
      scrollTrigger: {
        trigger: selector,
        start: 'top 40%',
        end: 'bottom 40%',
      },
    });
  };

  return (
    <p ref={textRef} className="animation-text">
      {props.children}
    </p>
  );
};

export default TextAnimation;
