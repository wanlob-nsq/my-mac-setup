// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // verminal: {
    //   fontSize: 15
    // },
    hyperTransparentDynamic: {
      alpha: 0.7 // default 50%
    },
    hyperCustomTouchbar: [
      // if you just need a single button then don't add options array
      { label: 'clear', command: 'clear', backgroundColor: '#d13232' },
      // { label: 'man', command: 'man ', prompt: true },
      // {
      //   label: 'git',
      //   options: [
      //     { label: 'diff', command: 'git diff' },
      //     { label: 'status', command: 'git status' },
      //     { label: 'log', command: 'git log' },
      //     { label: 'add .', command: 'git add .', icon: '/tmp/icons8-add-file-44.png', iconPosition: 'right' },
      //     { label: 'clone', command: 'git clone ', prompt: true },
      //   ]
      // },
      // {
      //   icon: '/tmp/icons8-folder-44.png',
      //   options: [
      //     { command: 'cd /usr/local/etc/nginx', icon: '/tmp/icons8-database-44.png', backgroundColor: '#000' },
      //     { command: 'cd /usr/local/var/log', icon: '/tmp/icons8-binary-file-44.png', backgroundColor: '#000' },
      //     { command: 'cd ~/Dropbox/', icon: '/tmp/icons8-dropbox-44.png', backgroundColor: '#000' },
      //     { command: 'cd ~/Downloads/', icon: '/tmp/icons8-downloading-updates-44.png', backgroundColor: '#000' }
      //   ]
      // },
      // {
      //   label: 'vim',
      //   options: [
      //     { label: 'quit', command: ':q!', esc: true },
      //     { label: 'save & quit', command: ':x', esc: true },
      //   ]
      // },
    ],
    confirmQuit: true,
    updateChannel: 'stable', // 'stable' or 'canary'
    fontFamily: '"Fira Code", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    fontWeight: 'normal',
    fontSize: 15,
    fontWeightBold: 'bold',
    cursorColor: 'rgba(1, 112, 178, 0.5)',
    cursorAccentColor: '#000',
    cursorShape: 'BLOCK', // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
    cursorBlink: true,
    foregroundColor: '#96A8B5',
    backgroundColor: '#000',
    selectionColor: 'rgba(248,28,229,0.3)',
    borderColor: '#13222E',

    css: '',
    termCSS: '',
    showHamburgerMenu: '',
    showWindowControls: '',
    padding: '12px 14px',

    colors: {
      black: '#282629',
      red: '#FF4050',
      green: '#A4CC35',
      yellow: '#FFD24A',
      blue: '#66BFFF',
      magenta: '#F553BF',
      cyan: '#26C99E',
      white: '#E0DCE0',
      lightBlack: '#474247',
      lightRed: '#F28144',
      lightGreen: '#A4CC35',
      lightYellow: '#FFD24A',
      lightBlue: '#66BFFF',
      lightMagenta: '#F553BF',
      lightCyan: '#26C99E',
      lightWhite: '#FFFCFF',
    },

    shell: '',

    // for setting shell arguments (i.e. for using interactive shellArgs: `['-i']`)
    // by default `['--login']` will be used
    shellArgs: ['--login'],

    env: {},

    bell: false,
    copyOnSelect: false,
    defaultSSHApp: true,
  },

  plugins: [// 'hyperline', //'verminal', //'hyperpower', //'hyper-transparent-dynamic'
    'hyperterm-close-on-left', 'hyper-search', "hyperlinks", "hyper-alt-click", "hyperterm-safepaste", "hyper-confirm", "hyper-savetext", "hyper-custom-touchbar", "hyperblue"],

  localPlugins: [],

  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  },
};