# #ASKnet Community Website

## Preview - click for live demo

[![screenshot](/screenshot.png)][demo-page]

## About

This is the [official website][demo-page] of the #ASKnet community. Here you can find all information and projects of #ASKnet. ASK stands for Access Skills & Knowledge. The net for the network. 

The #ASKnet community aims to build a sustainable network of trainers and empowered individuals, to address specific challenges their communities are facing and transform cultural patterns that fuel conflict and inequality.

## Participate

The website is based on the technology: Jekyll and is fully hosted on Github.

Jekyll compiles all markdown, HTML, CSS, Javascript files and more into a static website that can be run anywhere without any special requirements (database, PHP, Ruby or other). A simple web server is quite sufficient, or just Github with its offer: Github Pages ([more info about Github Pages](https://pages.github.com/))

The official website is generated here from this repository. I.e. if content/files are changed here, they are automatically published on the website. The content is written in Markdown .md ([more info about Markdown](https://www.markdownguide.org/)) or YAML .yml ([more info about YAML](https://en.wikipedia.org/wiki/YAML)).

### Most important directories and files

To change content (text or images) on the website, only the following directories are important at first:

![readme-most-important-folders-overview](assets/img/readme-most-important-files-and-folders-overview.png)

- **_data:** there are .yml files, where in YAML format ([more info about YAML](https://en.wikipedia.org/wiki/YAML)) all text content, design styles and navigation are contained
- **_includes:** this directory contains all images, PDF, styles or script files

#### _data Folder

The website may contain multilingual content. All languages are in one file. E.g. in navigation.yml you can create multilingual navigation and in sitetext.yml multilingual content. The sections for each language always start with the name of the language and end with some parameters. Example:

```
# English (default)
# -----------------
en: &DEFAULT_EN

   [...]

en-US:
  <<: *DEFAULT_EN
en-CA:
  <<: *DEFAULT_EN
en-GB:
  <<: *DEFAULT_EN
en-AU:
  <<: *DEFAULT_EN
```

![readme-most-important-files-and-folders-data](assets/img/readme-most-important-files-and-folders-data.png)

- **[navgation.yml](_data/navigation.yml):** 
- **[sitetext.yml](_data/sitetext.yml):** 

#### assets Folder

![readme-most-important-files-and-folders-assets](assets/img/readme-most-important-files-and-folders-assets.png)

In the assets directory, only the `img` folder is important for the content. All images are stored there.

**Important:** Please use images only in the appropriate web format, i.e. not too large resolutions (max. 1920x1280 Px) and the appropriate image format. PNG is flexible, because transparent backgrounds also work, but JPG are better for photos, because they are much smaller.

The images can then be embedded in the corresponding Markdown file.

Example:

```
![Alternative image text](assets/img/hubs/01-content.jpg)
```

Or in a YAML file simply specify the path.

Example:

```
image: assets/img/projects/askotec-website.png
```

## Contributing

This project is intended to be a welcoming space for collaboration. If you have an idea, suggestion, feature request, etc., feel free to [open an issue](https://github.com/ASKnetCommunity/ASKnet.Community/issues) or [pull request](https://github.com/ASKnetCommunity/ASKnet.Community/pulls).

For bug reports, follow the provided template.

## Development

You can find out how to get the website running and developed locally on your computer here: [Development](https://github.com/ASKnetCommunity/ASKnet.Community/wiki/development)

## Partners and Funder

| r0g Agency | ASKnet  | BMZ |
| :--------: | :----: | :-------: |
|[![r0g Logo](assets/img/clients/r0g_logo.png)](https://openculture.agency/)|[![#ASKnet Logo](assets/img/clients/asknet-logo.png)](https://github.com/ASKnet-Open-Training)|  [![BMZ Logo](assets/img/clients/founder_BMZ.jpg)](https://www.bmz.de/en/) |
| [Official Website](https://openculture.agency/) | [Official Website](https://github.com/ASKnet-Open-Training) | [Official Website](https://www.bmz.de/en/) |


## License

All content is licensed under CC-BY-SA 4.0 

## Credits

#### Theme: Kross Theme (https://github.com/themefisher/kross-jekyll)
- Copyright (c) 2016 - Present, Designed & Developed by Themefisher
- Licensed under MIT (https://github.com/themefisher/kross-jekyll/blob/main/LICENSE)

#### Bootstrap v4.1.1 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)

#### Font Awesome Free v5.15.4 (https://fontawesome.com)
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)

#### Shuffle.js v5.4.1 (https://vestride.github.io/Shuffle/)
* Licensed under MIT (https://github.com/Vestride/Shuffle/blob/main/LICENSE)

#### jQuery v3.6.0 (https://jquery.com/)
* Licensed under MIT (https://github.com/jquery/jquery/blob/main/LICENSE.txt)

#### Themify Icons (https://themify.me/themify-icons)
* License - https://themify.me/pricing (Icons: GPL, Fonts: SIL OFL 1.1, Code: MIT License) All brand icons are copyright/trademarks of their respective owners.

#### slick v1.8.0 (https://github.com/kenwheeler/slick)
* Licensed under MIT (https://github.com/kenwheeler/slick/blob/master/LICENSE)

Fonts used: 
- montserrat-v24-latin-ext_latin-regular.ttf: Copyright 2011 The Montserrat Project Authors (https://github.com/JulietaUla/Montserrat)
- montserrat-v24-latin-ext_latin-700.ttf: Copyright 2011 The Montserrat Project Authors (https://github.com/JulietaUla/Montserrat)
- noto-serif-v21-latin-ext_latin-regular.ttf: Copyright 2012 Google Inc. All Rights Reserved.
- noto-serif-v21-latin-ext_latin-italic.ttf: Copyright 2012 Google Inc. All Rights Reserved.
- noto-serif-v21-latin-ext_latin-700italic.ttf: Copyright 2012 Google Inc. All Rights Reserved.
- noto-serif-v21-latin-ext_latin-700.ttf: Copyright 2012 Google Inc. All Rights Reserved.
