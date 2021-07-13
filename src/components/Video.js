import React from 'react';
import { Section, ThumbWrapper, Title, Details, Channel } from '../styles/VideoStyle';
import {AiFillEye} from 'react-icons/ai'
import thumbImg from '../images/thumb.webp'
import channelImg from '../images/channel.jpg'

function Video() {
	return (
		<Section>
			<ThumbWrapper>
                <img src={thumbImg} alt=" video thumbnail" />
                <figcaption className='video__time'>5: 43</figcaption>
            </ThumbWrapper>
            <Title>Next.js Tutorial - 24 - Inspecting getStaticPaths Builds</Title>
            <Details>
                <AiFillEye />
                <span className="video__views">&nbsp; 2m. </span>
                <span className="video__date">&nbsp; 15 hours ago</span>
            </Details>
            <Channel>
                <img src={channelImg} alt="channel avatar" />
                <span className="channel__name">Codevolution</span>
            </Channel>
		</Section>
	);
}

export default Video;
