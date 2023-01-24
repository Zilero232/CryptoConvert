import * as React from 'react';
import { Box, Paper, Button, Tabs, Tab } from '@mui/material';
import Title from './Title';

import LangGlobal from '../Language/LangGlobal';
import LangHome from '../Language/LangHome';
import LangAbout from '../Language/LangAbout';
import LangPartners from '../Language/LangPartners';
import LangPayment from '../Language/LangPayment';
import LangPolicy from '../Language/LangPolicy';
import LangRules from '../Language/LangRules';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const Curs = () => {
    const [value, setValue] = React.useState(0);
    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Paper className='table' sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Title>Перевод</Title>
                <div className="profile__language-content">
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Глобальное" {...a11yProps(0)} />
                                <Tab label="Home" {...a11yProps(1)} />
                                <Tab label="About" {...a11yProps(2)} />
                                <Tab label="Partners" {...a11yProps(3)} />
                                <Tab label="Payment" {...a11yProps(4)} />
                                <Tab label="Policy" {...a11yProps(5)} />
                                <Tab label="Rules" {...a11yProps(6)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <LangGlobal />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <LangHome />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <LangAbout />
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <LangPartners />
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <LangPayment />
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            <LangRules />
                        </TabPanel>
                        <TabPanel value={value} index={6}>
                            <LangPolicy />
                        </TabPanel>
                    </Box>
                </div>
            </Paper>
            <div className="profile__items">
                <Button variant="contained">Сохранить</Button>
            </div>
        </>
    );
}

export default Curs