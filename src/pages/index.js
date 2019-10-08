import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import FeaturedTours from "../components/Home/FeaturedTours"

export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="Fast in every way that matters"
        info="Incididunt fugiat do cillum consectetur proident id dolor pariatur. Ea ea id non nisi consequat. Id minim non ipsum incididunt amet adipisicing ea culpa ullamco qui amet do occaecat."
      >
        <AniLink
          cover
          direction="up"
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
    <FeaturedTours />
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
