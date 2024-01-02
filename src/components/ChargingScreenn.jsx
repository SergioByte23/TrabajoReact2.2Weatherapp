import React from 'react'
// import './styles/ChargingScreenn.css'
import './Styles/ChargingScreenn.css'
import './Styles/Nube.css'

const ChargingScreen = () => {
    return (
        <>
            <div className='loading'>

                <div className='loading__cloud'>
                    <div className='cloud'></div>
                    <div className='cloud'></div>
                </div>
                <div className="lds-roller">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                </div>
                <h1 className='loading__title'>Loading....</h1>
            </div>
        </>
    )
}

export default ChargingScreen