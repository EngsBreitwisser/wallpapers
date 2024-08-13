import React, { useEffect, useState } from 'react'; // Importa React e os hooks a serem utilizados
import './App.css'; // Importa o CSS
import logo from './images/logo.png'; // Importa a logo de seu diretório

function App(){
  const [wallpapers, setWallpaper] = useState([]); // Aqui está sendo declarado um useState

  useEffect(()=>{
    let url = 'https://picsum.photos/v2/list?page=5&limit=100'; // Definindo a URL da API que vou requisitar as infos
    fetch(url).then((response)=>response.json()).then((json)=>setWallpaper(json)); // Fazendo a requisição e atualizando o useState com os dados vindos do Json
  }, []);

  return (
    <div className="app-container">
      <header>
        <img src={logo} alt="Logo" className="header-logo" /> {/*Aqui está mostrando a logo*/}
      </header>
      <div className="image-gallery">
        {wallpapers.map((value)=>{
          return (
            <article key={value.id} className="image-container"> {/* Um container para cada imagem*/}
              <strong className="author-infos">{value.author}</strong> {/* Mostrando o autor da imagem */}
              <img src={value.download_url} alt={value.author} className="image"/> {/* Mostrando a imagem */}
              <button className="download-button" onClick={() => window.open(value.download_url)}>Baixar imagem</button> {/* Botão para baixar a imagem (redireciona para uma nova página devido ao método window.open()) */}
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default App; // Exporta o App
