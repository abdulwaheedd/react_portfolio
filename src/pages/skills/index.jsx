import { BsInfoCircleFill } from "react-icons/bs"
import PageHeaderContent from "../../components/PageHeader"
import { Animate, AnimateKeyframes } from "react-simple-animate"
import "./style.scss"
import { skillsData } from "./utils"
import { Line } from "rc-progress"
const Index = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills__content-wrapper__inner-content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{ transform: "translateX(-200px)" }}
              end={{ transform: "translateX(0px)" }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
                <div>
                  {item.data.map((skillsItem, index) => (
                    <AnimateKeyframes
                      play
                      duration={1}
                      keyframes={["opacity:1", "opacity:0"]}
                      iterationCount="1"
                    >
                      <div className="progressbar-wrapper" key={index}>
                        <p>{skillsItem.skillName}</p>
                        <Line
                          percent={skillsItem.percentage}
                          strokeWidth="2"
                          strokeColor="var(--yellow-theme-main-color)"
                          trailWidth="2"
                          strokeLinecap="square"
                        />
                      </div>
                    </AnimateKeyframes>
                  ))}
                </div>
              </h3>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Index
