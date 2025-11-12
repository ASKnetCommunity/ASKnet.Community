---
layout: page
title: "#ASKnet Platforms"
permalink: /asknet-platforms
css-id: 
platforms: 
  - heading: "#ASKtraining"
    subheading: "Modular Workshop Resources"
    url: "https://training.asknet.community/"
    text: 'The #ASKtraining platform is an open, adaptable, and community-driven space designed to compile, share, and streamline workshops, OER and “how-to” guides. By compiling and circulating hands-on knowledge with peer-to-peer sharing resources, this collaborative platform supports the sustainability of activities and local innovation, strengthens open learning networks, and facilitates onboarding of new members and participants.'

  - heading: "#ASKlead"
    subheading: "Connecting Local Expertise"
    url: "https://lead.asknet.community/"
    text: 'The #ASKnet Local Expert Action Directory (LEAD) links skilled community members in media, ICT, and technology with peers, clients, and collaborators for expertise from storytelling and repair to programming and design. Built on Peer-to-peer and ToT programs, LEAD showcases youth-led South Sudanese innovation in action.'
  - heading: "#ASKaggregator"
    subheading: "Collaborate. Communicate. Change"
    url: "https://aggregator.asknet.community/"
    text: 'A collaborative platform connecting #ASKnet’s campaigns, OERs and stories to enhance visibility, coordination, and creativity. Network members use #ASKaggregator to share, amplify, and promote their community social media campaigns in real time. Work together to create change by sharing, tweeting, and posting your stories. Participate online to amplify impact, coordinate action, suggest new campaigns, and spark engagement across borders.'
  - heading: "#ASKotec"
    subheading: "build and repair everywhere"
    url: "https://aggregator.asknet.community/"
    text: |
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.

      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.
---

<div class="row p-5">
  <h1> Explore our Network</h1>
</div>


{% for item in page.platforms %}
  {% assign mod = forloop.index0 | modulo: 2 %}
  <div class="row align-items-end mb-0 p-5 asksites {% if mod == 1 %}color-2{% endif %}">
    <div class="col-md-8 p-0">
      <h2 class="mb-3">{{ item.heading }}</h2>
      <p class="mb-0">{{ item.subheading }}</p>
    </div>
    <div class="col-md-4 text-md-right text-center p-0 mt-4 mt-md-0">
      <a href="{{ item.url }}" class="btn btn-primary btn-lg m-0" target="_blank">Visit <i class="fas fa-external-link-alt"></i></a>
    </div>
  </div>
  <div class="row p-5 mt-0 mb-5">
    {{ item.text | markdownify }}
  </div>
{% endfor %}

