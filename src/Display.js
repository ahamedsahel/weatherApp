import React from 'react'
import { Card } from 'react-bootstrap'
import moment from 'moment';
import './Display.css'

function Display(data) {
   
    return (
        <div>
 <div className="main">
       <Card className="cards">
            <Card.Body>
                     
                     <span className="city__name">{data.data.city.name}</span>
                     <sup className="cty">{data.data.city.country}</sup>
                     <div className="city-temp">
                        {Math.round(data.data.list[0].main.temp)}
                        <sup>&deg;C</sup>
                        
                       
                    </div>
                    <p> {moment().format('dddd')}</p>
                   <p> {moment().format('LL')}</p>
                   <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${data.data.list[0].weather[0].icon}@2x.png`} alt={data.data.list[0].weather[0].description} />
                        <p>{data.data.list[0].weather[0].description}</p>
                        <br />
                        <p className="text-capitalize">WIND : {Math.round( data.data.list[0].wind.speed )} km/h</p> 
                        <p className="temp">Humidity : {data.data.list[0].main.humidity} %</p>
                 </div>
               
                
               
                
            </Card.Body>
            </Card>
           
       </div>
               
       </div>
    )
}

export default Display

