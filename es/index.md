---
published: true
layout: homepage
weight: 0
title: Open Education Resources for Typography
---

(TODO: Please translate the English homepage into this page)

<!--
<div style="background: white; width: 100%; text-align:center; padding:1em">
<img src="images/2013-02-18_love.png" width="400px" alt="Praise on Twitter">
</div>
-->

<div style="width:32%;float:left">
  <h3>Teoría</h3>
  <ol class='category'>
    {% for p in site.pages %}
      {% for pc in p.categories %}
        {% if pc == 'Teoría' %}
          <li>
            <a href="{{ p.url }}">
              {{ p.title }}
            </a>
          </li>
        {% endif %}
      {% endfor %}
    {% endfor %}
  </ol>
</div>

<div style="width:32%;float:left">
  <h3>Práctica</h3>
  <ol class='category'>
    {% for p in site.pages %}
      {% for pc in p.categories %}
        {% if pc == 'Práctica' %}
          <li>
            <a href="{{ p.url }}">
              {{ p.title }}
            </a>
          </li>
        {% endif %}
      {% endfor %}
    {% endfor %}
  </ol>
</div>

<div style="width:32%;float:left">
  <h3>Historia</h3>
  <ol class='category'>
    {% for p in site.pages %}
      {% for pc in p.categories %}
        {% if pc == 'Historia' %}
          <li>
            <a href="{{ p.url }}">
              {{ p.title }}
            </a>
          </li>
        {% endif %}
      {% endfor %}
    {% endfor %}
  </ol>
</div>
