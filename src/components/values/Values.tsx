import Image from 'next/image'
import styles from './values.module.scss'
const Values = () => {
	return (
		<section className={styles.container} id='values'>
		<Image src={'/assets/images/bitrix24.webp'} alt='bitrix24' width={300} height={300}/>
		<div>
			<h1 className='text-2xl font-bold mb-[20px]'>Наши ценности</h1>
			<ul className='flex flex-col gap-[10px]'>
				<li >
				1. Эффективность – Достигаем наилучшего результата, используя ресурсы максимально рационально. Мы не ставим целью просто сделать проект, наша задача чтобы все работало и вы пользовались разработанным функционалом.
				</li>
				<li>2. Ответственность – Гарантируем качество, выполняем обязательства и несем ответственность за каждый проект. Всегда на связи и готовы прийти на помощь в любую минуту.</li>
				<li>3. Бережливость – Оптимизируем процессы, избегаем лишних затрат и ценим каждую вложенную единицу ресурсов. Мы не навязываем вам лишние продукты.
				</li>	
			</ul>
		</div>
	</section>
	)
}

export default Values