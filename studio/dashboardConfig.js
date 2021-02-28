export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603c131779b14e0daa9718a9',
                  title: 'Sanity Studio',
                  name: 'leannebrowneventing-2-0-studio',
                  apiId: 'ecc351e4-a39d-4df3-b310-36ebbc6460dc'
                },
                {
                  buildHookId: '603c1317bf1ef7b5d8ca87b6',
                  title: 'Blog Website',
                  name: 'leannebrowneventing-2-0',
                  apiId: '6aad673c-0c23-41ab-8fd4-c323d2dfbdee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tysbrown/leannebrowneventing2.0',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://leannebrowneventing-2-0.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
