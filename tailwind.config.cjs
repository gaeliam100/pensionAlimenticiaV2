/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		pseudoElements: {
		  before: {
			content: ['+'],
			'margin-right': ['0.5rem'],
			'font-size': ['1.5rem'],
			'font-weight': ['600'],
		  },
		},	  
		borderRadius: {
			'4xl': 'clamp(1rem, 2rem, 3rem)',
			'ssm':'10px',
			'md': '0.375rem',
			'nv': '1rem',
			'rounded-full':'9999px'
		},
		boxShadow: {
			'4xl': '5px 5px 2px 1px rgba(0, 0, 255, .2)',
			'xl':'0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
			'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			'lgm':'0px 1px 10px rgba(0,0,0,0.3)',
			'info':'5px 5px 2px 1px rgba(0, 0, 255, .2)'
		},
		animation:{
			fadeIn:'fadeIn',
			fadeOut:'fadeOut',
			scaleIn:'scaleIn',
			scaleOut:'scaleOut'
		},
		keyframes:{
		fadeIn:{
			'0%':{opacity:'0'},
			'100%':{opacity:'1'}
		},
		fadeOut:{
			'0%':{opacity:'1'},
			'100%':{opacity:'0'}
		},
		scaleIn:{
			'0%':{transform:'scale(0)'},
			'100%':{transform:'scale(1)'}
		},
		scaleOut:{
			'0%':{transform:'scale(1)'},
			'100%':{transform:'scale(0)'}
		},
		},
		screens:{
			xs:'500px',
			exmd:'950px',
		},
		fontSize:{
			'8xll':'5rem',
			'9xl':'36px',
			'10xl':'92px'
	  	},
		//Colores personalizados
		colors:{
			'primary-blue':'#8ab8d0',
			'navwhite':'#fbf9fb',
			'blue-especial':'#4d77f2',
			'black-especial':'#29363d',
		},
		gridTemplateColumns: {
			'3-auto': '1fr auto auto',
		  },
		  lineHeight:{
			'extra-loose': '100px',
		  },
		  letterSpacing:{
			'wider-2': '-0.01em',
		}
	},
	plugins: [],
  }
}