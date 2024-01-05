"use client"
import Image from "next/image";
import Modal from "../modal/Modal";
import { useState } from "react";
import CTA from "../CTA/CTA";


export default function Catalog() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    document.getElementById("my_modal_3").showModal();
  };
  const closeModal = () => {
    document.getElementById("my_modal_3").close();
  };


  return (
    <>
      <section className='py-16' id="catalog">
        <div className='container mx-auto'>
          <div className='text-center'>
            <h3 className='text-3xl sm:text-5xl font-bold mb-4'>
              Наши услуги
            </h3>
            <p className='text-base sm:text-xl mb-6 md:mb-14'>
              Наша команда обеспечит надежное и эффективное обслуживание вашего пространства по доступным ценам. Независимо от того, нужна ли вам регулярная уборка офиса, поддержание чистоты в доме или специализированные услуги по уборке после ремонта, мы готовы предложить идеальное решение для ваших потребностей.
            </p>
          </div>



          <div className='flex flex-wrap justify-center'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8 lg:mb-10 sd:mx-2 xz:mx-0">
              <figure><Image src="/catalog/1.webp" alt="Уборка квартиры" width={480} height={480} /></figure>
              <div className="card-body text-center">
                <h4 className="font-semibold text-xl">
                  Уборка квартиры
                </h4>
                <p className="text-sm">
                  Наши профессиональные уборщики предоставляют полный спектр услуг по уборке квартир. Мы заботимся о каждой детали, чтобы ваш дом сиял чистотой и свежестью. С нами ваша квартира будет идеально чистой и ухоженной!
                </p>
                <p className='mt-6 font-semibold text-2xl'>
                  47,99 BYN
                </p>
                <div className="card-actions justify-center mt-4">
                  <button className="btn btn-primary  rounded-lg" onClick={() => handleOrderClick("Уборка квартиры")}>
                    Оставить заявку
                  </button>
                </div>
              </div>

            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8 lg:mb-10 sd:mx-2 xz:mx-0">
              <figure><Image src="/catalog/2.webp" alt="Уборка после ремонта" width={480} height={480} /></figure>
              <div className="card-body text-center">
                <h4 className="font-semibold text-xl">
                  Уборка после ремонта
                </h4>
                <p className="text-sm">
                  После завершения ремонтных работ в вашей квартире, мы предлагаем полный комплекс услуг по уборке. Наши опытные специалисты внимательно очистят каждый уголок помещения, удалят строительные следы и обеспечат безупречную чистоту.
                </p>
                <p className='mt-6 font-semibold text-2xl'>
                  от 99 BYN
                </p>
                <div className="card-actions justify-center mt-4">
                  <button className="btn btn-primary  rounded-lg" onClick={() => handleOrderClick("Уборка после ремонта")}>
                    Оставить заявку
                  </button>
                </div>
              </div>

            </div>


            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8 lg:mb-10 sd:mx-2 xz:mx-0">
              <figure><Image src="/catalog/3.webp" alt="Мойка окон" width={480} height={480} /></figure>
              <div className="card-body text-center">
                <h4 className="font-semibold text-xl">
                  Мойка окон
                </h4>
                <p className="text-sm">
                  Наши профессиональные мастера предоставляют услуги по мойке окон любой сложности. Будь то офисные окна или окна вашего дома, мы используем специальные средства и технику, чтобы обеспечить их идеальную чистоту. Доверьте нам заботу о прозрачности ваших окон!
                </p>
                <p className='mt-6 font-semibold text-2xl'>
                  59,99 BYN
                </p>
                <div className="card-actions justify-center mt-4">
                  <button className="btn btn-primary  rounded-lg" onClick={() => handleOrderClick("Мойка окон")}>
                    Оставить заявку
                  </button>
                </div>
              </div>
            </div>


            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8 lg:mb-10 sd:mx-2 xz:mx-0">
              <figure><Image src="/catalog/4.webp" alt="Химчистка мебели" width={480} height={480} /></figure>
              <div className="card-body text-center">
                <h4 className="font-semibold text-xl">
                  Химчистка мебели и диванов
                </h4>
                <p className="text-sm">
                  Обновите вашу мебель с нашей услугой химчистки. Наши специалисты использовать безопасные и эффективные химические средства для удаления пятен, запахов и обеспечения свежести вашей мебели. Доверьте нам заботу о комфорте и чистоте в вашем доме!
                </p>
                <p className='mt-6 font-semibold text-2xl'>
                  от 29,99 BYN
                </p>
                <div className="card-actions justify-center mt-4">
                  <button className="btn btn-primary  rounded-lg" onClick={() => handleOrderClick("Химчистка мебели")}>
                    Оставить заявку
                  </button>
                </div>
              </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8 lg:mb-10 sd:mx-2 xz:mx-0">
              <figure><Image src="/catalog/5.webp" alt="Уборка офиса" width={480} height={480} /></figure>
              <div className="card-body text-center">
                <h4 className="font-semibold text-xl">
                  Уборка офиса
                </h4>
                <p className="text-sm">
                  Наша компания предоставляет профессиональные услуги по уборке офисных помещений. Мы заботимся о чистоте вашего рабочего пространства, создавая комфортные условия для эффективной работы. Надежные сотрудники, качественные средства и оптимальное расписание обслуживания – всё, что вам нужно для чистого и уютного офиса!
                </p>
                <p className='mt-6 font-semibold text-2xl'>
                  от 48,99 BYN
                </p>
                <div className="card-actions justify-center mt-4">
                  <button className="btn btn-primary  rounded-lg" onClick={() => handleOrderClick("Уборка офиса")}>
                    Оставить заявку
                  </button>
                </div>
              </div>

            </div>


          </div>
        </div>
      </section>

      <CTA handleOrderClick={handleOrderClick} />
      <Modal
        selectedProduct={selectedProduct}
        closeModal={closeModal}
        isFormSubmitted={isFormSubmitted}
        setIsFormSubmitted={setIsFormSubmitted}
      />
    </>
  )
}