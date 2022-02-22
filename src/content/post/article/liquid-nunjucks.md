---
layout: post/article
date: 2020-04-22 09:00:00 +05:30
draft: false

title: "Check for a string in an array - Liquid vs Nunjucks"
slug: "check-string-in-array-liquid-vs-nunjucks"

author: jane-doe
tags:
- how-to
- liquid
- nunjucks
content-description: "A brief post detailing how liquid and nunjucks templating languages differ in checking for a string in an array, as well as retriving properties with special characters on objects"
---

[This post originally appeared on rusingh.com](https://rusingh.com/check-string-in-array-liquid-vs-nunjucks/).

While incorporating more of IndieWeb into my website, I found myself implementing an identical logic in two templating languages: Liquid and Nunjucks.

To check whether a string exists in an array, this is how you would do it in each language.

In Liquid:

{% raw %}

```liquid
{% if data.publish-to contains 'mastodon' %}
```

{% endraw %}

In Nunjucks:

{% raw %}

```liquid
{% if 'mastodon' in data['publish-to'] %}
```

{% endraw %}

<hr />

## Accessing properties with special characters

In our example, another thing of note is how a property on the `data` object with a hyphen in its name &mdash; `publish-to` &mdash; is being retrieved.

Liquid comfortably understands what is called the dot notation in JavaScript. This is quite impressive.

Nunjucks _needs_ what is called the bracket notation in JavaScript.
