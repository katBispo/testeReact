// MenuBar.js
import React from 'react';
import { Box, Grid, Paper, Typography, List, ListItem, ListItemIcon, ListItemText, Avatar, Badge } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'; 


const Sidebar = styled(Paper)({
  height: '100vh',
  padding: '16px',
  backgroundColor: '#6C7A52',
  color: 'white',
});


const MenuBar = () => {
  return (
    <Box display="flex">
      <Sidebar elevation={3}>
        <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
          <Avatar alt="Kateriny B." src="https://via.placeholder.com/150" sx={{ width: 56, height: 56 }} />
          <Typography variant="h6">Kateriny B.</Typography>
        </Box>
        <List>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Dashboards" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ListAltIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Cadastros" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PersonIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Listas" />
          </ListItem>
          <ListItem button component={Link} to="/perfil"> {/* Link para "/perfil" */}
            <ListItemIcon>
              <NotificationsIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Perfil" />
            <Badge badgeContent={3} color="secondary" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Configurações" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Sair" />
          </ListItem>
        </List>
      </Sidebar>
      </Box>
    );
};

export default MenuBar;