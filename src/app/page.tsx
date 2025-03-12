import Contacts from '@/components/contacts/Contacts'
import CrmSystems from '@/components/CrmSystems/CrmSystems'
import Main from '@/components/main/Main'
import ProjectServices from '@/components/projectServices/ProjectServices'
import Services from '@/components/services/Services'

export default function Home() {
	return (
		<div>
			<Main />
			<Services />
			<ProjectServices />
			<CrmSystems />
			<Contacts />
		</div>
	)
}
