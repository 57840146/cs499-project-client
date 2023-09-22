import React from "react";
import 'boxicons'

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
                        <box-icon name='message-dots' animation='tada-hover'></box-icon>Helps
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Head