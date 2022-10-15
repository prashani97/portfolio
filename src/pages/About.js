import { motion } from 'framer-motion'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'



const qualifications = [
  { 
      month:"nov",
      year:"2018",
      qualification:"Fellowship of Higher Education Academy",
      institute:"Queen Mary University of London, United kingdom"
  },
  { 
    month:"FEB",
    year:"2016",
    qualification:"Postgraduate Diploma in Teaching Polish Language and Culture Abroad",
    institute:"University of Lodz/Polish University Abroad, London, United Kingdom"
},
{ 
  month:"Jan",
  year:"2016",
  qualification:"PhD in Applied Linguistics and Education Research",
  institute:"King’s College, London, United Kingdom"
},
{ 
  month:"Aug",
  year:"2007",
  qualification:"Level 1 Certificate in British Sign Language ",
  institute:"Council for Advancement with Deaf People, Durham University,United Kingdom"
},
{ 
  month:"June",
  year:"2006",
  qualification:"MA in Applied Linguistics and English Language Teaching",
  institute:"University of Wroclaw, Wroclaw, Poland"
},
{ 
  month:"May",
  year:"2005",
  qualification:"Postgraduate Diploma in Teaching English to Adults",
  institute:"Teacher Training College, Wroclaw, Poland"
},
{ 
  month:"Sept",
  year:"1998",
  qualification:"BA in Languages and Literatures (English)",
  institute:"University of Wroclaw, Wroclaw, Poland"
}
]

const Appointments = [
  {
    start: ""
  }
]


function About() {
  return (
    <Container fluid>
        <Col>
            <Row>
              <Col lg={1} className="text-end">
                <motion.div whileHover={{ scale: 1.2, rotate: -45 }} initial={{ scale: 2 }} animate={{ rotate: 0, scale: 1 }}>
                  <FaQuoteLeft className='quote' size={30}/>
                </motion.div>
              </Col>
              <Col lg={8} className="text-center">
                <motion.div initial={{ scale: 1.2 }} animate={{ rotate: 0, scale: 1 }}>
                <p className='lh-lg'>
                I am an Applied Linguist whose research and practice draws on Linguistics, Education and Social Anthropology. I am particularly interested in the situatedness of specialised discourses and the influence that socio-cultural contexts, specific media and multimodality have on choices that writers make when communicating meaning. My current work focuses on social justice in language education at university and on the use of digital tools in fostering literacy development.
                </p>
                </motion.div>
              </Col>
              <Col lg={1} className="align-text-bottom">
                <motion.div  whileHover={{ scale: 1.2, rotate: 45 }} initial={{ scale: 2 }} animate={{ rotate: 0, scale: 1 }}>
                  <FaQuoteRight className='quote' size={30}/>
                </motion.div>
              </Col>
            </Row>
            <Row className='p-5'>
              <h2>Education and Teaching Qualifications</h2>
            </Row>
            <Row className='d-flex justify-content-center'>
              <Col className=''>
              {qualifications.map((qual, index) => (
                          <Row key={index} className='p-4 d-flex justify-content-center align-items-center'>
                                <Col sm={2} className='qual-date'>
                                    <span className='p-2'>{qual.year}</span> <span className='p-2'>{qual.month}</span>
                                </Col>
                                <Col sm={7}>
                                  <Row className='qual-qual p-2'>
                                      {qual.qualification}
                                  </Row>
                                  <Row className='qual-institute p-2'>
                                      {qual.institute}
                                  </Row>
                                </Col>
                          </Row> 
                        ))}
              </Col>
            </Row>
            <Row className='p-5'>
              <h2>Appointments</h2>
            </Row>
            <Row className='d-flex justify-content-center'>
              <Col className=''>
              {qualifications.map((qual, index) => (
                          <Row key={index} className='p-4 d-flex justify-content-center align-items-center'>
                                <Col sm={2} className='qual-date'>
                                    <span className='p-2'>{qual.year}</span> <span className='p-2'>{qual.month}</span>
                                </Col>
                                <Col sm={7}>
                                  <Row className='qual-qual p-2'>
                                      {qual.qualification}
                                  </Row>
                                  <Row className='qual-institute p-2'>
                                      {qual.institute}
                                  </Row>
                                </Col>
                          </Row> 
                        ))}
              </Col>
            </Row>
      </Col>
    </Container>
  )
}

export default About