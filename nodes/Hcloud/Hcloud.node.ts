import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { actionsDescription } from './resources/actions';
import { certificatesDescription } from './resources/certificates';
import { datacentersDescription } from './resources/datacenters';
import { firewallsDescription } from './resources/firewalls';
import { floatingIpsDescription } from './resources/floating-ips';
import { imagesDescription } from './resources/images';
import { isosDescription } from './resources/isos';
import { loadBalancerTypesDescription } from './resources/load-balancer-types';
import { loadBalancersDescription } from './resources/load-balancers';
import { locationsDescription } from './resources/locations';
import { networksDescription } from './resources/networks';
import { placementGroupsDescription } from './resources/placement-groups';
import { pricingDescription } from './resources/pricing';
import { primaryIpsDescription } from './resources/primary-ips';
import { serverTypesDescription } from './resources/server-types';
import { serversDescription } from './resources/servers';
import { sshKeysDescription } from './resources/ssh-keys';
import { storageBoxTypesDescription } from './resources/storage-box-types';
import { storageBoxesDescription } from './resources/storage-boxes';
import { volumesDescription } from './resources/volumes';
import { zonesDescription } from './resources/zones';

export class Hcloud implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'hcloud',
		name: 'N8nDevHcloud',
		icon: { light: 'file:./hcloud.png', dark: 'file:./hcloud.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Hetzner Cloud API',
		defaults: { name: 'hcloud' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevHcloudApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Actions",
					"value": "Actions",
					"description": "Actions represent asynchronous tasks within the API, targeting one or more resources.\n\nSee Actions for more details.\n"
				},
				{
					"name": "Certificates",
					"value": "Certificates",
					"description": "TLS/SSL Certificates prove the identity of a Server and are used to encrypt client traffic.\n"
				},
				{
					"name": "Datacenters",
					"value": "Datacenters",
					"description": "Each Datacenter represents a _virtual_ Datacenter which is made up of possible many physical Datacenters where Servers are hosted.\n\nSee the [Hetzner Locations Docs](https://docs.hetzner.com/cloud/general/locations/#what-datacenters-are-there) for more details about Datacenters.\n"
				},
				{
					"name": "Firewalls",
					"value": "Firewalls",
					"description": "Firewalls can limit the network access to or from your resources.\n\n- When applying a firewall with no `in` rule all inbound traffic will be dropped. The default for `in` is `DROP`.\n- When applying a firewall with no `out` rule all outbound traffic will be accepted. The default for `out` is `ACCEPT`.\n"
				},
				{
					"name": "Floating Ips",
					"value": "Floating Ips",
					"description": "Floating IPs help you to create highly available setups. You can assign a Floating IP to any Server. The Server can then use this IP. You can reassign it to a different Server at any time, or you can choose to unassign the IP from Servers all together.\n\nFloating IPs can be used globally. This means you can assign a Floating IP to a Server in one Location and later reassign it to a Server in a different Location. For optimal routing and latency Floating IPs should be used in the Location they were created in.\n\nFor Floating IPs to work with your Server, you must configure them inside your operation system.\n\nFloating IPs of type `ipv4` use a single IPv4 address as their `ip` property. Floating IPs of type `ipv6` use a /64 network such as `fc00::/64` as their `ip` property. Any IP address within that network can be used on your host.\n\nFloating IPs are billed on a monthly basis.\n"
				},
				{
					"name": "Images",
					"value": "Images",
					"description": "Images are blueprints for your VM disks. They can be of different types:\n\n### System Images\n\nDistribution Images maintained by us, e.g. “Ubuntu 20.04”\n\n### Snapshot Images\n\nMaintained by you, for example “Ubuntu 20.04 with my own settings”. These are billed per GB per month.\n\n### Backup Images\n\nDaily Backups of your Server. Will automatically be created for Servers which have backups enabled (`POST /servers/{id}/actions/enable_backup`)\n\nBound to exactly one Server. If you delete the Server, you also delete all backups bound to it. You may convert backup Images to snapshot Images to keep them.\n\nThese are billed at 20% of your server price for 7 backup slots.\n\n### App Images\n\nPrebuild images with specific software configurations, e.g. “Wordpress”. All app images are created by us.\n"
				},
				{
					"name": "Isos",
					"value": "Isos",
					"description": "ISOs are read-only Images of DVDs. While we recommend using our Image functionality to install your Servers we also provide some stock ISOs so you can install more exotic operating systems by yourself.\n\nOn request our support uploads a private ISO just for you. These are marked with type `private` and only visible in your Project.\n\nTo attach an ISO to your Server use `POST /servers/{id}/actions/attach_iso`.\n"
				},
				{
					"name": "Load Balancer Types",
					"value": "Load Balancer Types",
					"description": "Load Balancer types define kinds of Load Balancers offered. Each type has an hourly and a monthly cost. You will pay whichever amount is lower for your usage of this specific Load Balancer. Costs may differ between Locations.\n\nAll prices are displayed in the currency of the project owner's account.\n"
				},
				{
					"name": "Load Balancers",
					"value": "Load Balancers",
					"description": ""
				},
				{
					"name": "Locations",
					"value": "Locations",
					"description": "Datacenters are organized by Locations. Datacenters in the same Location are connected with very low latency links.\n"
				},
				{
					"name": "Networks",
					"value": "Networks",
					"description": "Networks is a private networks feature. These Networks are optional and they coexist with the public network that every Server has by default.\n\nThey allow Servers to talk to each other over a dedicated network interface using private IP addresses not available publicly.\n\nThe IP addresses are allocated and managed via the API, they must conform to [RFC1918](https://tools.ietf.org/html/rfc1918#section-3) standard. IPs and network interfaces defined under Networks do not provide public internet connectivity, you will need to use the already existing public network interface for that.\n\nEach network has a user selected `ip_range` which defines all available IP addresses which can be used for Subnets within the Network.\n\nTo assign individual IPs to Servers you will need to create Network Subnets, described below.\n\nCurrently Networks support IPv4 only.\n\n### Subnets\n\nSubnets divide the `ip_range` from the parent Network object into multiple Subnetworks that you can use for different specific purposes.\n\nFor each subnet you need to specify its own `ip_range` which must be contained within the parent Network’s `ip_range`. Additionally each subnet must belong to one of the available Network Zones described below. Subnets can not have overlapping IP ranges.\n\nCurrently there are three types of subnet:\n\n- type `cloud` is used to connect cloud Resources into your Network.\n- type `server` was used to connect only cloud Servers into your Network. This type is deprecated and is replaced by type cloud.\n- type `vswitch` allows you to connect [Dedicated Server vSwitch](https://docs.hetzner.com/robot/dedicated-server/network/vswitch) - and all Dedicated Servers attached to it - into your Network\n\nSubnets of type `vswitch` must set a `vswitch_id` which is the ID of the existing vSwitch in Hetzner Robot that should be coupled.\n\n### Network Zones\n\nNetwork Zones are groups of Locations which have special high-speed network connections between them. The [Location object](https://docs.hetzner.cloud/reference/cloud#locations-get-a-location) contains the `network_zone` property each Location belongs to. Currently these network zones exist:\n\n| Network Zone | Contains Locations |\n| ------------ | ------------------ |\n| eu-central   | nbg1, fsn1, hel1   |\n| us-east      | ash                |\n| us-west      | hil                |\n| ap-southeast | sin                |\n\n### IP address management\n\nWhen a cloud Server is attached to a network without the user specifying an IP it automatically gets an IP address assigned from a subnet of type `server` in the same network zone. If you specify the optional `ip` parameter when attaching then we will try to assign that IP. Keep in mind that the Server’s location must be covered by the Subnet’s Network Zone if you specify an IP, or that at least one Subnet with the zone covering Server’s location must exist.\n\nA cloud Server can also have more than one IP address in a Network by specifying aliases. For details see the [attach to network action](https://docs.hetzner.cloud/reference/cloud#server-actions-attach-a-server-to-a-network).\n\nThe following IP addresses are reserved in networks and can not be used:\n\n- the first IP of the network `ip_range` as it will be used as a default gateway for the private Network interface.\n- `172.31.1.1` as it is being used as default gateway for our public Network interfaces.\n\n### Coupling Dedicated Servers\n\nBy using subnets of type `vswitch` you can couple the Cloud Networks with an existing [Dedicated Server vSwitch](https://docs.hetzner.com/robot/dedicated-server/network/vswitch) and enable dedicated and cloud servers to\ntalk to each other over the Network.\nIn order for this to work the dedicated servers may only use IPs from the subnet and must have a special network configuration. Please refer to [FAQ](https://docs.hetzner.com/cloud/networks/connect-dedi-vswitch). vSwitch Layer 2 features are not supported.\n\n### Routes\n\nNetworks also support the notion of routes which are automatically applied to private traffic. A route makes sure that all packets for a given `destination` IP prefix will be sent to the address specified in its `gateway`.\n"
				},
				{
					"name": "Placement Groups",
					"value": "Placement Groups",
					"description": "Placement groups are used to influence the location of interdependent virtual servers in our data centers. The distribution of the different servers within a group is based on a pattern specified in the type. By enforcing certain rules on the placement of servers within our infrastructure, availability can be influenced in a way that fits your needs best.\n\nIn `spread` placement groups, all virtual servers will run on different physical servers. This decreases the probability that some servers might fail together.\n"
				},
				{
					"name": "Pricing",
					"value": "Pricing",
					"description": "Returns prices for resources.\n"
				},
				{
					"name": "Primary Ips",
					"value": "Primary Ips",
					"description": "Primary IPs help you to create more flexible networking setups. You can assign at most one Primary IP of type `ipv4` and one of type `ipv6` per Server. This Server then uses these IPs.\n\nYou can only unassign a Primary IP from a Server when it's powered off. This Primary IP can then be assigned to a different powered off Server, or you can keep it around for later use.\n\nPrimary IPs are bound to a specific Datacenter. You can not assign a Primary IP from one Datacenter to a Server in a different Datacenter. If you need this capability use Floating IPs instead.\n\nIf your Server's operating system supports cloud-init there is no further configuration needed to make Primary IPs work.\n\nPrimary IPs of type `ipv4` use a single IPv4 address as their `ip` property. Primary IPs of type `ipv6` use a /64 network such as `fc00::/64` as their `ip` property. Any IP address within that network can be used on your host.\n\nPrimary IPs are billed on an hourly basis.\n"
				},
				{
					"name": "Server Types",
					"value": "Server Types",
					"description": "Server types define kinds of Servers offered. Each type has an hourly and a monthly cost. You will pay whichever cost is lower for your usage of this specific Server. Costs may differ between Locations.\n\nAll prices are displayed in the currency of the project owner's account.\n"
				},
				{
					"name": "Servers",
					"value": "Servers",
					"description": "Servers are virtual machines that can be provisioned.\n"
				},
				{
					"name": "Ssh Keys",
					"value": "Ssh Keys",
					"description": "SSH keys are public keys you provide to the cloud system. They can be injected into Servers at creation time. We highly recommend that you use keys instead of passwords to manage your Servers.\n"
				},
				{
					"name": "Storage Box Types",
					"value": "Storage Box Types",
					"description": "Storage Box Types define storage products of different sizes. Each type has an hourly and a monthly cost. You will pay whichever cost is lower for your usage of this specific Storage Box. Costs may differ between Locations.\n\nAll prices are displayed in the currency of the project owner's account.\n"
				},
				{
					"name": "Storage Boxes",
					"value": "Storage Boxes",
					"description": "Storage Boxes offer storage capacity for both small and large amounts of data. Any data you save in your Storage Box is saved on several disks configured in a RAID array, increasing redundancy and fault tolerance.\n\nPlease see [Hetzner Docs](https://docs.hetzner.com/storage/storage-box) for more details about Storage Boxes.\n\n<h3 id=\"tag/storage-boxes/password-policy\">Password policy</h3>\n\nThis policy applies to both Storage Boxes and Storage Box Subaccounts.\n\n- The password must be between 12 and 128 characters long\n- The password can only contain these characters: `a-z A-Z Ä Ö Ü ä ö ü ß 0-9 ^ ° ! § $ % / ( ) = ? + # - . , ; : ~ * @ { } _ &`\n- The password must contain at least one upper case letter, one lower case letter, one number, and a special character\n- The password must not have appeared in any known data breach\n"
				},
				{
					"name": "Volumes",
					"value": "Volumes",
					"description": "A Volume is a highly-available, scalable, and SSD-based block storage for Servers.\n\nPricing for Volumes depends on the Volume size and Location, not the actual used storage.\n\nPlease see [Hetzner Docs](https://docs.hetzner.com/cloud/#Volumes) for more details about Volumes.\n"
				},
				{
					"name": "Zones",
					"value": "Zones",
					"description": "A Zone represents a [Domain Name System (DNS) zone](https://wikipedia.org/wiki/DNS_zone) managed by Hetzner authoritative nameservers.\nPlease see [Hetzner Docs](https://docs.hetzner.com/dns-console/dns/general/dns-overview#the-difference-between-domain-and-zone) for the difference between zones and domains.\n\nThis API supports all zone names with [well-known public suffixes](https://publicsuffix.org/) (e.g. `.de`, `.com`, `.co.uk`).\nSubdomains are not supported.\n\n<h3 id=\"tag/zones/zone-modes\">Zone Modes</h3>\n\nThis API supports two types of zone modes.\n\n- In _primary_ mode, resource record sets (RRSets) and resource records (RRs) are managed via the Cloud API or Hetzner Console.\n- In _secondary_ mode, Hetzner's nameservers query RRSets and RRs from given primary nameservers via [AXFR](https://en.wikipedia.org/wiki/DNS_zone_transfer).\n\nThe zone mode cannot be changed, the zone must be deleted and re-created with a new mode.\n\n### SOA Serial\n\nFor zones in primary mode, Hetzner automatically increases the `SOA` record serial number.\nAs convention, a `YYYYMMDDnn` format with incrementing `nn` is used.\n\n<h3 id=\"tag/zones/zone-file-import\">Zone file import</h3>\n\nThis API supports importing a zone file in BIND (RFC [1034](https://datatracker.ietf.org/doc/html/rfc1034)/[1035](https://datatracker.ietf.org/doc/html/rfc1035)) format.\n\nImporting a zone file is only applicable for Zones in primary mode.\n\nDuring an import:\n\n- An `$ORIGIN` directive may be present, it must match the Zone's name with an ending dot\n- A `$TTL` directive may be present, it is used as new default Zone Time To Live (TTL)\n- Only `IN` (internet) class records are allowed\n- The assigned authoritative Hetzner nameservers must be present as `NS` records\n- A `SOA` record must be present\n- Comments for individual records are imported, comments on their own lines are discarded\n\nZone file example:\n\n```dns\n$ORIGIN\texample.com.\n$TTL\t3600\n\n@\tIN\tSOA\thydrogen.ns.hetzner.com. dns.hetzner.com. 2024010100 86400 10800 3600000 3600\n\n@\tIN\t10800\tNS\thydrogen.ns.hetzner.com. ; Some comment.\n@\tIN\t10800\tNS\toxygen.ns.hetzner.com.\n@\tIN\t10800\tNS\thelium.ns.hetzner.de.\n```\n"
				}
			],
			"default": ""
		},
		...actionsDescription,
		...certificatesDescription,
		...datacentersDescription,
		...firewallsDescription,
		...floatingIpsDescription,
		...imagesDescription,
		...isosDescription,
		...loadBalancerTypesDescription,
		...loadBalancersDescription,
		...locationsDescription,
		...networksDescription,
		...placementGroupsDescription,
		...pricingDescription,
		...primaryIpsDescription,
		...serverTypesDescription,
		...serversDescription,
		...sshKeysDescription,
		...storageBoxTypesDescription,
		...storageBoxesDescription,
		...volumesDescription,
		...zonesDescription
		],
	};
}
