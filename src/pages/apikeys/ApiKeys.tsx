import React, { FC } from 'react';
import './apikeys.scss';
import {
    AiOutlineReload,
    AiOutlineColumnHeight,
    AiOutlineSetting,
} from 'react-icons/ai';
import {
    withStyles,
    Theme,
    createStyles,
    makeStyles,
} from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import { Pagination, Table } from 'antd';

// const StyledTableCell = withStyles((theme: Theme) =>
//     createStyles({
//         head: {
//             backgroundColor: '#F4F2F2',
//             color: 'black',
//         },
//         body: {
//             fontSize: 14,
//             color: 'black',
//         },
//     })
// )(TableCell);

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(
    key: string,
    batasan: string,
    type: string,
    createdAt: string
) {
    return { key, batasan, type, createdAt };
}

const rows = [
    createData(
        'anajndanwdkjnkjn',
        'URL://aknwdjand',
        'Web',
        '2021-02-18T11:24:29.521739Z'
    ),
    createData(
        'ajnwdkajwdubvgubeygcfv',
        'URL://dbdhbdgsd',
        'Web',
        '2021-02-18T11:24:29.521739Z'
    ),
    createData(
        'wlkmdanwdjanwdn',
        'URL://nfthfthfth',
        'Web',
        '2021-02-18T11:24:29.521739Z'
    ),
    createData(
        'lakenvjakbad',
        'URL://rhdrhgdrg',
        'Web',
        '2021-02-18T11:24:29.521739Z'
    ),
    createData(
        'awkjdnakwndajwndkj',
        'URL://tjrrhth',
        'Web',
        '2021-02-18T11:24:29.521739Z'
    ),
];

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
        title: 'No',
        dataIndex: 'number',
        key: 'apikey',
        sorter: (a: any, b: any) => a.number - b.number,
    },
    {
        title: 'Key',
        dataIndex: 'apikey',
        key: 'apikey',
    },
    {
        title: 'Constraints',
        dataIndex: 'constraints',
        key: 'apikey',
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'apikey',
    },
    {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'apikey',
        sorter: true,
    },
];

const ApiKeys: FC = () => {
    const classes = useStyles();

    return (
        <div className='container-apikeys'>
            <div className='card-content'>
                <div className='card-content-header'>
                    <div className='card-content-title'>API Keys</div>
                    <div className='card-content-toolbar'>
                        <div className='add-button'>+ Tambah</div>
                        <AiOutlineReload size={24} />
                        <AiOutlineColumnHeight size={24} />
                        <AiOutlineSetting size={24} />
                    </div>
                </div>
                <div className='card-content-body'>
                    {/* <TableContainer component={Paper}>
                        <Table
                            className={classes.table}
                            aria-label='simple table'
                        >
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Kunci</StyledTableCell>
                                    <StyledTableCell align='left'>
                                        Batasan
                                    </StyledTableCell>
                                    <StyledTableCell align='left'>
                                        Tipe
                                    </StyledTableCell>
                                    <StyledTableCell align='left'>
                                        CreatedAt
                                    </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.key}>
                                        <TableCell component='th' scope='row'>
                                            {row.key}
                                        </TableCell>
                                        <TableCell align='left'>
                                            {row.batasan}
                                        </TableCell>
                                        <TableCell align='left'>
                                            {row.type}
                                        </TableCell>
                                        <TableCell align='left'>
                                            {row.createdAt}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer> */}
                    <Table
                        dataSource={data}
                        columns={columns}
                        pagination={{
                            showTotal: (total, range) =>
                                `${range[0]}-${range[1]} of ${total} items`,
                        }}
                    ></Table>
                    <Pagination
                        total={data.length}
                        showTotal={(total, range) =>
                            `${range[0]}-${range[1]} of ${total} items`
                        }
                        defaultPageSize={10}
                        defaultCurrent={1}
                    />
                </div>
            </div>
        </div>
    );
};

export default ApiKeys;
