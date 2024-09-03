import React, { useState, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const CustomDrawer = ({ isDrawerOpen, handleDrawerToggle }) => {
    const drawerWidth = 280;
    const router = useRouter();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Check if the screen size is small
    const [isLoggedIn, setIsLoggedIn] = useState(true);


    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loggedInStatus);
    }, []);

    const handleProfileClick = () => {
        router.push('/profile');
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', 'false');
        router.push('/');
    };

    return (
        <>
            {!isSmallScreen && (
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            backgroundColor: '#E9E9E9',
                            borderRadius: '20px',
                            boxShadow: '0.5px 0 8px rgba(0, 0, 0, 0.1)',
                        },
                    }}
                    anchor="left"
                >
                    <div className="p-4 pt-6">
                        <div className="flex items-center justify-center mb-8 pt-6 mt-6">
                            <Image src="/logo.png" alt="Cyparta Logo" width={247} height={158} />
                        </div>

                        {isLoggedIn && (
                            <List>
                                <ListItem
                                    button="true"
                                    onClick={handleProfileClick}
                                    sx={{
                                        '&:hover': {
                                            color: 'red',
                                            boxShadow: '0px 1px 5px rgba(255, 0, 0, 0.5)',
                                        },
                                        '&:hover .MuiListItemIcon-root': {
                                            color: 'red',
                                        },
                                    }}
                                >
                                    <ListItemIcon>
                                        <FontAwesomeIcon icon={faUser} />
                                    </ListItemIcon>
                                    <ListItemText primary="Profile" />
                                </ListItem>

                                <ListItem
                                    button="true"
                                    onClick={handleLogoutClick}
                                    sx={{
                                        '&:hover': {
                                            color: 'red',
                                            boxShadow: '0px 1px 5px rgba(255, 0, 0, 0.5)',
                                        },
                                        '&:hover .MuiListItemIcon-root': {
                                            color: 'red',
                                        },
                                    }}
                                >
                                    <ListItemIcon>
                                        <FontAwesomeIcon icon={faSignOutAlt} />
                                    </ListItemIcon>
                                    <ListItemText primary="Log Out" />
                                </ListItem>
                            </List>
                        )}
                        {!isLoggedIn && (
                            <List>
                                <ListItem
                                    button="true"
                                    sx={{
                                        '&:hover': {
                                            color: 'red',
                                            boxShadow: '0px 1px 5px rgba(255, 0, 0, 0.5)',
                                        },
                                        '&:hover .MuiListItemIcon-root': {
                                            color: 'red',
                                        },
                                    }}
                                >
                                    <ListItemIcon>
                                        <FontAwesomeIcon icon={faSignOutAlt} />
                                    </ListItemIcon>
                                    <ListItemText primary="Log In" />
                                </ListItem>
                            </List>
                        )}
                    </div>
                </Drawer>
            )}

            {isSmallScreen && (
                <Drawer
                    variant="temporary"
                    open={isDrawerOpen}
                    onClose={handleDrawerToggle}
                    sx={{
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            backgroundColor: '#E9E9E9',
                            borderRadius: '20px',
                            boxShadow: '0.5px 0 8px rgba(0, 0, 0, 0.1)',
                        },
                    }}
                    anchor="left"
                >
                    <div className="p-4 pt-6">
                        <div className="flex items-center justify-center mb-8 pt-6 mt-6">
                            <Image src="/logo.png" alt="Cyparta Logo" width={247} height={158} />
                        </div>

                        {isLoggedIn && (
                            <List>
                                <ListItem
                                    button="true"
                                    onClick={handleProfileClick}
                                    sx={{
                                        '&:hover': {
                                            color: 'red',
                                            boxShadow: '0px 1px 5px rgba(255, 0, 0, 0.5)',
                                        },
                                        '&:hover .MuiListItemIcon-root': {
                                            color: 'red',
                                        },
                                    }}
                                >
                                    <ListItemIcon>
                                        <FontAwesomeIcon icon={faUser} />
                                    </ListItemIcon>
                                    <ListItemText primary="Profile" />
                                </ListItem>

                                <ListItem
                                    button="true"
                                    onClick={handleLogoutClick}
                                    sx={{
                                        '&:hover': {
                                            color: 'red',
                                            boxShadow: '0px 1px 5px rgba(255, 0, 0, 0.5)',
                                        },
                                        '&:hover .MuiListItemIcon-root': {
                                            color: 'red',
                                        },
                                    }}
                                >
                                    <ListItemIcon>
                                        <FontAwesomeIcon icon={faSignOutAlt} />
                                    </ListItemIcon>
                                    <ListItemText primary="Log Out" />
                                </ListItem>
                            </List>
                        )}
                        {!isLoggedIn && (
                            <List>
                                <ListItem
                                    button="true"
                                    sx={{
                                        '&:hover': {
                                            color: 'red',
                                            boxShadow: '0px 1px 5px rgba(255, 0, 0, 0.5)',
                                        },
                                        '&:hover .MuiListItemIcon-root': {
                                            color: 'red',
                                        },
                                    }}
                                >
                                    <ListItemIcon>
                                        <FontAwesomeIcon icon={faSignOutAlt} />
                                    </ListItemIcon>
                                    <ListItemText primary="Log In" />
                                </ListItem>
                            </List>
                        )}
                    </div>
                </Drawer>
            )}
        </>
    );
};

export default CustomDrawer;
