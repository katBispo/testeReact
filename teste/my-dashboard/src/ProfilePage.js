import React, { useState } from 'react';
import { Box, Paper, Typography, Grid, TextField, Button, Avatar, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MenuBar from './MenuBar'; 



const MainContent = styled(Box)({
  padding: '16px',
});

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    nome: '',
    crq: '',
    email: '',
    cpf: '',
    cargo: '',
    dataAdmissao: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = () => {
    // Lógica para salvar os dados
    console.log(profileData);
  };

  return (

    <Box display="flex">
      <MenuBar />
    <MainContent>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '16px', textAlign: 'center' }}>
            <Typography variant="h6">Foto de Perfil</Typography>
            <Avatar
              alt="Kateriny Bispo"
              src="https://via.placeholder.com/150"
              sx={{ width: 100, height: 100, margin: 'auto' }}
            />
            <Typography variant="h6" style={{ marginTop: '8px' }}>Kateriny Bispo</Typography>
            <Typography variant="body1">ID: 785420</Typography>
            <IconButton color="primary" component="span">
              <EditIcon />
            </IconButton>
          </Paper>
          <Paper elevation={3} style={{ padding: '16px', textAlign: 'center', marginTop: '16px' }}>
            <HelpOutlineIcon fontSize="large" />
            <Typography variant="h6">Dúvidas?</Typography>
            <Typography variant="body1">Acesse a nossa Central de Ajuda.</Typography>
            <Button variant="outlined" color="primary" style={{ marginTop: '8px' }}>Acessar</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h6">Dados Pessoais</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Nome"
                  name="nome"
                  value={profileData.nome}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="CRQ"
                  name="crq"
                  value={profileData.crq}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="E-mail"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="CPF"
                  name="cpf"
                  value={profileData.cpf}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Cargo"
                  name="cargo"
                  value={profileData.cargo}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Data de Admissão"
                  name="dataAdmissao"
                  type="date"
                  value={profileData.dataAdmissao}
                  onChange={handleChange}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: '16px', backgroundColor: '#B2D235' }}
              onClick={handleSubmit}
            >
              Salvar
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </MainContent>
    </Box>
  );
};

export default ProfilePage;
