export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      'variables': {
        'mantine-breakpoint-xs': '36em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '62em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '88em',
        'purple': ['#9F70FD', '#7F27FF', '#864AF9'],
        'yellow': ['#F8E559'],
        'red': ['#D24545'],
        'base': '#F5F7F8'
      },
    },
  },
}
