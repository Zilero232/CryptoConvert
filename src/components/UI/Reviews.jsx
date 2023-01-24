import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableHead, TableRow, ListItemIcon, Paper, Button } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import Title from './Title';
import Spinner from "../Spinner";

import { fetchReviews } from "../../redux/reviews/asyncActions";
import { selectReviews } from "../../redux/reviews/selectors";

const rows = {
    thead: [
        {
            title: 'Имя',
        },
        {
            title: 'дата',
        },
        {
            title: 'Описание',
        },
    ],
};


const Reviews = () => {
    const dispatch = useDispatch();
    const { reviews, loading } = useSelector(selectReviews);

    useEffect(() => {
        dispatch(fetchReviews());
    }, []);

    return (
        <>
            {
                loading ? <Spinner /> : <>
                    <Paper className='table' sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Title>Отзывы</Title>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    {rows.thead.map((row, idx) => (
                                        <TableCell key={idx}>{row.title}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {reviews.map((row, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.date}</TableCell>
                                        <TableCell>{row.title}</TableCell>
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
                        <Button variant="contained">Добавить отзыв</Button>
                    </div>
                </>
            }
        </>
    );
}

export default Reviews