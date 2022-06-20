import { Typography, Grid, Box } from '@mui/material';
import { footerdata } from '@fake-db/homepage';

const Footer = () => (
    <Box sx={{ background: 'black', color: 'white' }}>
        <Box className="main-container" sx={{ padding: '50px 30px !important' }}>
            <Grid container spacing={{ xs: 4, md: 16 }}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {footerdata.links1.map((footeritem) => (
                        <Typography key={footeritem}>{footeritem}</Typography>
                    ))}
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {footerdata.links2.map((footeritem) => (
                        <Typography key={footeritem}>{footeritem}</Typography>
                    ))}
                </Grid>
            </Grid>
            <Typography sx={{ margin: '30px 0px' }}>{footerdata.description}</Typography>
        </Box>
    </Box>
);

export default Footer;
