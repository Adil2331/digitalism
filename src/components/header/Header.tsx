'use client'

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/ui/Sheet'
import { cn } from '@/utils/classNames'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import styles from './header.module.scss'

interface HeaderProps {
	children?: ReactNode
}

const Header: React.FC<HeaderProps> = ({ children }) => {
	return (
		<section className='max-w-[1440px] px-[20px] mx-auto'>
			<main
				className={`${styles.stickyMenu} flex justify-between py-[35px] border-b-[1px] items-center`}
			>
				<ul className={styles.menu}>
					<li className={styles.menu_item}>
						{/* <Link href='/#main' className='font-semibold cursor-pointer'> */}
						<Image
							alt='logo'
							src={'/assets/svg/tg.svg'}
							width={35}
							height={35}
						/>
						{/* </Link> */}
					</li>
					<li className={styles.menu_item}>
						<Link href='/#main' className='font-semibold cursor-pointer'>
							Главная
						</Link>
					</li>
					<li className={styles.menu_item}>
						<Link href='/#values' className='font-semibold cursor-pointer'>
							Ценности
						</Link>
					</li>
					<li className={styles.menu_item}>
						<Link href='/#services' className='font-semibold cursor-pointer'>
							Пакетные услуги
						</Link>
					</li>
					<li className={styles.menu_item}>
						<Link
							href='/#projectServices'
							className='font-semibold cursor-pointer'
						>
							Проектные услуги
						</Link>
					</li>
					<li className={styles.menu_item}>
						<Link href='/#products' className='font-semibold cursor-pointer'>
							Продукты
						</Link>
					</li>
					<li className={styles.menu_item}>
						<Link
							href='/#industrySolutions'
							className='font-semibold cursor-pointer'
						>
							Отраслевые решения
						</Link>
					</li>
					<li className={styles.menu_item}>
						<Link href='/#contacts' className='font-semibold cursor-pointer'>
							Контакты
						</Link>
					</li>
				</ul>
				<Sheet>
					<SheetTrigger asChild>
						<button className={styles.menu_toggle}>
							<Image
								src={'/assets/svg/Menu.svg'}
								width={20}
								height={20}
								alt='menu btn'
							/>
						</button>
					</SheetTrigger>
					<SheetContent
						side='left'
						aria-describedby={undefined}
						className={cn(
							'w-[300px] max-w-sm bg-gray-900 text-white p-4 pt-9',
							'transform transition-transform duration-300 ease-in-out',
							'data-[state=open]:translate-x-0 data-[state=open]:animate-slide-in',
							'data-[state=closed]:-translate-x-full data-[state=closed]:animate-slide-out'
						)}
					>
						<SheetHeader>
							<SheetTitle className='text-white mb-[20px]'>Меню</SheetTitle>
						</SheetHeader>
						<ul className='flex flex-col gap-[20px]'>
							<li>
								<SheetClose asChild>
									<Link href='/#main' className='font-semibold cursor-pointer'>
										Главная
									</Link>
								</SheetClose>
							</li>
							<li>
								<SheetClose asChild>
									<Link
										href='/#values'
										className='font-semibold cursor-pointer'
									>
										Ценности
									</Link>
								</SheetClose>
							</li>
							<li>
								<SheetClose asChild>
									<Link
										href='/#projectServices'
										className='font-semibold cursor-pointer'
									>
										Проектные услуги
									</Link>
								</SheetClose>
							</li>
							<li>
								<SheetClose asChild>
									<Link
										href='/#services'
										className='font-semibold cursor-pointer'
									>
										Услуги
									</Link>
								</SheetClose>
							</li>
							<li>
								<SheetClose asChild>
									<Link
										href='/#products'
										className='font-semibold cursor-pointer'
									>
										Продукты
									</Link>
								</SheetClose>
							</li>
							<li>
								<SheetClose asChild>
									<Link
										href='/#contacts'
										className='font-semibold cursor-pointer'
									>
										Контакты
									</Link>
								</SheetClose>
							</li>
						</ul>
					</SheetContent>
				</Sheet>
				<h2 className={styles.responsive_title}>
					Продажа и внедрение CRM-систем
				</h2>
			</main>

			{children}
		</section>
	)
}

export default Header
