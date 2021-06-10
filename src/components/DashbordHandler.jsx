import React from 'react'

const DashbordHandler = (props) => {
    return (
        <div className="col-lg-4 col-md-12">
            <div className="white-box analytics-info">
                <h3 className="b
                
                ox-title">{props.title}</h3>
                <ul className="list-inline two-part d-flex align-items-center mb-0">
                    <li>
                        <div id="sparklinedash">
                            <canvas width={67} height={30} style={{ display: 'inline-block', width: 67, height: 30, }} />
                        </div>
                    </li>
                    <li className="ms-auto"><span className="counter text-success">{props.value}</span></li>
                </ul>
            </div>
        </div>
    )
}

export default DashbordHandler
