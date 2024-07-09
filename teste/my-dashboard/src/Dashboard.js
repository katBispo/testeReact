// Dashboard.js
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
import MenuBar from './MenuBar';

import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const Sidebar = styled(Paper)({
  height: '100vh',
  padding: '16px',
  backgroundColor: '#6C7A52',
  color: 'white',
});

const MainContent = styled(Box)({
  padding: '16px',
});

const dataBar = [
  { name: 'Ácidos', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Bases', uv: 300, pv: 1398, amt: 2210 },
  { name: 'Sais', uv: 200, pv: 9800, amt: 2290 },
  { name: 'Vidrarias', uv: 278, pv: 3908, amt: 2000 },
  { name: 'Equipamentos', uv: 189, pv: 4800, amt: 2181 },
  { name: 'Indicadores', uv: 239, pv: 3800, amt: 2500 },
  { name: 'Resíduos', uv: 349, pv: 4300, amt: 2100 },
];

const dataPie = [
  { name: 'Tratado', value: 400 },
  { name: 'Não Tratado', value: 300 },
  { name: 'Em andamento', value: 300 },
  { name: 'Outros', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const Dashboard = () => {
  return (
    <Box display="flex">
      <MenuBar />

      <MainContent flexGrow={1}>
        <Typography variant="h4" gutterBottom>Seus KPI's críticos</Typography>
        	        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Paper elevation={3} style={{ padding: '16px', textAlign: 'center' }}>
              <Typography variant="h5">20L</Typography>
              <Typography variant="body1">Total de Resíduos</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={3} style={{ padding: '16px', textAlign: 'center' }}>
              <Typography variant="h5">10</Typography>
              <Typography variant="body1">Reagentes Vencidos</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={3} style={{ padding: '16px', textAlign: 'center' }}>
              <Typography variant="h5">05</Typography>
              <Typography variant="body1">Máquinas Quebradas</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={3} style={{ padding: '16px', textAlign: 'center' }}>
              <Typography variant="h5">08</Typography>
              <Typography variant="body1">Análises em Andamento</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={8}>
            <Paper elevation={3} style={{ padding: '16px' }}>
              <Typography variant="h6">Balanço de Insumos e Resíduos</Typography>
              <Typography variant="body2">+8% comparado ao Mês Anterior</Typography>
              <BarChart
                width={500}
                height={300}
                data={dataBar}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" fill="#8884d8" />
              </BarChart>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={3} style={{ padding: '16px' }}>
              <Typography variant="h6">Histórico de Atividades</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Cadastro de Insumo" secondary="Nome - Categoria" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Cadastro de Colaboradores" secondary="Nome - Função" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Resíduo Tratado" secondary="Nome" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Colaboradores de Licença" secondary="Nome" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={4}>
            <Paper elevation={3} style={{ padding: '16px' }}>
              <Typography variant="h6">Resumo de Resíduos</Typography>
              <Typography variant="body2">+5% comparado ao Mês Anterior</Typography>
              <PieChart width={400} height={400}>
                <Pie
                  data={dataPie}
                  cx={200}
                  cy={200}
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dataPie.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </Paper>
          </Grid>
        </Grid>
     
      </MainContent>
    </Box>
  );
};

export default Dashboard;
