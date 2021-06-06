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

    return (
        <div className='container-apikeys'>
            <div className='card-content'>
                <div className='card-content-header'>
                    <div className='card-content-title'>
                        Call Monitoring pada 2021-06-11
                    </div>
                    <div className='card-content-toolbar'>
                        <div className='searchbar-wrapper'>
                            <Search
                                placeholder='Pencarian Kata'
                                allowClear
                                onSearch={onSearch}
                                style={{ width: 200 }}
                            />
                        </div>
                        <div className='btn-live'>Live</div>
                        <div className='searchbar-wrapper'>
                            <DatePicker onChange={onChangeDate} />
                        </div>

                        <AiOutlineReload size={24} />
                        <AiOutlineColumnHeight size={24} />
                        <AiOutlineSetting size={24} />
                    </div>
                </div>
                <div className='card-content-body'>
                    <Table
                        columns={columns}
                        rowKey={(record: any) => record.login.uuid}
                        dataSource={state.data}
                        pagination={state.pagination}
                        loading={state.loading}
                        onChange={handleTableChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default CallMonitoring;
