# @n8n-dev/n8n-nodes-hcloud

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-hcloud.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-hcloud)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing hcloud API integrations by hand.**

Every time you connect n8n to hcloud, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if your n8n node just... worked?**

This node gives you **21+ resources** out of the box — **Actions**, **Certificates**, **Datacenters**, **Firewalls**, **Floating Ips**, and 16 more — with full CRUD operations, typed parameters, and zero manual configuration.

> One developer built a tool that auto-generates n8n nodes from any OpenAPI spec.
>
> Your donation funds new features, more API support, and better tooling for every developer after you.

---

## What You Get

- **21+ resources** — **Actions**, **Certificates**, **Datacenters**, **Firewalls**, **Floating Ips**, and 16 more
- **Full CRUD** — Create, Read, Update, Delete operations for every resource
- **Typed parameters** — No more guessing field types
- **Built-in auth** — API key authentication, ready to go
- **Declarative** — Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-hcloud
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-hcloud`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **hcloud API** → paste your API key
3. Drag the **hcloud** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Actions | Create, Get, List, Update, Delete |
| Certificates | Create, Get, List, Update, Delete |
| Datacenters | Create, Get, List, Update, Delete |
| Firewalls | Create, Get, List, Update, Delete |
| Floating Ips | Create, Get, List, Update, Delete |
| Images | Create, Get, List, Update, Delete |
| Isos | Create, Get, List, Update, Delete |
| Load Balancer Types | Create, Get, List, Update, Delete |
| Load Balancers | Create, Get, List, Update, Delete |
| Locations | Create, Get, List, Update, Delete |
| Networks | Create, Get, List, Update, Delete |
| Placement Groups | Create, Get, List, Update, Delete |
| Pricing | Create, Get, List, Update, Delete |
| Primary Ips | Create, Get, List, Update, Delete |
| Server Types | Create, Get, List, Update, Delete |
| Servers | Create, Get, List, Update, Delete |
| Ssh Keys | Create, Get, List, Update, Delete |
| Storage Box Types | Create, Get, List, Update, Delete |
| Storage Boxes | Create, Get, List, Update, Delete |
| Volumes | Create, Get, List, Update, Delete |
| Zones | Create, Get, List, Update, Delete |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from hcloud docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official hcloud OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated

This node was auto-generated from the official **hcloud** OpenAPI specification using
[@kelvinzer0/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate).

When the hcloud API updates, this node updates too.

---

## License

MIT © [kelvinzer0](https://github.com/kelvinzer0)
