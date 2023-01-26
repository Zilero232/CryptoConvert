import { FC } from 'react'
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { TextField, Typography } from '@mui/material';

const LangPartners: FC = () => {
    const { languages, prefix } = useSelector((state: RootState) => state.language);
    const translate = languages.partners

    if (!translate) {
        return <></>
    }

    return (
        <div className="language__items">
            <div className="language__items-block">
                <Typography>Шапка</Typography>
                <div className="language__items-row">
                    <TextField value={translate[prefix].title} maxRows={10} multiline label="Заголовок" variant="outlined" />
                    <TextField value={translate[prefix].btn} maxRows={10} multiline label="Текст кнопки" variant="outlined" />
                    <TextField value={translate[prefix].link} maxRows={10} multiline label="Ссылка" variant="outlined" />
                </div>
            </div>
            <div className="language__items-block">
                <Typography>Карточки</Typography>
                <>
                    {
                        translate[prefix].items.map((item: any, id: number) => {
                            return (
                                <div key={id} className="language__items-row">
                                    <TextField value={item.tag} maxRows={10} multiline label="Тэг" variant="outlined" />
                                    <TextField value={item.title} maxRows={10} multiline label="Заголовок" variant="outlined" />
                                    <TextField value={item.text} maxRows={10} multiline label="Текст" variant="outlined" />
                                </div>
                            )
                        })
                    }
                </>
            </div>
        </div>
    )
}

export default LangPartners