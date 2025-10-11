import React from "react"
import { BsInfoCircleFill } from "react-icons/bs"
import { Animate } from "react-simple-animate"
import PageHeaderContent from "../../components/PageHeader"
import "./style.scss"
import { DiApple, DiAndroid } from "react-icons/di"
import { FaDev, FaDatabase } from "react-icons/fa"
const Index = () => {
  const personalInfo = [
    { label: "Name", value: "Waheedullah Azizi" },
    { label: "Age", value: "34" },
    { label: "Address", value: "Kabul, Afghanistan" },
    { label: "Email", value: "abdulwaheeddanishjo@gmail.com" },
    { label: "Contact No", value: "+93747889500" },
  ]
  const jobSummary = `I am a passionate and dedicated software developer with over 10 years of experience in the tech industry. My journey began with a fascination for technology and a desire to create innovative solutions that make a difference. Over the years, I have honed my skills in various programming languages and frameworks, allowing me to tackle complex challenges with confidence. I thrive in collaborative environments where creativity and problem-solving are encouraged. My goal is to continue growing as a developer while contributing to projects that have a meaningful impact on users and communities.`
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <h3>Fullstack Developer</h3>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="personalInfoHeaderText">Personal Information</h3>
            <ul>
              {personalInfo.map((info, index) => (
                <li key={index}>
                  <span className="title">{info.label}</span>
                  <span className="value">{info.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(600px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <DiApple size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  )
}

export default Index
