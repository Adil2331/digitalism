'use client'
import { FormControl, FormField, FormItem } from '@/ui/form'
import { Input } from '@/ui/input'
import { Textarea } from '@/ui/textArea'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import Link from 'next/link'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'
import styles from './contacts.module.scss'

const contactSchema = z.object({
	email: z.string().optional(),
	name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
	phone: z
		.string()
		.min(10, 'Введите номер телефона')
		.regex(/^\+?\d{10,15}$/, 'Введите корректный номер телефона'),
	comment: z.string().optional(),
})

type IContactInput = z.infer<typeof contactSchema>

const Contacts = ({ source }: { source: string }) => {
	const methods = useForm<IContactInput>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			email: '',
			name: '',
			phone: '',
			comment: '',
		},
	})

	const {
		handleSubmit,
		formState: { errors },
		reset,
	} = methods

	const onSubmit = async (data: IContactInput) => {
		try {
			const fullData = {
				...data,
				source: source || '',
			}

			const response = await fetch('/api/telegram', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(fullData),
			})

			const result = await response.json()
			if (response.ok) {
				toast.success('Сообщение успешно отправлено')
				setTimeout(() => reset(), 500)
			} else {
				toast.error(`Ошибка: ${result.message || 'Неизвестная ошибка'}`)
			}
		} catch (error) {
			toast.error('Ошибка при отправке')
		}
	}

	return (
		<FormProvider {...methods}>
			<section className={styles.container} id='contacts'>
				<h1 className='text-2xl font-bold text-center'>
					Свяжитесь с нами сегодня
				</h1>
				<p className='max-w-[700px] text-center'>
					Не нашли нужную информацию? Нужна помощь с выбором продукта? Оставьте
					заявку, и мы свяжемся с вами!
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
										src='/assets/svg/tw.svg'
										alt='tw'
										width={30}
										height={30}
									/>
								</Link>
							</li>
							<li>
								<Link href='#'>
									<Image
										src='/assets/svg/tg.svg'
										alt='tg'
										width={30}
										height={30}
									/>
								</Link>
							</li>
							<li>
								<Link href='#'>
									<Image
										src='/assets/svg/vk.svg'
										alt='vk'
										width={30}
										height={30}
									/>
								</Link>
							</li>
						</ul>
					</div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='flex flex-col gap-[30px] max-w-[500px] w-full relative'
					>
						<div className='relative'>
							<FormField
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												className={`h-[70px] rounded-none border-[#c7c7c7] ${
													errors.email ? 'border-red-500' : ''
												}`}
												type='email'
												placeholder='Ваш электронный адрес'
												{...field}
											/>
										</FormControl>
										{errors.email && (
											<p className='text-red-500 text-sm absolute left-0 top-full'>
												{errors.email.message}
											</p>
										)}
									</FormItem>
								)}
							/>
						</div>

						<div className='relative'>
							<FormField
								name='name'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												className={`h-[70px] rounded-none border-[#c7c7c7] ${
													errors.name ? 'border-red-500' : ''
												}`}
												type='text'
												placeholder='Ваше полное имя'
												{...field}
											/>
										</FormControl>
										{errors.name && (
											<p className='text-red-500 text-sm absolute left-0 top-full'>
												{errors.name.message}
											</p>
										)}
									</FormItem>
								)}
							/>
						</div>
						<div className='relative'>
							<FormField
								name='phone'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												className={`h-[70px] rounded-none border-[#c7c7c7] ${
													errors.name ? 'border-red-500' : ''
												}`}
												type='number'
												placeholder='Введите номер телефона'
												{...field}
											/>
										</FormControl>
										{errors.phone && (
											<p className='text-red-500 text-sm absolute left-0 top-full'>
												{errors.phone?.message}
											</p>
										)}
									</FormItem>
								)}
							/>
						</div>

						<div className='relative'>
							<FormField
								name='comment'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Textarea
												className={`h-[150px] rounded-none border-[#c7c7c7] ${
													errors.comment ? 'border-red-500' : ''
												}`}
												placeholder='Ваши комментарии'
												{...field}
											/>
										</FormControl>
										{errors.comment && (
											<p className='text-red-500 text-sm absolute left-0 top-full'>
												{errors.comment.message}
											</p>
										)}
									</FormItem>
								)}
							/>
						</div>

						<button
							type='submit'
							className='mt-[10px] py-[10px] px-[20px] bg-[#6699CC] rounded-[25px] self-start text-white'
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
