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
| Actions | Get Multiple Actions, Get Action |
| Certificates | List Certificates, Create Certificate, Delete Certificate, Get Certificate, Replace Certificate, List Actions For Certificate, Get Action For Certificate, Retry Issuance Or Renewal, List Certificate Actions, Get Certificate Action |
| Datacenters | List Data Centers, Get Data Center |
| Firewalls | List Firewalls, Create Firewall, Delete Firewall, Get Firewall, Replace Firewall, List Actions For Firewall, Get Action For Firewall, Apply To Resources, Remove From Resources, Set Rules, List Firewall Actions, Get Firewall Action |
| Floating Ips | List Floating Ips, Create Floating Ip, Delete Floating Ip, Get Floating Ip, Replace Floating Ip, List Actions For Floating Ip, Get Action For Floating Ip, Assign Floating Ip To Server, Change Reverse Dns Records For Floating Ip, Change Floating Ip Protection, Unassign Floating Ip, List Floating Ip Actions, Get Floating Ip Action |
| Images | List Images, Delete Image, Get Image, Replace Image, List Actions For Image, Get Action For Image, Change Image Protection, List Image Actions, Get Image Action |
| Isos | List Isos, Get Iso |
| Load Balancer Types | List Load Balancer Types, Get Load Balancer Type |
| Load Balancers | List Load Balancers, Create Load Balancer, Delete Load Balancer, Get Load Balancer, Replace Load Balancer, List Actions For Load Balancer, Get Action For Load Balancer, Add Service, Add Target, Attach Load Balancer To Network, Change Algorithm, Change Reverse Dns Entry For This Load Balancer, Change Load Balancer Protection, Change Type Of Load Balancer, Delete Service, Detach Load Balancer From Network, Disable Public Interface Of Load Balancer, Enable Public Interface Of Load Balancer, Remove Target, Update Service, Get Metrics For Loadbalancer, List Load Balancer Actions, Get Load Balancer Action |
| Locations | List Locations, Get Location |
| Networks | List Networks, Create Network, Delete Network, Get Network, Replace Network, List Actions For Network, Get Action For Network, Add Route To Network, Add Subnet To Network, Change Ip Range Of Network, Change Network Protection, Delete Route From Network, Delete Subnet From Network, List Network Actions, Get Network Action |
| Placement Groups | List Placement Groups, Create Placementgroup, Delete Placementgroup, Get Placementgroup, Replace Placementgroup |
| Pricing | List Prices |
| Primary Ips | List Primary Ips, Create Primary Ip, Delete Primary Ip, Get Primary Ip, Replace Primary Ip, List Actions For Primary Ip, Get Action For Primary Ip, Assign Primary Ip To Resource, Change Reverse Dns Records For Primary Ip, Change Primary Ip Protection, Unassign Primary Ip From Resource, List Primary Ip Actions, Get Primary Ip Action |
| Server Types | List Server Types, Get Server Type |
| Servers | List Servers, Create Server, Delete Server, Get Server, Replace Server, List Actions For Server, Get Action For Server, Add Server To Placement Group, Attach Iso To Server, Attach Server To Network, Change Alias Ips Of Network, Change Reverse Dns Entry For This Server, Change Server Protection, Change Type Of Server, Create Image From Server, Detach Server From Network, Detach Iso From Server, Disable Backups For Server, Disable Rescue Mode For Server, Enable And Configure Backups For Server, Enable Rescue Mode For Server, Power Off Server, Power On Server, Soft Reboot Server, Rebuild Server From Image, Remove From Placement Group, Request Console For Server, Reset Server, Reset Root Password Of Server, Shutdown Server, Get Metrics For Server, List Server Actions, Get Server Action |
| Ssh Keys | List Ssh Keys, Create Ssh Key, Delete Ssh Key, Get Ssh Key, Replace Ssh Key |
| Storage Box Types | List Storage Box Types, Get Storage Box Type |
| Storage Boxes | List Storage Boxes, Create Storage Box, List Storage Box Actions, Get Storage Box Action, Delete Storage Box, Get Storage Box, Replace Storage Box, List Actions For Storage Box, Change Protection, Change Type, Disable Snapshot Plan, Enable Snapshot Plan, Reset Storage Box Password, Rollback Snapshot, Update Storage Box Access Settings, Get Action For Storage Box, List Folders Of Storage Box, List Snapshots, Create Snapshot, Delete Snapshot, Get Snapshot, Replace Snapshot, List Subaccounts, Create Subaccount, Delete Subaccount, Get Subaccount, Replace Subaccount, Change Home Directory, Reset Storage Box Subaccount Password, Update Storage Box Subaccount Access Settings |
| Volumes | List Volumes, Create Volume, Delete Volume, Get Volume, Replace Volume, List Actions For Volume, Get Action For Volume, Attach Volume To Server, Change Volume Protection, Detach Volume, Resize Volume, List Volume Actions, Get Volume Action |
| Zones | List Zones, Create Zone, List Zone Actions, Get Zone Action, Delete Zone, Get Zone, Replace Zone, List Actions For Zone, Change Zones Primary Nameservers, Change Zones Protection, Change Zones Default Ttl, Import Zone File, Get Action For Zone, List Rrsets, Create Rrset, Delete Rrset, Get Rrset, Replace Rrset, Add Records To Rrset, Change Rrsets Protection, Change Rrsets Ttl, Remove Records From Rrset, Set Records Of Rrset, Update Records Of Rrset, Export Zone File |

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
