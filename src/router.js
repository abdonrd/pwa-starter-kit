import { Router } from '@vaadin/router';

export function init(outlet) {
  const router = new Router(outlet, { baseUrl: '/' });

  router.setRoutes([
    {
      path: '/',
      redirect: '/view1'
    },
    {
      path: '/view1',
      name: 'view1',
      component: 'my-view1',
      action: () => {
        import('./components/my-view1.js');
      }
    },
    {
      path: '/view2',
      name: 'view2',
      component: 'my-view2',
      action: () => {
        import('./components/my-view2.js');
      }
    },
    {
      path: '/view3',
      name: 'view3',
      component: 'my-view3',
      action: () => {
        import('./components/my-view3.js');
      }
    },
    {
      path: '(.*)',
      name: 'view404',
      component: 'my-view404',
      action: () => {
        import('./components/my-view404.js');
      }
    },
  ]);
}
