'use client'
import { FormControl, FormField, FormItem } from '@/ui/form'
import { Input } from '@/ui/input'
import { Textarea } from '@/ui/textArea'
import Image from 'next/image'
import Link from 'next/link'
import { FormProvider, useForm } from 'react-hook-form'
import styles from './contacts.module.scss'

interface IContactInput {
	email: string
	name: string
	comment: string
}

const Contacts = () => {
	const methods = useForm<IContactInput>({
		defaultValues: {
			email: '',
			name: '',
			comment: '',
		},
	})

	const { handleSubmit } = methods
	const onSubmit = (data: IContactInput) => {
		console.log('Форма отправлена:', data)
	}
	return (
		<FormProvider {...methods}>
			<section
				className='flex flex-col gap-[30px] items-center py-[50px] border-b-1 mb-[100px]'
				id='contacts'
			>
				<h1 className='text-2xl font-bold text-center'>Свяжитесь с нами сегодня</h1>
				<p className='max-w-[700px] text-center'>
					Не нашли нужную информацию? Нужна помощь с выбором продукта? Оставьте
					заявку и мы свяжемся с вами!
				</p>
				<section className={styles.wrapper}>
					<div className={styles.wrapperInner}>
						<ul className='flex flex-col gap-[5px]'>	
							<span className='text-xl'>+7 747 640-99-17</span>
							<span className='text-xl'>example@example.ru</span>
						</ul>
						<ul className='flex gap-[10px]'>
							<li>
								<Link href='#'>
									<Image
										src={'/assets/svg/tw.svg'}
										alt='tw'
										width={30}
										height={30}
									/>
								</Link>
							</li>
							<li>
								<Link href='#'>
									<Image
										src={'/assets/svg/tg.svg'}
										alt='tw'
										width={30}
										height={30}
									/>
								</Link>
							</li>
							<li>
								<Link href='#'>
									<Image
										src={'/assets/svg/vk.svg'}
										alt='tw'
										width={30}
										height={30}
									/>
								</Link>
							</li>
						</ul>
					</div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='flex flex-col gap-[20px] max-w-[500px] w-full'
					>
						<FormField
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											className='h-[70px] rounded-none border-[#c7c7c7]'
											type='email'
											placeholder='Ваш электронный адрес'
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							name='name'
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											className='h-[70px] rounded-none border-[#c7c7c7]'
											type='text'
											placeholder='Ваше полное имя'
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							name='comment'
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Textarea
											className='h-[150px] rounded-none border-[#c7c7c7]'
											placeholder='Ваши комментарии'
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<button
							type='submit'
							className='py-[10px] px-[20px] bg-[#6699CC] rounded-[25px] self-start text-white'
						>
							Связаться
						</button>
					</form>
				</section>
			</section>
		</FormProvider>
	)
}

export default Contacts
