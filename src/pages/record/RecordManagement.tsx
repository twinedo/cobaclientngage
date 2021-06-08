import React, { FC, useState } from 'react';
import {
    AiOutlineReload,
    AiOutlineColumnHeight,
    AiOutlineSetting,
} from 'react-icons/ai';
import './recording.scss';
import { Input, DatePicker, Table } from 'antd';
import moment from 'moment';

const RecordManagement: FC = () => {
    const { Search } = Input;

    const onSearch = () => {
        console.log('e');
    };

    const onChangeDate = () => {
        console.log('wfef');
    };

    const data = [
        {
            recordingName: 'Recording 01',
            roomName: 'Room 01',
            createdAt: '2021-02-17T11:24:29.521739Z',
            type: 'Video',
            key: '1',
        },
        {
            recordingName: 'Recording 02',
            roomName: 'Room 02',
            createdAt: '2021-02-18T11:24:29.521739Z',
            type: 'Audio',
            key: '2',
        },
        {
            recordingName: 'Recording 03',
            roomName: 'Room 03',
            createdAt: '2021-02-19T11:24:29.521739Z',
            type: 'Video',
            key: '3',
        },
        {
            recordingName: 'Recording 04',
            roomName: 'Room 04',
            createdAt: '2021-02-20T11:24:29.521739Z',
            type: 'Video',
            key: '4',
        },
        {
            recordingName: 'Recording 05',
            roomName: 'Room 05',
            createdAt: '2021-02-21T11:24:29.521739Z',
            type: 'Video',
            key: '5',
        },
    ];

    const columns = [
        {
            title: 'Recording Name',
            dataIndex: 'recordingName',
            key: 'key',
            sorter: (a: any, b: any) =>
                a.recordingName.localeCompare(b.recordingName),
        },
        {
            title: 'Room Name',
            dataIndex: 'roomName',
            key: 'key',
            sorter: (a: any, b: any) => a.roomName.localeCompare(b.roomName),
        },
        {
            title: 'Created',
            dataIndex: 'createdAt',
            key: 'key',
            sorter: (a: any, b: any) =>
                moment(a.createdAt).unix() - moment(b.createdAt).unix(),
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'key',
            sorter: (a: any, b: any) => a.type.localeCompare(b.type),
        },
    ];

    const [pageSize, setPageSize] = useState(10);

    return (
        <div className='container-recording'>
            <div className='card-content'>
                <div className='card-content-header'>
                    <div className='card-content-title'>
                        Recording Management
                    </div>
                    <div className='card-content-toolbar'>
                        <div style={{ marginRight: 16 }}>
                            <Search
                                placeholder='input search text'
                                allowClear
                                onSearch={onSearch}
                                style={{ width: 200 }}
                            />
                        </div>
                        <div style={{ marginRight: 16 }}>
                            <DatePicker onChange={onChangeDate} />
                        </div>

                        <AiOutlineReload
                            size={24}
                            style={{ marginRight: 16 }}
                        />
                        <AiOutlineColumnHeight
                            size={24}
                            style={{ marginRight: 16 }}
                        />
                        <AiOutlineSetting size={24} />
                    </div>
                </div>
                <div className='card-content-body'>
                    <Table
                        dataSource={data}
                        columns={columns}
                        pagination={{
                            showTotal: (total, range) =>
                                `${range[0]}-${range[1]} of ${total} items`,
                            pageSize: pageSize,
                            pageSizeOptions: ['10', '20', '30'],
                            total: data.length,
                            showSizeChanger: true,
                            onShowSizeChange: (_, size: number) => {
                                setPageSize(size);
                            },
                        }}
                    ></Table>
                </div>
            </div>
        </div>
    );
};

export default RecordManagement;
