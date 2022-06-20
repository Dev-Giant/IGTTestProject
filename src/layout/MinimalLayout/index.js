import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

// project imports
import Customization from '../Customization';
import Header from 'ui-component/Header';
import Footer from 'ui-component/Footer';

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => (
    <Box>
        <Header />
        <Box sx={{ marginTop: '70px' }}>
            <Outlet />
        </Box>
        <Footer />
        <Customization />
    </Box>
);

export default MinimalLayout;
