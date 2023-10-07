import React from 'react'
import Img2 from '../../assets/images/2.webp';
import Img3 from '../../assets/images/3.webp';
import Img4 from '../../assets/images/4.webp';

export default function Products() {
    const productsImages1 = [Img2,Img3,Img4];
    const productsImages2 = [Img2, Img3, Img4]
    return (
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1600">
            <div className="carousel-inner container py-3">
                <div className="carousel-item">
                    <div className="row">
                    {productsImages1.map((el,index)=>{
                        return(
                        <div className="col-md-4" key={index}>
                            <div className="p-3 mx-auto">
                                <img src={el} alt={`img${index}`} style={{width:'100%'}}/>
                            </div>
                        </div>
                        )
                    })}
                    </div>
                </div>
                <div className="carousel-item active">
                    <div className="row">
                        {productsImages2.map((el, index) => {
                            return (
                                <div className="col-md-4" key={index}>
                                    <div className="p-3 mx-auto">
                                        <img src={el} alt={`img${index}`} style={{ width: '100%' }} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
