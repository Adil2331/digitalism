'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styles from './crmSystems.module.scss'

const CrmSystems = () => {
	const Data = [
		{
			image: '/assets/images/crm1.png',
			id: 1,
			title: 'Лицензии Битрикс24',
			text: 'Узнайте больше о наших предложениях по лицензированию Битрикс24 и получите консультацию',
		},
		{
			image: '/assets/images/crm2.png',
			id: 2,
			title: 'Лицензии Амо СРМ',
			text: 'Узнайте больше о наших предложениях по лицензированию АмоСРМ и получите консультацию.',
		},
		{
			image: '/assets/images/crm3.png',
			id: 3,
			title: 'Y-clients',
			text: 'Узнайте больше о наших предложениях по лицензированию Y-clients и получите консультацию.',
		},
		{
			image: '/assets/images/crm4.png',
			id: 4,
			title: 'OnlinePBX',
			text: 'Узнайте больше о наших предложениях по лицензированию OnlinePBX и получите консультацию.',
		},
		{
			image: '/assets/svg/Ringostat.svg',
			id: 5,
			title: 'Ringostat',
			text: 'Узнайте больше о наших предложениях по лицензированию Ringostat и получите консультацию.',
		},
		{
			image: '/assets/images/crm6.png',
			id: 6,
			title: 'Binotel',
			text: 'Узнайте больше о наших предложениях по лицензированию Binotel и получите консультацию.',
		},
		{
			image: '/assets/images/crm7.png',
			id: 7,
			title: 'Казтехносвязь',
			text: 'Узнайте больше о наших предложениях по лицензированию Казтехносвязь и получите консультацию.',
		},
		{
			image: '/assets/images/crm8.png',
			id: 8,
			title: 'Мой Склад',
			text: 'Узнайте больше о наших предложениях по лицензированию Мой Склад и получите консультацию.',
		},
		{
			image: '/assets/images/flatris.png',
			id: 9,
			title: 'Flatris',
			text: 'Узнайте больше о наших предложениях по лицензированию Flatris и получите консультацию.',
		},
		{
			image: '/assets/svg/Prositbase.svg',
			id: 10,
			title: 'ProfitBase',
			text: 'Узнайте больше о наших предложениях по лицензированию ProfitBase и получите консультацию.',
		},
		{
			image: '/assets/images/crm11.png',
			id: 11,
			title: 'Wazzup',
			text: 'Узнайте больше о наших предложениях по лицензированию Wazzup и получите консультацию.',
		},
		{
			image: '/assets/images/crm12.png',
			id: 12,
			title: 'I2CRM',
			text: 'Узнайте больше о наших предложениях по лицензированию I2CRM и получите консультацию.',
		},
		{
			image: '/assets/images/Albat.svg',
			id: 13,
			title: 'Albat',
			text: '',
		},
		{
			image: '/assets/images/chatapp.svg',
			id: 14,
			title: 'chatapp',
			text: '',
		},
		{
			image: '/assets/images/roistat.svg',
			id: 15,
			title: 'roistat',
			text: '',
		},
		{
			image: '/assets/images/twin.svg',
			id: 16,
			title: 'twin',
			text: '',
		},
		// {
		// 	image: '/assets/images/crm13.png',
		// 	id: 13,
		// 	title: '1С',
		// 	text: 'Узнайте больше о наших предложениях по лицензированию 1С и получите консультацию.',
		// },
		// {
		// 	image: '/assets/images/crm14.png',
		// 	id: 14,
		// 	title: 'Beeline',
		// 	text: 'Получите подробную информацию о наших корпоративных и виртуальных номерах Beeline и их преимуществах.',
		// },
		// {
		// 	image: '/assets/images/crm15.png',
		// 	id: 15,
		// 	title: 'Tele2',
		// 	text: 'Получите подробную информацию о наших корпоративных и виртуальных номерах Tele2 и их преимуществах.',
		// },
		// {
		// 	image: '/assets/images/crm16.png',
		// 	id: 16,
		// 	title: 'Kcell',
		// 	text: 'Получите подробную информацию о наших корпоративных и виртуальных номерах Kcell и их преимуществах.',
		// },
	]

	const router = useRouter()

	return (
		<section
			className='flex flex-col py-[50px] gap-[30px] items-center'
			id='products'
		>
			<h1 className='text-2xl font-bold text-center'>Продажа и внедрение CRM-систем</h1>
			<p className='max-w-[450px] text-center'>
				Большой выбор лицензий на популярные CRM-системы. Опытные специалисты
				помогут с внедрением.
			</p>
			<ul className={styles.list}>
				{Data.map((e, i) => (
					<li
					onClick={()=> router.push(`/CrmSystems/${e.id}`)}
						className={styles.listItem}
						key={i}
					>
						<Image
							alt={e.title}
							src={e.image}
							width={200}
							height={200}
							className='cover '
							style={{ objectFit: 'contain' }}
						/>
						{/* <div className='flex flex-col gap-[15px]'>
							<h3 className='font-semibold'>{e.title}</h3>
							<p>{e.text}</p>
							<Link
								href='#'
								className='py-[10px] px-[20px] bg-[#6699CC] rounded-[25px] self-start'
							>
								<p className='text-white'>Подробнее</p>
							</Link>
						</div> */}
					</li>
				))}
			</ul>
		</section>
	)
}

export default CrmSystems
