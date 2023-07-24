---
permalink: /emoji/index.html
layout: page
---

# Current selection via Xilef: 🍦🧃🧁🥥🎂🌭🌮🥙🏌️

This page is a test of both 11ty and some data wrangling

## {{ emojis | length }} Emojis Wrangled 🤠

{% for e, k in emojis %}
<h3> {{ e }} <code>{{ k.en }}<code></h3>
{% endfor %}
