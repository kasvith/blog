---
repo: wavezync/durable
lang: Elixir
stars: 209
site: https://durable.wavezync.com
description: A durable workflow execution engine for Elixir.
order: 1
---

Durable runs reliable, resumable workflows in Elixir, in the spirit of Temporal and Inngest. You write a workflow as plain steps. Every step is saved to PostgreSQL, so runs pick up where they left off after crashes, deploys and long waits.

## Highlights

- Context flows from step to step in a simple pipeline
- Sleep, wait for events, or wait for human approval
- Automatic retries with exponential, linear or constant backoff
- Branching, parallel steps, saga-style compensations and cron schedules
- Parent and child workflows, plus a separate dashboard package

## Quick look

```elixir
defmodule MyApp.OrderWorkflow do
  use Durable
  use Durable.Helpers

  workflow "process_order", timeout: hours(2) do
    step :validate, fn input ->
      {:ok, %{order_id: input["id"], items: input["items"]}}
    end

    step :charge_payment, [retry: [max_attempts: 3, backoff: :exponential]], fn ctx ->
      {:ok, charge} = PaymentService.charge(ctx.order_id, ctx.total)
      {:ok, assign(ctx, :charge_id, charge.id)}
    end
  end
end
```
