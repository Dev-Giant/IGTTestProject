import Carousel from 'react-material-ui-carousel';
import { Typography, Box, Grid, Card } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { herocontent } from '@fake-db/homepage';

const HeroDescriptionCard = styled(Card)(({ theme }) => ({
    width: '100%',
    border: '1px solid gray',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '10px 20px'
}));

const HeroBox = styled(Box)(({ theme }) => ({
    background: theme.palette.mode === 'light' ? '#00347a' : theme.palette.primary.light,
    color: theme.palette.mode === 'light' ? theme.palette.background.paper : theme.palette.dark[800]
}));

const HeroContent = () => {
    const theme = useTheme();

    return (
        <HeroBox sx={{ padding: '10px 0px' }}>
            <Box className="main-container">
                <Box sx={{ display: 'flex', justifyContent: 'right', width: '100%' }}>
                    <Typography sx={{ marginLeft: '40px' }}>Link1</Typography>
                    <Typography sx={{ marginLeft: '40px' }}>Link2</Typography>
                    <Typography sx={{ marginLeft: '40px' }}>Link3</Typography>
                </Box>
                <Box sx={{ margin: '40px 0px' }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={8}>
                            <Card>
                                <Carousel>
                                    {herocontent.heroimages.map((imageitem) => (
                                        <Box key={imageitem.id}>
                                            <img src={imageitem.image} alt="heroimage" style={{ width: '100%' }} />
                                        </Box>
                                    ))}
                                </Carousel>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card sx={{ display: 'grid', gap: '20px', padding: '10px', height: '100%' }}>
                                {herocontent.cardcontents.map((carditem) => (
                                    <HeroDescriptionCard key={carditem.id}>
                                        <Box>
                                            <Typography variant="h3" sx={{ textTransform: 'uppercase', marginBottom: '20px' }}>
                                                {carditem.title}
                                            </Typography>
                                            <Typography variant="body1" sx={{ color: 'black' }}>
                                                {carditem.description}
                                            </Typography>
                                        </Box>
                                    </HeroDescriptionCard>
                                ))}
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </HeroBox>
    );
};

export default HeroContent;
