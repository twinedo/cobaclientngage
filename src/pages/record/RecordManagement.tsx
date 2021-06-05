import React, { FC } from 'react';
import {
    AiOutlineReload,
    AiOutlineColumnHeight,
    AiOutlineSetting,
    AiOutlineSearch,
} from 'react-icons/ai';
import './recording.scss';
import { Input, DatePicker } from 'antd';

const RecordManagement: FC = () => {
    const { Search } = Input;

    const onSearch = () => {
        console.log('e');
    };

    const onChangeDate = () => {
        console.log('wfef');
    };

    return (
        <div className='container-apikeys'>
            <div className='card-content'>
                <div className='card-content-header'>
                    <div className='card-content-title'>
                        Recording Management
                    </div>
                    <div className='card-content-toolbar'>
                        <div className='searchbar-wrapper'>
                            <Search
                                placeholder='input search text'
                                allowClear
                                onSearch={onSearch}
                                style={{ width: 200 }}
                            />
                        </div>
                        <div className='searchbar-wrapper'>
                            <DatePicker onChange={onChangeDate} />
                        </div>

                        <AiOutlineReload size={24} />
                        <AiOutlineColumnHeight size={24} />
                        <AiOutlineSetting size={24} />
                    </div>
                </div>
                <div className='card-content-body'>Ini Table</div>
            </div>
        </div>
    );
};

export default RecordManagement;
