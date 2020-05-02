import React, { useState, useEffect } from 'react';
import './team.scss';
import {
	TeamDetails,
	LastMatch,
	NextMatch
} from './../../services/competitions';
import { Col, Container } from 'reactstrap';
import defaultTeamLogo from '../../assets/images/defaultTeamLogo.png';

const Team = (props) => {
	const [team, setTeam] = useState();
	const [nextMatch, setNextMatch] = useState();
	const [lastMatch, setLastMatch] = useState();
	let ID = props.match.params.id;
	useEffect(() => {
		getTeamDetails();
		getNextMatch();
		getLastMatch();
	}, []);

	const getTeamDetails = () => {
		TeamDetails(ID)
			.then(({ data }) => setTeam(data.teams[0]))
			.catch((error) => {
				throw new Error(error.message);
			});
	};
	function getNextMatch() {
		NextMatch(ID)
			.then(({ data }) => {
				setNextMatch(data.events[0]);
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	}
	function getLastMatch() {
		LastMatch(ID)
			.then(({ data }) => setLastMatch(data.results[0]))
			.catch((err) => console.log(err));
	}

	return (
		<section className='team-details'>
			<Container>
				<Col className='mt-3 pl-0'>
					<div className='parent'>
						<div className='title d-flex align-items-center'>
							<img src={team?.strTeamBadge} alt={team?.strTeam} />
							<div className='ml-3'>
								<h6 className='mb-0'> {team?.strCountry} </h6>
								<h2 className='mb-0'> {team?.strTeam} </h2>
								<h5 className='mb-0'> {team?.strLeague} </h5>
							</div>
						</div>
						<div className='last-match'>
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
						<div className='last-match'>
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
					</div>
				</Col>
			</Container>
		</section>
	);
};

export default Team;
