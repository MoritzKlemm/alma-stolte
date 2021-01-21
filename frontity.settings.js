const settings = {
  "name": "alma-stolte",
  "state": {
    "frontity": {
      "title": "Alma Stolte",
      "description": "Historisches und Modernes Violoncello"
    }
  },
  "packages": [
    {
      "name": "alma-stolte-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Kalender",
              "/kalender"
            ],
            [
              "Projekte",
              "/projekte"
            ],
            [
              "Vita",
              "/vita"
            ],
            [
              "Media",
              "/media"
            ],
            [
              "Kontakt",
              "/kontakt"
            ],
          ]
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://public-api.wordpress.com/wp/v2/sites/designedcontainershowcase.wordpress.com",
          "url": "https://designedcontainershowcase.wordpress.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
