import React from 'react'
import './Stylied.css'
// import main from "../../assets/images/Capture.PNG"
const Portfolio = () => {
    return (


        <>
            <div className="bg-color">

                <div className="container py-5">
                    <div className="col-lg-12 align-items-center justify-content-center">
                        <div className="col-md-10">
                            <div className="">
                                <h1 className='tittles'>Change by Design</h1>
                                <p className='text-t'>"Change by Design UI Portfolio" could be interpreted as a portfolio showcasing user interface designs that emphasize the concept of change driven by design principles.</p>
                            </div>
                            <div className="d-flex gap-5  mt-4 mb-3">
                                <div className='border-start'>
                                    <span className='mx-2'>Industry</span>
                                    <p className='mx-2 text-t'>Telecommunications, Software products</p>
                                </div>
                                <div className='border-start mx-5'>
                                    <span className='mx-2'>Technologies</span>
                                    <p className='mx-2 text-t'>Android, Mobile, Windows Phone</p>
                                </div>
                            </div>
                            <div className="part-two mt-4">
                                <h5 className='tittles'>Customer</h5>
                                <p className='text-t'>The customer, an international company, showcasing user interface designs that emphasize the concept of change
                                  <br />  driven by design principles
                                </p>
                            </div>
                            <div className="part-two mt-4">
                                <h5 className='tittles'>Challenge</h5>
                                <p className='text-t'>
                                    This approach requires a deep understanding of user needs, market dynamics, and organizational goals. Designers must
                                   <br /> navigate through various challenges, including resistance to change, limited resources, conflicting priorities, and evolving
                                   <br /> technologies.
                                </p>
                            </div>
                            <div className="part-two text-center mt-4">
                                <h5 className='tittles'>Solution</h5>
                                <p className='text-t'>Prioritize understanding and addressing the needs and preferences of the end-users through comprehensive research,
                                   <br /> empathy-building, and user testing. This ensures that design decisions are grounded in user insights and contribute to
                                   <br /> meaningful improvements in user experiences.Embrace an iterative design approach, where concepts are quickly prototyped,
                                   <br /> tested, and refined based on user feedback. This allows for continuous improvement and ensures that design solutions are
                                   <br /> responsive to evolving user needs and project requirements.
                                </p>
                                    {/* <img src={main} width={600} alt="" /> */}
                                

                            </div>
                            <div className="part-two mt-4">
                                <h5 className='tittles'>Results</h5>
                                <p className='text-t'>
                                    By integrating these solutions into the design process, organizations can leverage the power of "Change by Design" to drive
                                   <br /> meaningful transformations that positively impact user experiences, business outcomes, and organizational success.
                                </p>
                            </div>
                        </div>
                        <div className="part-two mt-3">
                            <h5 className='tittles'>Technologies and Tools</h5>
                            <p className='text-t'>
                                Android: Android SDK, Android Studio, Eclipse, ADT Plugin, JAR Signer, SQLite, Volley, Gradle, logcat, UiAutomator <br />
                                Windows Phone 7: Windows Phone Toolkit, NLog <br />
                                Desktop: C++, Python ,WebRTC, Visual Studio
                            </p>
                        </div>
                        <div className="d-flex">
                            <button className='btns rounded-3 px-4'>Android App Case studies</button>
                            <button className='btns rounded-3 px-4 mx-4'>Mobile App Case studies</button>
                        </div>
                    </div>
                    </div>
            </div>

      

        </>

    )
}

export default Portfolio