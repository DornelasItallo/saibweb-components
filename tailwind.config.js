export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const darkMode = ['class', '[data-mode="dark"]'];
export const theme = {
  fontSize: {
    xs: ['0.625rem', '0.75rem'],
    sm: ['0.75rem', '1rem'],
    base: ['0.875rem', '1.25rem'],
    lg: ['1rem', '1.375rem'],
    xl: ['1.125rem', '1.375rem'],
    '2xl': ['1.25rem', '1.625rem'],
    '3xl': ['1.5rem', '1.8125rem'],
  },
  colors: {
    black: {
      DEFAULT: '#000',
      800: '#0d0d0d',
      700: '#1a1a1a',
      600: '#262626',
      500: '#232529',
      400: '#2f3137',
      300: '#3b3d45',
      200: '#464953',
      100: '#525660',
    },
    white: {
      DEFAULT: '#fdfbfe',
      800: '#fbf7fd',
      500: '#ffffff',
      300: '#f2f2f2',
    },
    primary: {
      DEFAULT: '#8e44ad',
      800: '#7e3a9d',
      700: '#863ea8',
      500: '#9545ba',
      400: '#a057c1',
      300: '#bf8fd6',
      200: '#d5b5e3',
      100: '#eadaf1',
      50: '#eee1f4',
    },
    secondary: {
      DEFAULT: '#BA3F83',
      700: '#be4186',
      600: '#c45492',
      500: '#cb679e',
      400: '#ef9ea3',
      300: '#d88db6',
      200: '#dea0c2',
      100: '#ebc6db',
    },
    tertiary: {
      DEFAULT: '#523FBA',
      700: '#5441be',
      600: '#6554c4',
      500: '#7667cb',
      300: '#988dd8',
      200: '#a9a0de',
      100: '#bbb3e5',
    },
    green: {
      DEFAULT: '#14532d',
      700: '#15803d',
      600: '#16a34a',
      500: '#22c55e',
      400: '#4ade80',
      300: '#86efac',
      200: '#bbf7d0',
      100: '#dcfce7',
      50: '#e8fdef',
    },
    yellow: {
      DEFAULT: '#ffdd00',
      700: '#ffe01a',
      600: '#ffe433',
      500: '#ffe74d',
      400: '#ffeb66',
      300: '#ffee80',
      200: '#fff5b3',
      100: '#fff8cc',
    },
    red: {
      DEFAULT: '#ed3241',
      700: '#ef4352',
      600: '#f15b67',
      500: '#f3727d',
      400: '#f58a93',
      300: '#f7a1a8',
      200: '#fbd0d4',
      100: '#fde8e9',
    },
    blue: {
      DEFAULT: '#006ffd',
      700: '#2897FF',
      500: '#6FBAFF',
      300: '#B4DBFF',
      200: '#cce6ff',
      100: '#dbeeff',
    },
    cyan: {
      DEFAULT: '#0084A1',
      700: '#00a7cc',
      600: '#00bbe6',
      500: '#00d0ff',
      300: '#33daff',
      200: '#66e3ff',
      100: '#99ecff',
    },
    gray: {
      DEFAULT: '#666666',
      800: ' #737373',
      700: '#808080',
      600: '#8c8c8c',
      500: '#a6a6a6',
      400: '#bfbfbf',
      300: '#d9d9d9',
      200: '#e6e6e6',
      100: '#ebebeb',
    },
    border: {
      DEFAULT: '#d9d9d9',
      form: 'hsl(0, 0%, 80%)',
      500: '#e6e6e6',
      300: '#737373',
    },
    placeholder: '#8F9098',
    opacity: 'rgba(255,255,255,0.12)',
    loading: 'rgb(0, 0, 0, 0.4)',
    shadow: 'rgba(0,0,0,0.25)',
    transparent: 'transparent',
    extend: {},
  },
};
export const plugins = [];