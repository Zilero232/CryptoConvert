import { TextField, Typography } from '@mui/material';

const LangPayment = () => {
    return (
        <div className="language__items">
            <div className="language__items-block">
                <Typography>Форма</Typography>
                <div className="language__items-row">
                    <TextField maxRows={10} multiline label="Переведите" variant="outlined" />
                    <TextField maxRows={10} multiline label="На кошелёк" variant="outlined" />
                    <TextField maxRows={10} multiline label="Выберите сеть" variant="outlined" />
                    <TextField maxRows={10} multiline label="Qr-Код" variant="outlined" />
                </div>
            </div>
            <div className="language__items-block">
                <Typography>Оплата</Typography>
                <div className="language__items-row">
                    <TextField maxRows={50} multiline label="Текст оплаты" variant="outlined" />
                    <TextField maxRows={50} multiline label="Я оплатил" variant="outlined" />
                    <TextField maxRows={50} multiline label="Отмена" variant="outlined" />
                </div>
            </div>
        </div>
    )
}

export default LangPayment