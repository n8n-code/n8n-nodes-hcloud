# @n8n-dev/n8n-nodes-hcloud

![hcloud Banner](banner.svg)

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
- **Full CRUD**: Create, read, update, and delete support where the API allows it
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

<details>
<summary><b>Actions</b> (2 operations)</summary>

- Get multiple Actions
- Get an Action

</details>

<details>
<summary><b>Certificates</b> (10 operations)</summary>

- Get List Certificates
- Post Create a Certificate
- Delete a Certificate
- Get a Certificate
- Put Update a Certificate
- Get List Actions for a Certificate
- Get an Action for a Certificate
- Post Retry Issuance or Renewal
- Get List Actions
- Get an Action

</details>

<details>
<summary><b>Datacenters</b> (2 operations)</summary>

- Get List Data Centers
- Get a Data Center

</details>

<details>
<summary><b>Firewalls</b> (12 operations)</summary>

- Get List Firewalls
- Post Create a Firewall
- Delete a Firewall
- Get a Firewall
- Put Update a Firewall
- Get List Actions for a Firewall
- Get an Action for a Firewall
- Post Apply to Resources
- Post Remove from Resources
- Post Set Rules
- Get List Actions
- Get an Action

</details>

<details>
<summary><b>Floating Ips</b> (13 operations)</summary>

- Get List Floating IPs
- Post Create a Floating IP
- Delete a Floating IP
- Get a Floating IP
- Put Update a Floating IP
- Get List Actions for a Floating IP
- Get an Action for a Floating IP
- Post Assign a Floating IP to a Server
- Post Change reverse DNS records for a Floating IP
- Post Change Floating IP Protection
- Post Unassign a Floating IP
- Get List Actions
- Get an Action

</details>

<details>
<summary><b>Images</b> (9 operations)</summary>

- Get List Images
- Delete an Image
- Get an Image
- Put Update an Image
- Get List Actions for an Image
- Get an Action for an Image
- Post Change Image Protection
- Get List Actions
- Get an Action

</details>

<details>
<summary><b>Isos</b> (2 operations)</summary>

- Get List ISOs
- Get an ISO

</details>

<details>
<summary><b>Load Balancer Types</b> (2 operations)</summary>

- Get List Load Balancer Types
- Get a Load Balancer Type

</details>

<details>
<summary><b>Load Balancers</b> (23 operations)</summary>

- Get List Load Balancers
- Post Create a Load Balancer
- Delete a Load Balancer
- Get a Load Balancer
- Put Update a Load Balancer
- Get List Actions for a Load Balancer
- Get an Action for a Load Balancer
- Post Add Service
- Post Add Target
- Post Attach a Load Balancer to a Network
- Post Change Algorithm
- Post Change reverse DNS entry for this Load Balancer
- Post Change Load Balancer Protection
- Post Change the Type of a Load Balancer
- Post Delete Service
- Post Detach a Load Balancer from a Network
- Post Disable the public interface of a Load Balancer
- Post Enable the public interface of a Load Balancer
- Post Remove Target
- Post Update Service
- Get Metrics for a LoadBalancer
- Get List Actions
- Get an Action

</details>

<details>
<summary><b>Locations</b> (2 operations)</summary>

- Get List Locations
- Get a Location

</details>

<details>
<summary><b>Networks</b> (15 operations)</summary>

- Get List Networks
- Post Create a Network
- Delete a Network
- Get a Network
- Put Update a Network
- Get List Actions for a Network
- Get an Action for a Network
- Post Add a route to a Network
- Post Add a subnet to a Network
- Post Change IP range of a Network
- Post Change Network Protection
- Post Delete a route from a Network
- Post Delete a subnet from a Network
- Get List Actions
- Get an Action

</details>

<details>
<summary><b>Placement Groups</b> (5 operations)</summary>

- Get List Placement Groups
- Post Create a PlacementGroup
- Delete a PlacementGroup
- Get a PlacementGroup
- Put Update a PlacementGroup

</details>

<details>
<summary><b>Pricing</b> (1 operations)</summary>

- Get all prices

</details>

<details>
<summary><b>Primary Ips</b> (13 operations)</summary>

