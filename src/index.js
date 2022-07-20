import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from "./features/welcome";
import livros_data from './_assets/json/livros_data';


const title = "Biblioteca";

ReactDOM.render(
  <Welcome title={title} sectionData={livros_data} />
  ,
  document.getElementById('root')
);


