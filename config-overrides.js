const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
    alias({
        '@components': 'src/Components',
        '@atoms': 'src/Components/Atoms',
        '@molecules': 'src/Components/Molecules',
        '@organisims': 'src/Components/Organisims',
        '@pages': 'src/Components/Pages',
        '@templates': 'src/Components/Templates',
        '@redux': 'src/Redux',
        '@assets' : 'src/Assets'
    })(config)

    return config
}