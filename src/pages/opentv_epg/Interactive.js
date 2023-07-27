import { Link } from 'react-router-dom';
import '../../scss/main.scss';
import '../../scss/opentv_epg/main.scss';
import SkyGames from '../sky_games/SkyGames';

import EPGContainer from './components/EPGContainer';
import EPGHeader from './components/EPGHeader';
import EPGMenuContainer from './components/EPGMenuContainer';
import EPGMenuItem from './components/EPGMenuItem';

const Interactive = () => {
	return <>
		<EPGContainer>
			<EPGHeader page={4} />
			<div className="epgContentContainer">
				<EPGMenuContainer>
					<Link to={SkyGames.url}>
						<EPGMenuItem number="1" title="Sky Games" selected={true} />
					</Link>
				</EPGMenuContainer>
			</div>

		</EPGContainer>
	</>;
};

Interactive.url = "/interactive";
export default Interactive;
