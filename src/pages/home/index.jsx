import React from "react"
import { Animate } from "react-simple-animate"
import "./style.scss"
import { useNavigate } from "react-router-dom"

const Index = () => {
  const navigate = useNavigate()
  const handleClickHireMe = () => {
    navigate("/contact")
  }
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Waheedullah Azizi <br /> Fullstack Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{ transform: "translateY(550px)" }}
        end={{ transform: "translateX(0px)" }}
      >
        <div className="home__contact-me">
          <button onClick={handleClickHireMe}>Hire Me</button>
        </div>
      </Animate>
    </section>
  )
}

export default Index
