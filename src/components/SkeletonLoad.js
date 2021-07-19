import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function SkeletonLoad() {
	return (
		<div style={{ width: '100%', margin: '1rem' }}>
			<SkeletonTheme color='#343a40' highlightColor='#3c4147'>
				<Skeleton height={180} />
				<div>
					<Skeleton
						circle={true}
						width={40}
						height={40}
						style={{ margin: '.5rem' }}
					/>
					<Skeleton height={40} width='70%' />
				</div>
			</SkeletonTheme>
		</div>
	);
}

export default SkeletonLoad;
