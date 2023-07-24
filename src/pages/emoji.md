---
permalink: /emoji/index.html
layout: page
---


# Via Xilef: 🍦🧃🧁🥥🎂🌭🌮🥙🏌️

## Emoji

{% for emoj in emoji | random %}
- {{ emoj }}
{% endfor %}

### json
- {{ emoji | dump(2) }}