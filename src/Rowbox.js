import React from 'react'
import moment from 'moment';

import './Rowbox.css'



    

function Rowbox(data) {
    console.log(data);

   



    return (
        <div>
         <div className="flex-container">
            <div className="city-temprow">
                
            <p>{moment().add(1, 'days').format('LL')}</p>
           
           
           <div className="degr">
                {Math.round(data.data.list[1].main.temp)}  
                        <sup>&deg;C</sup>
                 </div>
             
             <img className="imgbox" src={`https://openweathermap.org/img/wn/${data.data.list[1].weather[0].icon}@2x.png`} alt={data.data.list[1].weather[0].description} />
                        <p>{data.data.list[1].weather[0].description}</p>
                            
            </div> <div className="city-temprow">
           <p>{moment().add(2, 'days').format('LL')} </p>
           
           <div className="degr">
                {Math.round(data.data.list[2].main.temp)}  
                        <sup>&deg;C</sup>
                 </div>
             
             <img className="imgbox" src={`https://openweathermap.org/img/wn/${data.data.list[2].weather[0].icon}@2x.png`} alt={data.data.list[2].weather[0].description} />
                        <p>{data.data.list[2].weather[0].description}</p>
                            
            </div>
            <div className="city-temprow">
           <p>{moment().add(3, 'days').format('LL')} </p>
           
           <div className="degr">
                {Math.round(data.data.list[3].main.temp)}  
                        <sup>&deg;C</sup>
                 </div>
             
             <img className="imgbox" src={`https://openweathermap.org/img/wn/${data.data.list[3].weather[0].icon}@2x.png`} alt={data.data.list[3].weather[0].description} />
                        <p>{data.data.list[3].weather[0].description}</p>
                            
            </div>
            <div className="city-temprow">
           <p>{moment().add(4, 'days').format('LL')} </p>
           
           <div className="degr">
                {Math.round(data.data.list[4].main.temp)}  
                        <sup>&deg;C</sup>
                 </div>
             
             <img className="imgbox" src={`https://openweathermap.org/img/wn/${data.data.list[4].weather[0].icon}@2x.png`} alt={data.data.list[4].weather[0].description} />
                        <p>{data.data.list[4].weather[0].description}</p>
                            
            </div>
            <div className="city-temprow">
           <p>{moment().add(5, 'days').format('LL')} </p>
           
           <div className="degr">
                {Math.round(data.data.list[5].main.temp)}  
                        <sup>&deg;C</sup>
                 </div>
             
             <img className="imgbox" src={`https://openweathermap.org/img/wn/${data.data.list[5].weather[0].icon}@2x.png`} alt={data.data.list[5].weather[0].description} />
                        <p>{data.data.list[5].weather[0].description}</p>
                            
            </div>
            
        </div>
         <div className="mt-5 flex-container">
         <div className="city-temprow">
           <p>{moment().add(6, 'days').format('LL')} </p>
           <div className="degr">
                {Math.round(data.data.list[6].main.temp)}  
                        <sup>&deg;C</sup>
                 </div>
             
             <img className="imgbox" src={`https://openweathermap.org/img/wn/${data.data.list[6].weather[0].icon}@2x.png`} alt={data.data.list[6].weather[0].description} />
                        <p>{data.data.list[6].weather[0].description}</p>
                            
            </div>
            <div className="city-temprow">
           <p>{moment().add(7, 'days').format('LL')} </p>
           
           <div className="degr">
                {Math.round(data.data.list[7].main.temp)}  
                        <sup>&deg;C</sup>
                 </div>
             <img className="imgbox" src={`https://openweathermap.org/img/wn/${data.data.list[7].weather[0].icon}@2x.png`} alt={data.data.list[7].weather[0].description} />
                        <p>{data.data.list[7].weather[0].description}</p>
                            
            </div>
            <div className="city-temprow">
           <p>{moment().add(8, 'days').format('LL')} </p>
           <div className="degr">
                {Math.round(data.data.list[8].main.temp)}  
                        <sup>&deg;C</sup>
                 </div>
             <img className="imgbox" src={`https://openweathermap.org/img/wn/${data.data.list[8].weather[0].icon}@2x.png`} alt={data.data.list[8].weather[0].description} />
                        <p>{data.data.list[8].weather[0].description}</p>
                            
            </div>
            <div className="city-temprow">
           <p>{moment().add(9, 'days').format('LL')}</p>
                 
                 <div className="degr">
                {Math.round(data.data.list[9].main.temp)}  
                        <sup>&deg;C</sup>
                 </div>
                     
             
             <img className="imgbox" src={`https://openweathermap.org/img/wn/${data.data.list[9].weather[0].icon}@2x.png`} alt={data.data.list[9].weather[0].description} />
                        <p>{data.data.list[9].weather[0].description}</p>
                            
            </div>
            <div className="city-temprow">
           <p>{moment().add(10, 'days').format('LL')} </p>
           <div className="degr">
                 {Math.round(data.data.list[10].main.temp)} 
                        <sup>&deg;C</sup>
                 </div>
             <img className="imgbox" src={`https://openweathermap.org/img/wn/${data.data.list[10].weather[0].icon}@2x.png`} alt={data.data.list[10].weather[0].description} />
                        <p>{data.data.list[10].weather[0].description}</p>
                            
            </div>
        </div>
    </div>
    )
}

export default Rowbox;
