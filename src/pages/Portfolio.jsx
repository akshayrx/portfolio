import React from 'react'
import { useParams } from 'react-router-dom'
import PageTitle from '../components/structures/PageTitle'

function Portfolio() {
  
  const {designid} = useParams()

  return (
    <>
    <PageTitle page="portfolio" />
    </>
  )
}

export default Portfolio