"use client";
import { useMapContext } from "@/context/MapContext";
// import { MapDetailsGeolocation } from "@components/page/dashboard/server/MapDetailsGeolocation";

import mapboxgl from "mapbox-gl";
import { useEffect, useState } from "react";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

export function Map() {
  const { mapState, setMapState } = useMapContext();

  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  const [zoom, setZoom] = useState(4);
  const [coords, setCoords] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    if (mapState)
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);

        mapState?.flyTo({
          center: [position.coords.longitude, position.coords.latitude],
        });
      });
  }, [mapState]);

  useEffect(() => {
    if (!mapState) {
      const map = new mapboxgl.Map({
        container: "map",
        style: process.env.NEXT_PUBLIC_MAPBOX_MAP_STYLE || "",
        center: [long, lat], // [long, lat]
        zoom: 14,
      });

      setCoords({
        longitude: Number(long.toFixed(4)),
        latitude: Number(lat.toFixed(4)),
      });

      setZoom(10);

      setMapState(map);

      map.addControl(new mapboxgl.NavigationControl());

      map.on("move", () => {
        setCoords({
          longitude: Number(map.getCenter().lng.toFixed(4)),
          latitude: Number(map.getCenter().lat.toFixed(4)),
        });

        setZoom(Number(map.getZoom().toFixed(2)));
      });
    }
  }, [lat, long, mapState, setMapState]);

  return (
    <div className="h-full w-full" id="map">
      {/* <MapDetailsGeolocation
        latitude={coords.latitude}
        longitude={coords.longitude}
        zoom={zoom}
      /> */}
    </div>
  );
}
