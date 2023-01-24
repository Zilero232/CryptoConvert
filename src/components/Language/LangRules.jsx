import { TextField, Typography } from '@mui/material';

const LangRules = () => {
    return (
        <div className="language__items">
            <div className="language__items-block">
                <Typography>Правила</Typography>
                <div className="language__items-row">
                    <TextField maxRows={10} multiline label="Заголовок" variant="outlined" />
                    <TextField maxRows={10} multiline label="Дата" variant="outlined" />
                </div>

            </div>
            <div className="language__items-block">
                <Typography>Описание</Typography>
                <div className="language__items-row">
                    <TextField maxRows={10} multiline label="Заголовок" variant="outlined" />
                    <TextField maxRows={100} multiline label="Текст" variant="outlined" />
                </div>
            </div>
        </div>
    )
}

export default LangRules