import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { atlantidaApi } from "../../services";
import iconPin from "../../assets/images/pin.png";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const MapComponent = () => {
  const [divingSpots, setDivingSpots] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState(null);

  useEffect(() => {
    const fetchDivingSpots = async () => {
      try {
        const response = await atlantidaApi.get("/divingSpots");
        setDivingSpots(response.data);
      } catch (error) {
        console.error("Erro ao buscar pontos de mergulho:", error);
      }
    };

    fetchDivingSpots();
  }, []);

  const mapStyles = {
    height: "768px",
    width: "100%",
    borderRadius: "6px",
  };

  const defaultCenter = {
    lat: -23.15,
    lng: -44.25,
  };

  const mapOptions = {
    mapTypeControl: false, // Desativa o controle de tipo de mapa (Mapa/Satélite)
    streetViewControl: false, // Desativa o controle de Street View
    fullscreenControl: true, // Mantém o controle de tela cheia
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={4}
        center={defaultCenter}
        options={mapOptions} // Mudando as configurações padrão do Mapa
      >
        {divingSpots.map((spot, index) => (
          <Marker
            key={index}
            position={{
              lat: spot.location.coordinates[0],
              lng: spot.location.coordinates[1],
            }}
            title={spot.name}
            icon={{
              url: iconPin,
              scaledSize: window?.google?.maps?.Size(20, 25), // Adicionando e Personalizando o ícone
            }}
            onClick={() => setSelectedSpot(spot)}
          />
        ))}

        {selectedSpot && (
          <InfoWindow
            position={{
              lat: selectedSpot.location.coordinates[0],
              lng: selectedSpot.location.coordinates[1],
            }}
            onCloseClick={() => setSelectedSpot(null)}
          >
            <div style={{ maxWidth: "200px" }}>
              {selectedSpot.image && (
                <img
                  src={`data:${selectedSpot.image.contentType};base64,${selectedSpot.image.data}`}
                  alt={selectedSpot.name}
                  style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                />
              )}
              <h3>{selectedSpot.name}</h3>
              <p>{selectedSpot.description}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
