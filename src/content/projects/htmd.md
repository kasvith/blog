---
repo: kasvith/htmd
lang: Elixir
stars: 43
site: https://hexdocs.pm/htmd
description: A fast HTML to Markdown converter for Elixir, powered by Rust.
order: 5
---

Fast HTML to Markdown conversion for Elixir. It wraps the Rust htmd crate as a NIF through Rustler, for apps that process a lot of HTML.

## Highlights

- Rust speed for HTML parsing and Markdown output
- Options for heading style, list markers, link style and code blocks
- Skip specific tags during conversion
- Safe Rust and Elixir interop through Rustler

## Quick look

```elixir
{:ok, markdown} = Htmd.convert("<h1>Hello World</h1>")
# => {:ok, "# Hello World"}

Htmd.convert(html, heading_style: :setex, skip_tags: ["img"])
```
