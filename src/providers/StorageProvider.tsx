import { exists, readTextFile, writeTextFile } from '@tauri-apps/api/fs';
import { appDataDir } from '@tauri-apps/api/path';
import { createContext, useContext, useRef } from 'kaioken';
import { Station } from './StationsProvider';

interface StorageContextType {
  appDataDirRef: Kaioken.Ref<string>,
  getStationsFile: () => Promise<Station[] | undefined>
}

const StorageContext = createContext<StorageContextType>({} as StorageContextType);

export const useStorageContext = () => useContext(StorageContext)

export function StorageContextProvider(props: any) {
  const appDataDirRef = useRef<string>(null)

  async function _getStationsFile(): Promise<Station[] | undefined> {
    let dir: null | string = null
    try {
      dir = await appDataDir()
    } catch (err) {
      console.error(err)
      return undefined
    }
    if (!dir) return undefined
    const path = `${dir}/stations.json`
    if (!(await exists(path)))
      return await _createStationsFile(path)
    const jsonString = await readTextFile(path)
    const json = JSON.parse(jsonString) as Station[]
    appDataDirRef.current = path
    return json
  }

  async function _createStationsFile(path: string): Promise<Station[]> {
    await writeTextFile(path, "[]", { append: false })
    return []
  }


  const value: StorageContextType = {
    appDataDirRef,
    getStationsFile: _getStationsFile
  };

  return (
    <StorageContext.Provider value={value}>
      {props.children}
    </StorageContext.Provider>
  );
}
