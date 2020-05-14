---
title: "Deno - first impression"
date: 2020-05-14T16:13:29+05:30
lastmod: 2020-05-14T16:13:29+05:30
draft: false
keywords: ["deno", "typescript", "ts", "javascript", "js", "es6"]
description: >-
  Deno is a new secure runtime for javascript and typescript created by Ryan Dahl, the original author of NodeJS. Recently Deno 1.0.0 was released
  and this is my first impression about it
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

<!--article-->
{{< figure class="align-center" src="/img/deno-first-impression/featured.png" >}}

Deno is a new secure runtime for javascript and typescript created by Ryan Dahl, the original author of NodeJS. Recently Deno 1.0.0 was released
and this is my first impression about it.

## Meet Deno

[Deno](https://deno.land) is a new **secure** `Typescript` and `Javascript` runtime. Yes similar to our loving **NodeJS**.
Deno was created by **Ryan Dahl** the original author of **NodeJS**.

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

Checkout standard library [here](https://deno.land/std).

### No NPM :zap:

Node's eco-system is built around NPM. A centralized package management system. So if you want to publish a package you have to go through a process to let others use it.

Golang took a radical approach to use a decentralized module system. With Go, packages can be loaded directly from a Version Control system easily. No painful process involved.

Deno allows you the same. If you can put your code somewhere on the internet(for example GitHub), you can pull it directly to your application

For example,

```typescript
import * as colors from "https://deno.land/std@0.50.0/fmt/colors.ts";
```

ES6 style imports directly over HTTP.

Don't worry, Deno knows to cache them. So you won't download it again.

Also, [Third party packages](https://deno.land/x) can be submitted here to display nicely.

### Browser like API :ok_hand:

Deno tries to stay as much as compatible with the browser. You can also have a `window` object like in a browser.

For example,
famous `fetch` is available on deno as well.

```typescript
const res = await fetch(url);
```

## Creating a simple grep command in Deno

### Install Deno

Follow the installation [guide](https://deno.land/manual/getting_started/installation) to get started with Deno. 
Check if it's installed by executing `deno` in your shell. It should be like this

{{< figure class="align-center" src="/img/deno-first-impression/deno-shell.png" caption="Deno shell" >}}

### Getting lines from Stdin

Our simple grep command will be executed like

```bash
cat file.txt | deno run sgrep.ts --colors=true needle
```

Create a file in your working directory called `sgrep.ts`

For a grep utility, we need to take input from the standard input.
Deno provides `Deno.stdin` in the global namespace so we can use it directly to access the `stdin` as we do in any programming language.

To read line by line, we can use `bufio` module provided by deno standard library. 

```typescript
import * as bufio from "https://deno.land/std@0.50.0/io/bufio.ts";
```

Now we can use `bufio.readLines()` to read. This returns an `AsynIterator` thus we can simply use our favourite `await` keyword

```typescript
import * as bufio from "https://deno.land/std@0.50.0/io/bufio.ts";

for await (const line of bufio.readLines(Deno.stdin)) {
  console.log(line);
}
```

Deno allows you to use `await` top level without wrapping it in a `async` function.

Now run this with `deno run sgrep.ts`

You will see something like below. Now try typing some words and check them echo back.

{{< figure class="align-center" src="/img/deno-first-impression/read-stdin.png" caption="Reading stdin and echo" >}}

### Parse arguments

Deno provides a simple method to get arguments anywhere. Use `Deno.args` will provide you with an array with the arguments passed after your file name

```bash
deno run file.ts --flag=1 anything after this
```

So `Deno.args` will return you an array with,

```typescript
["anything", "after", "this", "--flag=1"]
```

Now to process flags, like `--colors=true` Deno provides a standard library module called `flags`

```typescript
import { parse, Args } from "https://deno.land/std@0.50.0/flags/mod.ts";

const flags: Args = parse(Deno.args);
```

Now `flags._` will contain anything other than a flag. In the above case `["anything", "after", "this"]`.

we can check for flag value like

```typescript
  if (flags["colors"] === "true") {
    // do something
  }
```

So for our example, we need exactly one non-flag argument and need to check if colours enabled.

```typescript
if (flags._.length !== 1) {
  Deno.exit(1);
}

if (flags["colors"] === "true") {
  // output colors
}

// read the first non-flag argument as needle
const needle: string = flags._[0] as string;
```

### Showing grep output

To output, we can use `string.includes` like this

```typescript
for await (const line of bufio.readLines(Deno.stdin)) {
  if (line.includes(needle)) {
    console.log(line);
  }
}
```

For colour output, deno also provides `colors` module. 

```typescript
import * as colors from "https://deno.land/std@0.50.0/fmt/colors.ts";
```

Try running 

```typescript
console.log(colors.red("hey this is red"));
```

If your terminal supports, it will show red colour text like below.

{{< figure class="align-center" src="/img/deno-first-impression/color-output.png" caption="Color output" >}}

Now to highlight any text with the matching `needle` we can simply use a `RegEx` as below

```typescript
console.log(
    line.replace(RegExp(escapeRegExp(needle), "g"), colors.red(needle)),
 );
```

`escapeRegExp` is used to escape the regular expression syntax as described in [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping)

```typescript
function escapeRegExp(string) {
  return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
```

### Connecting dots

Now final piece in the puzzle is to connect these dots.

We already know how to output colour and in normal mode. But doing this by checking for `--colors` in the for loop is not good. 

Let's define our functions to print colour and normal

```typescript
function normalOutput(needle: string, line: string): void {
  console.log(line);
}

function colorOutput(needle: string, line: string): void {
  console.log(
    line.replace(RegExp(escapeRegExp(needle), "g"), colors.red(needle)),
  );
}
```

Both functions have the signature of `(string, string) => void`. So we can simply call them using a function callback type in `typescript`(a function pointer if you familiar with C/C++)

```typescript
let outputFn: (n: string, s: string) => void = normalOutput;
```

Now we only need to change this to `colorOutput` if the flag is enabled.

```typescript
if (flags["colors"] === "true") {
  outputFn = colorOutput;
}
```

and finally in the loop

```typescript
for await (const line of bufio.readLines(Deno.stdin)) {
  if (line.includes(needle)) {
    outputFn(needle, line);
  }
}
```

### Running only in main module

Most programming languages allow you to have a main entry point for the program.

For example in go,

```go
func main() {
  // application logic goes here
}
```

But with Node we did not have this. 

Deno solves this issue as well providing you with a way to distinguish the main module from other.

```typescript
if (import.meta.main) {
  // run main app logic
}
```

So our program needs same.

Let's refactor our program like below

### Final Code

```typescript
import * as colors from "https://deno.land/std@0.50.0/fmt/colors.ts";
import * as bufio from "https://deno.land/std@0.50.0/io/bufio.ts";
import { parse, Args } from "https://deno.land/std@0.50.0/flags/mod.ts";

function printUsage() {
  console.log("usage:");
  console.log("\tdeno sgrep.ts [--colors] needle");
}

function normalOutput(needle: string, line: string): void {
  console.log(line);
}

function escapeRegExp(s: string) {
  return s.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

function colorOutput(needle: string, line: string): void {
  console.log(
    line.replace(RegExp(escapeRegExp(needle), "g"), colors.red(needle)),
  );
}

async function run(): Promise<void> {
  let outputFn: (n: string, s: string) => void = normalOutput;

  const flags: Args = parse(Deno.args);

  if (flags._.length !== 1) {
    printUsage();
    Deno.exit(1);
  }

  if (flags["colors"] === "true") {
    outputFn = colorOutput;
  }

  const needle: string = flags._[0] as string;
  for await (const line of bufio.readLines(Deno.stdin)) {
    if (line.includes(needle)) {
      outputFn(needle, line);
    }
  }
}

if (import.meta.main) {
  await run();
}
```

### Testing our sgrep

So when we run our program, we need `cat` to pipe out input to `sgrep`.

```bash
cat file.txt | deno run sgrep.ts who
```

{{< figure class="align-center" src="/img/deno-first-impression/output-nocolor.png" caption="sgrep output without colors" >}}

```bash
cat file.txt | deno run sgrep.ts --colors=true who
```

{{< figure class="align-center" src="/img/deno-first-impression/output-color.png" caption="sgrep output with colors" >}}

Now we have created a small nice grep utility with deno. Hooray. :muscle:

You can find full code [here](https://github.com/kasvith/sgrep).

## Wrap up

Deno will change the future of Javascript and Typescript. It's still young, released v1.0.0 in 2020-05-13. But you now see its potential. The power brings down you with `Typescript` and other cool features. Rest is up to your imagination.

Visit [deno.land](https://deno.land) today and start exploring this amazing world.

We should thank Ryan Dahl and other contributors for creating this amazing runtime.

Let's deno :fire:
