import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import TextsmsIcon from '@mui/icons-material/Textsms';
import { Avatar, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import {List,
    ListItem,} from "@mui/material";
import Popper from '@mui/material/Popper';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    outline: '1px solid',
    outlineColor: '#b4b4b4',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#fafafa',
    '&:hover': {
        backgroundColor: '#fafafa',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
        width: '50%',  // Adjust the width as needed
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(0em + ${theme.spacing(2)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '28ch',
        },
    },
}));



const NavBar = ({ handleDrawerToggle }) => {
    const [arrow, updateArrow] = React.useState(false);
    const [notifications, setNotifications] = React.useState([
        {notificationTitle : 'Renewal of Work From Home Policy!!!' , notificationDescription : 'Hi all. As of 27th Nov 2023, new work from home policy will be made effective due to...........' , date : '10th Nov 2023' } ,
        {notificationTitle : 'Get Ready For the Fun Friday Activity!!!!' , notificationDescription : 'This friday, at 4pm we will be having a new , more engaing fun friday....Be on time.' , date : '15th Nov 2023' }
    ]);
    const [anchorE2, setAnchorE2] = React.useState(null);

    const handleClick = (event) => {
        setAnchorE2(anchorE2 ? null : event.currentTarget);
    };

    const open = Boolean(anchorE2);
    const id = open ? 'simple-popper' : undefined;
    const toggleArrow = () => {
        updateArrow(!arrow);
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            onMouseUp={toggleArrow}
            sx={{ marginTop: '2.5rem' }}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    {/* <AccountCircle /> */}
                    <Avatar alt="Cindy Baker" src="/avatar.jpg" sx={{ width: 24, height: 24, backgroundColor: '#262626' }} />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none' }}>
                <Toolbar >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Search sx={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between' }}>
                        <SearchIconWrapper>
                            <SearchIcon sx={{ color: '#b4b4b4' }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                            sx={{ marginRight: 1 }}
                        >
                            {/* code for Notifications Pop Up */}
                            <PopupState variant="popover" popupId="demo-popup-popover" >
                                {(popupState) => (
                                    <div>  
                                    <Button variant="text" {...bindTrigger(popupState)} > 
                                        <Badge badgeContent={1} color="error">
                                            <NotificationsIcon sx={{ color: '#b4b4b4' }} />
                                        </Badge>
                                    </Button>
                                    
                                    <Popover
                                        {...bindPopover(popupState)}
                                        anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'start',
                                        }}
                                        transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                        }}
                                        sx={{ }}
                                    >
                                        <Box sx={{borderBottom : '1px solid lightgray'}}>
                                            <Typography sx={{ p: 2 }}>Notifications</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ display : 'flex' ,justifyContent : 'end' , padding : '6px 0px 6px 0px'}}><Box sx={{width : 'fit-content' , padding : '6px 13px 8px 8px' , backgroundColor : '#9B64001A'}}>Mark all as read</Box></Typography>
                                            <Typography sx={{ padding: '0px 16px'  , fontWeight : '600'}}>Unread</Typography>
                                        </Box>
                                        <Box sx={{width : 'auto' , height : '241px' , overflow: 'auto' , margin : '4px 0px'}}>
                                <List sx={{ width: "100%", padding: "4px 0px" , height : '270px' }}>
                                {notifications.map( (item) => { return(<ListItem
                                    sx={{
                                    width:'100%',
                                    height : '128px',
                                    backgroundColor: "#0061FE14",
                                    border: "0.5px solid #E0E0E0",
                                    paddingLeft : '0px'
                                    }}
                                >
                                    <Box sx={{height : '100%' , paddingTop : '5%' , display : 'flex'}}>
                                        <Box sx={{height : '6px' , width : '5px' , backgroundColor : '#9B0032' , borderRadius : '50px' , margin : '16px 8px'}}></Box>
                                        <img src='amarya-logo.jpg' style={{ borderRadius : '50px' , height : '35px' , width : '40px', marginRight : '5px'}}/>
                                    </Box>
                                    <Box sx={{marginLeft : '20px'}}>
                                        <Typography variant='subtitle1' sx={{ fontWeight : '400' , fontFamily : 'Poppins' , fontSize : '0.8rem' , margin : '9px 0px'}}>{item.notificationTitle}</Typography>
                                        <Box>
                                            <Typography variant='subtitle2' sx={{fontFamily : 'Poppins' , fontSize : '10px', margin : '9px 0px'}}>{item.notificationDescription}</Typography>
                                        </Box>
                                        <Typography sx={{color:'gray' , fontSize : '10px'}}>{item.date}</Typography>
                                    </Box>
                                </ListItem>)})}
                                </List>
                            </Box>
                                    </Popover>
                                    </div>
                                )}
                            </PopupState>
                        </IconButton>
                        {/* code for stickey notes Pop Up*/}
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit" sx={{ marginRight: 1 }}>
                            <div>
                                {/* <button aria-describedby={id} type="button" onClick={handleClick}>
                                    Toggle Popper
                                </button> */}
                                <Badge badgeContent={0} color="error">
                                    {/* <MailIcon /> */}
                                    <TextsmsIcon sx={{ color: '#b4b4b4' }} aria-describedby={id} onClick={handleClick}/>
                                </Badge>
                                <Popper id={id} open={open} anchorEl={anchorE2}>
                                    <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                                    The content of the Popper.
                                    </Box>
                                </Popper>
                            </div>
                        </IconButton>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit" sx={{ marginRight: 1 }}>
                            <Badge badgeContent={0} color="error">
                                <Avatar sx={{}} alt="Cindy Baker" src="/avatar.jpg" />
                            </Badge>
                        </IconButton>
                        <IconButton disableRipple onMouseDown={handleProfileMenuOpen} onMouseUp={toggleArrow} size="small" color="inherit" sx={{ marginRight: 1 }}>
                            <div>
                                <Typography sx={{ display: 'flex' }}>Sanjana Jain
                                    {arrow ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </Typography>

                            </div>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
                <div
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '46px', // Set the left margin
                        width: 'calc(100% - 20px)', // Adjust the width to include the left margin
                        borderBottom: '0.1px solid #f1f1f1',
                    }}
                />
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}

export default NavBar;