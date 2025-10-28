---
layout: page
title: "#ASKnet Platforms"
permalink: /asknet-platforms
css-id: 
platforms: 
  - heading: "#ASKlead"
    subheading: "find local experts"
    url: "https://lead.asknet.community/"
    text: |
      LEAD is a directory of #ASKnet experts in your area who are there to provide guidance and assistance. So feel free to reach out to them!
  - heading: "#ASKtraining"
    subheading: "plan trainings and find training materials"
    url: "https://training.asknet.community/"
    text: |
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.

      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.
  - heading: "#ASKaggregator"
    subheading: "social media campaigns of the network members"
    url: "https://aggregator.asknet.community/"
    text: |
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.

      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.
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




<div class="row align-items-end mb-0 p-5 asksites">
  <div class="col-md-8 p-0">
    <h2 class="mb-3">#ASKtext</h2>
    <p class="mb-0">something to try something out</p>
  </div>
  <div class="col-md-4 text-md-right text-center mt-4 mt-md-0">
    <a href="#" class="btn btn-primary btn-lg m-0" target="_blank">Visit <i class="fas fa-external-link-alt"></i></a>
  </div>
</div>
<div class="row p-5 mt-0">
  <p class="">
    something to try something out and something to try something out and something to try something out and something to try something out and something to try something out and something to try something out and something to try something out and something to try something out 
  </p>
</div>