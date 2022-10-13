import { Col, Row } from 'react-bootstrap'
import {AnimatePresence, motion} from 'framer-motion'
import {FaHome, FaUser, FaChalkboardTeacher, FaBookOpen, FaSearch, FaBook, FaUsers, FaPenNib, FaAt, FaEllipsisH} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import '../App.css'

const routes = [
    { 
        path:"",
        title:"Home",
        icon:<FaHome/>
    },
    { 
        path:"/about",
        title:"About",
        icon:<FaUser/>
    },
    { 
        path:"/administration",
        title:"Administration",
        icon:<FaChalkboardTeacher/>
    },{ 
        path:"/supervision",
        title:"Supervision",
        icon:<FaBookOpen/>
    },
    { 
        path:"/research",
        title:"Research",
        icon:<FaSearch/>
    },
    { 
        path:"/publications",
        title:"Publications",
        icon:<FaBook/>
    },
    { 
        path:"/affliations",
        title:"Affliations",
        icon:<FaUsers/>
    },
    { 
        path:"/blog",
        title:"Blog",
        icon:<FaPenNib/>
    },
    { 
        path:"/contact",
        title:"Contact",
        icon:<FaAt/>
    },
]

function Sidebar({children}) {

    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

  return (
    <Row className="main-container m-0">
        <Col lg={3}>
        <motion.div animate={{width: isOpen ? "300px": "45px"}} className="sidebar">
            <Row className='nav-toggle'>
                <Col className='d-flex justify-content-end m-3'>
                    <FaEllipsisH onClick={toggle} size={20}/>
                </Col>
            </Row>
            <Row className='nav-links'>
                {routes.map((route) => (
                   <NavLink to={route.path} key={route.title} className="d-flex  link text-white">
                        <Col sm={3} className='nav-icons p-3'>
                            {route.icon}
                        </Col>
                        <AnimatePresence>
                            {isOpen && <motion.div sm={9} className='nav-text p-3'>
                                {route.title}
                            </motion.div>}
                        </AnimatePresence>
                   </NavLink> 
                ))}
            </Row>
        </motion.div>
        </Col>
        <Col lg={9} className='py-5'>
        <main>
            {children}
        </main>
        </Col>
        
    </Row>
  )
}

export default Sidebar