---
title: Why should you learn Regex
description: >-
  Regex is also known as Regular Expressions which comes in handy in many text
  processing scenarios. Regex defines a search pattern using…
date: '2019-05-09T13:44:12.326Z'
draft: true
categories: []
keywords: []
slug: /@kasvith/why-should-you-learn-regex-66586ba259e0
---

![](img/1__Q__PXSDLoBvj__xGxW4tyC6A.png)

Regular Expressions, also known as Regex, come in handy in a multitude of text processing scenarios. Regex defines a search pattern using symbols and allows you to find matches within strings. The applications of this span from software engineering to data science and beyond.

Popular programming languages like Go, Java, C#, Python, and JavaScript support Regex very well. Most text editors also allow you to use Regex in _Find and Replace_ matches in your code.

### Regex looks alien to me

Until recently I felt that Regex was very complicated. I was afraid of it. The syntax looks so frustrating, and I thought I would never learn anything about it. This happens to us all.

![](img/0__pe52NVnHTTZ__YL__M.jpg)

Luckily I found good online resources back then and started to really dig into it. The results were remarkable, and now I use it every day. It serves as a great tool to boost up my workflow.

Do not be afraid. Even it looks unfamiliar you will get used to it eventually and you will learn it more by applying it today scenarios like I’m going to show you now.

### The Problem

Following my internship, I came upon to a situation where I had to write some Go code which has a struct of many fields

> **DO NOT WORRY, I AM NOT SPEAKING IN GO AFTER THIS SECTION**.

Sample file:

usecasestype APIDefinition struct {  
   ID struct {  
      ProviderName string \`json:"providerName"\`  
      APIName      string \`json:"apiName"\`  
      Version      string \`json:"version"\`  
   } \`json:"id"\`  
   UUID            string   \`json:"uuid"\`  
   Type            string   \`json:"type"\`  
   Context         string   \`json:"context"\`  
   ContextTemplate string   \`json:"contextTemplate"\`  
   Tags            \[\]string \`json:"tags"\`  
   Documents       \[\]string \`json:"documents"\`  
   LastUpdated     string   \`json:"lastUpdated"\`  
   AvailableTiers  \[\]struct {  
      Name               string \`json:"name"\`  
      DisplayName        string \`json:"displayName"\`  
      Description        string \`json:"description"\`  
...

To follow my task I had to add transform above into something similar below.

type APIDefinition struct {  
   ID struct {  
      ProviderName string \`json:"providerName" yaml:"providerName" yaml:"providerName"\`  
      APIName      string \`json:"apiName" yaml:"apiName"\`  
      Version      string \`json:"version" yaml:"version"\`  
   } \`json:"id" yaml:"id"\`  
   UUID            string   \`json:"uuid" yaml:"uuid"\`  
   Type            string   \`json:"type" yaml:"type"\`  
   Context         string   \`json:"context" yaml:"context"\`  
   ContextTemplate string   \`json:"contextTemplate" yaml:"contextTemplate"\`  
   Tags            \[\]string \`json:"tags" yaml:"tags"\`

Yes, I had to add **yaml:“someField”** right after the JSON one.

> So what’s the big deal eh?

Yes, we can also copy one JSON tag and paste it right next changing the name to yaml.

But when there are multiple fields, this task is pretty **boring** and also **error-prone**.

### Regex to rescue

Since this is a tedious task, I decided to use my knowledge of Regex to save me. I needed find every field with a `json` prefix and paste them with yaml.

So I opened my IDE and typed the following

(json:\\”(\\w+)\\”)

This is a grumpy regex statement.

What it does as follows.

*   `( )` will capture anything inside the brackets, we can refer to these capturing groups using $1,$2 etc.
*   `json:` will look for “json:” in the text, which is a case-sensitive exact match
*   `\"` will look for a `"` in the text (`\` is a escaping character in regex)
*   `\w+` will look for any word character

![regex101.com matching information](img/1__9qRzYHxOLIwtHR4BTz5HFw.png)
regex101.com matching information

As you can see all the information we need is captured.

Now its time for magic.

What we need to do is add `yaml:“whatEverTheString”` right next to `json:“whatEverTheString”`.

To do that we simply use a substitute command for regex like follows.

$1 yaml:"$2"

`$1` refers to Group _1_ in the above figure. `$2` is _Group 2_.

In here we do a full substitute for the match, we will need to replace the original match plus whatever we want.

So the above command will replace

json:"whatever"

with

json:"whatever" yaml:"whatever"

Which is what we exactly want.

Viola!

### How should I learn regex?

If you are amazed and you want to be productive with your text editing, you may ask yourself where should I learn regex?

There are plenty of online resources and books you can find. Most importantly, you need to practice it. Use it in real life to save yourself a bunch of typing, mouse moving, etc.

I will put some resources I found pretty useful during my journey.

*   [https://regexr.com/](https://regexr.com/)
*   [https://regexone.com/](https://regexone.com/)
*   [https://regex101.com/](https://regex101.com/)

### Conclusion

Regex is your friend. You may have gone through even more complex tasks involving text transformation in your day to day life. It may take a lot of time and also produce some errors, because we are human, we hate boring things.

Use Regex to save you. Use it as a tool. It is not only for writing code, but it is a general tool which can save your time a lot.

If I performed the task above manually, I may be doing it for several minutes. I would have to copy-paste a whole bunch. If it was larger I would have spent hours doing it. Regex will also cause fewer errors when making changes.

I learned Regex some time ago and it still runs in my bloodstream as I tended to use it every chance I get. Taking a few seconds to write the Regex will save a lot of time.

Learning regex can be known as a lifetime investment. It has endless use cases. If you see it useful, start learning right now.

> Learn it and save your time.

![May the regex be with you.](img/0__yZdhSlkJ46qDBObI.jpg)
May the regex be with you.