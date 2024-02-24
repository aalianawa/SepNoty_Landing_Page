import React from 'react'
// import Mobile from "../../assets/images/Rectangle 6131.svg"
// import mobile2 from "../../assets/images/Rectangle 6135.svg"

const CaseStudy = () => {
    return (
        <div className="bg-color">
        <div className='container-fluid py-5'>
            <h2 className='tittles mx-4'>More Case Studies</h2>
            <div className="col-12">
                <div className="row align-items-center">

                    <div className="d-flex mb-5">
                        <div className="col-lg-12">
                            <div className="row t-section">
                                <div className="col-md-4">
                                    {/* <img src={Mobile}  alt="" /> */}
                                </div>
                                <div className="col-md-8 mt-5 py-4">
                                    <h6 className='fs-4 fw-bold'>Design for Wearable Deviceso</h6>
                                    <p>Designing user interfaces for wearable technology, such as smartwatches, fitness trackers, or augmented reality glasses.</p>
                                    <button className="btn btn-fill-out  px-4  rounded-3">See Project details</button>
                                </div>
                            </div>
                        </div>
                    </div>





                    <div className="d-flex mb-5">
                        <div className="col-lg-12">
                            <div className="row t-section">
                                <div className="col-md-4">
                                    
                                        {/* <img src={mobile2}  alt="" /> */}
                                    
                                </div>
                                <div className="col-md-8 py-4 mt-5">
                                    <h6 className='fs-4 fw-bold'>The Impact of Color Psychology in User Interface Design</h6>
                                    <p>Investigate how different colors influence user behavior, emotions, and perceptions in UI design.</p>
                                    <button className="btn btn-fill-out  px-4 rounded-3">See Project details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CaseStudy