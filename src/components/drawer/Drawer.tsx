import React, { FC, useState } from 'react';
import './drawer.scss';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdHome } from 'react-icons/io';
import { IoKeySharp, IoPlayCircle } from 'react-icons/io5';
import { FiMonitor } from 'react-icons/fi';
import { ImNewspaper } from 'react-icons/im';

interface Props {
    isOpen: boolean;
    setIsOpen: (e: boolean) => void;
}

const onActiveCss = {
    backgroundColor: '#d71920',
    borderRight: '3px solid black',
    width: '100%',
};

const Drawer: FC<Props> = ({ isOpen, setIsOpen }) => {
    const [selectedTab, setSelectedTab] = useState('home');
    return (
        <div className={isOpen ? 'sidenav active' : 'sidenav'}>
            {/* <button onClick={() => setIsOpen(!isOpen)}>tutup !</button> */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <ul className={isOpen ? 'ul active' : 'ul'}>
                    <div style={{ textAlign: 'center' }}>
                        {!isOpen ? 'Disini Logo' : ''}
                    </div>
                    <li>
                        <Link
                            to='/welcome'
                            className={isOpen ? 'link-btn active' : 'link-btn'}
                            onClick={() => setSelectedTab('home')}
                            style={{
                                backgroundColor:
                                    selectedTab === 'home'
                                        ? '#d71920'
                                        : undefined,
                                borderRight:
                                    selectedTab === 'home'
                                        ? '3px solid black'
                                        : 0,
                            }}
                        >
                            <div>
                                <IoMdHome
                                    size={20}
                                    style={{ marginRight: 20 }}
                                />
                            </div>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/about'
                            className={isOpen ? 'link-btn active' : 'link-btn'}
                            onClick={() => setSelectedTab('apikeys')}
                            style={{
                                backgroundColor:
                                    selectedTab === 'apikeys'
                                        ? '#d71920'
                                        : undefined,
                                borderRight:
                                    selectedTab === 'apikeys'
                                        ? '3px solid black'
                                        : 0,
                            }}
                        >
                            <div>
                                <IoKeySharp
                                    size={20}
                                    style={{ marginRight: 20 }}
                                />
                            </div>
                            API Keys
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/contact'
                            className={isOpen ? 'link-btn active' : 'link-btn'}
                            onClick={() => setSelectedTab('recording')}
                            style={{
                                backgroundColor:
                                    selectedTab === 'recording'
                                        ? '#d71920'
                                        : undefined,
                                borderRight:
                                    selectedTab === 'recording'
                                        ? '3px solid black'
                                        : 0,
                            }}
                        >
                            <IoPlayCircle
                                size={20}
                                style={{ marginRight: 20 }}
                            />
                            Recording Management
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/contact'
                            className={isOpen ? 'link-btn active' : 'link-btn'}
                            onClick={() => setSelectedTab('monitoring')}
                            style={{
                                backgroundColor:
                                    selectedTab === 'monitoring'
                                        ? '#d71920'
                                        : undefined,
                                borderRight:
                                    selectedTab === 'monitoring'
                                        ? '3px solid black'
                                        : 0,
                            }}
                        >
                            <FiMonitor size={20} style={{ marginRight: 20 }} />
                            Call Monitoring
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/contact'
                            className={isOpen ? 'link-btn active' : 'link-btn'}
                            onClick={() => setSelectedTab('doc')}
                            style={{
                                backgroundColor:
                                    selectedTab === 'doc'
                                        ? '#d71920'
                                        : undefined,
                                borderRight:
                                    selectedTab === 'doc'
                                        ? '3px solid black'
                                        : 0,
                            }}
                        >
                            <ImNewspaper
                                size={20}
                                style={{ marginRight: 20 }}
                            />
                            Documentation
                        </Link>
                    </li>
                </ul>
            </div>
            <ul
                style={{
                    position: 'sticky',
                    zIndex: 10,
                    top: 0,
                    left: 0,
                    backgroundColor: 'white',
                }}
            >
                <li
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'fixed',
                        bottom: 10,
                        left: 10,
                    }}
                >
                    <GiHamburgerMenu
                        size={24}
                        onClick={() => setIsOpen(!isOpen)}
                        color='white'
                    />
                </li>
            </ul>
        </div>
    );
};

export default Drawer;
