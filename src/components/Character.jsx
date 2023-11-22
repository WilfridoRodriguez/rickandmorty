import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rich from "../api/Rick";
import Spiner from "./Spiner";

const Character = () => {
  const { id } = useParams();
  const [dataCharacter, setDataCharacter] = useState([]);
  useEffect(() => {
    const GetData = async () => {
      const { data } = await Rich.get(`/${id}`);
      setDataCharacter(data);
    };
    GetData();
    ShowSpiner();
  }, []);
  // console.log(dataCharacter);
  const { name, image, status, gender, species, origin, location, episode } =
    dataCharacter;
  const [spiner, setSpiner] = useState(false);
  const ShowSpiner = () => {
    setTimeout(() => {
      setSpiner(true);
    }, 1000);
  };

  return (
    <div
      style={{
        backgroundColor: "#272b33",
      }}
    >
      {dataCharacter.name && spiner ? (
        <>
            < div className="ContainerCharacter">
              <div className="ContainerImage">
                <img src={image} alt={name} />
              </div>
              <div className="ContainerContent">
                <h1>{name}</h1>
                <p>{status}</p>
                <p>{gender}</p>
                <p>{species}</p>
                <p>{location.name}</p>
                <p>{origin.name}</p>
                <p>{episode.length}</p>
              </div>
                     
            </div>
            <div className="BotonRegresar">
                <button>Regresar al Inicio</button>
            </div>    
        </>
      ) : (
        <>
          <div className="Spiner">
            <Spiner/>
            <h1>Cargando...</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Character;