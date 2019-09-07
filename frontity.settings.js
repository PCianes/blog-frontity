const settings = {
  "name": "demo",
  "state": {
    "frontity": {
      "url": "https://pablocianes.com ",
      "title": "Pablo Cianes - Blog",
      "description": "Programador WordPress en Pamplona"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentynineteen-theme",
      "state": {
        "theme": {
          "featured": {
            "showOnList": false,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://pablocianes.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
