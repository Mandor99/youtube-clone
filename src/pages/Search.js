import React, {useEffect} from 'react';
import {Container} from 'react-bootstrap';
import Layout from '../components/Layout';
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {getSearchedVideos} from '../features/videos/videosActions'
import RecommendedVideos from '../components/RecommendedVideos'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

function Search() {
    const {query} = useParams()
    const dispatch = useDispatch()
    const {load, videos, error} = useSelector(state => state.searchedVideos)
    useEffect(()=> {
        dispatch(getSearchedVideos(query))
    }, [dispatch, query])
	return (
		<div>
			<Layout>
                <Container>
                    {
                        !load && error === null ? (
                            videos.map((video) => (
                                <RecommendedVideos video={video} key={video?.id?.videoId || video?.id?.channelId} searchPage={true}/>
                            ))
                        ) : (
                            <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                                <Skeleton width='100%' height={160} count={20}/>
                            </SkeletonTheme>
                        )
                    }
                </Container>
            </Layout>
		</div>
	);
}

export default Search;