- Get List Primary IPs
- Post Create a Primary IP
- Delete a Primary IP
- Get a Primary IP
- Put Update a Primary IP
- Get List Actions for a Primary IP
- Get an Action for a Primary IP
- Post Assign a Primary IP to a resource
- Post Change reverse DNS records for a Primary IP
- Post Change Primary IP Protection
- Post Unassign a Primary IP from a resource
- Get List Actions
- Get an Action

</details>

<details>
<summary><b>Server Types</b> (2 operations)</summary>

- Get List Server Types
- Get a Server Type

</details>

<details>
<summary><b>Servers</b> (33 operations)</summary>

- Get List Servers
- Post Create a Server
- Delete a Server
- Get a Server
- Put Update a Server
- Get List Actions for a Server
- Get an Action for a Server
- Post Add a Server to a Placement Group
- Post Attach an ISO to a Server
- Post Attach a Server to a Network
- Post Change alias IPs of a Network
- Post Change reverse DNS entry for this Server
- Post Change Server Protection
- Post Change the Type of a Server
- Post Create Image from a Server
- Post Detach a Server from a Network
- Post Detach an ISO from a Server
- Post Disable Backups for a Server
- Post Disable Rescue Mode for a Server
- Post Enable and Configure Backups for a Server
- Post Enable Rescue Mode for a Server
- Post Power off a Server
- Post Power on a Server
- Post Soft reboot a Server
- Post Rebuild a Server from an Image
- Post Remove from Placement Group
- Post Request Console for a Server
- Post Reset a Server
- Post Reset root Password of a Server
- Post Shutdown a Server
- Get Metrics for a Server
- Get List Actions
- Get an Action

</details>

<details>
<summary><b>SSH Keys</b> (5 operations)</summary>

- Get List SSH keys
- Post Create an SSH key
- Delete an SSH key
- Get a SSH key
- Put Update an SSH key

</details>

<details>
<summary><b>Storage Box Types</b> (2 operations)</summary>

- Get List Storage Box Types
- Get a Storage Box Type

</details>

<details>
<summary><b>Storage Boxes</b> (30 operations)</summary>

- Get List Storage Boxes
- Post Create a Storage Box
- Get List Actions
- Get an Action
- Delete a Storage Box
- Get a Storage Box
- Put Update a Storage Box
- Get List Actions for a Storage Box
- Post Change Protection
- Post Change Type
- Post Disable Snapshot Plan
- Post Enable Snapshot Plan
- Post Reset Password
- Post Rollback Snapshot
- Post Update Access Settings
- Get an Action for a Storage Box
- Get List folders of a Storage Box
- Get List Snapshots
- Post Create a Snapshot
- Delete a Snapshot
- Get a Snapshot
- Put Update a Snapshot
- Get List Subaccounts
- Post Create a Subaccount
- Delete a Subaccount
- Get a Subaccount
- Put Update a Subaccount
- Post Change Home Directory
- Post Reset Password
- Post Update Access Settings

</details>

<details>
<summary><b>Volumes</b> (13 operations)</summary>

- Get List Volumes
- Post Create a Volume
- Delete a Volume
- Get a Volume
- Put Update a Volume
- Get List Actions for a Volume
- Get an Action for a Volume
- Post Attach Volume to a Server
- Post Change Volume Protection
- Post Detach Volume
- Post Resize Volume
- Get List Actions
- Get an Action

</details>

<details>
<summary><b>Zones</b> (25 operations)</summary>

- Get List Zones
- Post Create a Zone
- Get List Actions
- Get an Action
- Delete a Zone
- Get a Zone
- Put Update a Zone
- Get List Actions for a Zone
- Post Change a Zone s Primary Nameservers
- Post Change a Zone s Protection
- Post Change a Zone s Default TTL
- Post Import a Zone file
- Get an Action for a Zone
- Get List RRSets
- Post Create an RRSet
- Delete an RRSet
- Get an RRSet
- Put Update an RRSet
- Post Add Records to an RRSet
- Post Change an RRSet s Protection
- Post Change an RRSet s TTL
- Post Remove Records from an RRSet
- Post Set Records of an RRSet
- Post Update Records of an RRSet
- Get Export a Zone file

</details>

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


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
