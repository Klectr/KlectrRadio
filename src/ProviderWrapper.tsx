import { App } from "./App";
import { StationsContextProvider } from "./providers/StationsProvider";
import { StorageContextProvider } from "./providers/StorageProvider";

export default function ProviderWrapper() {
  return (
    <StationsContextProvider>
      <StorageContextProvider>
        <App />
      </StorageContextProvider>
    </StationsContextProvider>
  )
}
