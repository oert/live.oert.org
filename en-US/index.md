---
published: true
layout: homepage
weight: 0
title: Open Education Resources for Typography
---

<!--
<div style="background: white; width: 100%; text-align:center; padding:1em">
<img src="images/2013-02-18_love.png" width="400px" alt="Praise on Twitter">
</div>
-->

This is the dynamic, 'live,' Open Education Resources for Typography website. We invite you to join our project. 

The 'stable' version of this project is at www.oert.org and is published there as a reputable, fact-checked resource that is used by University-level courses in typography as a textbook. 

This version is different. It is under active development, open for any designer in the world to make a 'pull request' with their changes in the typical GitHub style. We aim for this version to always be accurate, but it may not be complete; when information is added, other information may be implied, and needs to be added later.

Here is what we have so far:

<div style="width:30%">
<ol class="rectangle-list">
{% for weight in (1..100) %}
  {% for p in site.pages %}
    {% if p.category == "Theory" %}
    {% if p.weight > 0 %}
    {% if p.weight == weight %}
      <li>
        <a {% if p.url == page.url %}class="active"{% endif %} href="{{ p.url }}">
          {{ p.title }}
        </a>
      </li>
    {% endif %}
    {% endif %}
    {% endif %}
  {% endfor %}
{% endfor %}
</ol>
</div>

The OERT project was initiated on [Kickstarter]().
