import React from 'react';
import NewTag from '../NewTag';
import './style.css'
import './imgCards/1.png'
import './imgCards/2.png'
import './imgCards/3.png'
import './imgCards/4.png'
import './imgCards/5.png'
import './imgCards/6.png'
import './imgCards/7.png'
import './imgCards/8.png'
import img from "./imgCards/8.png"
import img1 from './imgCards/7.png'
import img2 from './imgCards/6.png'
import img3 from './imgCards/5.png'
import img4 from './imgCards/4.png'


import Popup from "reactjs-popup"
import StarRating from "react-star-ratings"
import { FaWindowClose, FaQuestion } from "react-icons/fa";

// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
// }


function Card(props) {
    const [rateing, newRating] = React.useState(4.8)
    const [imag, setImag] = React.useState(img)
    const imags = [img, img1,img2,img3,img4]
    const [isHover, setIsHover] = React.useState(0)
    let [count, setCount] = React.useState(0);
    function incrementCount() {
        count = count + 1;
        setCount(count);
    }
    function decrementCount() {
        count = count - 1;
        setCount(count);
    }
    const tag = (check) => {
        let x;
        check === 'True' ? x = <NewTag /> : x = <></>
        console.log(x)
        return (
            x
        )
    };
    return (
        <Popup trigger={<div onMouseEnter={(e) => { setIsHover(true) }}
            onMouseLeave={(e) => { setIsHover(false) }}>
            {isHover ? <div className='Details'>
                <p className='QuickText'>QUICK VIEW</p>
            </div> : null}


            <div className="card">


                <img src={require('./imgCards/' + props.image)} alt={'img ' + props.id} className='card-img' />
                {
                    props.newTag === 'active' ? tag('True') : tag('False')
                }
                <p className='card-description'>
                    {props.description}
                </p>
                <p className='card-price'>
                    {props.price}
                </p>
            </div>
        </div>} modal>
            <div className="popDiv">
                <div className='header'>
                    <p className='headerText'>The Sideswept Dhoti</p>
                    <div className="Cross"><FaWindowClose /></div>
                </div>
                <div className='images'>
                    {imags.map((item) =>
                        <div>
                            <img onClick={()=>{setImag(item)}} className='allImage' src={item} />
                        </div>
                    )}
                </div>
                <div className='main'>
                    <img className='mainImg' src={imag} />
                    <div className='right-body'>
                        <p className='titlePop'>The Sideswept Dhoti + Bottom Line Grey (Silk)</p>
                        <div style={{ display: "flex", flexDirection: "row", marginTop: "-5%" }}>
                            <p className='SGD'>SGD 169</p>
                            <div className='stars'>
                                <StarRating
                                    rating={rateing}
                                    starRatedColor="orange"
                                    numberOfStars={5}
                                    starDimension="2vw"
                                    starSpacing="1px"
                                    name='rating'
                                />
                                <p className='starsText'>4.8 of 5</p>
                            </div>
                        </div>
                        <div className='divDescription'>
                            <h3 className='titleDes'>Description</h3>
                            <p className='textOfDescription'>Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen… </p>
                            <p>See More</p>
                        </div>
                        <div className='div3Boxes'>
                            <p style={{ paddingRight: "27%" }}>Artisan Employment</p>
                            <p>Jops</p>
                        </div>
                        <div className='div3Boxes'>

                            <p style={{ paddingRight: "36.5%" }}>Partnership</p>
                            <p>Randall Armstrong</p>
                        </div>
                        <div className='div3Boxes'>
                            <p style={{ paddingRight: "39%" }}>In Collab</p>
                            <p>Augusta Mendoza</p>
                        </div>
                        <p>SIZE</p>
                        <div className='divSize'>
                            <button className='buttons'><p className='textButtons'>1</p></button>
                            <button className='buttons'><p className='textButtons'>2</p></button>
                            <button className='buttons'><p className='textButtons'>3</p></button>
                            <button className='buttons'><p className='textButtons'>4</p></button>
                            <p className='guidLine'>Size Guidelines</p>
                        </div>
                        <p className='modelText'>Model is a US Size 2-4, wears Matter Size 1. 175 cm tall.</p>
                        <div>
                            <p className='quantityText'>Quantity</p>
                            <div className='plusMinus'>
                                <button className='buttonPlus' onClick={incrementCount}>+</button>
                                <p className='counter'>{count}</p>
                                <button className='buttonPlus' onClick={decrementCount}>-</button>
                                <div style={{ paddingLeft: "5%", display: "flex", width: "100%", flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                                    <button className='addCart'>ADD TO CART</button>
                                    <div style={{ marginLeft: "15%", marginTop: "1%", marginRight: "5%" }}><FaQuestion /></div>
                                    <p style={{ width: "100%" }}>ADD TO WISHLIST</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </Popup >

    );
}

export default Card;