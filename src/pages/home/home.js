import React,{useState,useEffect} from 'react';
import Leagues from '../../components/leagues/leagues';
import {getLeague} from './../../services/competitions';
import {Row,Col,Container
  } from 'reactstrap';
import './home.scss';



const Home = (props) => {
    const [Competitions,setCompetitions] = useState([]);
    useEffect(() => {
        getLeague('l=English%20Premier%20League').then(response  => {
            setCompetitions(response.data.teams)
            console.log(response)
        }).catch(err=> console.log(err));
    },[])

    const ClickGetLeague = (props) => {
        getLeague(props).then(response  => {
            setCompetitions(response.data.teams)
            console.log(response)
            console.log(Competitions)
        }).catch(err=> console.log(err));
    }
    

    return (
        <section className='home'>
            <Container>
                <Row className='mt-3'>
                    <Col md="9"  className='mt-3'>
                        <ul className='list-unstyled list-teams'>
                        {Competitions.map(item => (
                                    <li className='d-flex' key={item.id}>
                                        <div className='parent'>
                                            <img src={item.strTeamBadge} alt={item.strTeam}  />
                                            <h2 >{item.strTeam}</h2>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </Col>
                    <Col md="3"   className='mt-3'>
                        <Leagues ClickGetLeague={ClickGetLeague} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home;
// item.strStadium
// item.strDescriptionEN
