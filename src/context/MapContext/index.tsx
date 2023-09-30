'use client'
import mapboxgl from 'mapbox-gl'
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'

export interface MapContextData {
  mapState: mapboxgl.Map | null
  petInFocus: string
  setPeInFocus: (pet: string) => void
  setMapState: (state: mapboxgl.Map) => void
  dismountMap: () => void
}

const MapContext = createContext<MapContextData>({} as MapContextData)

function MapProvider({ children }: PropsWithChildren) {
  const [mapState, setMapState] = useState<mapboxgl.Map | null>(null)
  const [petInFocus, setPeInFocus] = useState('')

  const dismountMap = useCallback(() => {
    if (mapState) {
      setMapState(null)
      mapState.remove()
    }
  }, [mapState])

  return (
    <MapContext.Provider
      value={{ mapState, setMapState, petInFocus, setPeInFocus, dismountMap }}
    >
      {children}
    </MapContext.Provider>
  )
}

const useMapContext = (): MapContextData => {
  const context = useContext(MapContext)

  if (!context) {
    throw new Error('useMapContext must be used within a MapProvider')
  }

  return context
}

export { MapProvider, useMapContext }
