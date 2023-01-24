import { TextField, Typography } from '@mui/material';

const LangHome = () => {
    return (
        <div className="language__items">
            <div className="language__items-block">
                <Typography>Безопасность</Typography>
                <div className="language__items-row">
                    <TextField maxRows={10} multiline label="Заголовок" variant="outlined" />
                    <TextField maxRows={10} multiline value='Главная задача которую мы ставим перед собой - быстрые и безопасные обмены для наших клиентов 24/7. Попробуйте наш сервис и ощутите все преимущества.' multiline label="Текст" variant="outlined" />
                </div>
            </div>
            <div className="language__items-block">
                <Typography>Автоматический режим</Typography>
                <div className="language__items-row">
                    <TextField maxRows={10} multiline label="Заголовок" variant="outlined" />
                    <TextField maxRows={10} multiline label="Текст" variant="outlined" />
                    <TextField maxRows={10} multiline label="Благодарность" variant="outlined" />
                </div>
            </div>
            <div className="language__items-block">
                <Typography>Форма</Typography>
                <div className="language__items-row">
                    <TextField maxRows={10} multiline label="Отдаёте" variant="outlined" />
                    <TextField maxRows={10} multiline label="Мин" variant="outlined" />
                    <TextField maxRows={10} multiline label="Макс" variant="outlined" />
                    <TextField maxRows={10} multiline label="Получите" variant="outlined" />
                    <TextField maxRows={10} multiline label="Резерв" variant="outlined" />
                </div>
                <div className="language__items-row">
                    <TextField maxRows={10} multiline label="Ввод данных" variant="outlined" />
                    <TextField maxRows={10} multiline label="Курс" variant="outlined" />
                    <TextField maxRows={10} multiline label="Заполнить форму" variant="outlined" />
                    <TextField maxRows={10} multiline label="Условия" variant="outlined" />
                    <TextField maxRows={10} multiline label="Кнопка" variant="outlined" />
                    <TextField maxRows={10} multiline label="Операция" variant="outlined" />
                </div>
            </div>
            <div className="language__items-block">
                <Typography>Преимущества</Typography>
                <div className="language__items-row">
                    <TextField maxRows={10} multiline label="Заголовок" variant="outlined" />
                    <TextField maxRows={10} multiline label="Текст" variant="outlined" />
                </div>
                <div className="language__items-row">
                    <TextField maxRows={10} multiline label="Заголовок" variant="outlined" />
                    <TextField maxRows={10} multiline label="Текст" variant="outlined" />
                </div>
                <div className="language__items-row">
                    <TextField maxRows={10} multiline label="Заголовок" variant="outlined" />
                    <TextField maxRows={10} multiline label="Текст" variant="outlined" />
                </div>
            </div>
            <div className="language__items-block">
                <Typography>Резервы</Typography>
                <div className="language__items-row">
                    <TextField maxRows={10} multiline label="Заголовок" variant="outlined" />
                </div>
            </div>
            <div className="language__items-block">
                <Typography>Отзывы</Typography>
                <div className="language__items-row">
                    <TextField maxRows={10} multiline label="Заголовок" variant="outlined" />
                    <TextField maxRows={10} multiline label="Текст" variant="outlined" />
                </div>
            </div>
        </div>
    )
}

export default LangHome