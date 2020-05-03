import React, { useState, useEffect ,Fragment} from 'react';
import './team.scss';
import {
	TeamDetails,
	LastMatch,
	NextMatch
} from './../../services/competitions';
import { Col, Container, Row } from 'reactstrap';
import defaultTeamLogo from '../../assets/images/defaultTeamLogo.png';
import Loading from '../../components/loading/loading';


const Team = (props) => {
	const [team, setTeam] = useState();
	const [nextMatch, setNextMatch] = useState();
	const [lastMatch, setLastMatch] = useState();
	const [loadSpinner, setloadSpinner] = useState(false);
	let ID = props.match.params.id;
	useEffect(() => {
		getTeamDetails();
		getNextMatch();
		getLastMatch();
	}, []);

	const getTeamDetails = () => {
		setloadSpinner(true)
		TeamDetails(ID)
			.then(({ data }) => {
				setTeam(data.teams[0])
				setloadSpinner(false)
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	};
	function getNextMatch() {
		setloadSpinner(true)
		NextMatch(ID)
			.then(({ data }) => {
				setNextMatch(data.events[0])
				setloadSpinner(false)
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	}

	function getLastMatch() {
		setloadSpinner(true)
		LastMatch(ID)
			.then(({ data }) => {
				setLastMatch(data.results[0])
				setloadSpinner(false)
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	}

	return (
		<section className='team-details'>
			<Container>
				<Row>
					<Col>
					
						<div className='parent mt-0'>
						{!loadSpinner  ? (<div className='title d-flex align-items-center'>
								<img src={team?.strTeamBadge} alt={team?.strTeam} />
								<div className='ml-3'>
									<h6 className='mb-0'> {team?.strCountry} </h6>
									<h2 className='mb-0'> {team?.strTeam} </h2>
									<h5 className='mb-0'> {team?.strLeague}</h5>
								</div>
							</div>) : (<Loading />)} 
							
						</div>
					</Col>
				</Row>
				<Row>
					<Col md='5'>
						<div className='parent'>
							{!loadSpinner  ? (<Fragment>
								<div className='details-match'>
								<h2> next match </h2>
								<div className='date-match'>
									<h4 className='text-center'>
										{`${new Date(nextMatch?.dateEvent).getMonth() +
											1} / ${new Date(nextMatch?.dateEvent).getDate()}`}
									</h4>
									<div className='d-flex justify-content-around align-items-center'>
										<div className='away-team text-center'>
											<img src={team?.strTeamBadge} alt={team?.strTeam} />
											<h6> {team?.strTeam} </h6>
										</div>
										<div>
											<h3 className='font-weight-bold'> VS </h3>
										</div>
										<div className='home-team text-center'>
											<img src={defaultTeamLogo} alt={'asda'} />
											<h6>
												{team?.strTeam !== nextMatch?.strAwayTeam
													? nextMatch?.strAwayTeam
													: nextMatch?.strHomeTeam}
											</h6>
										</div>
									</div>
									<h5 className='text-center'> {nextMatch?.strFilename} </h5>
								</div>
							</div>
							<div className='details-match'>
							<h2> last match </h2>
							<div className='date-match'>
								<h4 className='text-center'>
									{`${new Date(lastMatch?.dateEvent).getMonth() +
										1} / ${new Date(lastMatch?.dateEvent).getDate()}`}
								</h4>
								<div className='d-flex justify-content-around align-items-center'>
									<div className='away-team text-center'>
										<img src={team?.strTeamBadge} alt={team?.strTeam} />
										<h6> {team?.strTeam} </h6>
									</div>
									<div>
										<h3 className='font-weight-bold'> VS </h3>
									</div>
									<div className='home-team text-center'>
										<img src={defaultTeamLogo} alt={'asda'} />
										<h6>
											{team?.strTeam !== lastMatch?.strAwayTeam
												? lastMatch?.strAwayTeam
												: lastMatch?.strHomeTeam}
										</h6>
									</div>
								</div>
								<h5 className='text-center'> {lastMatch?.strFilename} </h5>
							</div>
						</div> 
						</Fragment> ) : (<Loading />)}
							
						</div>
					</Col>
					<Col>
						<div className='parent'>
							{!loadSpinner  ? (<div className='details-team'>
								<img src={team?.strStadiumThumb} alt={team?.strStadiumThumb} />
								<h1>{team?.strAlternate}</h1>
								<p>{team?.strDescriptionEN}</p>
								<ul className='list-unstyled d-flex'>
									<li>
										<a
											href={`https://${team?.strFacebook}`}
											rel='noopener noreferrer'
											target='_blank'>
											<i className='fa fa-facebook  fa-lg'></i>
										</a>
									</li>
									<li>
										<a
											href={`https://${team?.strInstagram}`}
											target='_blank'
											rel='noopener noreferrer'>
											<i className='fa fa-instagram  fa-lg'></i>
										</a>
									</li>
									<li>
										<a
											href={`https://${team?.strTwitter}`}
											target='_blank'
											rel='noopener noreferrer'>
											<i className='fa fa-twitter  fa-lg'></i>
										</a>
									</li>
									<li>
										<a
											href={`https://${team?.strYoutube}`}
											target='_blank'
											rel='noopener noreferrer'>
											<i className='fa fa-youtube  fa-lg'></i>
										</a>
									</li>
									<li>
										<a
											href={`https://${team?.strWebsite}`}
											target='_blank'
											rel='noopener noreferrer'>
											<i className='fa fa-globe  fa-lg'></i>
										</a>
									</li>
								</ul>
							</div>) : (<Loading />)}
							
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Team;
