import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'def'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '473'),
    exact: true
  },
  {
    path: '/blog/front-end',
    component: ComponentCreator('/blog/front-end', 'e5b'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '8d1'),
    exact: true
  },
  {
    path: '/blog/tags/front-end',
    component: ComponentCreator('/blog/tags/front-end', '92e'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'df8'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '14f'),
    routes: [
      {
        path: '/docs/added-features/downloading-result-files',
        component: ComponentCreator('/docs/added-features/downloading-result-files', 'ae8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/added-features',
        component: ComponentCreator('/docs/category/added-features', 'a14'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/further-improvements',
        component: ComponentCreator('/docs/category/further-improvements', 'b01'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/how-to-use-afms',
        component: ComponentCreator('/docs/category/how-to-use-afms', '82f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/mso-text-classification',
        component: ComponentCreator('/docs/category/mso-text-classification', '9f9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/quickstart',
        component: ComponentCreator('/docs/category/quickstart', '7ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/setting-up-docker',
        component: ComponentCreator('/docs/category/setting-up-docker', 'a3a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/further-improvements/error-handling',
        component: ComponentCreator('/docs/further-improvements/error-handling', '532'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/further-improvements/vulnerabilities',
        component: ComponentCreator('/docs/further-improvements/vulnerabilities', '363'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/how-to-use-afms/example-scenarios',
        component: ComponentCreator('/docs/how-to-use-afms/example-scenarios', '4ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/how-to-use-afms/format-of-hub-files',
        component: ComponentCreator('/docs/how-to-use-afms/format-of-hub-files', '7ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/how-to-use-afms/format-of-supporting-files',
        component: ComponentCreator('/docs/how-to-use-afms/format-of-supporting-files', '967'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/how-to-use-afms/input-variables',
        component: ComponentCreator('/docs/how-to-use-afms/input-variables', 'cfe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/how-to-use-afms/introduction',
        component: ComponentCreator('/docs/how-to-use-afms/introduction', '5dc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/mso/data-extraction',
        component: ComponentCreator('/docs/mso/data-extraction', '840'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/mso/few-shot',
        component: ComponentCreator('/docs/mso/few-shot', '081'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/mso/introduction',
        component: ComponentCreator('/docs/mso/introduction', '2cb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/mso/model-setup',
        component: ComponentCreator('/docs/mso/model-setup', 'e09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/mso/sandbox',
        component: ComponentCreator('/docs/mso/sandbox', '9ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/mso/source-codes',
        component: ComponentCreator('/docs/mso/source-codes', '626'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/quickstart/background',
        component: ComponentCreator('/docs/quickstart/background', '916'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/quickstart/docker-setup',
        component: ComponentCreator('/docs/quickstart/docker-setup', '71b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/quickstart/local-machine-setup',
        component: ComponentCreator('/docs/quickstart/local-machine-setup', 'e05'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/setting-up-docker/building-docker-images',
        component: ComponentCreator('/docs/setting-up-docker/building-docker-images', '6b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/setting-up-docker/creating-dockerfiles',
        component: ComponentCreator('/docs/setting-up-docker/creating-dockerfiles', '448'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/setting-up-docker/deploying-containers',
        component: ComponentCreator('/docs/setting-up-docker/deploying-containers', 'fc6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/setting-up-docker/exporting-docker-images',
        component: ComponentCreator('/docs/setting-up-docker/exporting-docker-images', '31e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/setting-up-docker/pulling-from-dockerhub',
        component: ComponentCreator('/docs/setting-up-docker/pulling-from-dockerhub', 'fa4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/setting-up-docker/pushing-to-dockerhub',
        component: ComponentCreator('/docs/setting-up-docker/pushing-to-dockerhub', '483'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '25a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
