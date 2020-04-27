import React from 'react';
import './leagues.scss';

import imgEnglishLeague from '../../assets/images/epl.png';
import imgItalianLeague from '../../assets/images/seriea.png';
import imgSpanishLeague from '../../assets/images/laliga.png';
import imgFrenchLeague from '../../assets/images/ligue1A.png';
import imgGermanLeague from '../../assets/images/bundesliga.png';

const Leagues = (props) => {
    return (
        <section className='leagues'>
            <div>
                <ul className='list-unstyled list-Leagues'>
                    <li>
                        <div className='League' onClick={() => props.ClickGetLeague('l=English%20Premier%20League')}>
                            <img src={imgEnglishLeague} alt='Premier English League' />
                            <h6>Premier English League</h6>
                        </div>
                    </li>
                    <li>
                        <div className='League' onClick={() => props.ClickGetLeague('l=Italian%20Serie%20A')}>
                            <img src={imgItalianLeague} alt='Italian Serie A' />
                            <h6>Italian Serie A </h6>
                        </div>
                    </li>
                    <li>
                        <div className='League' onClick={() => props.ClickGetLeague('l=Spanish%20La%20Liga')}>
                            <img src={imgSpanishLeague} alt='Spanish La Liga' />
                            <h6>Spanish La Liga</h6>
                        </div>
                    </li>
                    <li>
                        <div className='League' onClick={() => props.ClickGetLeague('l=French%20Ligue%201')}>
                            <img src={imgFrenchLeague} alt='French Ligue 1' />
                            <h6>French Ligue 1</h6>
                        </div>
                    </li>
                    <li>
                        <div className='League' onClick={() => props.ClickGetLeague('l=German%20Bundesliga')}>
                            <img src={imgGermanLeague} alt='German Bundesliga' />
                            <h6>German Bundesliga</h6>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </section>
    )
}

export default Leagues;
