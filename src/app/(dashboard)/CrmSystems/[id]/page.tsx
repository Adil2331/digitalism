'use client'
import { useParams } from 'next/navigation'

const Page = () => {
	const { id } = useParams()
	console.log(id, 'id')
	return <div>Test</div>
}

export default Page
