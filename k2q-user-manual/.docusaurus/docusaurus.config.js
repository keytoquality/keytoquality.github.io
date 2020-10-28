export default {
  "title": "K2Q Reference Guide",
  "tagline": "The tagline of my site",
  "url": "https://keytoquality.com",
  "baseUrl": "/k2q-user-manual/",
  "onBrokenLinks": "throw",
  "favicon": "img/k2qlogosmall.svg",
  "organizationName": "keytoquality",
  "projectName": "keytoqualitysite",
  "themeConfig": {
    "navbar": {
      "title": "Reference Guide",
      "logo": {
        "alt": "K2Q",
        "src": "img/k2qlogosmall.svg"
      },
      "hideOnScroll": false,
      "items": []
    },
    "footer": {
      "style": "dark",
      "copyright": "Copyright © 2020 Key to Quality",
      "links": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "routeBasePath": "/",
          "sidebarPath": "C:\\Users\\higgi\\Documents\\GitHub\\keytoqualitysite\\k2q-user-manual\\sidebars.js",
          "editUrl": "https://github.com/keytoquality/keytoqualitysite"
        },
        "theme": {
          "customCss": "C:\\Users\\higgi\\Documents\\GitHub\\keytoqualitysite\\k2q-user-manual\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};