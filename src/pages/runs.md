---
title: 🧠 runs
description: 'All blog posts can be found here'
layout: runs
permalink: /runs/index.html
---

{% for post in farisrun.items %}

- [{{post.title}}](/runs/{{ post.id | url }}/{{ post.title | replace(" ", "-") | url | lower }})
  {% endfor %}
