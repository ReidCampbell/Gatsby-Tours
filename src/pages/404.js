import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import Banner from "../components/Banner"
import SEO from "../components/SEO"

const PageNotFound = () => {
  return (
    <Layout>
      <SEO title="404" />
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <AniLink
            cover
            direction="up"
            duration={1}
            bg="#663399"
            to="/"
            className="btn-white"
          >
            back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default PageNotFound
