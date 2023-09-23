/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'default': 'var(--background)',
        'primary-100': 'var(--primary-100)',
        'primary-200': 'var(--primary-200)',
        'primary-300': 'var(--primary-300)',
        'primary-400': 'var(--primary-400)',
        'primary-500': 'var(--primary-500)',
        'primary-600': 'var(--primary-600)',
        'primary-800': 'var(--primary-800)',
        'success-100': 'var(--success-100)',
        'success-200': 'var(--success-200)',
        'success-500': 'var(--success-500)',
        'success-600': 'var(--success-600)',
        'success-800': 'var(--success-800)',
        'warning-100': 'var(--warning-100)',
        'warning-500': 'var(--warning-500)',
        'warning-600': 'var(--warning-600)',
        'warning-800': 'var(--warning-800)',
        'danger-100': 'var(--danger-100)',
        'danger-500': 'var(--danger-500)',
        'danger-600': 'var(--danger-600)',
        'danger-800': 'var(--danger-800)',
        'gray-100': 'var(--gray-100)',
        'gray-500': 'var(--gray-500)',
        'gray-600': 'var(--gray-600)',
        'gray-800': 'var(--gray-800)',
        'gray-900': 'var(--gray-900)'
      },
      gridTemplateColumns: {
        'autofill': 'repeat(auto-fill, minmax(1.5rem, 1fr))'
      }
    }
  }
}