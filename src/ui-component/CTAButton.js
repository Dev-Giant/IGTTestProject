import { Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ButtonBox = styled(Box)({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%'
});

const RightArrow = styled(ArrowForwardIosIcon)({
    position: 'absolute',
    right: '4px',
    color: 'white'
});

const CTAButton = ({ link, color }) => (
    <ButtonBox>
        <Button variant="contained" color={color} sx={{ width: '100%', textTransform: 'uppercase' }}>
            {link}
        </Button>
        <RightArrow />
    </ButtonBox>
);

export default CTAButton;
