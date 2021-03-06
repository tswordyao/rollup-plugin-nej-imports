const babelCore= require('@babel/core')
const {transImportsToRequire} = require('babel-plugin-nej-pack');

const nejTransImportsToRequirePlugin = function(){
    return {
        name: 'transImportsToRequire',
        transform(code) { 
            return babelCore.transform(code,{"plugins":[transImportsToRequire]});
        }
    }
}; 

module.exports = nejTransImportsToRequirePlugin;