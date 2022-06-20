import { Typography, Box } from '@mui/material';

const CopyRight = () => (
    <Box sx={{ borderBottom: '10px solid #00c4e4', background: '#166ba7', color: 'white' }}>
        <Box className="main-container" sx={{ padding: '30px !important' }}>
            <Typography sx={{ maxWidth: '600px' }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmad tempor incididant ut labore et dolore magna allqua.
            </Typography>
        </Box>
    </Box>
);

export default CopyRight;
