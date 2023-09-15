'use client'

import { state } from '@/app/utils/state'
import { useSnapshot } from "valtio";

export const Langue = () => {

  const snap = useSnapshot(state);

  const switchLan = () => {
    if (state.lang != 'en') {
      state.flag = '🇫🇷'
      state.lang = 'en'
    }
    else {
      state.flag = '🇺🇸'
      state.lang = 'fr'
    }
  }

  return (
    <div className='pl-4 cursor-pointer'>
      <button onClick={switchLan}>
        {snap.flag}
      </button>
    </div>
  )
}