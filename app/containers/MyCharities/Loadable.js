/**
 *
 * Asynchronously loads the component for MyCharities
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
