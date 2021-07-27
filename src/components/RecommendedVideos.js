import React from 'react'
import {Section, Fig} from '../styles/RecommendedStyle'
import {Row, Col} from 'react-bootstrap'
import { AiFillEye } from 'react-icons/ai';
// import channelImg from '../images/channel.jpg';
import thumbImg from '../images/thumb.webp';

// import videoReqInstance from '../api';
import moment from 'moment';
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function RecommendedVideos() {
    const secondes = moment.duration('100').asSeconds();
	const _videoDuration = moment.utc(secondes * 1000).format('mm: ss');
    return (
        <Section>
            <Row className='m-1 py-2 align-items-center pb-0'>
                <Col xs={6} md={4}>
                    <Fig>
                        <LazyLoadImage
                            effect='blur'
                            src={thumbImg}
                            alt=' video thumbnail'
                            className='recommendedChannel'
                            // wrapperClassName='recommendedChannel'
                        />
                        <figcaption className='recommended__time'>{_videoDuration}</figcaption>
                    </Fig>
                </Col>
                <Col xs={6} md={8} className='p-0'>
                    <h4 className="recommended__title mb-1">how react work ...</h4>
                    <div className="recommended__details">
                        <AiFillEye /> {numeral('100000').format('0a')} views . {moment('2020-06-12').fromNow()}
                    </div>
                    <p className="recommended__name my-1">coder coder</p>
                </Col>
            </Row>
        </Section>
    )
}

export default RecommendedVideos
