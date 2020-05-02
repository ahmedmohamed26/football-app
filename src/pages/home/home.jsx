import React, { useState, useEffect } from 'react';
import Leagues from '../../components/leagues/leagues';
import { getLeague } from './../../services/competitions';
import { Row, Col, Container } from 'reactstrap';
import './home.scss';
import Loading from '../../components/loading/loading';

import { Link } from 'react-router-dom';
const Home = (props) => {
	const [Competitions, setCompetitions] = useState([]);
	useEffect(() => {
		// console.log(props)
		getLeague('l=English%20Premier%20League')
			.then((response) => {
				setCompetitions(response.data.teams);
			})
			.catch((err) => console.log(err));
	}, []);

	const ClickGetLeague = (props) => {
		getLeague(props)
			.then((response) => {
				setCompetitions(response.data.teams);
				console.log(response);
			})
			.catch((err) => console.log(err));
	};

	//    function goToTeam(item){
	//         console.log(item)
	//     }

	return (
		<section className='home'>
			<Container>
				<Row className='mt-3'>
					<Col md='9' className='mt-3'>
						<ul className='list-unstyled list-teams'>
							{Competitions.length > 0 ? (
								Competitions.map((item, index) => (
									<Link
										className='d-flex item-team'
										key={index + 1}
										to={item.idTeam}>
										<div className='parent'>
											<img src={item.strTeamBadge} alt={item.strTeam} />
											<h2>{item.strTeam}</h2>
										</div>
									</Link>
								))
							) : (
								<Loading />
							)}
						</ul>
					</Col>
					<Col md='3' className='mt-3'>
						<Leagues ClickGetLeague={ClickGetLeague} />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Home;
// item.strStadium
// item.strDescriptionEN
// onClick={() => this.goToTeam(item)}
