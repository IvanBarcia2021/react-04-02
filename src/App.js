import React from "react";
import "./style.css";
import { Header } from "./Componentes/Headers";
import { ProductosLista } from "./Componentes/Productos/index";
import 'boxicons';
export default function App() {
  return (
    <div className="App">
     <Header />
     <ProductosLista/>
    </div>
  );
}
