import { FC } from 'react'
import { TextField, Typography } from '@mui/material';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

const LangAbout: FC = () => {
    const { languages, prefix } = useSelector((state: RootState) => state.language);
    const translate = languages.about

    if (!translate) {
        return <></>
    }


    return (
        <div className="language__items">
            <div className="language__items-block">
                <Typography>Сервис</Typography>
                <div className="language__items-row">
                    <TextField value={translate[prefix].title} maxRows={10} multiline label="Заголовок" variant="outlined" />
                    <TextField value={translate[prefix].text} maxRows={10} multiline label="Текст" variant="outlined" />
                </div>

            </div>
            <div className="language__items-block">
                <Typography>Описание</Typography>
                <div className="language__items-row">
                    <TextField value={translate[prefix].service} maxRows={50} multiline label="Описание сервиса" variant="outlined" />
                </div>
            </div>
        </div>
    )
}

export default LangAbout