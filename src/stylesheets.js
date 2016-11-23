import classNames from 'classnames';
import atom from '../atom-packages/atom/static/atom.less';
import oneDarkSyntax from '../atom-packages/one-dark-syntax/index.less';
import oneDarkUI from '../atom-packages/one-dark-ui/index.less';

let atomStyles = {
  ...atom,
  ...oneDarkSyntax,
  ...oneDarkUI
}

Object.keys(atomStyles).forEach(function(className) {
  atomStyles[className] = classNames(atom[className],
                                     oneDarkSyntax[className],
                                     oneDarkUI[className]);
});

export default atomStyles;
