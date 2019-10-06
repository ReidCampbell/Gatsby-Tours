import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default () => (
  <>
    <Layout>
      <SimpleHero>
        <Banner
          title="Continue Exploring"
          info="Incididunt fugiat do cillum consectetur proident id dolor pariatur. Ea ea id non nisi consequat. Id minim non ipsum incididunt amet adipisicing ea culpa ullamco qui amet do occaecat."
        >
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </SimpleHero>
      <About />
      <Services />
    </Layout>
  </>
)
