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
              "ALMA STOLTE",
              "/"
            ],
            [
              "Kalender",
              "/"
            ],
            [
              "Projekte",
              "/"
            ],
            [
              "Vita",
              "/"
            ],
            [
              "Media",
              "/media"
            ],
            [
              "Kontakt",
              "/"
            ],
          ]
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://public-api.wordpress.com/wp/v2/sites/cmsalmastolte.wordpress.com",
          "url": "https://cmsalmastolte.wordpress.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
