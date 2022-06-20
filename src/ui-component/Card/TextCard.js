import { Card, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const CardLayout = styled(Card)({
    padding: '30px 40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
    background: '#fdfefd',
    border: '1px solid gray'
});

const TextCard = ({ title, description, link }) => (
    <CardLayout>
        <Typography
            variant="h3"
            sx={{
                textTransform: 'uppercase',
                fontSize: { xs: '24px', md: '30px' }
            }}
        >
            {title}
        </Typography>
        <Typography
            variant="body1"
            sx={{
                color: 'black',
                fontSize: { xs: '16px', md: '20px' },
                margin: '30px 0px'
            }}
        >
            {description}
        </Typography>
        <Button
            variant="contained"
            sx={{
                textTransform: 'uppercase',
                fontSize: { xs: '16px', md: '20px' },
                padding: '10px 80px'
            }}
        >
            {link}
        </Button>
    </CardLayout>
);

export default TextCard;
