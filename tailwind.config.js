const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
    	spacing: {
    		'300': '3px',
    		'500': '5px',
    		'600': '6px',
    		'700': '7px',
    		'900': '9px',
    		'180': '18px',
			'100': '10px',
			'12': '12px',
    		'13': '13px',
			'15': '15px',
			'18': '18px',
			'20': '20px',
			'21': '21px',
			'24': '24px',
			'25': '25px',
			'36': '36px',
			'50': '50px',
    		'260': '26px',
    		'560': '56px',
			'30': '30px',
			'40': '40px',
			'48': '48px',
    		'60': '60px',
    		'65': '65px',
			'70': '70px',
			'16p': '16%',
			'6/10': '60%',
			'5/10': '50%',
			'1/4': '25%',
			'1/12': '8.33%',
			'16-7': '16.66667%',
			'100v-50': 'calc(100vh - 50px)',
			'99/100': '99%',
			'90p': '90%',
			'145': '145px',
			'160px': '160px',
			'200': '200px',
			'220': '220px',
			'-10': '-10px',
			'-15': '-15px',
			'-28': '-28px',
			'-30': '-30px',
			'-60': '-60px',
			'-73': '-73px',
			'800': '8px'
    	},

    	screens: {
	  		'lmd': '992px',
			'xm': {'max': '320px'},
			'lxm': {'max': '500px'},
	  		'm-sm': {'max': '639px'},
	  		'm-md': {'max': '767px'},
	  		'm-lmd': {'max': '991px'},
			'm-lg': {'max': '1023px'},
			'm-xl': {'max': '1279px'},
			  
			'min-md': {'min': '767px'},
	  		'min-lmd': {'min': '991px'},
	  		'min-lg': {'min': '1023px'},
			'min-llg': {'min': '1200px'},  
			'min-xl': {'min': '1279px'},
	  	},
		  
		flexGrow: {
			'0': 0,
	       	default: 1,
	       	default: 2,
	       	'1': 1,
		},
	  	lineHeight: {
	  		'48': '3rem',
	  		"1-1": '1.1',
	  	},

	  	letterSpacing: {
	  		"1": '.1px',
	  		"1-1": '1.1px',
	  		'10': '10px',
	  		'10-m': '-10px',
	  	},

	  	height: {
			  '500': '500px',
			  '350': '350px',
			  '30-v':'30vh',
			  '38': '38px',
			  '1': '1px',
			  '70-p': '70%',
			  '3/10': '30%',
			  '100v-64': 'calc(100vh - 64px)',
	  	},

	  	fontSize: {
			'175': "175px",
			'48': '48px',
			'26': '26px',
			'32': '32px',
			'30': '30px',
				'25': '25px',
			'22': '22px',
			'20': '20px',
			'18': '18px',
			'16': '16px',
			'14': '14px',
			'11': '11px',
			'tiny-0':'0.8125rem', 
			'tiny-1':'1.375rem',
	  	},

		boxShadow: {
			'b-1-1-4': '1px 1px 4px rgba(0,0,0,.4)',
			'hsla': '0 1px 13px -4px hsla(0, 0%, 58%, 0.26)',
			'primary': '4px 4px 17px hsla(0, 0%, 85.9%, 0.5)',
			'secondary': '2px 5px 10px #ececec',
			'third': '0 2PX 32PX 0 RGBA(0,0,0,.15)'
		},

		borderRadius: {
			'large': '10px',
			'half': '50%',
			'30': '30px',
			'15': '15px',
			'5': '5px',  
		},

	  	minWidth: {
			'30':'30px',
			'145':'145px',
	  	},
		
		maxWidth:{
			'30-c':'30ch',
			'1024':'1024px',
			'300':'300px',
			'280':'280px',
		},

		paddingTop:{
			'70':'70px',
		},

	  	width: {
			'120': '120px',
			'750': '750px',
			'1170': '1170px',
			'970': '970px',
			'200': '200px',
			'150': '150px',
			'125': '125px',
			'100': '100px',
				'56': '56px',
			'78': '78px',
			'35':'35px',
			'30-v':'30vh',
			'33p': '33.33%',
			'50p': '50%',
			'31p': '31%',
			'25p-29x': 'calc(25% - 20px)'
	  	},
		zIndex: {
			'-1':-1,
			'0': 0,
			'10': 10,
			'20': 20,
			'30': 30,
			'40': 40,
			'50': 50,
			'25': 25,
			'50': 50,
			'75': 75,
			'100': 100,
			'auto': 'auto',
		},
	  	height: {
			'35':'35px',
	  		'38': '38px',
	  		'120': '120px',
	  		'500': '500px',
	  		'56': '56px',
			'78': '78px',
			'30-p': '30%'
	  	},

	  	minHeight: {
			  '1200': '1200px',
			  '300': '300px',
			  '170': '170px',
			  '54': '54px',
			  '1':'1px',
			  '30':'30px',
			  '3/10': '30%',
			  '50-v':'50vh',
			  '75-v':'75vh',
	  	},
		
		maxHeight:{
			'50':'50px',
			'350':'350px',
		},

		inset: {
			'10': '10px',
			'15': '15px',
			'-15': '-15px',
			'20': '20px',
			'25': '25px',
			'40': '40px',
			'70': '70px',
			'92': '92px',
			'middle': '50%'			  
	  	},

	  	borderColor: {
	  		'eee': '#eee',
	  		'pink-c': '#d538ff',
	  		'fa': '#fa005c'
	  	},

	  	textColor: {
			"999": "#999",
			"4d": "#4d4d4d",
			'fa': '#fa005c',
			'6c': "#6c6c6c",
			'21': "#212121",
			'ffc200': '#ffc200',
			'131631': '#131631',
			'a1': '#a1a1a1',
			'33': '##337ab7'  
		},

	  	margin: {
			  '25-p': '25%',
			  '1-c':'1ch',
	  	},
		marginRight:{
			'10':'10px',
		},

		marginBottom:{
			'20':'20px',
		},
		marginTop:{

		},
		colors: {
			indigo: '#5c6ac4',
			blue: '#007ace',
			red: '#de3618',
		},
		backgroundSize: {
			'auto': 'auto',
			'cover': 'cover',
			'contain': 'contain',
			'50%': '50%',
			'100%':'100%',
			'16': '4rem',
		},
	  	backgroundColor: theme => ({
	  		...theme('colors'),
	  		'fa': '#fa005c',
	  		'ec': "#ececec",
			'f7': "#f7f7f7",
			'f8':'#312f30',
			'f9':'rgb(0, 0, 0, 0.6)',
			'f10':'rgb(89, 109, 217)',
			'f11':'#3f4d9c',
			'f12':'#596dd9',
			'f13':'#8a59d9',
	  	})
    },
  },
  variants: {
	backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
  	 function ({ addComponents }) {
      addComponents({
        '.container': {
          '@screen xl': {
            maxWidth: '1170px',
          },
        }
      })
    }
  ]
}
