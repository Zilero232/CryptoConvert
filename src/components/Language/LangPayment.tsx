import { FC } from 'react'
import { useSelector } from "react-redux";
import { RootState } from '../../redux/store';
import { TextField, Typography } from '@mui/material';

const LangPayment: FC = () => {
    const { languages, prefix } = useSelector((state: RootState) => state.language);
    const translate = languages.payment

    if (!translate) {
        return <></>
    }

    return (
        <div className="language__items">
            <div className="language__items-block">
                <Typography>Форма</Typography>
                <div className="language__items-row">
                    <TextField value={translate[prefix].trans} maxRows={10} multiline label="Переведите" variant="outlined" />
                    <TextField value={translate[prefix].walles} maxRows={10} multiline label="На кошелёк" variant="outlined" />
                    <TextField value={translate[prefix].network} maxRows={10} multiline label="Выберите сеть" variant="outlined" />
                    <TextField value={translate[prefix].qr} maxRows={10} multiline label="Qr-Код" variant="outlined" />
                </div>
            </div>
            <div className="language__items-block">
                <Typography>Оплата</Typography>
                <div className="language__items-row">
                    <TextField value={translate[prefix].text} maxRows={50} multiline label="Текст оплаты" variant="outlined" />
                    <TextField value={translate[prefix].btn} maxRows={50} multiline label="Я оплатил" variant="outlined" />
                    <TextField value={translate[prefix].exit} maxRows={50} multiline label="Отмена" variant="outlined" />
                </div>
            </div>
        </div>
    )
}

export default LangPayment