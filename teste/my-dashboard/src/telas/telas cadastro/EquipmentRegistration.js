import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import MenuBar from '../MenuBar';
import api from '.../api'; // Importe o serviço de API

const EquipmentRegistration = () => {
  const [equipmentName, setEquipmentName] = useState('');
  const [equipmentModel, setEquipmentModel] = useState('');
  const [brandEquipment, setBrandEquipment] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleRegister = () => {
    // Dados do formulário
    const newEquipment = {
      nome: equipmentName,
      modelo: equipmentModel,
      marca: brandEquipment,
    };

    // Enviar dados para o backend usando o serviço de API
    api.post('equipamentos', newEquipment)
      .then(response => {
        console.log(response.data);
        setOpenSnackbar(true);
      })
      .catch(error => {
        console.error('Erro ao cadastrar equipamento:', error);
      });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', padding: '16px' }}>
      <div style={{ marginRight: '150px' }}>
        <MenuBar />
      </div>
      <div style={{ flexGrow: 1 }}>
        <Paper elevation={3} style={{ padding: '16px', maxWidth: '600px', marginBottom: '32px' }}>
          <Typography variant="h5" gutterBottom>
            Cadastro de Equipamentos
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nome Equipamento"
                fullWidth
                value={equipmentName}
                onChange={(e) => setEquipmentName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Modelo"
                fullWidth
                value={equipmentModel}
                onChange={(e) => setEquipmentModel(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Marca"
                fullWidth
                value={brandEquipment}
                onChange={(e) => setBrandEquipment(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleRegister}
                style={{ backgroundColor: '#4caf50' }}
              >
                Cadastrar
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Equipamento cadastrado com sucesso!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default EquipmentRegistration;
