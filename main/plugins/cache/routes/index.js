export default (
  Vue, options = { Layout: {} },
) => {
  return [
    // {
    //   path: '/NEAP_redirect/:path*',
    //   component: () => import('./redirect.vue'),
    // }，
    {
      path: '/NEAP_redirect',
      component: options.Layout,
      children: [
        {
          path: '/NEAP_redirect/:path*',
          component: () => import('./redirect.vue'),
        },
      ],
    },
  ];
}
