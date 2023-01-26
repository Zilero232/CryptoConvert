import { FC } from 'react'
import { useSelector } from "react-redux";
import { RootState } from '../../redux/store';
import { TextField, Typography } from '@mui/material';

const LangRules: FC = () => {
    const { languages, prefix } = useSelector((state: RootState) => state.language);
    const translate = languages.rules

    if (!translate) {
        return <></>
    }

    return (
        <div className="language__items">
            <div className="language__items-block">
                <Typography>Правила</Typography>
                <div className="language__items-row">
                    <TextField value={translate[prefix].title} maxRows={10} multiline label="Заголовок" variant="outlined" />
                    <TextField value={translate[prefix].date} maxRows={10} multiline label="Дата" variant="outlined" />
                </div>

            </div>
            <div className="language__items-block">
                <Typography>Описание</Typography>
                <div className="language__items-row">
                    <TextField value={translate[prefix].text} maxRows={100} multiline label="Текст" variant="outlined" />
                </div>
            </div>
        </div>
    )
}

export default LangRules