import Contacts from '@/components/contacts/Contacts'
import CrmSystems from '@/components/CrmSystems/CrmSystems'
import IndustrySolutions from '@/components/IndustrySolutions/IndustrySolutions'
import Main from '@/components/main/Main'
import ProjectServices from '@/components/projectServices/ProjectServices'
import Services from '@/components/services/Services'
import Values from '@/components/values/Values'

export default function Home() {
	return (
		<div>
			<Main />
			<Values />
			<Services />
			<ProjectServices />
			<CrmSystems />
			<IndustrySolutions />
			<Contacts source='Контакты' />
		</div>
	)
}
