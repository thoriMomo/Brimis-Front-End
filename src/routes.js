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

const ContactDets = Loadable({
  loader: () => import('./views/Pages/Contacts/contact_details'),
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

const ProOrders = Loadable({
  loader: () => import('./views/Pages/Orders/product_ord_details'),
  loading: Loading,
});

const SerOrders = Loadable({
  loader: () => import('./views/Pages/Orders/service_ord_details'),
  loading: Loading,
});

const Quotes = Loadable({
  loader: () => import('./views/Pages/Quotations/quotes'),
  loading: Loading,
});

const RFQQuotes = Loadable({
  loader: () => import('./views/Pages/Quotations/rfq_details'),
  loading: Loading,
});

const TenQuotes = Loadable({
  loader: () => import('./views/Pages/Quotations/tender_details'),
  loading: Loading,
});

const Login = Loadable({
  loader: () => import('./views/Pages/Login/Login'),
  loading: Loading,
});

const Register = Loadable({
  loader: () => import('./views/Pages/Register/Register'),
  loading: Loading,
});

const routes = [
  { path: '/login', exact: true, name: 'Login', component: DefaultLayout },
  { path: '/login', name: 'Login', component: Login },

  { path: '/register', exact: true, name: 'Register', component: DefaultLayout },
  { path: '/register', name: 'Register', component: Register },

  { path: '/dashboard', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  { path: '/contacts', exact: true, name: 'Contacts', component: Contacts },
  { path: '/contacts/details', name: 'Contact Details', component: ContactDets },

  { path: '/leads', exact: true, name: 'Leads', component: Leads },
  { path: '/leads/details', name: 'Lead Details', component: LeadDets },

  { path: '/opportunities', name: 'Opportunities', component: Opport },
  { path: '/tasks', name: 'Tasks', component: Tasks },
  { path: '/campaigns', name: 'Campaigns', component: Campaign },

  { path: '/accounts', exact: true, name: 'Accounts', component: Account },  
  { path: '/accounts/details', name: 'Account Details', component: AccDetails },

  { path: '/orders', exact: true, name: 'Orders', component: Orders },
  { path: '/orders/product_orders', name: 'Product Orders', component: ProOrders },
  { path: '/orders/serv_orders', name: 'Service Orders', component: SerOrders },

  { path: '/quotations', exact: true, name: 'Quotes', component: Quotes },
  { path: '/quotations/rfq_details', name: 'Request For Quotation Details', component: RFQQuotes },
  { path: '/quotations/tender_details', name: 'Quote For Tender Details', component: TenQuotes },
];

export default routes;
