---
permalink: /debug
title: 'faris.ai'
description: "A place to show faris's stumbles and fumbles into AI."
layout: 'debug'
blog:
  title: 'Debug'
  intro: "This was the debug page."
---

## faris.ai


### vars

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

#### dump

```json
{{ farisrun | dump(2) | safe }}
```
