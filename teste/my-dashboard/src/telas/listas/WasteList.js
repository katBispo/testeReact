import React from 'react';
import './styles.css'; // Certifique-se de ajustar o caminho conforme necessário
import MenuBar from '../MenuBar'; // Certifique-se de ajustar o caminho conforme necessário

const WasteList = () => {
  const wasteData = [
    {
      id: '#78595',
      date: '01/01/2024',
      reagent: 'Prata',
      technician: 'Kateriny Bispo',
      classification: 'Sal',
      validity: '09/10/24',
      status: 'Tratado'
    },
    {
      id: '#88575',
      date: '11/01/2024',
      reagent: 'Chumbo',
      technician: 'Kauan Kenney',
      classification: 'Sódio',
      validity: '09/10/24',
      status: 'Descartado'
    },
    {
      id: '#88575',
      date: '11/01/2024',
      reagent: 'Mercúrio',
      technician: 'Kauan Kenney',
      classification: 'Sódio',
      validity: '09/10/24',
      status: 'Não Tratado'
    }
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Tratado':
        return 'status status-tratado';
      case 'Descartado':
        return 'status status-descartado';
      case 'Não Tratado':
        return 'status status-nao-tratado';
      default:
        return '';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', padding: '16px' }}>
      <div style={{ marginRight: '150px' }}>
        <MenuBar />
      </div>
      <div style={{ flexGrow: 1 }}>
        <div className="container">
          <h2>Lista de Resíduos</h2>
          <table>
            <thead>
              <tr>
                <th>Id. Produto</th>
                <th>Data de Cadastro</th>
                <th>Reagente</th>
                <th>Técnico Responsável</th>
                <th>Classificação</th>
                <th>Validade</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {wasteData.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.date}</td>
                  <td>{item.reagent}</td>
                  <td>{item.technician}</td>
                  <td>{item.classification}</td>
                  <td>{item.validity}</td>
                  <td><span className={getStatusClass(item.status)}>{item.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WasteList;
