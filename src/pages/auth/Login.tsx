import React, { FC, useState } from 'react';
import './login.scss';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '../../components/input/Input';
import TextArea from '../../components/textarea/TextArea';
import { IoMdCloseCircle } from 'react-icons/io';
import {
    IoEyeOffOutline,
    IoEyeOutline,
    IoCloseCircleOutline,
} from 'react-icons/io5';
import { LoginHandler } from '../../config/handler/LoginHandler';
import { useHistory } from 'react-router';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const useStyles = makeStyles({
    drawerWelcome: {
        width: '40vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    txtWelcome: {
        textAlign: 'center',
        fontSize: 40,
        fontFamily: 'AmpleSoft',
        fontWeight: 700,
        color: '#606060',
    },
    btnLogin: {
        textAlign: 'center',
        border: '1px solid black',
        borderRadius: 12,
        padding: '4px 11px',
        backgroundColor: '#d7181f',
        color: 'white',
        width: 100,
        alignSelf: 'center',
        margin: '20px 0px',
        cursor: 'pointer',
    },
});

const Login: FC = () => {
    const classes = useStyles();
    const history = useHistory();

    const [pageState, setPageState] = useState('page1');

    const [drawer, setDrawer] = useState(false);

    const [checkBox, setCheckBox] = useState(false);

    const [fieldUsername, setFieldUsername] = useState('omama@getnada.com');
    const [fieldPassword, setFieldPassword] = useState('11111111');
    const [showPass, setShowPass] = useState(false);

    const [errorFieldName, setErrorFieldName] = useState(false);
    const [errorFieldPass, setErrorFieldPass] = useState(false);

    const onChangeEmail = (text: string) => {
        if (text.length === 0) {
            setErrorFieldName(true);
        } else {
            setFieldUsername(text);
            setErrorFieldName(false);
        }
    };

    const onChangePass = (text: string) => {
        if (text.length === 0) {
            setErrorFieldPass(true);
        } else {
            setFieldPassword(text);
            setErrorFieldPass(false);
        }
    };

    const onLogin = async () => {
        try {
            const response = await LoginHandler({
                username: 'omama@getnada.com',
                password: '11111111',
            });
            if (response.code === '001') {
                console.log('ressdadwdf', response);
                history.replace('/home');
                window.location.reload();
            }
        } catch (error) {
            console.log('error', error);
        }
    };

    const menu = (
        <Menu>
            <Menu.Item>
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.antgroup.com'
                >
                    <img src='https://www.countryflags.io/us/flat/24.png' />{' '}
                    English
                </a>
            </Menu.Item>
            <Menu.Item style={{ backgroundColor: '#403d3c' }}>
                <div style={{ color: 'white' }}>
                    <img src='https://www.countryflags.io/id/flat/24.png' />{' '}
                    Bahasa Indonesia
                </div>
            </Menu.Item>
        </Menu>
    );

    return (
        <div
            className={
                pageState === 'page1'
                    ? 'container-welcome'
                    : 'container-welcome-white'
            }
        >
            <div
                className={
                    pageState === 'page1'
                        ? 'background-welcome'
                        : 'background-welcome-white'
                }
            >
                <div className='header-welcome'>
                    <div className='header-logo'>
                        <img
                            src={
                                pageState === 'page1'
                                    ? require('../../assets/images/logo-white.png')
                                          .default
                                    : require('../../assets/images/logo-red.png')
                                          .default
                            }
                            alt='logo-navbar.png'
                            width={200}
                        />
                    </div>
                    <div className='navbar-welcome'>
                        <a
                            style={{
                                color:
                                    pageState === 'page1' ? 'white' : 'black',
                                cursor: 'pointer',
                            }}
                            href='https://docs.ngagevideoapi.com/'
                            rel='noreferrer'
                            className='menu-subtitle'
                            target='blank'
                        >
                            API Docs
                        </a>
                        {pageState === 'page1' ? (
                            <div
                                onClick={() => setPageState('page2')}
                                style={{
                                    color:
                                        pageState === 'page1'
                                            ? 'white'
                                            : 'black',
                                    cursor: 'pointer',
                                }}
                            >
                                Contact Us
                            </div>
                        ) : (
                            <div
                                onClick={() => setPageState('page1')}
                                style={{
                                    color:
                                        pageState === 'page1'
                                            ? 'white'
                                            : 'black',
                                    cursor: 'pointer',
                                }}
                            >
                                Login
                            </div>
                        )}
                        {/* <div
                            style={{
                                color:
                                    pageState === 'page1' ? 'white' : 'black',
                            }}
                        >
                            Bahasa Indonesia <DownOutlined />
                        </div> */}
                        <Dropdown overlay={menu}>
                            <div
                                style={{
                                    color:
                                        pageState === 'page1'
                                            ? 'white'
                                            : 'black',
                                    cursor: 'pointer',
                                }}
                            >
                                Bahasa Indonesia <DownOutlined />
                            </div>
                        </Dropdown>
                    </div>
                </div>
                {pageState === 'page2' ? (
                    <div className='body-welcome-white'>
                        <div className='txt-contactus'>Contact Us</div>
                        <div className='contact-wrapper'>
                            <div className='contact-form'>
                                <Input
                                    className='input1'
                                    placeholder='Your Name'
                                    onChange={(e) =>
                                        onChangeEmail(e.target.value)
                                    }
                                    value={fieldUsername}
                                    icon={
                                        fieldUsername.length > 0 ? (
                                            <IoMdCloseCircle
                                                size={16}
                                                color='grey'
                                                onClick={() => {
                                                    setFieldUsername('');
                                                    setErrorFieldName(true);
                                                }}
                                            />
                                        ) : null
                                    }
                                />
                                <div style={{ height: 10 }} />
                                <Input
                                    className='input1'
                                    placeholder='Email Address'
                                    onChange={(e) =>
                                        onChangeEmail(e.target.value)
                                    }
                                    value={fieldUsername}
                                    icon={
                                        fieldUsername.length > 0 ? (
                                            <IoMdCloseCircle
                                                size={16}
                                                color='grey'
                                                onClick={() => {
                                                    setFieldUsername('');
                                                    setErrorFieldName(true);
                                                }}
                                            />
                                        ) : null
                                    }
                                />
                                <div style={{ height: 10 }} />
                                <TextArea
                                    className='textarea1'
                                    placeholder='Message'
                                    onChange={(e) =>
                                        onChangeEmail(e.target.value)
                                    }
                                    value={fieldUsername}
                                />
                                <div
                                    // className={classes.btnLogin}
                                    className='btn-contact-us'
                                    style={{ width: '100%' }}
                                >
                                    Submit
                                </div>
                            </div>
                            <div className='contact-info'>
                                <div className='info-email'>
                                    <img
                                        src={
                                            require('../../assets/images/message.png')
                                                .default
                                        }
                                        style={{ marginRight: 20 }}
                                    />
                                    <div
                                        style={{
                                            color:
                                                pageState === 'page2'
                                                    ? 'black'
                                                    : 'white',
                                        }}
                                    >
                                        info@email.com
                                    </div>
                                </div>
                                <div className='info-email'>
                                    <img
                                        src={
                                            require('../../assets/images/phone.png')
                                                .default
                                        }
                                        style={{ marginRight: 20 }}
                                    />
                                    <div
                                        style={{
                                            color:
                                                pageState === 'page2'
                                                    ? 'black'
                                                    : 'white',
                                        }}
                                    >
                                        019202001012
                                    </div>
                                </div>
                                <div className='info-email'>
                                    <img
                                        src={
                                            require('../../assets/images/location.png')
                                                .default
                                        }
                                        style={{ marginRight: 20 }}
                                    />
                                    <div
                                        style={{
                                            color:
                                                pageState === 'page2'
                                                    ? 'black'
                                                    : 'white',
                                        }}
                                    >
                                        Jakarta, Indonesia
                                    </div>
                                </div>
                                <div
                                    // className={classes.btnLogin}
                                    className='btn-contact-us'
                                    // style={{ width: '50%', alignSelf: 'start' }}
                                >
                                    Facebook
                                </div>
                                <div
                                    className='btn-contact-us'
                                    // className={classes.btnLogin}
                                    // style={{ width: '50%', alignSelf: 'start' }}
                                >
                                    Instagram
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='body-welcome'>
                        <div className='body-title'>
                            Revamping Your Customer Engagement
                        </div>

                        <div
                            className='body-trigger-drawer'
                            onClick={() => setDrawer(true)}
                        >
                            Masuk
                        </div>
                        <Drawer
                            anchor={'right'}
                            open={drawer}
                            onClose={() => setDrawer(false)}
                        >
                            <div className={classes.drawerWelcome}>
                                <IoCloseCircleOutline
                                    style={{
                                        position: 'absolute',
                                        top: 20,
                                        left: 20,
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => setDrawer(false)}
                                />
                                <div
                                    style={{
                                        width: '27vw',
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <div className={classes.txtWelcome}>
                                        Selamat Datang
                                    </div>
                                    <Input
                                        className='input1'
                                        placeholder='Email/Phone Number'
                                        onChange={(e) =>
                                            onChangeEmail(e.target.value)
                                        }
                                        value={fieldUsername}
                                        icon={
                                            fieldUsername.length > 0 ? (
                                                <IoMdCloseCircle
                                                    size={16}
                                                    color='grey'
                                                    onClick={() => {
                                                        setFieldUsername('');
                                                        setErrorFieldName(true);
                                                    }}
                                                />
                                            ) : null
                                        }
                                        onError={
                                            errorFieldName ? (
                                                <div>
                                                    Mohon masukkan Nama Login
                                                    Anda
                                                </div>
                                            ) : null
                                        }
                                    />
                                    <div style={{ height: 10 }} />
                                    <Input
                                        className='input1'
                                        placeholder='Password'
                                        type={showPass ? 'text' : 'password'}
                                        onChange={(e) => {
                                            onChangePass(e.target.value);
                                            setFieldPassword(e.target.value);
                                        }}
                                        value={fieldPassword}
                                        icon={
                                            showPass ? (
                                                <IoEyeOffOutline
                                                    size={16}
                                                    color='grey'
                                                    onClick={() =>
                                                        setShowPass(!showPass)
                                                    }
                                                />
                                            ) : (
                                                <IoEyeOutline
                                                    size={16}
                                                    color='grey'
                                                    onClick={() =>
                                                        setShowPass(!showPass)
                                                    }
                                                />
                                            )
                                        }
                                        onError={
                                            errorFieldPass ? (
                                                <div>
                                                    Mohon masukkan Sandi Anda
                                                </div>
                                            ) : null
                                        }
                                    />
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            alignSelf: 'flex-start',
                                        }}
                                    >
                                        <Checkbox
                                            checked={checkBox}
                                            onChange={() =>
                                                setCheckBox(!checkBox)
                                            }
                                            inputProps={{
                                                'aria-label':
                                                    'primary checkbox',
                                            }}
                                            size='small'
                                            style={{ margin: 0 }}
                                        />
                                        <div
                                            style={{
                                                fontFamily: 'PoppinsLight',
                                                fontSize: 12,
                                            }}
                                        >
                                            Ingat Selalu
                                        </div>
                                    </div>
                                    <div
                                        className={classes.btnLogin}
                                        onClick={onLogin}
                                    >
                                        Masuk
                                    </div>
                                    <div
                                        style={{
                                            textAlign: 'center',
                                            fontFamily: 'PoppinsLight',
                                            fontSize: 12,
                                        }}
                                    >
                                        Lupa sandinya? Klik disini untuk
                                        melakukan reset sandi
                                    </div>
                                </div>
                            </div>
                        </Drawer>
                    </div>
                )}
                <div className='footer-welcome'>
                    <div className='footer-logo'>
                        <img
                            src={
                                require('../../assets/images/logo-white.png')
                                    .default
                            }
                            alt='logo-white.png'
                            height={65}
                            style={{ marginRight: 30 }}
                        />
                        <img
                            src='https://ssl.comodo.com/images/seals/sectigo_trust_seal_lg.png'
                            height={50}
                            alt='secured.png'
                        />
                    </div>
                    <div className='footer-menu'>
                        <div style={{ color: 'white' }}>
                            <div className='menu-title'>Company</div>
                            <div className='menu-subtitle'>Home</div>
                        </div>
                        <div style={{ color: 'white' }}>
                            <div className='menu-title'>Support</div>
                            <a
                                href='https://docs.ngagevideoapi.com/'
                                rel='noreferrer'
                                className='menu-subtitle'
                                target='blank'
                            >
                                API Docs
                            </a>
                            <div className='menu-subtitle'>
                                Terms and Conditions
                            </div>
                            <div className='menu-subtitle'>User Manual</div>
                        </div>
                        <div style={{ color: 'white' }}>
                            <div className='menu-title'>Community</div>
                            <div className='menu-subtitle'>Facebook</div>
                            <div className='menu-subtitle'>Instagram</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>Header</div>
            <div>Body</div>
            <div>Footer</div> */}
        </div>
    );
};

export default Login;
