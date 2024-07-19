'use client';


import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';


const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	if (theme =='dark'){
		return (
			<div >
				<button className = "" onClick={() => setTheme('light')}><SunIcon className ="w-6 "/></button>
			</div>
		);
	} else {
		return (
			<div >
				<button className = "" onClick={() => setTheme('dark')}><MoonIcon className ="w-6 "/></button>
			</div>
		);
	}

};

export default ThemeSwitcher;