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

<div style="width:32%;float:left">
  <h3>Teoría</h3>
  <ol class='category'>
    {% for p in site.categories['teoría'] %}
      <li>
        <a {% if p.url == page.url %}class="active"{% endif %} href="{{ p.url }}">
          {{ p.title }}
        </a>
      </li>
    {% endfor %}
  </ol>
</div>
<div style="width:32%;float:left">
<h3>Práctica</h3>
  <ol class='category'>
    {% for p in site.categories['práctica'] %}
      <li>
        <a {% if p.url == page.url %}class="active"{% endif %} href="{{ p.url }}">
          {{ p.title }}
        </a>
      </li>
    {% endfor %}
  </ol>
</div>
<div style="width:32%;float:left">
<h3>Historia</h3>
  <ol class='category'>
    {% for p in site.categories.historia %}
      <li>
        <a {% if p.url == page.url %}class="active"{% endif %} href="{{ p.url }}">
          {{ p.title }}
        </a>
      </li>
    {% endfor %}
  </ol>
</div>
