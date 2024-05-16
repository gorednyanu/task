import React from "react";
import Image1 from '../assets/image/staff-image/image1.svg'
import Image2 from '../assets/image/staff-image/image2.svg'
import Image3 from '../assets/image/staff-image/image3.svg'
import Image4 from '../assets/image/staff-image/image4.svg'


export const StaffRequirment = () => {
    const fixedSize = {
        width: '150px',
        height: '150px',
        objectFit: 'cover',
        border: '1px solid black',
        borderRadius: '50px'

    }
    return (
        <>
            <div class="container card mt-3 mb-4 rounded-6">
                <div className="text-centers p-15">
                    <h4 className="text-center mt-2">
                        Our Unique Staff Requriment Statergy Include:
                    </h4>
                </div>
                <div className="d-flex flex-wrap justify-content-between mb-3">
                    <div>
                        <img src={Image1} style={fixedSize} alt="" />
                    </div>
                    <div>
                        <img src={Image2} style={fixedSize} alt="" />
                    </div>
                    <div>
                        <img src={Image3} style={fixedSize} alt="" />
                    </div>
                    <div>
                        <img src={Image4} style={fixedSize} alt="" />
                    </div>
                </div>

            </div>
            <div className="mb-5 text-center">
                <button type="button" className="btn btn-light">
                    <span>connect now</span>
                    <i className="bi bi-arrow-right ms-3"></i>
                </button>
            </div>
        </>
    )
}