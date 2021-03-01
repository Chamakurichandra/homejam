import React from 'react'
import "../App.css";
import Circle from "./Circle";
import Love from "../assets/Vector-1.png";
import Star from "../assets/Vector.png"
export default function Home() {
    let pics = [{
        icon: Love,
        count: 0,
        label: 'Label',
        active: true
    },
    {
        icon: Star,
        count: 0,
        label: 'Label',
        active: false
    },
    {
        icon: Star,
        count: 0,
        label: 'Label',
        active: false
    },
    {
        icon: Star,
        count: 0,
        label: 'Label',
        active: false
    }]
    return (
        <div>
            <div className="row m-0 position-relative content d-flex align-items-center">
                <div className="col mt-5 pt-5 mb-5  pl-5 ml-5">
                    <h1 className="heading">Cari Cari</h1>
                    <p className="para">Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>
                    <div className="d-flex w-100 justify-content-around pt-5">
                    {pics.map(pic => (
                        <div>
                            <Circle data={pic} />
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
