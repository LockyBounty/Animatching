import React from 'react';
import {AppBar,Toolbar,IconButton,Typography,Divider,InputBase,Badge,MenuItem,Menu} from '@material-ui/core/';
import {Search,AccountCircle,Mail,Notifications,MoreVert} from '@material-ui/icons/';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';


export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
     <Menu
       anchorEl={anchorEl}
       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
       id={menuId}
       keepMounted
       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
       open={isMenuOpen}
       onClose={handleMenuClose}
     >
       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
       <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
       <MenuItem onClick={handleMenuClose}>My Anime List</MenuItem>
       <MenuItem onClick={handleMenuClose}>My Followers</MenuItem>
        <MenuItem onClick={handleMenuClose}>My Matching</MenuItem>
        <Divider/>
        <div  className={classes.sectionLogout}>
          <MenuItem onClick={handleMenuClose}>Log out</MenuItem>
          <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
        </div>
     </Menu>
   );

   const mobileMenuId = 'primary-search-account-menu-mobile';
   const renderMobileMenu = (
     <Menu
       anchorEl={mobileMoreAnchorEl}
       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
       id={mobileMenuId}
       keepMounted
       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
       open={isMobileMenuOpen}
       onClose={handleMobileMenuClose}
     >
       <MenuItem>
         <IconButton aria-label="show 4 new mails" color="inherit">
           <Badge badgeContent={4} color="secondary">
             <Mail />
           </Badge>
         </IconButton>
         <p>Messages</p>
       </MenuItem>
       <MenuItem>
         <IconButton aria-label="show 11 new notifications" color="inherit">
           <Badge badgeContent={11} color="secondary">
             <Notifications/>
           </Badge>
         </IconButton>
         <p>Notifications</p>
       </MenuItem>
       <MenuItem onClick={handleProfileMenuOpen}>
         <IconButton
           aria-label="account of current user"
           aria-controls="primary-search-account-menu"
           aria-haspopup="true"
           color="inherit"
         >
           <AccountCircle />
         </IconButton>
         <p>Profile</p>
       </MenuItem>
     </Menu>
   );

   return (
     <div className={classes.grow}>
       <AppBar position="static" className={classes.header}>
         <Toolbar className={classes.toolBar}>
           <IconButton
             edge="start"
             className={classes.menuButton}
             color="inherit"
             aria-label="open drawer"
           >
             <MenuIcon />
           </IconButton>
           <Typography className={classes.title} variant="h6" noWrap>
             Material-UI
           </Typography>
           <div className={classes.search}>
             <div className={classes.searchIcon}>
               <Search />
             </div>
             <InputBase
               placeholder="Search…"
               classes={{
                 root: classes.inputRoot,
                 input: classes.inputInput,
               }}
               inputProps={{ 'aria-label': 'search' }}
             />
           </div>
           <div className={classes.grow} />
           <div className={classes.sectionDesktop}>
             <IconButton aria-label="show 4 new mails" color="inherit">
               <Badge badgeContent={4} color="secondary">
                 <Mail />
               </Badge>
             </IconButton>
             <IconButton aria-label="show 17 new notifications" color="inherit">
               <Badge badgeContent={17} color="secondary">
                 <Notifications />
               </Badge>
             </IconButton>
             <IconButton
               edge="end"
               aria-label="account of current user"
               aria-controls={menuId}
               aria-haspopup="true"
               onClick={handleProfileMenuOpen}
               color="inherit"
             >
               <AccountCircle />
             </IconButton>
           </div>
           <div className={classes.sectionMobile}>
             <IconButton
               aria-label="show more"
               aria-controls={mobileMenuId}
               aria-haspopup="true"
               onClick={handleMobileMenuOpen}
               color="inherit"
             >
               <MoreVert/>
             </IconButton>
           </div>
         </Toolbar>
       </AppBar>
       {renderMobileMenu}
       {renderMenu}
     </div>
   );
 }
