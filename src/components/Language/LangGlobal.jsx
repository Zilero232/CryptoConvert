import { TextField, Typography, Button } from '@mui/material';

const LangHome = () => {
    return (
        <div className="language__items">
            <div className="language__items-block">
                <Typography>Меню</Typography>
                <div className="language__items-row">
                    <div className="language__items-column">
                        <TextField maxRows={10} multiline label="Название" variant="outlined" />
                        <TextField maxRows={10} multiline label="Ссылка" variant="outlined" />
                    </div>
                    <div className="language__items-column">
                        <TextField maxRows={10} multiline label="Название" variant="outlined" />
                        <TextField maxRows={10} multiline label="Ссылка" variant="outlined" />
                    </div>
                </div>
                <div className="language__items-btn">
                    <Button variant="contained">Добавить поле</Button>
                </div>
            </div>
            <div className="language__items-block">
                <Typography>Футер</Typography>
                <div className="language__items-row">
                    <TextField maxRows={10} multiline label="Кнопка вверх" variant="outlined" />
                    <TextField maxRows={10} multiline label="Центр поддержки" variant="outlined" />
                    <TextField maxRows={10} multiline label="Текст телеграмма" variant="outlined" />
                    <TextField maxRows={10} multiline label="Ссылка на телеграмм" variant="outlined" />
                    <TextField maxRows={10} multiline label="Связь по E-mail" variant="outlined" />
                </div>
            </div>
        </div>
    )
}

export default LangHome