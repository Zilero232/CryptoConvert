import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, ListItemIcon, Paper } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import Title from './Title';

const rows = {
  thead: [
    {
      title: 'Код операции'
    },
    {
      title: 'Дата'
    },
    {
      title: 'Валюта Отдаю'
    },
    {
      title: 'Валюта Получаю'
    },
    {
      title: 'Сумма валюты отдаю'
    },
    {
      title: 'Сумма валюты получаю'
    },
    {
      title: 'Номер кошелька'
    },
    {
      title: 'E-mail'
    },
    {
      title: 'Страна'
    },
    {
      title: 'Устройство'
    },
  ],
  tbody: [
    {
      data: '23.01.2002',
      valueForm: '20',
      valueTo: '20',
      summFrom: '20',
      summTo: '20',
      wallet: '2415124561221514',
      email: 'sadas@mail.ru',
      code: '#lUZFNRF30f',
      country: 'Russia',
      device: 'Dekstop',
    },
    {
      data: '23.01.2002',
      valueForm: '20',
      valueTo: '20',
      summFrom: '20',
      summTo: '20',
      wallet: '2415124561221514',
      email: 'sadas@mail.ru',
      code: '#lUZFNRF30f',
      country: 'Russia',
      device: 'Dekstop',
    },
    {
      data: '23.01.2002',
      valueForm: '20',
      valueTo: '20',
      summFrom: '20',
      summTo: '20',
      wallet: '2415124561221514',
      email: 'sadas@mail.ru',
      code: '#lUZFNRF30f',
      country: 'Russia',
      device: 'Dekstop',
    },
    {
      data: '23.01.2002',
      valueForm: '20',
      valueTo: '20',
      summFrom: '20',
      summTo: '20',
      wallet: '2415124561221514',
      email: 'sadas@mail.ru',
      code: '#lUZFNRF30f',
      country: 'Russia',
      device: 'Dekstop',
    },
  ]
};

const Orders = () => {
  return (
    <>
      <Paper className='table' sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        <Title>Заявки</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              {rows.thead.map((row, idx) => (
                <TableCell key={idx}>{row.title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.tbody.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>{row.code}</TableCell>
                <TableCell>{row.data}</TableCell>
                <TableCell>{row.valueForm}</TableCell>
                <TableCell>{row.valueTo}</TableCell>
                <TableCell>{row.summFrom}</TableCell>
                <TableCell>{row.summTo}</TableCell>
                <TableCell>{row.summFrom}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.country}</TableCell>
                <TableCell>{row.device}</TableCell>
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
    </>
  );
}

export default Orders