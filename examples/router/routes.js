export const routes = [
  {
    path: '/',
    redirect: '/row'
  },
  {
    path: '/row',
    component: () => import('../pages/essentials/row/Index.vue')
  },
  {
    path: '/column',
    component: () => import('../pages/essentials/column')
  },
  {
    path: '/to-element',
    component: () => import('../pages/addItems/ToElement')
  },
  {
    path: '/panel-scrolling',
    component: () => import('../pages/customFunctionality/PanelScrolling')
  },
  {
    path: '/saving-state',
    component: () => import('../pages/essentials/savingState')
  },
  {
    path: '/configured-css',
    component: () => import('../pages/customFunctionality/ConfiguredCss')
  },
  {
    path: '/synced-layouts',
    component: () => import('../pages/configuration/SyncedLayouts')
  },
  {
    path: '/programmatic-reorder',
    component: () => import('../pages/customFunctionality/ProgrammaticReorder')
  },
  {
    path: '/extending-header',
    component: () => import('../pages/customFunctionality/ExtendingHeader')
  },
  {
    path: '/conditional-closing',
    component: () => import('../pages/customFunctionality/ConditionalClosing')
  },
  {
    path: '/data-table-presentation',
    component: () => import('../pages/configuration/DataTablePresentation')
  },
]

export default routes