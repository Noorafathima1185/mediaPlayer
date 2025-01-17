import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function Landingpage() {
  return (
    <>
      <div className="row mt-5 w-100 justify-content-center align-items-center">
        <div className="col-md-1"></div>
        <div className="col-md-5 mt-5 p-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione odio consequuntur assumenda hic, suscipit aliquam cumque architecto facere eaque dolorem, ipsum maiores tempore exercitationem repudiandae quis voluptatum qui repellat magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur non ut quas eaque cumque quos, blanditiis, aspernatur beatae officiis ad quidem consectetur earum vel modi recusandae dolorem, quibusdam facilis explicabo.
          </p>
          <button className='btn btn-warning mt-2'><Link to={'/home'} style={{textDecoration:'none' ,color:'white'}}>Get Started</Link></button>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5 d-flex justify-content-center align-items-center p-5">
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="image" width={"90%"} />
        </div>
      </div>

      <div className="row">
        <h3 className='mt-5 text-center mb-5'>Features</h3>
        <div className="col-md-1 me-md-5"></div>
        <div className="col-md-3 px-5 px-md-4 mt-3">
          <Card style={{ width: '100%' }} className='p-3'>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" className='w-100' height={300}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 px-5 px-md-4 mt-3">
          <Card style={{ width: '100' }} className='p-3'>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif"  className='w-100' height={300}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 px-5 px-md-4 mt-3">
          <Card style={{ width: '100%' }} className='p-3'>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" className='w-100' height={300}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-1 me-md-5"></div>
      </div>

      <div className="row w-100 mt-5 p-5 ms-1">
        <div className="col-md-1"></div>
        <div className="col-md-10 border rounded p-5 m-md-5">
          <div className="row">
            <div className="col-md-6">
              <h3 className='text-warning mt-3'>Simple fast and PowerFul</h3>
              <p className='mt-4'><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dicta sequi autem fuga hic officia aliquam ea. Dicta saepe similique quae perspiciatis porro debitis quis repellendus dolorum voluptatibus, maiores veritatis?</p>
              <p className='mt-4'><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dicta sequi autem fuga hic officia aliquam ea. Dicta saepe similique quae perspiciatis porro debitis quis repellendus dolorum voluptatibus, maiores veritatis?</p>
              <p className='mt-4'><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dicta sequi autem fuga hic officia aliquam ea. Dicta saepe similique quae perspiciatis porro debitis quis repellendus dolorum voluptatibus, maiores veritatis?</p>
            </div>
            <div className="col-md-6">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tOM-nWPcR4U" title="Illuminati|Aavesham|Jithu Madhavan|Fahadh Faasil|Sushin Shyam,Dabzee,Vinayak| Nazriya|Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>

        </div>
        <div className="col-md-1"></div>
      </div>
    </>

  )
}

export default Landingpage