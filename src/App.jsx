import { useState } from 'react'
import FileUpload from './components/FileUpload';
import Chat from './components/Chat';
import './App.css'

function App() {
  const [pdfText, setPdfText] = useState('');

  return (
    <div className="App">
      <h1>PDF Chat App</h1>
      <FileUpload setPdfText={setPdfText} />
      {pdfText && <Chat pdfText={pdfText} />}
    </div>
  )
}

export default App
