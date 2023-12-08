import { useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import TileLayer from "@arcgis/core/layers/TileLayer.js";

import "./ArcGis.css";

function ArcGis() {
  const housingLayer = useRef();
  const transportationLayer = useRef();

  useEffect(() => {
    transportationLayer.current = new TileLayer({
      url: "https://server.arcgisonline.com/arcgis/rest/services/Reference/World_Transportation/MapServer",
      id: "streets",
      opacity: 0.7,
      visible: false,
    });
    housingLayer.current = new TileLayer({
      url: "https://tiles.arcgis.com/tiles/nGt4QxSblgDfeJn9/arcgis/rest/services/New_York_Housing_Density/MapServer",
      id: "ny-housing",
      visible: false,
    });

    const map = new Map({
      basemap: "oceans",
      layers: [housingLayer.current],
    });
    map.layers.add(transportationLayer.current);

    const view = new MapView({
      map: map,
      container: "viewDiv",
    });
  }, []);

  function handleHousingLayerChange(e) {
    housingLayer.current.visible = e.target.checked;
  }

  function handleTransportationLayerChange(e) {
    transportationLayer.current.visible = e.target.checked;
  }

  return (
    <>
      <h1>ArcGis</h1>
      <Form>
        <Form.Check
          onChange={handleHousingLayerChange}
          label="New York housing layer"
        />
        <Form.Check
          onChange={handleTransportationLayerChange}
          label="Transportation layer"
        />
      </Form>
      <div className="map-container" id="viewDiv" />
    </>
  );
}

export default ArcGis;
