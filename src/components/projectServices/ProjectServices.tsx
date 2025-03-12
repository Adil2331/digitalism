import Image from 'next/image'
import image from '../../../public/assets/images/customer-relationshi.jpg'

const Data = [
	{
		title: 'Проектное внедрение Корпоративного портала',
		text: 'Проектный подход внедрения корпоративного портала при крупных корпоративных внедрениях',
	},
	{
		title: 'Разработка сайта на CMS',
		text: 'Услуги по разработке сайта любой сложности на готовых платформах, такие как Битрикс: Управление Сайтом или Tilda',
	},
	{
		title: 'Разработка сайта',
		text: 'Услуги по разработке сайта любой сложности с нуля',
	},
]

const ProjectServices = () => {
	return (
		<section className='flex flex-col gap-[20px] items-center py-[50px]'>
			<h1 className='text-2xl font-bold text-center'>
				Проектные услуги во внедрении и разработке программного обеспечения
			</h1>
			<p className='text-center max-w-[700px]'>
				Мы предлагаем выгодные цены на лицензии CRM и услуги по внедрению.
				Посмотрите наши ценовые планы и выберите подходящий пакет, который
				соответствует вашему бюджету и потребностям.
			</p>
			<ul className='w-full flex flex-wrap gap-[50px] justify-center mt-[20px]'>
				{Data.map((e, i) => (
					<li key={i} className='max-w-[360px] flex flex-col gap-[10px]'>
						<Image
							src={image}
							alt='image'
							width={360}
							height={240}
							className='rounded-[25px] h-[240px]'
						/>
						<h3 className='font-semibold'>{e.title}</h3>
						<p>{e.text}</p>
					</li>
				))}
			</ul>
		</section>
	)
}

export default ProjectServices
