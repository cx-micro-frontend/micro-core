export default (
  Vue, options = { Layout: {} },
) => {
  return [
    // {
    //   path: '/redirect/:path*',
    //   component: () => import('./redirect.vue'),
    // }，
    {
      path: '/redirect',
      component: options.Layout,
      children: [
        {
          path: '/redirect/:path*',
          component: () => import('./redirect.vue'),
        },
      ],
    },
  ];
}
