import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import ReactCountryFlag from 'react-country-flag';

const Footer = () => {
	return (
		<footer className='hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2'>
			<div className='max-w-screen-lg mx-auto flex items-center justify-evenly h-full'>
				<Button size='lg' variant='ghost' className='w-full'>
					<Image src='/us.svg' alt='British' height={32} width={42} className='mr-4 rounded-md' />
					British
				</Button>
				<Button size='lg' variant='ghost' className='w-full'>
					<Image src='/china.svg' alt='Chinese' height={32} width={40} className='mr-4 rounded-md' />
					Chinese
				</Button>
				<Button size='lg' variant='ghost' className='w-full'>
					<Image src='/it.svg' alt='Italian' height={32} width={40} className='mr-4 rounded-md' />
					Italian
				</Button>
				<Button size='lg' variant='ghost' className='w-full'>
					<Image src='/fr.svg' alt='French' height={32} width={40} className='mr-4 rounded-md' />
					French
				</Button>
				<Button size='lg' variant='ghost' className='w-full'>
					<Image src='/jp.svg' alt='Japanese' height={32} width={40} className='mr-4 rounded-md' />
					Japanese
				</Button>
			</div>
		</footer>
	);
};

export default Footer;
