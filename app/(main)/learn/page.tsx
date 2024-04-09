import Header from '@/app/(main)/learn/header';
import FeedWrapper from '@/components/feed-wrapper';
import StickyWrapper from '@/components/sticky-wrapper';
import UserProgress from '@/components/user-progress';
import React from 'react';

const LearnPage = () => {
	return (
		<div className='flex flex-row-reverse gap-[48px] px-6'>
			<StickyWrapper>
				<UserProgress
					activeCourse={{ title: 'British', imageSrc: '/us.svg' }}
					hearts={5}
					points={100}
					hasActiveSubscription={false}
				/>
			</StickyWrapper>
			<FeedWrapper>
				<Header title='British' />
			</FeedWrapper>
		</div>
	);
};

export default LearnPage;
