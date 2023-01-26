import { FC } from 'react'
import { TextField, Typography } from '@mui/material';
import { useSelector } from "react-redux";
import { RootState } from '../../redux/store';

const LangHome: FC = () => {
    const { languages, prefix } = useSelector((state: RootState) => state.language);
    const translate = languages.menu
    const translateOther = languages.footer

    if (!translate) {
        return <></>
    }

    return (
        <div className="language__items">
            <div className="language__items-block">
                <Typography>Меню</Typography>
                <div className="language__items-row">
                    {
                        translate[prefix].map((item: any, id: number) => {
                            return (
                                <div key={id} className="language__items-column">
                                    <TextField value={item.title} maxRows={10} multiline label="Название" variant="outlined" />
                                    <TextField value={item.link} maxRows={10} multiline label="Ссылка" variant="outlined" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="language__items-block">
                <Typography>Футер</Typography>
                <div className="language__items-row">
                    <TextField value={translateOther[prefix].top} maxRows={10} multiline label="Кнопка вверх" variant="outlined" />
                    <TextField value={translateOther[prefix].support} maxRows={10} multiline label="Центр поддержки" variant="outlined" />
                    <TextField value={translateOther[prefix].teleg} maxRows={10} multiline label="Текст телеграмма" variant="outlined" />
                    <TextField value={translateOther[prefix].telegLink} maxRows={10} multiline label="Ссылка на телеграмм" variant="outlined" />
                    <TextField value={translateOther[prefix].email} maxRows={10} multiline label="Связь по E-mail" variant="outlined" />
                </div>
            </div>
        </div>
    )
}

export default LangHome