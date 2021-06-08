import React, { FC, useEffect, useState } from 'react';

import {
    AiOutlineReload,
    AiOutlineColumnHeight,
    AiOutlineSetting,
    AiOutlineSearch,
} from 'react-icons/ai';
import './callmonitoring.scss';
import { Input, DatePicker, Table } from 'antd';
// import reqwest from 'reqwest';
import axios from 'axios';
import moment from 'moment';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: true,
        render: (name: any) => `${name.first} ${name.last}`,
        width: '20%',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        filters: [
            { text: 'Male', value: 'male' },
            { text: 'Female', value: 'female' },
        ],
        width: '20%',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
];

const getRandomuserParams = (params: any) => ({
    results: params.pagination.pageSize,
    page: params.pagination.current,
    ...params,
});

const CallMonitoring: FC = () => {
    const { Search } = Input;

    const [state, setState] = useState({
        data: [],
        pagination: {
            current: 1,
            pageSize: 10,
            total: 10,
        },
        loading: false,
    });

    useEffect(() => {
        const { pagination } = state;

        fetch({ pagination });

        return () => {};
    }, []);

    const handleTableChange = (pagination: any, filters: any, sorter: any) => {
        fetch({
            sortField: sorter.field,
            sortOrder: sorter.order,
            pagination,
            ...filters,
        });
    };

    const fetch = (params = {}) => {
        setState({ ...state, loading: true });

        axios
            .get('https://randomuser.me/api', {
                data: getRandomuserParams(params),
            })
            .then((data: any) => {
                console.log('ini data', data);
                setState({
                    loading: false,
                    data: data.results,
                    pagination: {
                        current: 1,
                        pageSize: 10,
                        total: 200,
                        // 200 is mock data, you should read it from server
                        // total: data.totalCount,
                    },
                });
            });
    };

    const onSearch = () => {
        console.log('e');
    };

    const onChangeDate = () => {
        console.log('wfef');
    };

    const data = [
        {
            tenant: 'PT ABC',
            name: 'ABC Kuy',
            createdAt: '2021-02-18T11:24:29.521739Z',
            ended: 'Live',
            duration: '12 minutes',
            key: '1',
        },
        {
            tenant: 'PT 123',
            name: '1q23 a',
            createdAt: '2021-02-18T11:24:29.521739Z',
            ended: '2021/02/24 13:54',
            duration: '12 minutes ago',
            key: '2',
        },
        {
            tenant: 'PT DEF',
            name: '1q23 a',
            createdAt: '2021-02-18T11:24:29.521739Z',
            ended: '2021/02/24 13:54',
            duration: '12 minutes ago',
            key: '3',
        },
        {
            tenant: 'PT XYZ',
            name: '1q23 a',
            createdAt: '2021-02-18T11:24:29.521739Z',
            ended: '2021/02/24 13:54',
            duration: '12 minutes ago',
            key: '4',
        },
        {
            tenant: 'PT KLM',
            name: '1q23 a',
            createdAt: '2021-02-18T11:24:29.521739Z',
            ended: '2021/02/24 13:54',
            duration: '12 minutes ago',
            key: '5',
        },
    ];

    const columns = [
        {
            title: 'Tenant',
            dataIndex: 'tenant',
            key: 'key',
            sorter: (a: any, b: any) => a.tenant.localeCompare(b.tenant),
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'key',
            sorter: (a: any, b: any) => a.name.localeCompare(b.name),
        },
        {
            title: 'Created',
            dataIndex: 'createdAt',
            key: 'key',
            sorter: (a: any, b: any) =>
                moment(a.createdAt).unix() - moment(b.createdAt).unix(),
        },
        {
            title: 'Ended',
            dataIndex: 'ended',
            key: 'key',
            sorter: (a: any, b: any) =>
                moment(a.createdAt).unix() - moment(b.createdAt).unix(),
        },
        {
            title: 'Durations',
            dataIndex: 'duration',
            key: 'key',
            sorter: (a: any, b: any) => a.duration.localeCompare(b.duration),
        },
    ];

    const [pageSize, setPageSize] = useState(10);

    return (
        <div className='container-call'>
            <div className='card-content'>
                <div className='card-content-header'>
                    <div className='card-content-title'>
                        Call Monitoring pada 2021-06-11
                    </div>
                    <div className='card-content-toolbar'>
                        <div style={{ marginRight: 16 }}>
                            <Search
                                placeholder='Pencarian Kata'
                                allowClear
                                onSearch={onSearch}
                                style={{ width: 200 }}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                marginRight: 16,
                            }}
                        >
                            <div className='btn-live'>Live</div>
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

export default CallMonitoring;
