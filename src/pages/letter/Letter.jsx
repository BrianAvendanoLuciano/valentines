import { Helmet } from 'react-helmet'
import './letter.css'
import { useState } from 'react'

export default function Letter() {
    const [isActive, setIsActive] = useState(false)

    const handleViewLetter = () => {
        setIsActive(!isActive)
    }

    return (
        <>
            <Helmet>
                <style>
                {
                    'body { background-color: #E4A0B7;} body:before, body:after{content:none;} div#root {height: 100%;width: 100%; padding: 0;}'
                }
                </style>
            </Helmet>
            <div className={ 'envelope-container ' + (isActive ? 'hidden' : 'show')}>
                <div className="envelope">
                    <div className="envelope__tab"></div>
                    <div className="envelope__letter" onClick={handleViewLetter}>
                        <p>Dear Crystal ... </p>
                    </div>
                    <div className="envelope--base"></div> 
                </div>
                <div className="shadow"></div>
            </div>
            <div className={(isActive ? 'show' : 'hidden') + ' actual-letter-containter'} onClick={handleViewLetter}>
                <div id="al" className="actual-letter">
                    <div className="letter-header">
                        <h2>Dear Crystal,</h2>
                        <h3>While making this website for valentines,</h3>
                        <h3>Naisip ko na baka may maka access na iba nito kaya di ko ilalagay yung totoong letter ko dito 😉 </h3>
                        <h3>Happy Valentines Bes/Beshy/Bebi/Rose/Baby/Love/Wifey.</h3>
                        <h3>Lahat yan naging tawagan natin, Kaya masaya ako at ikaw ay naging akin</h3>
                        <h3>Sheeesh nag rhyme, bigla ko lang naisip yan habang nag tatype dito hahaha</h3>
                        <h3>Anyway, I Love you <span className='strikethrough'>bhebhegirlhoneybunchsugarplum</span> Baby</h3>
                        <h3>Can't wait to see you on Feb 17.</h3>
                        <h3>Please sana pag dating ko dyan, naka ready ka na hahaha</h3>
                        <h3>See You 😘</h3>
                        <h2 className='letter-ending'>Love, Brian</h2>
                    </div>
                </div>
            </div>
        </>
    )
}