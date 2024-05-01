import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton} from "@mui/material";
import Link from "next/link";
import {useTheme} from "@mui/system";


export default function SwipeableTemporaryDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setOpen(open);
            };

    const DrawMenu = () => (
        <Box
            sx={{width: '260px'}}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>

                <Link href={'/list'} style={{textDecoration: 'none', color: theme.palette.primary.main}}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <IconButton color={'primary'}>
                                    <HomeIcon/>
                                </IconButton>

                            </ListItemIcon>
                            <ListItemText primary={'Home'}/>
                        </ListItemButton>
                    </ListItem>
                </Link>

            </List>
        </Box>
    );

    return (
        <div>

            <React.Fragment>
                <IconButton onClick={toggleDrawer(true)}
                >
                    <MenuIcon/>
                </IconButton>
                <SwipeableDrawer
                    anchor={'left'}
                    open={open}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    <DrawMenu/>
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}
