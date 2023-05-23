import React from 'react'

export  function Header() {
  return (
    <header className='w-ful h-24 bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col'>
        <h1 className='text-white font-semibold text-3xl m-auto'>Cronometro Cubero</h1>
        <div className='min-w-[60%] m-auto flex shadow-mio h-1/3 rounded-lg'>
            <p className='m-auto text-slate-200 tracking-[10px] font-semibold'>R E S D R W S F D S F E S C D E W S E D</p>
        </div>
    </header>
  )
}
