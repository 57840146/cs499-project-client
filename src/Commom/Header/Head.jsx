import React from "react";

const Head = ()=>{
    return(
        <div>
            <section className="head">
                <div className="container d_flex">
                    <div className='left row'>
                        <i className='fa fa-phone'></i>
                        <label htmlFor="">phone number</label>
                        <i className='fa fa-envelope'></i>
                        <label>email</label>
                    </div>
                    <div className="right row RText">
                        {/* <label>text</label> */}
                        <label>Helps</label>
                        {/* <span>flag</span> */}
                        {/* <label htmlFor=''>EN</label> */}
                        {/* <span>flag</span> */}
                        
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Head