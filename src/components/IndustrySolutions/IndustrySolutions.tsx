'use client'

import { IndustrySolutionsData } from '@/data/const'
import styles from './IndustrySolutions.module.scss'

const IndustrySolutions = () => {
	return (
		<section
			className='flex flex-col py-[50px] gap-[30px] items-center'
			id='industrySolutions'
		>
			<h1 className='text-2xl font-bold text-center'>Отраслевые решения</h1>
			{/* <p className='max-w-[450px] text-center'>
				Большой выбор лицензий на популярные CRM-системы. Опытные специалисты
				помогут с внедрением.
			</p> */}
			<ul className={styles.list}>
				{IndustrySolutionsData.map(e => (
					<li key={e.id} className={styles.listItem}>
						<h2 className='text-xl text-[#6699CC] text-center font-semibold mb-[10px]'>
							{e.name}
						</h2>
						<p className='font-semibold'>
							Задачи, которые решает: <span>{e.text}</span>
						</p>
						<div>
							<p className='mb-[5px]'>Ключевые возможности:</p>
							<ul className={styles.itemInner}>
								{e.keyFeatures.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
						</div>
						<div>
							<p className='mb-[5px]'>Интеграции:</p>
							<ul className={styles.itemInner}>
								{e.integrations.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
						</div>
						<div>
							<p className='mb-[5px]'>Для кого:</p>
							<ul className={styles.itemInner}>
								{e.forWhom.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}

export default IndustrySolutions
