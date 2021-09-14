import { useEffect, useState, VFC } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

type Props = {
  siteTitle: string;
};

const Header: VFC<Props> = ({ siteTitle }) => {
  console.log('render Header');

  const router = useRouter();
  const sitePath = router.pathname;

  const [open, setOpen] = useState<boolean>(false);
  const [isHeightOver, setIsHeightOver] = useState<boolean>(false);

  useEffect(() => {
    const scrollAction = () => {
      if (750 < window.scrollY) {
        setIsHeightOver(true);
      } else {
        setIsHeightOver(false);
      }
    };
    window.addEventListener('scroll', scrollAction, {
      capture: false,
      passive: true,
    });
    scrollAction();

    return () => {
      window.removeEventListener('scroll', scrollAction);
    };
  }, []);

  return (
    <header
      className={`${
        sitePath === '/' ? (isHeightOver ? 'bg-black' : '') : 'bg-black'
      } fixed w-screen text-white z-50 font-Inter`}
    >
      <div className="relative flex justify-between items-center py-2 px-4 z-10">
        <h1 className="text-3xl">
          <Link href="/">
            <a className="block py-2">{siteTitle}</a>
          </Link>
        </h1>
        <div
          onClick={() => setOpen(!open)}
          className={`${
            open === true ? 'transform -rotate-90' : null
          } w-10 h-10 flex flex-col justify-center items-end transition-all`}
        >
          <span
            className={`${
              open === true ? 'w-8' : 'w-10'
            } block border-b-2 mb-2 bg-white`}
          ></span>
          <span
            className={`${
              open === true ? 'w-10' : 'w-8'
            } block w-8 border-b-2 bg-white`}
          ></span>
        </div>
      </div>
      <Nav>
        <CSSTransition
          in={open}
          timeout={300}
          className="fade absolute top-0 left-0 w-screen h-screen pt-20 px-4 bg-gray-900 z-0 bg-opacity-80 box-border"
          unmountOnExit
        >
          <ul>
            <li className="border-b border-gray-600">
              <Link href="/">
                <a className="block px-4 py-4 box-border transition-all duration-100 hover:bg-black">
                  Home
                </a>
              </Link>
            </li>
            <li className="border-b border-gray-600">
              <Link href="/about">
                <a className="block px-4 py-4 box-border transition-all duration-100 hover:bg-black">
                  About
                </a>
              </Link>
            </li>
            <li className="border-b border-gray-600">
              <Link href="/service">
                <a className="block px-4 py-4 box-border transition-all duration-100 hover:bg-black">
                  Service
                </a>
              </Link>
            </li>
            <li className="border-b border-gray-600">
              <Link href="/info">
                <a className="block px-4 py-4 box-border transition-all duration-100 hover:bg-black">
                  Info
                </a>
              </Link>
            </li>
            <li>
              <Link href="/inquiry">
                <a className="block px-4 py-4 box-border transition-all duration-100 hover:bg-black">
                  Contact Us
                </a>
              </Link>
            </li>
          </ul>
        </CSSTransition>
      </Nav>
    </header>
  );
};

const Nav = styled.nav`
  .enter {
    opacity: 0;
  }
  .enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }
  .exit {
    opacity: 1;
  }
  .exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
`;

export default Header;
