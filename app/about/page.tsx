"use client"

import React, { useState } from 'react';
import EmblaCarousel from './EmblaCarousel.tsx';
import { EmblaOptionsType } from 'embla-carousel';
import './embla.css';

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 7
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const About = () => {

    const [count, setCount] = useState(1);

    const handleClickLeft = () => {
        if (count <= 1) {
            setCount(1);
        }
        else {
            setCount(count - 1);
        }
    };

    const handleClickRight = () => {
        if (count >= 7) {
            setCount(7);
        }
        else {
            setCount(count + 1);
        }
    };

  return (
          <>

            <div className="indicator sticky top-4 right-3 scale-75 md:top-6 md:right-5 md:scale-100 lg:top-8 lg:right-8 lg:scale-125 float-right z-[100]">
                <span className="indicator-item indicator-top indicator-start badge bg-rose-200"></span> 
                <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn text-slate-200 bg-indigo-900 hover:bg-indigo-950">Donate!</div>
                    <ul tabIndex={0} className="dropdown-content z-[100] menu p-2 shadow bg-rose-100 rounded-box min-w-fit w-52">
                        <li><a href="https://checkout.square.site/merchant/MLVNPNB9FHGQJ/checkout/3ZAIBBF3O5DAAIYFBPDYJTQZ?src=sheet&fbclid=IwAR1QXQ2IINx63sxMgzMJyUbn36ul2Bey4g9EJ92VmJgK98L7wLXBAxsRru0" target="_blank" rel="noreferrer">Square</a></li>
                        <li><a href="https://account.venmo.com/u/Whiskersandwagsinc?fbclid=IwAR0g76Iomk7m0CcgLcn9z__gkcfBVZQ_FhBVrU9zSegLNtO6TJLku5q8vNQ" target="_blank" rel="noreferrer">Venmo</a></li>
                    </ul>
                </div>
            </div>


            <div className="max-w-lg xl:max-w-xl w-2/3 mx-auto my-8">
                <a href="/"><img src="/color.png" alt="W&W" className="rounded-lg md:rounded-xl lg:rounded-2xl"/></a>
            </div>

            <div className="card bg-indigo-900 text-neutral-content max-w-screen-lg w-4/5 mx-auto my-8">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">About Us</h2>
                    <p>Whiskers and Wags Foundation Inc., was founded with the sole purpose of lending a helping hand to animals in need. We work with surrounding veterinary hospitals to provide financial assistance to pets in need of emergency medical treatment. We also help find foster/forever homes for pets.</p>
                </div>
            </div>

            <h2 className="max-w-screen-lg w-4/5 text-center mx-auto my-2 text-3xl">Why We&apos;re Every Animal&apos;s Best Friend</h2>
            <div className="max-w-screen-lg w-4/5 mx-auto my-8">
                <div className="collapse collapse-plus border-2 border-rose-200 bg-rose-100">
                    <input type="radio" name="my-accordion-3" defaultChecked /> 
                    <div className="collapse-title text-xl font-medium">
                        No pet left behind
                    </div>
                    <div className="collapse-content"> 
                        <p>We will work day and night to find a safe place for animals in need of emergency rehoming, fostering, etc.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus border-2 border-t-0 border-rose-200 bg-rose-100">
                    <input type="radio" name="my-accordion-3" /> 
                    <div className="collapse-title text-xl font-medium">
                        Funds for your furry friend
                    </div>
                    <div className="collapse-content"> 
                        <p>Whiskers and Wags Foundation was founded to act as a helping hand to animals in need of emergency medical treatment.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus border-2 border-t-0 border-rose-200 bg-rose-100">
                    <input type="radio" name="my-accordion-3" /> 
                    <div className="collapse-title text-xl font-medium">
                        Fundraising
                    </div>
                    <div className="collapse-content"> 
                        <p>Our team is dedicated to putting in the time and effort required to secure funds through donations, sponsorships and grants to help animals in need!</p>
                    </div>
                </div>
            </div>

            <h2 className="max-w-screen-lg w-4/5 mx-auto my-2 text-center text-3xl">Animal Lives Are Important.</h2>

            <EmblaCarousel slides={SLIDES} options={OPTIONS} />

            {/*
            <div className="md:max-w-screen-lg lg:max-w-screen-lg w-4/5 mx-auto mt-6">
            <div id="carousel" className="carousel carousel-center rounded-box h-96 max-w-full">
                <div id="item1" className="carousel-item">
                    <img src="/Hashbrown.jpeg" alt="Hashbrown" />
                </div> 
                <div id="item2" className="carousel-item">
                    <img src="/jerry2.png" alt="Jerry2" />
                </div> 
                <div id="item3"className="carousel-item">
                    <img src="/Stray.jpg" alt="Stray" />
                </div> 
                <div id="item4" className="carousel-item">
                    <img src="/jerry1.png" alt="Jerry" />
                </div> 
                <div id="item5" className="carousel-item">
                    <img src="/Dom2.jpg" alt="Dom" />
                </div> 
                <div id="item6" className="carousel-item">
                    <img src="/Dwayne.jpg" alt="Dwayne" />
                </div> 
                <div id="item7" className="carousel-item">
                    <img src="/Shakira1.jpg" alt="Shakira" />
                </div>
            </div>
                <div className="flex justify-center w-full py-2 gap-2 mb-8">
                    <button onClick={handleClickLeft} className="btn btn-xs bg-rose-100 hover:bg-rose-200"><a href={"#item" + count}>&lt;</a></button>
                    <button onClick={handleClickRight} className="btn btn-xs bg-rose-100 hover:bg-rose-200"><a href={"#item" + count}>&gt;</a></button>
                </div>
            </div>
            */}

            <div className="mx-auto card lg:card-side max-w-screen-lg w-4/5 bg-rose-100 shadow-xl mb-8">
                <figure><img src="/founderPic.jpeg" alt="Kara"/></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Kara O&apos;Brien
                        <div className="badge text-slate-200 bg-indigo-900">Founder/Director</div>
                    </h2>
                    <p>Kara was born in Charlotte, North Carolina and just recently moved to Florida. She has worked in veterinary medicine for 10 years and has always had a passion for helping animals. She currently manages an emergency animal hospital. She realized the need for an organization like Whiskers and Wags Foundation Inc. while working in the field. The amount of pet owners who could not always afford the life-saving care their pets need inspired her determination to make a difference. With her veterinary background, she is able to work diligently to raise awareness and funds for pets in need.</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Compassionate</div> 
                        <div className="badge badge-outline">Motivated</div>
                    </div>
                </div>
            </div>

            <div className="card bg-indigo-900 text-neutral-content max-w-fit w-4/5 mx-auto my-12">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Want to make a difference?</h2>
                    <p className="pb-2">Reach out to us and find out how you can sponsor a pet in need!</p>
                    <button className="btn bg-rose-100 hover:bg-rose-200"><a href="https://www.facebook.com/whiskersandwagsfoundation" target="_blank" rel="noreferrer">Contact Us</a></button>
                </div>
            </div>

        </>
 )
}

export default About
