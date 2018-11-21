import React from 'react'

import Layout from '../components/layout'
// import Image from '../components/image'
import Listing from '../components/listing'

const IndexPage = ({location}) => (
  <Layout location={location} >
    <Listing />
  </Layout>
)

export default IndexPage
