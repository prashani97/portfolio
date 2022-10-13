import React from 'react'
import { Col, Row,Image } from 'react-bootstrap'
import profile from '../assets/images/profile.png'
import '../App.css'
import { motion } from 'framer-motion'

function Home() {
  return (
    <motion.div initial={{ scale: 1 }} animate={{ rotate: 0, scale: 1}}>
      <Row className='d-flex align-items-center' style={{paddingTop:'15%'}}>
      <Col lg={4} sm={4} className='d-flex justify-content-end'>
        <motion.div whileHover={{ scale: 1.02 }}>
        <Image src={profile}/>
        </motion.div>
      </Col>
      <Col lg={8} >
        <motion.div whileHover={{ scale: 1.02 }}>
        <Col lg={12} sm={4}><h1>Weronika Fernando</h1></Col>
        <Col lg={8} sm={4}><h6>I am an Applied Linguist whose research and practice draws on Linguistics, Education and Social Anthropology.</h6></Col>
        </motion.div>
      </Col>
    </Row>
    </motion.div>
  )
}

export default Home