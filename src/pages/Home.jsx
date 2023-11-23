import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { RouteConstants } from '../constants';
import Header from '../components/Header';
import LockImage from '../images/LockImage.jpg'
import { GoArrowRight } from "react-icons/go";
import firstImage from '../images/firstImage.png'
import MakingComplianceEasyImage from '../images/MakingComplianceEasy.jpg'
import OurSolutionImage from '../images/OurSolutionImage.png'

function Home() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate(RouteConstants.questionnaire);
    }


    return (
        <div className='home'>
            <Header />
            <div className='home-content'>
                <div className="container">
                    <div className="row-class">
                        <div className='column-class text-start align-items-start width-50vw'>
                            <h1 className='text-left'>Making Compliance Easy</h1>
                            <p>In today's digital age, data protection is more important than ever. Customer are becoming increasingly aware of the importance of their personal data and are seeking businesses that prioritize privacy cpmpliance. Make data protection a business advantage.</p>
                            <button type="button" className='green-button width-20'>Start Your Free Assessment</button>
                        </div>
                        <img src={MakingComplianceEasyImage} alt="Lock" className='lock-image' />
                    </div>

                    <div className="row-class margin-y-6">
                        <p className='width-60'>
                            By partnering with us, we can help to ease your offerings become privacy compliant and give your business a competitive advantage. We provide expert guidance and support to  ensure that your custoers' data is protected and that your  business is operating within legal and ethical boundaries. Let us help you build a reputation as a truested and responsible business that values and protects its users' privacy and data.
                        </p>
                        <button type="button" className='green-border-button width-15'>
                            Become a partner
                            <GoArrowRight className='ms-2' />
                        </button>
                    </div>

                    <div className='column-class margin-y-6'>
                        <h1 id='ourSolution'>Our Solution</h1>
                        <h3>Easy steps to reach your compliance goals</h3>
                        <img src={OurSolutionImage} alt="Lock" className='our-solution-image' />
                        <p>
                            Based on your initial report, we undertake a detailed anylsis by asking you the right questions, which will identify any potential risks or vulnerabilities in your products and services. Our team of experts will work closely with you to identify any areas where improvements can be made, and develop a comprehensive plan to address them. We understand the importance of maintaining the trust of your customers and stakeholders, which is why we prioritize transparency and open communication throughout the entire process. With our guidance and support, you can rest assured that your offerings are fully compliant with all relevant regulations and industry standards, and that your customers' privacy is always protected.
                        </p>
                    </div>

                    <div className='margin-y-6'>
                        <h1 id='pricing'>Subscription Plan</h1>
                        <div className="d-flex flex-row justify-content-center align-items-center">
                            <div class="card bg-light me-5" style={{ width: '25rem' }}>
                                <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 class="card-title mb-2">Standard</h5>
                                    <h4>49 EUR/Month</h4>
                                    <p class="card-text">Lorem ipsum dolor sit amet.</p> <br />
                                    <p>Subheading 2</p>
                                    <p>Lorem ipsum dolor sit.</p> <br />
                                    <p>Subheading 3</p>
                                    <p>Lorem ipsum dolor sit amet.</p> <br />
                                    <button className='green-button'>Subscribe</button>
                                </div>
                            </div>
                            <div class="card bg-light " style={{ width: '25rem' }}>
                                <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 class="card-title mb-2">Professional</h5>
                                    <h4>149 EUR/Month</h4>
                                    <p class="card-text">Lorem ipsum dolor sit amet.</p> <br />
                                    <p>Subheading 2</p>
                                    <p>Lorem ipsum dolor sit amet.</p> <br />
                                    <p>Subheading 3</p>
                                    <p>Lorem ipsum dolor sit amet.</p> <br />
                                    <button className='green-button'>Subscribe</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div><h1 id='becomeaPartner'>Become a Partner</h1></div>
                    <div><h1 id='resources'>Resources</h1></div>
                </div>
            </div>
        </div>
    )
}

export default Home