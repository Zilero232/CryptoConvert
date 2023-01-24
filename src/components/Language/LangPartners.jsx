import { TextField, Typography } from '@mui/material';

const LangPartners = () => {
    return (
        <div className="language__items">
            <div className="language__items-block">
                <Typography>Шапка</Typography>
                <div className="language__items-row">
                    <TextField maxRows={10} multiline label="Заголовок" variant="outlined" />
                    <TextField maxRows={10} multiline label="Текст кнопки" variant="outlined" />
                    <TextField maxRows={10} multiline label="Ссылка" variant="outlined" />
                </div>
            </div>
            <div className="language__items-block">
                <Typography>Карточки</Typography>
                <div className="language__items-row">
                    <TextField maxRows={10} multiline label="Тэг" variant="outlined" />
                    <TextField maxRows={10} multiline label="Заголовок" variant="outlined" />
                    <TextField maxRows={10} multiline label="Текст" variant="outlined" />
                </div>
                <div className="language__items-row">
                    <TextField maxRows={10} multiline label="Тэг" variant="outlined" />
                    <TextField maxRows={10} multiline label="Заголовок" variant="outlined" />
                    <TextField maxRows={10} multiline label="Текст" variant="outlined" />
                </div>
                <div className="language__items-row">
                    <TextField maxRows={10} multiline label="Тэг" variant="outlined" />
                    <TextField maxRows={10} multiline label="Заголовок" variant="outlined" />
                    <TextField maxRows={10} multiline label="Текст" variant="outlined" />
                </div>
            </div>
        </div>
    )
}

export default LangPartners