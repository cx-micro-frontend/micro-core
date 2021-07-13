export default (
  Vue, options = { Layout: {} },
) => {
  return [
    // {
    //   path: '/NEAP_redirect/:path*',
    //   component: () => import('./redirect.js'),
    // }，
    {
      path: '/NEAP_redirect',
      component: options.Layout,
      children: [
        {
          name: 'NEAP_redirect',
          path: '/NEAP_redirect/:path*',
          component: () => import('./redirect.js'),
          meta: { key: 'NEAP_redirect' },
          beforeEnter: (to, from, next) => {
            // console.log(33333333333);
            // console.log(to);
            // console.log(from);
            // const { params, query } = to;
            // const { path } = params;
            //
            //
            // // this.$router.replace({ path: '/' + path, query });
            //
            // console.log(66666666666);
            // console.log(path);
            // console.log(query);
            // console.log(66666666666);
            next();
            // next({ path: '/' + path, query});
          },
        },
      ],
    },
  ];
}
