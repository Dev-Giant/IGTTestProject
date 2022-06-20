import { Box, Typography, Button, TextField, Grid } from '@mui/material';

const NewsLetter = () => (
    <Box sx={{ borderTop: '1px solid gray', background: '#efefef' }}>
        <Box className="main-container" sx={{ padding: '20px 30px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7} sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <Typography variant="body1" sx={{ whiteSpace: 'nowrap' }}>
                        Abonnez-vous a notre newsletter
                    </Typography>
                    <TextField placeholder="Nom" sx={{ width: '100%', display: { xs: 'none', md: 'flex' } }} />
                </Grid>
                <Grid item xs={12} md={5} sx={{ display: 'flex', alignItems: 'stretch', gap: '20px' }}>
                    <TextField type="email" placeholder="Address e-mail" sx={{ width: '100%' }} />
                    <Button sx={{ padding: '10px 20px' }} variant="contained">
                        SABONNER
                    </Button>
                </Grid>
            </Grid>
        </Box>
    </Box>
);

export default NewsLetter;
