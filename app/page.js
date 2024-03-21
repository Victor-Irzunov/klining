import Catalog from '@/components/Catalog/Catalog'
import Preimushestva from '@/components/Preimushestva/Preimushestva'
import { BtnComp } from '@/components/btn/BtnComp'
import SliderComp from '@/components/sliderComp/SliderComp'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=''>

      <div className="hero min-h-screen" style={{ backgroundImage: 'url("/fon/fon.webp")' }}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold text-white">Клининг в Минске</h1>
            <h2 className="mb-5 text-neutral-content">
              Предлагаем качественную уборку от профессиональной клининговой компании по доступным ценам
            </h2>
            <p className='mt-5 text-2xl text-white'>
              от 39 рублей
            </p>
            <BtnComp />
          </div>
        </div>
      </div>


      <Catalog />

      <Preimushestva />

      <SliderComp/>
    </main>
  )
}
