"use client"
export default function CTA({ handleOrderClick }) {
  return (
    <section className='py-12 md:py-24 bg-primary' id="dostavka">
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-start'>
          <span className='flex-grow text-4xl md:text-5xl 2xl:text-6xl font-bold'>
            Получите скидку 10%
          </span>
          <button className='btn rounded-full sm:btn-lg' onClick={() => handleOrderClick("Заказать уборку со скидкой")}>
            Заказать уборку со скидкой
          </button>
        </div>
      </div>
    </section>
  )
}