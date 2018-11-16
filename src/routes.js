import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const Contacts = Loadable({
  loader: () => import('./views/Pages/Contacts/contacts'),
  loading: Loading,
});

const Leads = Loadable({
  loader: () => import('./views/Pages/Leads/leads'),
  loading: Loading,
});

const LeadDets = Loadable({
  loader: () => import('./views/Pages/Leads/lead_details'),
  loading: Loading,
});

const Opport = Loadable({
  loader: () => import('./views/Pages/Opportunities/opport'),
  loading: Loading,
});

const Tasks = Loadable({
  loader: () => import('./views/Pages/Tasks/tasks'),
  loading: Loading,
});

const Campaign = Loadable({
  loader: () => import('./views/Pages/Campaigns/campaign'),
  loading: Loading,
});

const Account = Loadable({
  loader: () => import('./views/Pages/Accounts/accounts'),
  loading: Loading,
});

const AccDetails = Loadable({
  loader: () => import('./views/Pages/Accounts/account_details'),
  loading: Loading,
});

const Orders = Loadable({
  loader: () => import('./views/Pages/Orders/orders'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/contacts', name: 'Contacts', component: Contacts },

  { path: '/leads', exact: true, name: 'Leads', component: Leads },
  { path: '/leads/details', name: 'Lead Details', component: LeadDets },

  { path: '/opportunities', name: 'Opportunities', component: Opport },
  { path: '/tasks', name: 'Tasks', component: Tasks },
  { path: '/campaigns', name: 'Campaigns', component: Campaign },

  { path: '/accounts', exact: true, name: 'Accounts', component: Account },  
  { path: '/accounts/details', name: 'Account Details', component: AccDetails },

  { path: '/orders', exact: true, name: 'Orders', component: Orders },
];

export default routes;
