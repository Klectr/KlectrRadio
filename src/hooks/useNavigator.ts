import { useState } from "kaioken"
export enum Navs {
  MAIN,
  ADD,
  PLAYER,
}

export function useNavigator() {
  const [nav, setNav] = useState<Navs>(Navs.MAIN)

  function _setNavitation(newNav: Navs) {
    setNav(newNav)
  }

  return {
    nav,
    setNavitation: _setNavitation,
  }
}
