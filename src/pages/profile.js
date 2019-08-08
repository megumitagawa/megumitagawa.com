import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageFluid from "../components/image-fluid"

import styles from "./profile.module.css"

const ProfilePage = ({ location }) => (
  <Layout location={location}>
    <SEO title="profile" />
    <h1>profile</h1>
    <div class={styles.image}>
      <ImageFluid relativePath="portrait.png" />
    </div>
  </Layout>
)

export default ProfilePage
