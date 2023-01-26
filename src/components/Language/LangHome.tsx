import { FC } from 'react'
import { useSelector } from "react-redux";
import { RootState } from '../../redux/store';
import { TextField, Typography } from '@mui/material';

const LangHome: FC = () => {
    const { languages, prefix } = useSelector((state: RootState) => state.language);
    const translate = languages

    if (!translate.safety) {
        return <></>
    }

    return (
        <div className="language__items">
            <div className="language__items-block">
                <Typography>Безопасность</Typography>
                <div className="language__items-row">
                    <TextField value={translate.safety[prefix].title} maxRows={10} multiline label="Заголовок" variant="outlined" />
                    <TextField value={translate.safety[prefix].text} maxRows={10} multiline label="Текст" variant="outlined" />
                </div>
            </div>
            <div className="language__items-block">
                <Typography>Автоматический режим</Typography>
                <div className="language__items-row">
                    <TextField value={translate.auto[prefix].title} maxRows={10} multiline label="Заголовок" variant="outlined" />
                    <TextField value={translate.auto[prefix].text} maxRows={10} multiline label="Текст" variant="outlined" />
                    <TextField value={translate.auto[prefix].gratitude} maxRows={10} multiline label="Благодарность" variant="outlined" />
                </div>
            </div>
            <div className="language__items-block">
                <Typography>Форма</Typography>
                <div className="language__items-row">
                    <TextField value={translate.form[prefix].from} maxRows={10} multiline label="Отдаёте" variant="outlined" />
                    <TextField value={translate.form[prefix].min} maxRows={10} multiline label="Мин" variant="outlined" />
                    <TextField value={translate.form[prefix].max} maxRows={10} multiline label="Макс" variant="outlined" />
                    <TextField value={translate.form[prefix].to} maxRows={10} multiline label="Получите" variant="outlined" />
                    <TextField value={translate.form[prefix].count} maxRows={10} multiline label="Резерв" variant="outlined" />
                </div>
                <div className="language__items-row">
                    <TextField value={translate.form[prefix].input} maxRows={10} multiline label="Ввод данных" variant="outlined" />
                    <TextField value={translate.form[prefix].curs} maxRows={10} multiline label="Курс" variant="outlined" />
                    <TextField value={translate.form[prefix].fill} maxRows={10} multiline label="Заполнить форму" variant="outlined" />
                </div>
                <div className="language__items-row">
                <TextField value={translate.form[prefix].if} maxRows={10} multiline label="Условия" variant="outlined" />
                    <TextField value={translate.form[prefix].btn} maxRows={10} multiline label="Кнопка" variant="outlined" />
                    <TextField value={translate.form[prefix].operation} maxRows={10} multiline label="Операция" variant="outlined" />
                </div>
            </div>
            <div className="language__items-block">
                <Typography>Преимущества</Typography>
                <>
                    {
                        translate.advantages[prefix].items.map((item: any, id: number) => {
                            return (
                                <div key={id} className="language__items-row">
                                    <TextField value={item.title} maxRows={10} multiline label="Заголовок" variant="outlined" />
                                    <TextField value={item.text} maxRows={10} multiline label="Текст" variant="outlined" />
                                </div>
                            )
                        })
                    }
                </>
            </div>
            <div className="language__items-block">
                <Typography>Резервы</Typography>
                <div className="language__items-row">
                    <TextField value={translate.reserve[prefix].title} maxRows={10} multiline label="Заголовок" variant="outlined" />
                </div>
            </div>
            <div className="language__items-block">
                <Typography>Отзывы</Typography>
                <div className="language__items-row">
                    <TextField value={translate.reviews[prefix].title} maxRows={10} multiline label="Заголовок" variant="outlined" />
                    <TextField value={translate.reviews[prefix].title} maxRows={10} multiline label="Текст" variant="outlined" />
                </div>
            </div>
        </div>
    )
}

export default LangHome