import * as React from 'react';
import { ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { Language, Reviews, CurrencyBitcoin, ViewList } from '@mui/icons-material';

const btns = [
  {
    title: 'Заявки',
    icon: <ViewList />
  },
  {
    title: 'Отзывы',
    icon: <Reviews />
  },
  {
    title: 'Курс',
    icon: <CurrencyBitcoin />
  },
  {
    title: 'Перевод текста',
    icon: <Language />
  }
]

const MainListItems = ({ id, change }) => {
  return (
    btns.map((item, idx) => {
      return (
        <ListItemButton className={`btn-navigate ${id === idx ? 'active' : ''}`} onClick={() => change(idx)} key={idx}>
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      )
    })
  )
}

export default MainListItems
