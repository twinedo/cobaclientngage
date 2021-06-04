import React, { FC, useState } from 'react';
import './home.scss';

const Home: FC = () => {
    return (
        <div className='container-home'>
            <div className='card-content'>
                <div className='card-content-title'>Tenant Info</div>
                <div className='table-tenant'>
                    <div className='table-tenant-row'>
                        <div>API ID</div>
                        <div>awlkndfakjwndakjwdbajbdawhd54654</div>
                    </div>
                </div>
            </div>
            <div className='card-content'>
                <div>Package Info</div>
                <div>Table</div>
            </div>
        </div>
    );
};

export default Home;
