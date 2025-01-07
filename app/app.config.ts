export default defineAppConfig({
  ui: {
    primary: 'purple',
    gray: 'cool',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'Subtxt with Muse - Documentation'
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    // links: [{
    //   'icon': 'i-heroicons-pencil',
    //   'to': 'https://subtxt.app',
    //   'target': '_blank',
    //   'aria-label': 'Subtxt with Muse'
    // }]
  },
  footer: {
    credits: 'Copyright © 2017-2025',
    colorMode: false,
    links: [{
      'icon': 'i-heroicons-star',
      'to': 'https://subtxt.app',
      'target': '_blank',
      'aria-label': 'Subtxt'
    }, {
      'icon': 'i-simple-icons-bluesky',
      'to': 'https://bsky.app/profile/subtxt.app',
      'target': '_blank',
      'aria-label': 'Bluesky'
    }, {
      'icon': 'i-simple-icons-discord',
      'to': 'https://discord.com/invite/uHhpSYYa3G',
      'target': '_blank',
      'aria-label': 'Subtxt on Discord'
    }, {
      'icon': 'i-heroicons-book-open',
      'to': 'https://narrativefirst.com',
      'target': '_blank',
      'aria-label': 'Narrative First'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Get Subtxt',
        to: 'https://subtxt.app',
        target: '_blank'
      }, {
        icon: 'i-simple-icons-bluesky',
        label: 'Bluesky',
        to: 'https://bsky.app/profile/subtxt.app',
        target: '_blank'
      }, {
        icon: 'i-simple-icons-discord',
        label: 'Subtxt on Discord',
        to: 'https://discord.com/invite/uHhpSYYa3G',
        target: '_blank'
      }, {
        icon: 'i-heroicons-book-open',
        label: 'Narrative First',
        to: 'https://narrativefirst.com',
        target: '_blank'
      }]
    }
  }
})
