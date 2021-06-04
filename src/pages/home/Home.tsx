import React, { FC, useState } from 'react';
import './home.scss';

const Home: FC = () => {
    return (
        <div className='container-home'>
            <div className='card-content'>
                <div className='card-content-title'>Tenant Info</div>
                <div className='table-tenant'>
                    <div className='table-tenant-row'>
                        <div className='table-tenant-row-1'>ID API</div>
                        <div className='table-tenant-row-2'>
                            awlkndfakjwndakjwdbajbdawhd54654dawdawd
                        </div>
                    </div>
                    <div className='table-tenant-row'>
                        <div className='table-tenant-row-1'>
                            Nama Perusahaan
                        </div>
                        <div className='table-tenant-row-2'>O Mama</div>
                    </div>
                    <div className='table-tenant-row'>
                        <div className='table-tenant-row-1'>
                            Alamat Perusahaan
                        </div>
                        <div className='table-tenant-row-2'>Bulu kamba 22</div>
                    </div>
                    <div className='table-tenant-row'>
                        <div className='table-tenant-row-1'>
                            Telepon Perusahaan
                        </div>
                        <div className='table-tenant-row-2'>089638008476</div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                        }}
                    >
                        <div
                            className='table-tenant-row-wrapper-2'
                            style={{ width: '100%' }}
                        >
                            <div className='table-tenant-row-3'>NPWP</div>
                            <div className='table-tenant-row-4'>
                                1234123awdaaadwdad
                            </div>
                        </div>
                        <div className='table-tenant-row-wrapper-2'>
                            <div className='table-tenant-row-3'>
                                Kategori Bisnis
                            </div>
                            <div className='table-tenant-row-4'>Education</div>
                        </div>
                    </div>
                    <div className='table-tenant-row'>
                        <div className='table-tenant-row-1'>Logo</div>
                        <div
                            className='table-tenant-row-2'
                            style={{ justifyContent: 'space-between' }}
                        >
                            <div>Logo</div>
                            <div>Button</div>
                        </div>
                    </div>
                    <div className='table-tenant-row'>
                        <div className='table-tenant-row-1'>URL</div>
                        <div
                            className='table-tenant-row-2'
                            style={{ justifyContent: 'space-between' }}
                        >
                            <div>URL Belum Dibuat</div>
                            <div>Button</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-content'>
                <div className='card-content-title'>Package Info</div>
                <div className='package-info-1'>
                    <div className='package-info-1-title'>
                        Package Merdeka 1
                    </div>
                    <div>Expiry date: 20/01/2021</div>
                </div>
                <div className='package-info-2'>
                    <div className='info-2-card'>
                        <div style={{ color: 'white', marginBottom: 10 }}>
                            Room Quota
                        </div>
                        <div
                            style={{
                                width: 100,
                                height: 100,
                                background: 'white',
                                borderRadius: 50,
                            }}
                        />
                    </div>
                    <div className='info-2-card'>
                        <div style={{ color: 'white', marginBottom: 10 }}>
                            Time Quota
                        </div>
                        <div
                            style={{
                                width: 100,
                                height: 100,
                                background: 'white',
                                borderRadius: 50,
                            }}
                        />
                    </div>
                    <div className='info-2-card'>
                        <div style={{ color: 'white', marginBottom: 10 }}>
                            API Keys
                        </div>
                        <div
                            style={{
                                width: 100,
                                height: 100,
                                background: 'white',
                                borderRadius: 50,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
