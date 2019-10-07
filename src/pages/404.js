import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Banner from "../components/Banner"

const PageNotFound = () => {
  return (
    <Layout>
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
