import { BsInfoCircleFill } from "react-icons/bs"
import PageHeaderContent from "../../components/PageHeader"
const Index = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  )
}

export default Index
