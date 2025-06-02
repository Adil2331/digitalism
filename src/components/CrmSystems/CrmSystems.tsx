'use client'

import { CrmSystemsData } from '@/data/CrmSystemsData'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styles from './crmSystems.module.scss'

const CrmSystems = () => {
	const router = useRouter()

	return (
		<section
			className='flex flex-col py-[50px] gap-[30px] items-center'
			id='products'
		>
			<h1 className='text-2xl font-bold text-center'>
				Продажа и внедрение CRM-систем
			</h1>
			<p className='max-w-[450px] text-center'>
				Большой выбор лицензий на популярные CRM-системы. Опытные специалисты
				помогут с внедрением.
			</p>
			<ul className={styles.list}>
				{CrmSystemsData.map((e, i) => (
					<li
						onClick={() => router.push(`/CrmSystems/${e.id}`)}
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
