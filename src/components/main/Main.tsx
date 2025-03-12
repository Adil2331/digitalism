import Image from 'next/image'
import Link from 'next/link'
import image from '../../../public/assets/images/customer-relationshi.jpg'

const Main = () => {
	return (
		<section
			className=' py-[50px] flex gap-[30px] flex-col items-center'
			id='main'
		>
			<h1 className='text-2xl font-bold text-center'>
				Раскройте потенциал вашего бизнеса с помощью CRM
			</h1>
			<p className='text-center max-w-[700px]'>
				Оптимизируйте работу, улучшайте отношения с клиентами и увеличивайте
				продажи с помощью мощных CRM-систем. Мы предлагаем ведущие CRM-системы,
				такие как Bitrix24 и AmoCRM, которые подбираются под ваши индивидуальные
				потребности.
			</p>
			<Link
				href='#'
				className='font-semibold py-[20px] px-[40px] bg-[#6699CC] rounded-4xl '
			>
				<p className='text-white'>Узнать больше</p>
			</Link>
			<Image
				alt='image'
				width={1400}
				height={300}
				src={image}
				className='w-[100%] rounded-[25px]'
			/>
		</section>
	)
}

export default Main
