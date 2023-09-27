import React from 'react';
import AppRouter from './components/AppRouter';
import { LanguageProvider } from './components/LanguageProvider'; // Importieren Sie den LanguageProvider

function App() {
  return (
    <LanguageProvider>
    <div className="App">

      <AppRouter/>

      </div>
      </LanguageProvider>
  );
}



export default App;