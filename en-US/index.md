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

Learn about the Open Education Resources for Typography (OERT) project on [Kickstarter](http://www.kickstarter.com/projects/cosgaya/oert-open-educational-resources-for-typography)

This is the dynamic, 'live,' OERT website. We invite you to join our project here. 

The main <a href="http://www.oert.org">www.oert.org</a> website publishes the 'stable' version of this project. There we publish a reputable, fact-checked resource that is used as a textbook by courses in typography at the University level.

This website is different. It is under active development and we welcome any designer in the world to send us corrections, additions and improvements. We aim for this version to always be accurate, but it may not be complete; when information is added, other information may be implied, and a thorough revision by the editorial team is done before the main website is updated with the latest changes.

[Learn how to make changes &rarr;](https://github.com/oert/live.oert.org#liveoertorg)

Here is what we have so far:

<div style="width:25%;float:left">
<h3>Theory</h3>
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
<div style="width:25%;float:left">
<h3>Practical</h3>
<ol class="rectangle-list">
{% for weight in (1..100) %}
  {% for p in site.pages %}
    {% if p.category == "Practical" %}
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
<div style="width:25%;float:left">
<h3>History</h3>
<ol class="rectangle-list">
{% for weight in (1..100) %}
  {% for p in site.pages %}
    {% if p.category == "History" %}
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

<div style="width:100%;float:left;clear:both">
<h3>About</h3>
<ol class="rectangle-list">
{% for weight in (1..100) %}
  {% for p in site.pages %}
    {% if p.category == "About" %}
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
