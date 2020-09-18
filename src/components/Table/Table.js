import React from 'react';
import MaterialTable from 'material-table'
import './style.css';

function Table(){
  const columnas=[
    {
      title:'USUÁRIO',
      field: 'usuario'
    },
    {
      title:'E-MAIL',
      field:'email'
    },
    {
      title:'DATA DE INCLUSÃO',
      field:'datain'
    },
    {
      title:'DATA DE ALTERAÇÃO',
      field:'dataalt'
    },
    {
      title:'REGRAS',
      field:'regras',
      type:"numeric"
    },
    {
      title:'STATUS',
      field:'status'
    }
  ]

  const data=[
      { usuario:'ANPINA', email:'antonio.pina@tvglobo.com.br', datain:'28/05/2019', dataalt:'30/05/2019', regras:'01', status:'ATIVO'},
      { usuario:'ANPINA', email:'antonio.pina@tvglobo.com.br', datain:'28/05/2019', dataalt:'30/05/2019', regras:'01', status:'ATIVO'},
      { usuario:'ANPINA', email:'antonio.pina@tvglobo.com.br', datain:'28/05/2019', dataalt:'30/05/2019', regras:'01', status:'ATIVO'},
      { usuario:'ANPINA', email:'antonio.pina@tvglobo.com.br', datain:'28/05/2019', dataalt:'30/05/2019', regras:'01', status:'ATIVO'},
      { usuario:'ANPINA', email:'antonio.pina@tvglobo.com.br', datain:'28/05/2019', dataalt:'30/05/2019', regras:'01', status:'ATIVO'}
    
  ];

  return(
    <div className="main">
      <MaterialTable
        columns={columnas}
        data={data}
        title= <img src="../assets/Logo.svg"/>
        actions={[
          {
            icon:'edit',
            tooltip:'Editar Usuário',
          },
          {
            icon:'delete',
            tooltip:'Deletar Usuário',
            onClick: (event,rowData)=>window.confirm('Tem certeza que deseja excluir o usuário: '+rowData.usuario+' ?')
          }
        ]}
        options={{
          actionsColumnIndex:-1
        }}
        localization={{
          header:{
            actions:'AÇÕES'
          }
        }}
      />

    </div>
  );
}

export default Table;




