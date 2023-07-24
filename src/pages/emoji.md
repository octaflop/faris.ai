---
permalink: /emoji/index.html
layout: page
---

# Current selection via Xilef: 🍦🧃🧁🥥🎂🌭🌮🥙🏌️

This page is a test of both 11ty and some data wrangling

## {{ emojis | length }} Emojis Wrangled 🤠

<div class='grid grid-flow-dense grid-cols-2 gap-1 place-items-center place-items-stretch'>
{% for e, k in emojis %}
<h3> {{ e }} <code>{{ k.en }}</code></h3>
{% endfor %}
</div>
