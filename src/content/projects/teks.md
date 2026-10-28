---
repo: kasvith/teks
lang: Go
stars: 41
description: Custom Go template output for your command-line tool, like in Docker and Kubernetes.
order: 3
---

Docker and Kubernetes let you shape CLI output with Go templates through a `--format` flag. teks brings the same thing to any Go command-line tool as a library. It's heavily inspired by the Docker CLI.

## Highlights

- `json` and `jsonPretty` output
- Template helpers: `upper`, `lower`, `title`, `split` and `join`
- Table output with your own column headers

## Quick look

```go
// go get github.com/kasvith/teks
ctx := teks.NewContext(os.Stdout, format)

renderer := func(w io.Writer, t *template.Template) error {
	for _, p := range persons {
		if err := t.Execute(w, p); err != nil {
			return err
		}
	}
	return nil
}
```
