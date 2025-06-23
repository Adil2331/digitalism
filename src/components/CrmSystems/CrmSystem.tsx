'use client'
import { CrmSystemsData } from '@/data/CrmSystemsData'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import Contacts from '../contacts/Contacts'
import styles from './crmSystem.module.scss'

const CrmSystem = () => {
	const { id } = useParams()
	const system = CrmSystemsData.find(e => e.id.toString() === id?.toString())

	return (
		<section className='pt-[50px]'>
			<div className={styles.headerContainer}>
				<div className={styles.headerContainerInner}>
					<Image
						alt={system?.title || ''}
						src={system?.image || ''}
						width={400}
						height={400}
						style={{ objectFit: 'contain' }}
					/>
				</div>
				<div className='flex flex-col gap-[15px]'>
					<div>
						<h1 className='text-xl text-[#6699CC] font-semibold mb-[5px]'>
							{system?.title}
						</h1>
						<p>{system?.text}</p>
					</div>
					<div>
						<h2 className='text-[#6699CC] font-semibold  mb-[5px]'>
							Возможности:
						</h2>
						<ul className={styles.item}>
							{system?.opportunities.map((e, i) => (
								<li key={i}>{e}</li>
							))}
						</ul>
					</div>
					<div>
						<h2 className='text-[#6699CC] font-semibold  mb-[5px]'>
							Кому подходит:
						</h2>
						<p>{system?.forWhom}</p>
					</div>
				</div>
			</div>
			<Contacts source={`CRM-система ${system?.title}`} />
		</section>
	)
}

export default CrmSystem
