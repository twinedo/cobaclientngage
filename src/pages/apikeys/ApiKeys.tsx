import React, { FC, useState } from 'react';
import './apikeys.scss';
import {
    AiOutlineReload,
    AiOutlineColumnHeight,
    AiOutlineSetting,
} from 'react-icons/ai';
import { Divider, Pagination, Space, Table } from 'antd';
import moment from 'moment';

const data = [
    {
        apikey: '184b1615-1ec5-4c46-a0c0-165a3ca125da',
        constraints: 'URL: https://jsbin.com/cafihexeja',
        type: 'Web',
        createdAt: '2021-02-18T11:24:29.521739Z',
        number: 1,
    },
    {
        apikey: '184b1615-1ec5-4c46-a0c0-165a3ca125daadwd',
        constraints: 'URL: https://jsbin.com/cafihexejaedaaswd',
        type: 'Web',
        createdAt: '2021-02-18T11:24:29.521739Z',
        number: 2,
    },
    {
        apikey: '184b1615-1ec5-4c46-a0c0-165a3ca125davxdcfs',
        constraints: 'URL: https://jsbin.com/cafihexejavgsdf',
        type: 'Web',
        createdAt: '2021-02-18T11:24:29.521739Z',
        number: 3,
    },
    {
        apikey: '184b1615-1ec5-4c46-a0c0-165a3ca125davxdcfs',
        constraints: 'URL: https://jsbin.com/cafihexejavgsdf',
        type: 'Web',
        createdAt: '2021-02-18T11:24:29.521739Z',
        number: 4,
    },
    {
        apikey: '184b1615-1ec5-4c46-a0c0-165a3ca125davxdcfs',
        constraints: 'URL: https://jsbin.com/cafihexejavgsdf',
        type: 'Web',
        createdAt: '2021-02-18T11:24:29.521739Z',
        number: 5,
    },
    {
        apikey: '184b1615-1ec5-4c46-a0c0-165a3ca125davxdcfs',
        constraints: 'URL: https://jsbin.com/cafihexejavgsdf',
        type: 'Web',
        createdAt: '2021-02-18T11:24:29.521739Z',
        number: 6,
    },
    {
        apikey: '184b1615-1ec5-4c46-a0c0-165a3ca125davxdcfs',
        constraints: 'URL: https://jsbin.com/cafihexejavgsdf',
        type: 'Web',
        createdAt: '2021-02-18T11:24:29.521739Z',
        number: 7,
    },
    {
        apikey: '184b1615-1ec5-4c46-a0c0-165a3ca125davxdcfs',
        constraints: 'URL: https://jsbin.com/cafihexejavgsdf',
        type: 'Web',
        createdAt: '2021-02-18T11:24:29.521739Z',
        number: 8,
    },
    {
        apikey: '184b1615-1ec5-4c46-a0c0-165a3ca125davxdcfs',
        constraints: 'URL: https://jsbin.com/cafihexejavgsdf',
        type: 'Web',
        createdAt: '2021-02-18T11:24:29.521739Z',
        number: 9,
    },
    {
        apikey: '184b1615-1ec5-4c46-a0c0-165a3ca125davxdcfs',
        constraints: 'URL: https://jsbin.com/cafihexejavgsdf',
        type: 'Web',
        createdAt: '2021-02-18T11:24:29.521739Z',
        number: 10,
    },
    {
        apikey: '184b1615-1ec5-4c46-a0c0-165a3ca125davxdcfs',
        constraints: 'URL: https://jsbin.com/cafihexejavgsdf',
        type: 'Web',
        createdAt: '2021-02-18T11:24:29.521739Z',
        number: 11,
    },
];

const columns = [
    {
        title: 'Key',
        dataIndex: 'apikey',
        key: 'apikey',
        sorter: (a: any, b: any) => a.apikey.localeCompare(b.apikey),
    },
    {
        title: 'Constraints',
        dataIndex: 'constraints',
        key: 'apikey',
        sorter: (a: any, b: any) => a.constraints.localeCompare(b.constraints),
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'apikey',
        sorter: (a: any, b: any) => a.type.localeCompare(b.type),
    },
    {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'apikey',
        sorter: (a: any, b: any) =>
            moment(a.createdAt).unix() - moment(b.createdAt).unix(),
    },
    {
        title: '',
        dataIndex: 'apikey',
        key: 'apikey',
        render: (item: any, record: any, i: any) => (
            <span style={{ display: 'flex', flexDirection: 'row' }}>
                <div>Edit</div>
                <Divider type='vertical' />
                <div>Delete</div>
            </span>
        ),
    },
];

const ApiKeys: FC = () => {
    const [pageSize, setPageSize] = useState(10);

    return (
        <div className='container-apikeys'>
            <div className='card-content'>
                <div className='card-content-header'>
                    <div className='card-content-title'>API Keys</div>
                    <div className='card-content-toolbar'>
                        <div className='add-button'>+ Tambah</div>
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

export default ApiKeys;
