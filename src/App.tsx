import './styles/main.css';
import logo from './assets/Logo.svg'
import { GameBanner } from './components/GameBanner';
import { CreatAdBanner } from './components/CreateAdBanner';
import { useEffect, useState } from 'react';
import *as Dialog from '@radix-ui/react-dialog'
import { GameController } from 'phosphor-react';
import { Input } from './components/Form/input';

interface gameProps {
  id: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

export function App() {

  const [games, setGames] = useState<gameProps[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/games')
    .then(response => response.json())
    .then(data => {
      setGames(data)
    })
  }, [])

  return (
    <div className='max-w-[1280px] mx-auto flex flex-col items-center m-20'>

      <img className='' src={logo} />

      <h1 
        className='text-6xl text-white font-black m-20'>
          Seu <span className='text-transparent bg-nlw-gradiante bg-clip-text'>duo</span> esta aqui.
      </h1>
      
      <div className='grid grid-cols-6 gap-6'> {/* Games */}
        {
          games.map(date => <GameBanner 
                key={date.id}
                bannerUrl={date.bannerUrl}
                adsCount={date._count.ads}
              />)
        }

      </div>
         <Dialog.Root>
            <CreatAdBanner />

            <Dialog.DialogPortal>
              <Dialog.DialogOverlay className='bg-black/60 inset-0 fixed'/>

              <Dialog.DialogContent className='fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
                <Dialog.DialogTitle className='text-3x1 text-white font-black'>Publique um anúncio</Dialog.DialogTitle>

                
                  <form className='mt-8 flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="game" className='font-semibold'>Qual o game ?</label>
                     <Input id='name' placeholder='Selecione o game que deseja jogar' />
                    </div>

                    <div className='flex flex-col gap-2'>
                      <label htmlFor="name">Seu nome (ou nickname)</label>
                      <Input id='name' placeholder='Como te chamam dentro do game ?'/>
                    </div>

                    <div className='grid grid-cols-2 gap-6'>
                      <div className='flex flex-col gap-2'>
                        <label htmlFor="yearsPlaying">Joga a quantos anos ?</label>
                        <Input id='yearsPlaying' type="number" placeholder="Tudo bem ser nivel o" />
                      </div>

                      <div className='flex flex-col gap-2'>
                        <label htmlFor="discord">Qual seu Discord ?</label>
                        <Input type="text" id='discord' placeholder='Usuario#0000' />
                      </div>
                    </div>

                    <div className='flex gap-6'>
                      <div  className='flex flex-col gap-2 '>
                        <label htmlFor="weekDays">Quando costuma jogar ?</label>

                        <div className='grid grid-cols-4 gap-2'>
                          <button 
                            title='Domingo'
                            className='w-8 h-8 rounded bg-zinc-900'
                            >D</button>
                          <button 
                            title='Segunda'
                            className='w-8 h-8 rounded bg-zinc-900'
                            >S</button>
                          <button 
                            title='Terça'
                            className='w-8 h-8 rounded bg-zinc-900'
                            >T</button>
                          <button 
                            title='Quarta'
                            className='w-8 h-8 rounded bg-zinc-900'
                            >Q</button>
                          <button 
                            title='Quinta'
                            className='w-8 h-8 rounded bg-zinc-900'
                            >Q</button>
                          <button 
                            title='Sexta'
                            className='w-8 h-8 rounded bg-zinc-900'
                            >S</button>
                          <button 
                            title='Sabado'
                            className='w-8 h-8 rounded bg-zinc-900'
                            >S</button>
                        </div>
                      </div>
                      <div className='flex flex-col gap-2 flex-1'>
                         <label htmlFor="hourStart">Qual horario do dia ?</label>
                         <div className='grid grid-cols-2 gap-2'>
                          <Input type="time" id="hourStart" placeholder='De' />
                          <Input type="time" id="hourStart" placeholder='Até' />
                         </div>
                      </div>
                    </div>

                    <div className='mt-2 flex gap-2 text-sm'>
                      <Input type="checkbox" />
                      Costumo me conectar ao chat de voz
                    </div>

                    <footer className='mt-4 flex justify-end gap-4'>
                      <Dialog.Close 
                        className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancelar
                      </Dialog.Close>

                      <button 
                         className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
                         type='submit'>
                        <GameController size={24}/>
                        Encontrar duo
                      </button>
                    </footer>
                  </form>
                
              </Dialog.DialogContent>
            </Dialog.DialogPortal>
         </Dialog.Root>
        
      
    </div>
  )
}

