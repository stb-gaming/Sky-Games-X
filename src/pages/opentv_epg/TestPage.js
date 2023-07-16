import { Link } from 'react-router-dom';
import '../../scss/main.scss'
import '../../scss/opentv_epg/main.scss'

import EPGContainer from './components/EPGContainer'
import EPGHeader from './components/EPGHeader';
import EPGHeaderItem from './components/EPGHeaderItem';
import EPGHeaderLogo from './components/EPGHeaderLogo';
import EPGMenuContainer from './components/EPGMenuContainer';
import EPGMenuItem from './components/EPGMenuItem';
import FYIMessage from './components/FYIMessage';

const TestPage = () => {
    return <>
      <EPGContainer>
        <EPGHeader>
          <EPGHeaderLogo />
          <EPGHeaderItem title="TV GUIDE" src="/assets/img/epg_header_png/guide.png" selected={true} />
          <EPGHeaderItem title="BOX OFFICE" src="/assets/img/epg_header_png/box_office.png" />
          <EPGHeaderItem title="SERVICES" src="/assets/img/epg_header_png/services.png" />
          <EPGHeaderItem title="INTERACTIVE" src="/assets/img/epg_header_png/interactive.png" />
        </EPGHeader>
        <div className="epgContentContainer">
          <EPGMenuContainer>
              <EPGMenuItem number="1" title="ALL CHANNELS" selected={true} />
              <EPGMenuItem number="2" title="HD CHANNELS" />
              <EPGMenuItem number="3" title="ENTERTAINMENT" />
              <EPGMenuItem number="4" title="LIFESTYLE & CULTURE" />
              <EPGMenuItem number="5" title="MOVIES" />
              <EPGMenuItem number="6" title="SPORTS"/>
              <EPGMenuItem number="7" title="NEWS" />
              <EPGMenuItem number="8" title="DOCUMENTARIES" />
              <EPGMenuItem number="9" title="KIDS" />
              <Link to="/more">
                <EPGMenuItem number="0" title="MORE..." />
              </Link>
          </EPGMenuContainer>

          <img src="/assets/img/arrow.svg" className="epgArrowDown"/>
        </div>
        
      </EPGContainer>
    </>;
  };
  
export default TestPage;
  