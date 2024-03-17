import { createContext, useContext, useState } from 'kaioken';

interface StationsContextType {
  stations: Station[] | null
  setStations: (value: Kaioken.StateSetter<Station[] | null>) => void
  selectedStation: Station | null
  setSelectedStation: (value: Kaioken.StateSetter<Station | null>) => void
}

const StationsContext = createContext<StationsContextType>({} as StationsContextType);

export const useStationsProvider = () => useContext(StationsContext)

interface MyContextProviderProps {
  children?: Kaioken.VNode | Kaioken.VNode[]
}
export function StationsContextProvider(props: MyContextProviderProps) {
  const [stations, setStations] = useState<Station[] | null>(null)
  const [selectedStation, setSelectedStation] = useState<Station | null>(null)

  const value = {
    stations, setStations,
    selectedStation, setSelectedStation
  };

  return (
    <StationsContext.Provider value={value}>
      {props.children}
    </StationsContext.Provider>
  );
}

export interface Station {
  url: string
  avatar: string
  title: string
}
