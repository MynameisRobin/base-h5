/* Layout */
export const routes = [{
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () =>
      import('@/views/dashboard/index'),
  },
]
