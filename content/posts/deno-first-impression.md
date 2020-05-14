---
title: "Deno - first impression"
date: 2020-05-14T16:13:29+05:30
lastmod: 2020-05-14T16:13:29+05:30
draft: true
keywords: ["deno", "typescript", "ts", "javascript", "js", "es6"]
description: ""
tags: ["deno", "typescript", "ts", "javascript", "js", "es6"]
categories: ["deno", "typescript"]
author: "Kasun Vithanage"

# You can also close(false) or open(true) something for this content.
# P.S. comment can only be closed
comment: true
toc: true
autoCollapseToc: false
postMetaInFooter: false
hiddenFromHomePage: false
# You can also define another contentCopyright. e.g. contentCopyright: "This is another copyright."
contentCopyright: false
reward: false
mathjax: false
mathjaxEnableSingleDollar: false
mathjaxEnableAutoNumber: false

# You unlisted posts you might want not want the header or footer to show
hideHeaderAndFooter: false

# You can enable or disable out-of-date content warning for individual post.
# Comment this out to use the global config.
#enableOutdatedInfoWarning: false

flowchartDiagrams:
  enable: false
  options: ""

sequenceDiagrams: 
  enable: false
  options: ""

---

<!--more-->
{{< figure class="align-center" src="/img/deno-first-impression/featured.png" >}}

## Meet Deno

[Deno](https://deno.land) is a new **secure** `Typescript` and `Javascript` runtime. Yes similar to our loving **NodeJS**.
Deno was created by **Ryan Dhal** the original author of **NodeJS**.

Deno is written in Rust, Tokio and Typescript using V8 under the hood.

## Why Deno, why another Node

So you might be wondering why Ryan put all his efforts to develop something new as Deno while his previous project NodeJS has gained a massive community and used by almost everyone today.

NodeJS was developed in 2009. Javascript today we see was not there when they were developing Node. Yes, that's why there is callback hell even in most libraries today you see. Node had to invent new concepts, later adopted by organizations like ECMA as language features. With the large userbase, Node moved very slowly.

You might be thinking what about babel, we can use new language features with Node easily using Babel. But you need to admit that it involves a lot of external tooling and if you ever tried to use Typescript with NodeJS, it's creating a lot of boilerplate codes.

This is not very pleasing. In my personal experience, this is taking some time to set up correct tooling and you need to maintain them as well.

Checkout [10 Things I Regret About Node.js - Ryan Dahl](https://www.youtube.com/watch?v=M3BM9TB-8yA) for more.

Let's check how Deno solves these issues.

## Features

According to the official website [deno.land](https://deno.land), Deno provides these key features

- Secure by default. No file, network, or environment access, unless explicitly enabled.
- Supports TypeScript out of the box.
- Ships only a single executable file.
- Has built-in utilities like a dependency inspector (`deno info`) and a code formatter (`deno fmt`).
- Has a set of reviewed (audited) standard modules that are guaranteed to work with Deno: [deno.land/std](https://deno.land/std)

In addition following things can be noticed

- Decentralized module system
- Browser like API

### Secure by default :lock:

Deno provides a sandboxed environment. So when executing any program, you can determine if it can access your network, filesystem or environment variables etc. This means you can execute a script directly from the internet and control how it behaves. Just like a browser.

### Typescript support :rocket:

Javascript is not good when your program scales. Typed languages provide much more insights and even cut half of the errors at compile time rather than in production. Typescript is written for Javascript, with types. Most JS developers love Typescript. 

With Node, you have to transpile Typescript to Javascript using tools. Deno does this for you and even provides fewer boilerplates in your code.

### Single Binary, no dependencies :package:

Deno is shipped as a single binary with no dependencies. If you compared to NodeJS comes with tons of shared libraries and other stuff, deno is much simpler. it's about ~14MB. Simple to install and maintain. Even perfect for DevOps environments.

Install Deno [Now](https://deno.land/#installation). It's simple. :100:

### Excellent tooling :hammer:

Have you ever worked with language like [Golang](https://go.dev/)? Golang provides an excellent toolset with go command. You can format your code, find potential bugs and there are a ton of things you can do with it. Everyone uses `go fmt`. So the code looks the same everywhere.

But in JS world, we need to use external tools to achieve this. Also, there are like tons of coding styles. 

Deno solves the issue by providing tooling itself. Yes, no extra tools needed. Run `deno fmt` in your project to format your code. Deno even provides a way to bundle your code without any tools like Webpack with `deno bundle`. Also, you can install scripts with `deno install`

Read more about tooling [here](https://deno.land/manual/tools)

### Standard Library :books:

Deno provides a well written standard library. This allows writing programs as you do in a language like Golang. Provides much stuff out of the box so it's up to your imagination.

But the API is not compatible for NodeJS. But there are plans to bring existing large Node package base to Deno easily.

Checkout standard library [here](https://deno.land/std)Deno provides a well written standard library. This allows writing programs as you do in a language like Golang. Provides much stuff out of the box so it's up to your imagination.

But the API is not compatible for NodeJS. But there are plans to bring existing large Node package base to Deno easily.

Checkout standard library [here](https://deno.land/std)

### No NPM
