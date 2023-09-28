export default {
  name: "auth",
  component: () =>
    import(
      /* webpackChunkName: 'Auth layout' */ "@/modules/auth/layouts/AuthLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "login",
      component: () =>
        import(
          /* webpackChunkName: 'login view' */ "@/modules/auth/views/VLogin.vue"
        ),
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import(
          /* webpackChunkName: 'register view' */ "@/modules/auth/views/VRegister.vue"
        ),
    },
  ],
};
