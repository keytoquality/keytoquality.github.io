
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/k2q-user-manual/blog',
  component: ComponentCreator('/k2q-user-manual/blog','950'),
  exact: true,
},
{
  path: '/k2q-user-manual/blog/hello-world',
  component: ComponentCreator('/k2q-user-manual/blog/hello-world','e21'),
  exact: true,
},
{
  path: '/k2q-user-manual/blog/hola',
  component: ComponentCreator('/k2q-user-manual/blog/hola','991'),
  exact: true,
},
{
  path: '/k2q-user-manual/blog/tags',
  component: ComponentCreator('/k2q-user-manual/blog/tags','aba'),
  exact: true,
},
{
  path: '/k2q-user-manual/blog/tags/docusaurus',
  component: ComponentCreator('/k2q-user-manual/blog/tags/docusaurus','399'),
  exact: true,
},
{
  path: '/k2q-user-manual/blog/tags/facebook',
  component: ComponentCreator('/k2q-user-manual/blog/tags/facebook','a4d'),
  exact: true,
},
{
  path: '/k2q-user-manual/blog/tags/hello',
  component: ComponentCreator('/k2q-user-manual/blog/tags/hello','324'),
  exact: true,
},
{
  path: '/k2q-user-manual/blog/tags/hola',
  component: ComponentCreator('/k2q-user-manual/blog/tags/hola','d8f'),
  exact: true,
},
{
  path: '/k2q-user-manual/blog/welcome',
  component: ComponentCreator('/k2q-user-manual/blog/welcome','9e8'),
  exact: true,
},
{
  path: '/k2q-user-manual/',
  component: ComponentCreator('/k2q-user-manual/','cec'),
  
  routes: [
{
  path: '/k2q-user-manual/',
  component: ComponentCreator('/k2q-user-manual/','d94'),
  exact: true,
},
{
  path: '/k2q-user-manual/doc1',
  component: ComponentCreator('/k2q-user-manual/doc1','0a6'),
  exact: true,
},
{
  path: '/k2q-user-manual/doc3',
  component: ComponentCreator('/k2q-user-manual/doc3','8bb'),
  exact: true,
},
{
  path: '/k2q-user-manual/k2qmodules',
  component: ComponentCreator('/k2q-user-manual/k2qmodules','057'),
  exact: true,
},
{
  path: '/k2q-user-manual/mdx',
  component: ComponentCreator('/k2q-user-manual/mdx','a57'),
  exact: true,
},
{
  path: '/k2q-user-manual/whatisk2q',
  component: ComponentCreator('/k2q-user-manual/whatisk2q','9d9'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
