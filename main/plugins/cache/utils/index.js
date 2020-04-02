export const optCheck = option => {
  if (!option.router)
    throw '[neap-cache] uncaught error during cache: router missing, cache dependency on router, please check it.';

  if (!option.store)
    throw '[neap-cache] uncaught error during cache: vuex missing, cache dependency on vuex, please check it.';
};
