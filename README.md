# @n8n-dev/n8n-nodes-hcloud

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-hcloud.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-hcloud)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing hcloud API integrations by hand.**

Every time you connect n8n to hcloud, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if your n8n node just... worked?**

This node gives you **21+ resources** out of the box: **Actions**, **Certificates**, **Datacenters**, **Firewalls**, **Floating Ips**, and 16 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **21+ resources**: **Actions**, **Certificates**, **Datacenters**, **Firewalls**, **Floating Ips**, and 16 more
- **Full CRUD**: Create, Read, Update, Delete operations for every resource
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

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
| Actions | Get multiple Actions, Get an Action |
| Certificates | List Certificates, Create a Certificate, Delete a Certificate, Get a Certificate, Update a Certificate, List Actions for a Certificate, Get an Action for a Certificate, Retry Issuance or Renewal, List Actions, Get an Action |
| Datacenters | List Data Centers, Get a Data Center |
| Firewalls | List Firewalls, Create a Firewall, Delete a Firewall, Get a Firewall, Update a Firewall, List Actions for a Firewall, Get an Action for a Firewall, Apply to Resources, Remove from Resources, Set Rules, List Actions, Get an Action |
| Floating Ips | List Floating IPs, Create a Floating IP, Delete a Floating IP, Get a Floating IP, Update a Floating IP, List Actions for a Floating IP, Get an Action for a Floating IP, Assign a Floating IP to a Server, Change reverse DNS records for a Floating IP, Change Floating IP Protection, Unassign a Floating IP, List Actions, Get an Action |
| Images | List Images, Delete an Image, Get an Image, Update an Image, List Actions for an Image, Get an Action for an Image, Change Image Protection, List Actions, Get an Action |
| Isos | List ISOs, Get an ISO |
| Load Balancer Types | List Load Balancer Types, Get a Load Balancer Type |
| Load Balancers | List Load Balancers, Create a Load Balancer, Delete a Load Balancer, Get a Load Balancer, Update a Load Balancer, List Actions for a Load Balancer, Get an Action for a Load Balancer, Add Service, Add Target, Attach a Load Balancer to a Network, Change Algorithm, Change reverse DNS entry for this Load Balancer, Change Load Balancer Protection, Change the Type of a Load Balancer, Delete Service, Detach a Load Balancer from a Network, Disable the public interface of a Load Balancer, Enable the public interface of a Load Balancer, Remove Target, Update Service, Get Metrics for a LoadBalancer, List Actions, Get an Action |
| Locations | List Locations, Get a Location |
| Networks | List Networks, Create a Network, Delete a Network, Get a Network, Update a Network, List Actions for a Network, Get an Action for a Network, Add a route to a Network, Add a subnet to a Network, Change IP range of a Network, Change Network Protection, Delete a route from a Network, Delete a subnet from a Network, List Actions, Get an Action |
| Placement Groups | List Placement Groups, Create a PlacementGroup, Delete a PlacementGroup, Get a PlacementGroup, Update a PlacementGroup |
| Pricing | Get all prices |
| Primary Ips | List Primary IPs, Create a Primary IP, Delete a Primary IP, Get a Primary IP, Update a Primary IP, List Actions for a Primary IP, Get an Action for a Primary IP, Assign a Primary IP to a resource, Change reverse DNS records for a Primary IP, Change Primary IP Protection, Unassign a Primary IP from a resource, List Actions, Get an Action |
| Server Types | List Server Types, Get a Server Type |
| Servers | List Servers, Create a Server, Delete a Server, Get a Server, Update a Server, List Actions for a Server, Get an Action for a Server, Add a Server to a Placement Group, Attach an ISO to a Server, Attach a Server to a Network, Change alias IPs of a Network, Change reverse DNS entry for this Server, Change Server Protection, Change the Type of a Server, Create Image from a Server, Detach a Server from a Network, Detach an ISO from a Server, Disable Backups for a Server, Disable Rescue Mode for a Server, Enable and Configure Backups for a Server, Enable Rescue Mode for a Server, Power off a Server, Power on a Server, Soft-reboot a Server, Rebuild a Server from an Image, Remove from Placement Group, Request Console for a Server, Reset a Server, Reset root Password of a Server, Shutdown a Server, Get Metrics for a Server, List Actions, Get an Action |
| Ssh Keys | List SSH keys, Create an SSH key, Delete an SSH key, Get a SSH key, Update an SSH key |
| Storage Box Types | List Storage Box Types, Get a Storage Box Type |
| Storage Boxes | List Storage Boxes, Create a Storage Box, List Actions, Get an Action, Delete a Storage Box, Get a Storage Box, Update a Storage Box, List Actions for a Storage Box, Change Protection, Change Type, Disable Snapshot Plan, Enable Snapshot Plan, Reset Password, Rollback Snapshot, Update Access Settings, Get an Action for a Storage Box, List folders of a Storage Box, List Snapshots, Create a Snapshot, Delete a Snapshot, Get a Snapshot, Update a Snapshot, List Subaccounts, Create a Subaccount, Delete a Subaccount, Get a Subaccount, Update a Subaccount, Change Home Directory, Reset Password, Update Access Settings |
| Volumes | List Volumes, Create a Volume, Delete a Volume, Get a Volume, Update a Volume, List Actions for a Volume, Get an Action for a Volume, Attach Volume to a Server, Change Volume Protection, Detach Volume, Resize Volume, List Actions, Get an Action |
| Zones | List Zones, Create a Zone, List Actions, Get an Action, Delete a Zone, Get a Zone, Update a Zone, List Actions for a Zone, Change a Zone's Primary Nameservers, Change a Zone's Protection, Change a Zone's Default TTL, Import a Zone file, Get an Action for a Zone, List RRSets, Create an RRSet, Delete an RRSet, Get an RRSet, Update an RRSet, Add Records to an RRSet, Change an RRSet's Protection, Change an RRSet's TTL, Remove Records from an RRSet, Set Records of an RRSet, Update Records of an RRSet, Export a Zone file |

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
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate).

When the hcloud API updates, this node updates too.

---

## Support This Project

This node was built by one developer who wanted to make n8n + OpenAPI effortless for everyone.

Your donation funds new features, more API support, and better tooling for every developer after you.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/kelvinzer0)
