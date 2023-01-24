import { TextField, Typography } from '@mui/material';

const LangAbout = () => {
    return (
        <div className="language__items">
            <div className="language__items-block">
                <Typography>Сервис</Typography>
                <div className="language__items-row">
                    <TextField maxRows={10} multiline label="Заголовок" variant="outlined" />
                    <TextField maxRows={10} multiline label="Текст" variant="outlined" />
                </div>
                
            </div>
            <div className="language__items-block">
                <Typography>Описание</Typography>
                <div className="language__items-row">
                    <TextField maxRows={50} multiline label="Описание сервиса" variant="outlined" />
                </div>
            </div>
        </div>
    )
}

export default LangAbout