# @n8n-dev/n8n-nodes-hcloud

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-hcloud.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-hcloud)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing hcloud API integrations by hand.**

Every time you connect n8n to hcloud, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to hcloud took 5 minutes, not half a day?**

This node gives you **21+ resources** out of the box: **Actions**, **Certificates**, **Datacenters**, **Firewalls**, **Floating Ips**, and 16 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
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
| Actions | GET Get multiple Actions, GET Get an Action |
| Certificates | GET List Certificates, POST Create a Certificate, DELETE Delete a Certificate, GET Get a Certificate, PUT Update a Certificate, GET List Actions for a Certificate, GET Get an Action for a Certificate, POST Retry Issuance or Renewal, GET List Actions, GET Get an Action |
| Datacenters | GET List Data Centers, GET Get a Data Center |
| Firewalls | GET List Firewalls, POST Create a Firewall, DELETE Delete a Firewall, GET Get a Firewall, PUT Update a Firewall, GET List Actions for a Firewall, GET Get an Action for a Firewall, POST Apply to Resources, POST Remove from Resources, POST Set Rules, GET List Actions, GET Get an Action |
| Floating Ips | GET List Floating IPs, POST Create a Floating IP, DELETE Delete a Floating IP, GET Get a Floating IP, PUT Update a Floating IP, GET List Actions for a Floating IP, GET Get an Action for a Floating IP, POST Assign a Floating IP to a Server, POST Change reverse DNS records for a Floating IP, POST Change Floating IP Protection, POST Unassign a Floating IP, GET List Actions, GET Get an Action |
| Images | GET List Images, DELETE Delete an Image, GET Get an Image, PUT Update an Image, GET List Actions for an Image, GET Get an Action for an Image, POST Change Image Protection, GET List Actions, GET Get an Action |
| Isos | GET List ISOs, GET Get an ISO |
| Load Balancer Types | GET List Load Balancer Types, GET Get a Load Balancer Type |
| Load Balancers | GET List Load Balancers, POST Create a Load Balancer, DELETE Delete a Load Balancer, GET Get a Load Balancer, PUT Update a Load Balancer, GET List Actions for a Load Balancer, GET Get an Action for a Load Balancer, POST Add Service, POST Add Target, POST Attach a Load Balancer to a Network, POST Change Algorithm, POST Change reverse DNS entry for this Load Balancer, POST Change Load Balancer Protection, POST Change the Type of a Load Balancer, POST Delete Service, POST Detach a Load Balancer from a Network, POST Disable the public interface of a Load Balancer, POST Enable the public interface of a Load Balancer, POST Remove Target, POST Update Service, GET Get Metrics for a LoadBalancer, GET List Actions, GET Get an Action |
| Locations | GET List Locations, GET Get a Location |
| Networks | GET List Networks, POST Create a Network, DELETE Delete a Network, GET Get a Network, PUT Update a Network, GET List Actions for a Network, GET Get an Action for a Network, POST Add a route to a Network, POST Add a subnet to a Network, POST Change IP range of a Network, POST Change Network Protection, POST Delete a route from a Network, POST Delete a subnet from a Network, GET List Actions, GET Get an Action |
| Placement Groups | GET List Placement Groups, POST Create a PlacementGroup, DELETE Delete a PlacementGroup, GET Get a PlacementGroup, PUT Update a PlacementGroup |
| Pricing | GET Get all prices |
| Primary Ips | GET List Primary IPs, POST Create a Primary IP, DELETE Delete a Primary IP, GET Get a Primary IP, PUT Update a Primary IP, GET List Actions for a Primary IP, GET Get an Action for a Primary IP, POST Assign a Primary IP to a resource, POST Change reverse DNS records for a Primary IP, POST Change Primary IP Protection, POST Unassign a Primary IP from a resource, GET List Actions, GET Get an Action |
| Server Types | GET List Server Types, GET Get a Server Type |
| Servers | GET List Servers, POST Create a Server, DELETE Delete a Server, GET Get a Server, PUT Update a Server, GET List Actions for a Server, GET Get an Action for a Server, POST Add a Server to a Placement Group, POST Attach an ISO to a Server, POST Attach a Server to a Network, POST Change alias IPs of a Network, POST Change reverse DNS entry for this Server, POST Change Server Protection, POST Change the Type of a Server, POST Create Image from a Server, POST Detach a Server from a Network, POST Detach an ISO from a Server, POST Disable Backups for a Server, POST Disable Rescue Mode for a Server, POST Enable and Configure Backups for a Server, POST Enable Rescue Mode for a Server, POST Power off a Server, POST Power on a Server, POST Soft-reboot a Server, POST Rebuild a Server from an Image, POST Remove from Placement Group, POST Request Console for a Server, POST Reset a Server, POST Reset root Password of a Server, POST Shutdown a Server, GET Get Metrics for a Server, GET List Actions, GET Get an Action |
| Ssh Keys | GET List SSH keys, POST Create an SSH key, DELETE Delete an SSH key, GET Get a SSH key, PUT Update an SSH key |
| Storage Box Types | GET List Storage Box Types, GET Get a Storage Box Type |
| Storage Boxes | GET List Storage Boxes, POST Create a Storage Box, GET List Actions, GET Get an Action, DELETE Delete a Storage Box, GET Get a Storage Box, PUT Update a Storage Box, GET List Actions for a Storage Box, POST Change Protection, POST Change Type, POST Disable Snapshot Plan, POST Enable Snapshot Plan, POST Reset Password, POST Rollback Snapshot, POST Update Access Settings, GET Get an Action for a Storage Box, GET List folders of a Storage Box, GET List Snapshots, POST Create a Snapshot, DELETE Delete a Snapshot, GET Get a Snapshot, PUT Update a Snapshot, GET List Subaccounts, POST Create a Subaccount, DELETE Delete a Subaccount, GET Get a Subaccount, PUT Update a Subaccount, POST Change Home Directory, POST Reset Password, POST Update Access Settings |
| Volumes | GET List Volumes, POST Create a Volume, DELETE Delete a Volume, GET Get a Volume, PUT Update a Volume, GET List Actions for a Volume, GET Get an Action for a Volume, POST Attach Volume to a Server, POST Change Volume Protection, POST Detach Volume, POST Resize Volume, GET List Actions, GET Get an Action |
| Zones | GET List Zones, POST Create a Zone, GET List Actions, GET Get an Action, DELETE Delete a Zone, GET Get a Zone, PUT Update a Zone, GET List Actions for a Zone, POST Change a Zone's Primary Nameservers, POST Change a Zone's Protection, POST Change a Zone's Default TTL, POST Import a Zone file, GET Get an Action for a Zone, GET List RRSets, POST Create an RRSet, DELETE Delete an RRSet, GET Get an RRSet, PUT Update an RRSet, POST Add Records to an RRSet, POST Change an RRSet's Protection, POST Change an RRSet's TTL, POST Remove Records from an RRSet, POST Set Records of an RRSet, POST Update Records of an RRSet, GET Export a Zone file |

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
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the hcloud API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/kelvinzer0)
