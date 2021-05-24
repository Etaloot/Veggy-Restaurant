import React from 'react'
import Productbox from './Productbox';
import pimage1 from '../images/s1.jpg';
import pimage2 from '../images/s2.jpg';
import pimage3 from '../images/s3.jpg'

export default function Products() {
    return (
        <div id='products'>
            <h1> AT YOUR CHOISE</h1>
            <p> There are many variations of passages of Lorem Ipsum available,
                 but the majority have suffered alteration in some form, by injected.
            </p>
            <div className='a-container'>
                <Productbox image={pimage1} title="Vegan salad" />
                <Productbox image={pimage2} title="Vegan breakfast" />
                <Productbox image={pimage3} title="Vegan oriental" />

            </div>
             
        </div>
    )
}
