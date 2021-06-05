import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdHome } from 'react-icons/io';
import { IoKeySharp, IoPlayCircle } from 'react-icons/io5';
import { FiMonitor } from 'react-icons/fi';
import { ImNewspaper } from 'react-icons/im';
import './drawer.scss';

interface Props {
    isOpen: boolean;
    setIsOpen: (e: boolean) => void;
}

const onActiveCssClose = {
    backgroundColor: '#d71920',
    borderRight: '3px solid black',
    paddingLeft: '15px',
};

const onActiveCssOpen = {
    backgroundColor: '#d71920',
    borderRight: '3px solid black',
    paddingLeft: '50px',
};

const Drawer: FC<Props> = ({ isOpen, setIsOpen }) => {
    return (
        <div className={isOpen ? 'sidenav active' : 'sidenav'}>
            <div className='div-under-sidenav'>
                <ul className={isOpen ? 'ul active' : 'ul'}>
                    <div style={{ textAlign: 'center' }}>
                        {!isOpen ? (
                            <img
                                src={
                                    require('../../assets/images/logo-white.png')
                                        .default
                                }
                                alt='logo'
                                className='img-logo-drawer'
                            />
                        ) : (
                            <div
                                className='img-logo-drawer'
                                style={{ height: 81 }}
                            />
                        )}
                    </div>
                    <li>
                        <NavLink
                            to='/home'
                            className={isOpen ? 'link-btn active' : 'link-btn'}
                            activeStyle={
                                isOpen ? onActiveCssClose : onActiveCssOpen
                            }
                        >
                            <div>
                                <IoMdHome
                                    size={20}
                                    style={{ marginRight: 20 }}
                                />
                            </div>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/apikeys'
                            className={isOpen ? 'link-btn active' : 'link-btn'}
                            activeStyle={
                                isOpen ? onActiveCssClose : onActiveCssOpen
                            }
                        >
                            <div>
                                <IoKeySharp
                                    size={20}
                                    style={{ marginRight: 20 }}
                                />
                            </div>
                            API Keys
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/record'
                            className={isOpen ? 'link-btn active' : 'link-btn'}
                            activeStyle={
                                isOpen ? onActiveCssClose : onActiveCssOpen
                            }
                        >
                            <IoPlayCircle
                                size={20}
                                style={{ marginRight: 20 }}
                            />
                            Recording Management
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/call'
                            className={isOpen ? 'link-btn active' : 'link-btn'}
                            activeStyle={
                                isOpen ? onActiveCssClose : onActiveCssOpen
                            }
                        >
                            <FiMonitor size={20} style={{ marginRight: 20 }} />
                            Call Monitoring
                        </NavLink>
                    </li>
                    <li>
                        <a
                            className={isOpen ? 'link-btn active' : 'link-btn'}
                            target='_blank'
                            rel='noopener noreferrer'
                            href='https://docs.ngagevideoapi.com/'
                        >
                            <ImNewspaper
                                size={20}
                                style={{ marginRight: 20 }}
                            />
                            Documentation
                        </a>
                    </li>
                </ul>
            </div>
            <div className='bot-burger-container'>
                <GiHamburgerMenu
                    size={24}
                    onClick={() => setIsOpen(!isOpen)}
                    color='white'
                />
            </div>
        </div>
    );
};

export default Drawer;
