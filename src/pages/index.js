import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="Explore the world fast"
        info="Incididunt fugiat do cillum consectetur proident id dolor pariatur. Ea ea id non nisi consequat. Id minim non ipsum incididunt amet adipisicing ea culpa ullamco qui amet do occaecat."
      >
        <AniLink
          cover
          direction="right"
          duration={1}
          bg="#663399"
          to="/tours"
          className="btn-white"
        >
          explore tours
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
  </Layout>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
