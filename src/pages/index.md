---
permalink: /index.html
title: 'faris.ai'
description: "A place to show faris's stumbles and fumbles into AI."
layout: 'home'
blog:
  title: 'faris.ai'
  intro: "👷‍♀️ Howdy there! This site is still under construction, but I appreciate you stopping by!"
---

## faris.ai

[👷‍♀️ Howdy there! This branch of my distributed cognition is still under construction.]

<article class="wrapper region">
    <ul class="grid mt-l-xl" role="list" data-rows="masonry" data-layout="50-50">
    {% for post in farisrun.items %}
        <li class="card flow overflow-hidden">
          <h2>
            <a href="{{ post.url | url }}">{{ post.title }}</a>
          </h2>
          {% set definedDate = post.date %} {% include "partials/date.njk" %}
          <p>{{ post.content_html|safe }}</p>
        </li>
    {% endfor %}
    </ul>
</article>
