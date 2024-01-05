"use client"
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 2
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 2
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};

const SliderComp = () => {
	return (
		<section className='py-10 mx-7 '>
			<div className='container mx-auto'>

				<h4 className='text-center text-2xl sm:text-4xl font-bold mb-14 uppercase'>
					Что говорят о нас клиенты
				</h4>

				<Carousel
					responsive={responsive}
					infinite={true}
					autoPlay={false}
					className="w-full"
				>

					<div className="carousel-item sd:p-5 xz:p-0 sd:mx-10 xz:mx-0">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/1.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Мигель Сергей
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Я абсолютно в восторге от услуг, предоставленных вашей клининговой компанией! Профессиональная бригада тщательно убрала мою 3-х комнатную квартиру, оставив каждый уголок безупречно чистым. Качество работы, внимание к деталям и свежесть после уборки превзошли мои ожидания. Благодарю за отличный сервис!
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/2.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Сацук Матвей
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Я полностью удовлетворен результатом услуги по мойке окон в нашем офисе от вашей клининговой компании. Окна сияют чистотой, и это создает прекрасное впечатление как для сотрудников, так и для посетителей. Профессионализм вашей команды и качество выполненной работы просто поразительны!
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/3.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Деркач Алеся
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Я полностью доволена качеством услуги по уборке после ремонта. Профессиональная бригада эффективно и тщательно устранила все строительные остатки, оставив мою квартиру в безупречном состоянии. Оперативность, внимание к деталям и отличный результат – я рекомендую эту компанию всем, кто ищет высококачественные услуги по уборке!
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/4.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Ломач Алексей
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Был приятно удивлен результатом химчистки дивана и кресел в моей квартире от этой клининговой компании. Профессиональные специалисты эффективно устранили все пятна, придав моей мебели вторую жизнь. Более того, низкая по итогу стоимость услуги добавила приятный бонус к качественной работе. Буду обращаться снова!
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/5.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Лукашевич Гена
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Я очень доволен качеством услуг по уборке офиса, предоставленных клининговой компанией. Результат превзошел мои ожидания: офис, включая 300 квадратных метров, выглядит безупречно чистым и аккуратным. Приятно удивила не только профессиональная работа, но и низкая по итогу стоимость услуги, что делает сотрудничество с этой компанией особенно выгодным.
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/6.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Гирз Мария
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Я очень доволена качеством услуг по уборке офиса, предоставленных клининговой компанией. Результат превзошел мои ожидания: офис, включая 300 квадратных метров, выглядит безупречно чистым и аккуратным. Приятно удивила не только профессиональная работа, но и низкая по итогу стоимость услуги, что делает сотрудничество с этой компанией особенно выгодным.
								</p>
							</div>
						</div>
					</div>
				</Carousel>
			</div>
		</section>
	)
}

export default SliderComp