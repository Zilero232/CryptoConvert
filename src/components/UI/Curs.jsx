import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableHead, TableRow, ListItemIcon, Paper, Button, TextField } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import Title from './Title';
import Spinner from '../Spinner'

import { selectReserves } from "../../redux/reserves/selectors";
import { fetchReserves } from "../../redux/reserves/asyncActions";

const rows = {
    thead: [
        {
            title: 'Название изображения',
        },
        {
            title: 'Заголовок',
        },
        {
            title: 'Значение',
        },
        {
            title: 'Резерв',
        },
        {
            title: 'Min',
        },
        {
            title: 'Max',
        },
    ],
};

const Curs = () => {
    const dispatch = useDispatch();
    const { reserves, loading } = useSelector(selectReserves);

    useEffect(() => {
        dispatch(fetchReserves());
    }, []);

    return (
        <>
            {
                loading ? <Spinner /> : <>
                    <div className="profile-input">
                        <TextField id="outlined-basic" defaultValue={20} label="Процент курса" variant="outlined" />
                        <Button variant="contained">Сохранить</Button>
                    </div>
                    <Paper className='table' sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Title>Курсы</Title>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    {rows.thead.map((row, idx) => (
                                        <TableCell key={idx}>{row.title}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {reserves.map((row, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell>{row.imgName}</TableCell>
                                        <TableCell>{row.title}</TableCell>
                                        <TableCell>{row.value}</TableCell>
                                        <TableCell>{row.count}</TableCell>
                                        <TableCell>{row.min}</TableCell>
                                        <TableCell>{row.max}</TableCell>
                                        <button className='edit'>
                                            <ListItemIcon>
                                                <Edit />
                                            </ListItemIcon>
                                        </button>
                                        <button className='delete'>
                                            <ListItemIcon>
                                                <Delete />
                                            </ListItemIcon>
                                        </button>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                    <div className="profile__items">
                        <Button variant="contained">Добавить</Button>
                    </div>
                </>
            }
        </>
    );
}

export default Curs