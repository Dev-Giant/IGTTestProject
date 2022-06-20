import { Typography, Grid, Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { maincard, imagecards } from '@fake-db/homepage';
import TextCard from 'ui-component/Card/TextCard';
import TextImageCard from 'ui-component/Card/TextImageCard';
import CTAButton from 'ui-component/CTAButton';

const MainBox = styled(Box)(({ theme }) => ({
    background: theme.palette.mode === 'light' ? theme.palette.background.paper : theme.palette.dark[800],
    color: theme.palette.mode === 'light' ? theme.palette.dark[800] : theme.palette.background.paper
}));

const MainContent = () => {
    const theme = useTheme();
    return (
        <MainBox>
            <Box className="main-container" sx={{ paddingBottom: '10px' }}>
                <Box className="subsection">
                    <Grid spacing={4} container>
                        {maincard.map((carditem) => (
                            <Grid item xs={12} sm={6} md={6} key={carditem.id}>
                                <TextCard title={carditem.title} description={carditem.description} link={carditem.link} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Typography variant="body1" className="subsection" sx={{ display: { xs: 'none', md: 'flex' }, fontSize: '24px' }}>
                    Lorem Ipsum lorem ipsum
                </Typography>
                <Box className="subsection">
                    <Grid spacing={4} container>
                        {imagecards.map((carditem) => (
                            <Grid item xs={12} sm={6} md={3} key={carditem.id}>
                                <TextImageCard
                                    title={carditem.title}
                                    subtitle={carditem.subtitle}
                                    image={carditem.image}
                                    link={carditem.link}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box className="subsection" sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ width: { xs: '100%', md: '25%' } }}>
                        <CTAButton link="lorem ipsum" color="secondary" />
                    </Box>
                </Box>
            </Box>
        </MainBox>
    );
};

export default MainContent;
