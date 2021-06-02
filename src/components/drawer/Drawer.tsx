import React, { FC, useState } from 'react';
import './drawer.scss';

interface Props {
    isOpen: boolean;
    setIsOpen: (e: boolean) => void;
}

const Drawer: FC<Props> = ({ isOpen, setIsOpen }) => {
    return (
        <div className={isOpen ? 'sidenav active' : 'sidenav'}>
            <button onClick={() => setIsOpen(!isOpen)}>tutup !</button>
        </div>
    );
};

export default Drawer;
