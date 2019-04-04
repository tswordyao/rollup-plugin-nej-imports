const {transImportsToRequire} = require('babel-plugin-nej-pack');

const nejTransImportsToRequirePlugin = function(){
    return {
        name: 'transImportsToRequire',
        renderChunk(code) { 
            return babelCore.transform(code,{"plugins":[transImportsToRequire]});
        }
    }
}; 

module.exports = nejTransImportsToRequirePlugin;