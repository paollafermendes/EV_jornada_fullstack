import React from "react";
import { Link } from "react-router-dom";

const SongItem = () => {
  return (
    <Link to="/song/1" className="song-item">
      <p>1</p>

      <img src="" alt="Imagem da música X" />

      <p>Nome</p>

      <p> 02:20</p>
    </Link>
  );
};

export default SongItem;
