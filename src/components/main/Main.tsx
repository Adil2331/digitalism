'use client'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/ui/Dialog'
import Image from 'next/image'
import { useState } from 'react'
import image from '../../../public/assets/images/customer-relationshi.jpg'
import { CustomContacts } from '../CustomContacts/CustomContacts'

const Main = () => {
	const [open, setOpen] = useState(false)

	return (
		<section
			id='main'
			className='py-[50px] flex gap-[30px] flex-col items-center'
		>
			<h1 className='text-2xl font-bold text-center'>
				Раскройте потенциал вашего бизнеса с помощью CRM
			</h1>
			<p className='text-center max-w-[700px]'>
				Оптимизируйте работу, улучшайте отношения с клиентами и увеличивайте
				продажи с помощью мощных CRM-систем.
			</p>

			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<button className='font-semibold py-[10px] px-[40px] bg-[#6699CC] rounded-4xl text-white'>
						Узнать больше
					</button>
				</DialogTrigger>
				<DialogContent className='max-h-[90vh] overflow-y-auto py-[50px]'>
					<DialogHeader>
						<DialogTitle>Свяжитесь с нами сегодня</DialogTitle>
					</DialogHeader>
					<CustomContacts
						onSuccess={() => setOpen(false)}
						source='Узнать больше'
					/>
				</DialogContent>
			</Dialog>

			<Image
				alt='image'
				width={1400}
				height={300}
				src={image}
				className='w-[100%] min-h-[200px] rounded-[25px]'
			/>
		</section>
	)
}

export default Main
