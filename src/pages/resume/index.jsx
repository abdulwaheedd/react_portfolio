import { BsInfoCircleFill } from "react-icons/bs"
import PageHeaderContent from "../../components/PageHeader"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import { data } from "./utils"
const Index = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline
            layout="1-column"
            lineColor="var(--yellow-theme-main-color)"
          >
            {/* {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
              ></VerticalTimelineElement>
            ))} */}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
        </div>
      </div>
    </section>
  )
}

export default Index
