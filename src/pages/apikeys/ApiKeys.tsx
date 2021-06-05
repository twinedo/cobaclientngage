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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: '#F4F2F2',
            color: 'black',
        },
        body: {
            fontSize: 14,
            color: 'black',
        },
    })
)(TableCell);

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
                    <TableContainer component={Paper}>
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
                    </TableContainer>
                </div>
            </div>
        </div>
    );
};

export default ApiKeys;
