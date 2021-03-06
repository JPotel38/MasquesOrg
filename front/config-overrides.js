const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
      style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 
      '@primary-color': '#E23D70', 
      '@menu-dark-highlight-color': '#E23D70',  /*:hover Nav*/  
      '@menu-dark-item-active-bg' : '#1e272e', /* couleur item activé menu*/ 
      '@menu-dark-color' : '#ffff',
    }
  }),
);