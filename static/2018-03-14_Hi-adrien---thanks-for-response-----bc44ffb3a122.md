---
title: 'Hi adrien , thanks for response !..'
description: >-
  For that i would suggest to change layout beforeEnter your component. Still
  App needs to know what layout is being displayed, so store is…
date: '2018-03-14T13:31:47.260Z'
categories: []
keywords: []
slug: /@kasvith/hi-adrien-thanks-for-response-bc44ffb3a122
---

Hi adrien , thanks for response !..

For that i would suggest to change layout **beforeEnter** your component. Still App needs to know what layout is being displayed, so store is used. You also can replace this with events.

One other solution is to change application layout in **created** or **mounted** hooks.