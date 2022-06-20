import { Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CTAButton from 'ui-component/CTAButton';

const CardLayout = styled(Card)({
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
    background: '#fdfefd',
    border: '1px solid gray',
    gap: '10px'
});

const TextImageCard = ({ title, subtitle, image, link }) => (
    <CardLayout>
        <Typography variant="h3" sx={{ textTransform: 'uppercase' }}>
            {title}
        </Typography>
        <Typography variant="h3" sx={{ textTransform: 'uppercase', fontWeight: 400 }}>
            {subtitle}
        </Typography>
        <img src={image} alt={link} style={{ width: '100%' }} />
        <CTAButton link={link} color="primary" />
    </CardLayout>
);

export default TextImageCard;
