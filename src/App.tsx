import React from "react";
import "./App.css";

import GridLayout from "./components/GridLayout";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className='App'>
      <Header></Header>
      <GridLayout></GridLayout>
    </div>
  );
}
