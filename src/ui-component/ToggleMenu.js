import * as React from 'react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function ToggleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, zIndex: 1 }}>
            <IconButton
                id="toggle-button"
                aria-controls={open ? 'toggle-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ color: 'white' }}
            >
                <MenuIcon />
                Menu
            </IconButton>
            <Menu
                id="toggle-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'toggle-button'
                }}
            >
                <MenuItem onClick={handleClose}>Lorem ipsum</MenuItem>
                <MenuItem onClick={handleClose}>Lorem ipsum</MenuItem>
                <MenuItem onClick={handleClose}>Lorem ipsum</MenuItem>
            </Menu>
        </Box>
    );
}
