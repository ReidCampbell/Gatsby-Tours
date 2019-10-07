import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem labore exercitation consequat anim id do aliquip fugiat ipsum
            eu reprehenderit excepteur sint. Quis pariatur ut quis est officia.
            Ut nisi proident exercitation magna. Irure est nostrud ex esse do
            fugiat laboris. Amet pariatur non sunt eu mollit non ex sunt
            excepteur. Culpa veniam dolore nostrud aute laboris nisi voluptate
            in ad ea minim id amet. Reprehenderit sunt sit laboris cillum esse
            aute ea fugiat do adipisicing quis in.
          </p>
          <p>
            Anim sunt sint cillum Lorem qui consectetur. Amet id mollit et
            labore ipsum ullamco quis consectetur Lorem magna commodo labore.
            Aliquip aliquip velit cupidatat labore do. Aliquip aliqua non
            laboris laboris aliqua qui nulla. Et mollit reprehenderit occaecat
            veniam do dolore ipsum qui tempor sunt officia.
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
