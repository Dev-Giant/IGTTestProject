import { AppBar, Box, Toolbar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import logo from 'assets/images/logo.svg';
import ToggleMenu from './ToggleMenu';

const MenuButton = styled(Button)({
    margin: '0px 10px'
});

const LogoBox = styled(Box)`
    position: absolute;
    top: 0px;
    height: 120px;
    background: black;
    opacity: 0.9;
    display: flex;
    justifycontent: center;
    padding: 20px 30px;
    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        display: flex;
        padding: unset;
        background: unset;
        justify-content: center;
        align-items: center;
        z-index: 0;
    }
`;

const Header = () => (
    <AppBar sx={{ background: { xs: 'black', sm: 'white' } }}>
        <Toolbar>
            <Box className="main-container">
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <ToggleMenu />
                    <LogoBox>
                        <img src={logo} alt="logo" />
                    </LogoBox>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'right', width: '100%' }}>
                        <MenuButton color="primary">Lorem Ipsum</MenuButton>
                        <MenuButton variant="contained">Lorem Ipsum</MenuButton>
                        <MenuButton variant="contained">Lorem Ipsum</MenuButton>
                    </Box>
                </Box>
            </Box>
        </Toolbar>
    </AppBar>
);

export default Header;
