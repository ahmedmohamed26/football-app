import React, { useState, useEffect } from 'react';
import Leagues from '../../components/leagues/leagues';
import { getLeague } from './../../services/competitions';
import { Row, Col, Container } from 'reactstrap';
import './home.scss';
import Loading from '../../components/loading/loading';
import { Link } from 'react-router-dom';

const Home = () => {
	const [Competitions, setCompetitions] = useState([]);
	const [loadSpinner, setloadSpinner] = useState(false);
	useEffect(() => {
		getAllLeague();
		// getAllMovies();
	}, []);

	function getAllLeague() { 
		setloadSpinner(true)
		getLeague('l=English%20Premier%20League')
			.then(({ data }) => {
				setCompetitions(data.teams)
				setloadSpinner(false)
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	}

	const ClickGetLeague = (props) => {
		setloadSpinner(true)
		getLeague(props)
			.then(({ data }) => {
				setCompetitions(data.teams)
				setloadSpinner(false)
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	};



	// function getAllMovies() {
	// 	getMovies()
	// 		.then((data) => {
	// 			console.log(data)
	// 		})
	// }
	

	return (
		<section className='home'>
			<Container>
				<Row className='mt-3'>
					<Col md='9' className='mt-3 colOne'>
						<ul className='list-unstyled list-teams'>
							{!loadSpinner  ? (
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
					<Col md='3' className='mt-3 colTwo'>
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
