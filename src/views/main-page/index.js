// material-ui
import { Box } from '@mui/material';
import MainContent from './maincontent';
import NewsLetter from './newsletter';
import CopyRight from './copyright';
import HeroContent from './herocontent';

const MainPage = () => (
    <Box sx={{ background: { xs: '#166ba7', md: 'transparent' } }}>
        <HeroContent />
        <MainContent />
        <NewsLetter />
        <CopyRight />
    </Box>
);

export default MainPage;
