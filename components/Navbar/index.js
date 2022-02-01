import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css'


const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className='sticky top-0 w-full'>
      <nav className={styles.navbar}>
        <Link href='/'>
          <a className={styles.logo}>
            <span className={styles.name}>
              Budget Tracker
            </span>
          </a>
        </Link>
        
        <button
          className={styles.hamburger}
          onClick={handleClick}
        >
          {active?(
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeDasharray='none'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          ):(
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>

          )}
        </button>
        
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className={styles.navItems}>
            <Link href='/'>
              <a className={styles.navItem}>
                Budget
              </a>
            </Link>
            <Link href='/chart'>
              <a className={styles.navItem}>
                Chart
              </a>
            </Link>
            <Link href='/plan'>
              <a className={styles.navItem}>
                Plan
              </a>
            </Link>
            <Link href='/profile'>
              <a className={styles.navItem}>
                Profile
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar