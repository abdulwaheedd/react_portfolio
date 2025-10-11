import React from "react"
import { BsInfoCircleFill } from "react-icons/bs"
import PageHeaderContent from "../../components/PageHeader"

const Index = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  )
}

export default Index
