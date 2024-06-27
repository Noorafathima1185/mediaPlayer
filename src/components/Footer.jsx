import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div className="row w-100">

            <div className="col-md-4 p-5">
                <h5 className='text-warning'><FontAwesomeIcon icon={faVideo} size='sl' style={{ color: "#fe8f34", }} className='me-3' />Media Player</h5>
                <p style={{ textAlign: 'justify ' }} className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatum ut a hic rerum doloribus neque, placeat nostrum laudantium tempora inventore quia culpa totam consequatur nemo ipsum harum doloremque at?</p>
            </div>

            <div className="col-md-2 d-md-flex justify-content-center p-5">
                <div>
                    <h5>Links</h5>
                    <p className='mt-4'><Link to={'/'}>Landing Page</Link></p>
                    <p><Link to={'/home'}>Home Page</Link></p>
                    <p><Link to={'/watch-history'}>Watch History</Link></p>
                </div>
            </div>

            <div className="col-md-2 p-5">
                <div>
                    <h5>Guides</h5>
                    <p className='mt-4'>React</p>
                    <p>React Bootstrap</p>
                    <p>Bootswatch</p>
                </div>
            </div>

            <div className="col-md-3 p-5">
                <h5>Contact Us</h5>
                <div className='d-flex mt-4'>
                    <input type="text" placeholder='Email id' className='form-control' />
                    <button className='btn btn-warning ms-2'>Subscribe</button>
                </div>
                <div className="d-flex justify-content-around mt-3">
                <FontAwesomeIcon icon={faInstagram} size='2xl' />
                <FontAwesomeIcon icon={faFacebook} size="2xl" />
                <FontAwesomeIcon icon={faTwitter} size="2xl" />
                <FontAwesomeIcon icon={faLinkedinIn} size="2xl" />
                </div>
            </div>

            <div className="col-md-1"></div>

        </div>
    )
}

export default Footer