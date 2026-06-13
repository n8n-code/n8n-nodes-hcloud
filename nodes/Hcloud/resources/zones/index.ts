import type { INodeProperties } from 'n8n-workflow';

export const zonesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					]
				}
			},
			"options": [
				{
					"name": "List Zones",
					"value": "List Zones",
					"action": "List Zones",
					"description": "Returns all Zones.\n\nUse the provided URI parameters to modify the result.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/zones"
						}
					}
				},
				{
					"name": "Create Zone",
					"value": "Create Zone",
					"action": "Create a Zone",
					"description": "Creates a Zone.\n\nA default `SOA` and three `NS` resource records with the assigned Hetzner\nnameservers are created automatically.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/zones"
						}
					}
				},
				{
					"name": "List Zone Actions",
					"value": "List Zone Actions",
					"action": "List Actions",
					"description": "Returns all Zone Actions.\n\nUse the provided URI parameters to modify the result.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/zones/actions"
						}
					}
				},
				{
					"name": "Get Zone Action",
					"value": "Get Zone Action",
					"action": "Get an Action",
					"description": "Returns a specific Action.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/zones/actions/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete Zone",
					"value": "Delete Zone",
					"action": "Delete a Zone",
					"description": "Deletes a Zone.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/zones/{{$parameter[\"id_or_name\"]}}"
						}
					}
				},
				{
					"name": "Get Zone",
					"value": "Get Zone",
					"action": "Get a Zone",
					"description": "Returns a single Zone.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/zones/{{$parameter[\"id_or_name\"]}}"
						}
					}
				},
				{
					"name": "Replace Zone",
					"value": "Replace Zone",
					"action": "Update a Zone",
					"description": "Updates a Zone.\n\nTo modify resource record sets (RRSets), use the RRSet Actions\nendpoints.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/zones/{{$parameter[\"id_or_name\"]}}"
						}
					}
				},
				{
					"name": "List Actions For Zone",
					"value": "List Actions For Zone",
					"action": "List Actions for a Zone",
					"description": "Returns all Actions for a Zone.\n\nUse the provided URI parameters to modify the result.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/zones/{{$parameter[\"id_or_name\"]}}/actions"
						}
					}
				},
				{
					"name": "Change Zones Primary Nameservers",
					"value": "Change Zones Primary Nameservers",
					"action": "Change a Zone's Primary Nameservers",
					"description": "Overwrites the primary nameservers of a Zone.\n\nOnly applicable for Zones in secondary mode.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `incorrect_zone_mode` | This operation is not supported for this Zone's `mode`. |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/zones/{{$parameter[\"id_or_name\"]}}/actions/change_primary_nameservers"
						}
					}
				},
				{
					"name": "Change Zones Protection",
					"value": "Change Zones Protection",
					"action": "Change a Zone's Protection",
					"description": "Changes the protection configuration of a Zone.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/zones/{{$parameter[\"id_or_name\"]}}/actions/change_protection"
						}
					}
				},
				{
					"name": "Change Zones Default Ttl",
					"value": "Change Zones Default Ttl",
					"action": "Change a Zone's Default TTL",
					"description": "Changes the default Time To Live (TTL) of a Zone.\n\nThis TTL is used for RRSets that do not explicitly define a TTL.\n\nOnly applicable for Zones in primary mode.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `incorrect_zone_mode` | This operation is not supported for this Zone's `mode`. |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/zones/{{$parameter[\"id_or_name\"]}}/actions/change_ttl"
						}
					}
				},
				{
					"name": "Import Zone File",
					"value": "Import Zone File",
					"action": "Import a Zone file",
					"description": "Imports a zone file, replacing all resource record sets (RRSets).\n\nThe import will fail if existing RRSet are `change` protected.\n\nSee Zone file import for more details.\nOnly applicable for Zones in primary mode.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `incorrect_zone_mode` | This operation is not supported for this Zone's `mode`. |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/zones/{{$parameter[\"id_or_name\"]}}/actions/import_zonefile"
						}
					}
				},
				{
					"name": "Get Action For Zone",
					"value": "Get Action For Zone",
					"action": "Get an Action for a Zone",
					"description": "Returns a specific Action for a Zone.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/zones/{{$parameter[\"id_or_name\"]}}/actions/{{$parameter[\"action_id\"]}}"
						}
					}
				},
				{
					"name": "List Rrsets",
					"value": "List Rrsets",
					"action": "List RRSets",
					"description": "Returns all RRSets in the Zone.\n\nUse the provided URI parameters to modify the result.\n\nThe maximum value for `per_page` on this endpoint is `100` instead of `50`.\n\nOnly applicable for Zones in primary mode.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `incorrect_zone_mode` | This operation is not supported for this Zone's `mode`. |\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/zones/{{$parameter[\"id_or_name\"]}}/rrsets"
						}
					}
				},
				{
					"name": "Create Rrset",
					"value": "Create Rrset",
					"action": "Create an RRSet",
					"description": "Create an RRSet in the Zone.\n\nOnly applicable for Zones in primary mode.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `incorrect_zone_mode` | This operation is not supported for this Zone's `mode`. |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/zones/{{$parameter[\"id_or_name\"]}}/rrsets"
						}
					}
				},
				{
					"name": "Delete Rrset",
					"value": "Delete Rrset",
					"action": "Delete an RRSet",
					"description": "Deletes an RRSet from the Zone.\n\nOnly applicable for Zones in primary mode.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `incorrect_zone_mode` | This operation is not supported for this Zone's `mode`. |\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/zones/{{$parameter[\"id_or_name\"]}}/rrsets/{{$parameter[\"rr_name\"]}}/{{$parameter[\"rr_type\"]}}"
						}
					}
				},
				{
					"name": "Get Rrset",
					"value": "Get Rrset",
					"action": "Get an RRSet",
					"description": "Returns a single RRSet from the Zone.\n\nOnly applicable for Zones in primary mode.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `incorrect_zone_mode` | This operation is not supported for this Zone's `mode`. |\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/zones/{{$parameter[\"id_or_name\"]}}/rrsets/{{$parameter[\"rr_name\"]}}/{{$parameter[\"rr_type\"]}}"
						}
					}
				},
				{
					"name": "Replace Rrset",
					"value": "Replace Rrset",
					"action": "Update an RRSet",
					"description": "Updates an RRSet in the Zone.\n\nOnly applicable for Zones in primary mode.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `incorrect_zone_mode` | This operation is not supported for this Zone's `mode`. |\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/zones/{{$parameter[\"id_or_name\"]}}/rrsets/{{$parameter[\"rr_name\"]}}/{{$parameter[\"rr_type\"]}}"
						}
					}
				},
				{
					"name": "Add Records To Rrset",
					"value": "Add Records To Rrset",
					"action": "Add Records to an RRSet",
					"description": "Adds resource records (RRs) to an RRSet in the Zone.\n\nFor convenience, the RRSet will be automatically created if it doesn't exist. Otherwise, the new\nrecords are appended to the existing RRSet.\n\nOnly applicable for Zones in primary mode.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `incorrect_zone_mode` | This operation is not supported for this Zone's `mode`. |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/zones/{{$parameter[\"id_or_name\"]}}/rrsets/{{$parameter[\"rr_name\"]}}/{{$parameter[\"rr_type\"]}}/actions/add_records"
						}
					}
				},
				{
					"name": "Change Rrsets Protection",
					"value": "Change Rrsets Protection",
					"action": "Change an RRSet's Protection",
					"description": "Changes the protection of an RRSet in the Zone.\n\nOnly applicable for Zones in primary mode.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `incorrect_zone_mode` | This operation is not supported for this Zone's `mode`. |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/zones/{{$parameter[\"id_or_name\"]}}/rrsets/{{$parameter[\"rr_name\"]}}/{{$parameter[\"rr_type\"]}}/actions/change_protection"
						}
					}
				},
				{
					"name": "Change Rrsets Ttl",
					"value": "Change Rrsets Ttl",
					"action": "Change an RRSet's TTL",
					"description": "Changes the Time To Live (TTL) of an RRSet in the Zone.\n\nOnly applicable for Zones in primary mode.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `incorrect_zone_mode` | This operation is not supported for this Zone's `mode`. |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/zones/{{$parameter[\"id_or_name\"]}}/rrsets/{{$parameter[\"rr_name\"]}}/{{$parameter[\"rr_type\"]}}/actions/change_ttl"
						}
					}
				},
				{
					"name": "Remove Records From Rrset",
					"value": "Remove Records From Rrset",
					"action": "Remove Records from an RRSet",
					"description": "Removes resource records (RRs) from an existing RRSet in the Zone.\n\nFor convenience, the RRSet will be automatically deleted if it doesn't contain any RRs afterwards.\n\nOnly applicable for Zones in primary mode.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `incorrect_zone_mode` | This operation is not supported for this Zone's `mode`. |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/zones/{{$parameter[\"id_or_name\"]}}/rrsets/{{$parameter[\"rr_name\"]}}/{{$parameter[\"rr_type\"]}}/actions/remove_records"
						}
					}
				},
				{
					"name": "Set Records Of Rrset",
					"value": "Set Records Of Rrset",
					"action": "Set Records of an RRSet",
					"description": "Overwrites the resource records (RRs) of an existing RRSet in the Zone.\n\nOnly applicable for Zones in primary mode.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `incorrect_zone_mode` | This operation is not supported for this Zone's `mode`. |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/zones/{{$parameter[\"id_or_name\"]}}/rrsets/{{$parameter[\"rr_name\"]}}/{{$parameter[\"rr_type\"]}}/actions/set_records"
						}
					}
				},
				{
					"name": "Update Records Of Rrset",
					"value": "Update Records Of Rrset",
					"action": "Update Records of an RRSet",
					"description": "Updates resource records' (RRs) comments of an existing RRSet in the Zone.\n\nOnly applicable for Zones in primary mode.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `incorrect_zone_mode` | This operation is not supported for this Zone's `mode`. |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/zones/{{$parameter[\"id_or_name\"]}}/rrsets/{{$parameter[\"rr_name\"]}}/{{$parameter[\"rr_type\"]}}/actions/update_records"
						}
					}
				},
				{
					"name": "Export Zone File",
					"value": "Export Zone File",
					"action": "Export a Zone file",
					"description": "Returns a generated Zone file in BIND (RFC [1034](https://datatracker.ietf.org/doc/html/rfc1034)/[1035](https://datatracker.ietf.org/doc/html/rfc1035)) format.\n\nOnly applicable for Zones in primary mode.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `incorrect_zone_mode` | This operation is not supported for this Zone's `mode`. |\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/zones/{{$parameter[\"id_or_name\"]}}/zonefile"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /zones",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Zones"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Filter resources by their name. The response will only contain the resources\nmatching exactly the specified name.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Zones"
					]
				}
			}
		},
		{
			"displayName": "Mode",
			"name": "mode",
			"description": "Filter resources by their mode. The response will only contain the resources\nmatching exactly the specified mode.\n",
			"default": "primary",
			"type": "options",
			"options": [
				{
					"name": "Primary",
					"value": "primary"
				},
				{
					"name": "Secondary",
					"value": "secondary"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "mode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Zones"
					]
				}
			}
		},
		{
			"displayName": "Label Selector",
			"name": "label_selector",
			"description": "Filter resources by labels. The response will only contain resources matching the\nlabel selector. For more information, see \"Label Selector\".\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "label_selector",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Zones"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort resources by field and direction. Can be used multiple times. For more\ninformation, see \"Sorting\".\n",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Zones"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Page number to return. For more information, see \"Pagination\".",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Zones"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"description": "Maximum number of entries returned per page. For more information, see \"Pagination\".",
			"default": 25,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "per_page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Zones"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_apitoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for APIToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Zones"
					]
				}
			}
		},
		{
			"displayName": "POST /zones",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Create Zone"
					]
				}
			}
		},
		{
			"displayName": "Labels",
			"name": "labels",
			"type": "json",
			"default": "{\n  \"environment\": \"prod\",\n  \"example.com/my\": \"label\",\n  \"just-a-key\": \"\"\n}",
			"description": "User-defined labels (`key/value` pairs) for the Resource.\nFor more information, see \"Labels\".\n | User-defined labels (`key/value` pairs) for the Resource.\n\nNote that the set of Labels provided in the request will overwrite the\nexisting one.\n\nFor more information, see \"Labels\".\n",
			"routing": {
				"send": {
					"property": "labels",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Create Zone"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Mode",
			"name": "mode",
			"type": "options",
			"default": "primary",
			"description": "Mode of the Zone.\n\nFor more information, see Zone Modes.\n",
			"options": [
				{
					"name": "Primary",
					"value": "primary"
				},
				{
					"name": "Secondary",
					"value": "secondary"
				}
			],
			"routing": {
				"send": {
					"property": "mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Create Zone"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "example.com",
			"description": "Name of the Zone.\n\nAll names with [well-known public suffixes](https://publicsuffix.org/) (e.g. `.de`,\n`.com`, `.co.uk`) are supported. Subdomains are not supported.\n\nThe name must be in lower case and must not end with a dot.\n[Internationalized domain\nnames](https://en.wikipedia.org/wiki/Internationalized_domain_name) must be\ntranscribed to [Punycode](https://wikipedia.org/wiki/Punycode) representation with\nACE prefix, e.g. `xn--mnchen-3ya.de` (`münchen.de`).\n",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Create Zone"
					]
				}
			}
		},
		{
			"displayName": "Primary Nameservers",
			"name": "primary_nameservers",
			"type": "json",
			"default": "[\n  {\n    \"address\": \"198.51.100.1\",\n    \"port\": 53\n  },\n  {\n    \"address\": \"203.0.113.1\",\n    \"port\": 53\n  }\n]",
			"description": "Primary nameservers of the Zone.\n\nOnly applicable for Zones in secondary mode.\nIgnored for Zones in primary mode.\n",
			"routing": {
				"send": {
					"property": "primary_nameservers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Create Zone"
					]
				}
			}
		},
		{
			"displayName": "Rrsets",
			"name": "rrsets",
			"type": "json",
			"default": "[\n  {\n    \"labels\": {\n      \"environment\": \"prod\",\n      \"example.com/my\": \"label\",\n      \"just-a-key\": \"\"\n    },\n    \"name\": \"www\",\n    \"records\": [\n      {\n        \"comment\": \"My web server at Hetzner Cloud.\",\n        \"value\": \"198.51.100.1\"\n      }\n    ],\n    \"ttl\": 3600,\n    \"type\": \"A\"\n  }\n]",
			"description": "RRSets to be added to the Zone.\n\nOnly applicable for Zones in primary mode.\nIgnored for Zones in secondary mode.\n",
			"routing": {
				"send": {
					"property": "rrsets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Create Zone"
					]
				}
			}
		},
		{
			"displayName": "Ttl",
			"name": "ttl",
			"type": "number",
			"default": 10800,
			"description": "Default Time To Live (TTL) of the Zone.\n\nMust be in between 60s and 2147483647s.\n\nThis TTL is used for RRSets that do not explicitly define a TTL.\n",
			"routing": {
				"send": {
					"property": "ttl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Create Zone"
					]
				}
			}
		},
		{
			"displayName": "Zonefile",
			"name": "zonefile",
			"type": "string",
			"default": "$ORIGIN\texample.com.\n$TTL\t3600\n\n@\tIN\tSOA\thydrogen.ns.hetzner.com. dns.hetzner.com. 2024010100 86400 10800 3600000 3600\n\n@\tIN\t10800\tNS\thydrogen.ns.hetzner.com. ; Some comment.\n@\tIN\t10800\tNS\toxygen.ns.hetzner.com.\n@\tIN\t10800\tNS\thelium.ns.hetzner.de.\n",
			"description": "Zone file to import.\n\nOnly applicable for Zones in primary mode.\nIgnored for Zones in secondary mode.\n\nIf provided, `rrsets` must be empty.\n\nSee Zone file import for more details.\n",
			"routing": {
				"send": {
					"property": "zonefile",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Create Zone"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_apitoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for APIToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Create Zone"
					]
				}
			}
		},
		{
			"displayName": "GET /zones/actions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Zone Actions"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"description": "Filter the actions by ID. Can be used multiple times. The response will only contain\nactions matching the specified IDs.\n",
			"default": "[\n  42\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Zone Actions"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort actions by field and direction. Can be used multiple times. For more\ninformation, see \"Sorting\".\n",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Zone Actions"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "Filter the actions by status. Can be used multiple times. The response will only\ncontain actions matching the specified statuses.\n",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Zone Actions"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Page number to return. For more information, see \"Pagination\".",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Zone Actions"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"description": "Maximum number of entries returned per page. For more information, see \"Pagination\".",
			"default": 25,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "per_page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Zone Actions"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_apitoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for APIToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Zone Actions"
					]
				}
			}
		},
		{
			"displayName": "GET /zones/actions/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Get Zone Action"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Action.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Get Zone Action"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_apitoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for APIToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Get Zone Action"
					]
				}
			}
		},
		{
			"displayName": "DELETE /zones/{id_or_name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Delete Zone"
					]
				}
			}
		},
		{
			"displayName": "ID Or Name",
			"name": "id_or_name",
			"required": true,
			"description": "ID or Name of the Zone.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Delete Zone"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_apitoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for APIToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Delete Zone"
					]
				}
			}
		},
		{
			"displayName": "GET /zones/{id_or_name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Get Zone"
					]
				}
			}
		},
		{
			"displayName": "ID Or Name",
			"name": "id_or_name",
			"required": true,
			"description": "ID or Name of the Zone.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Get Zone"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_apitoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for APIToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Get Zone"
					]
				}
			}
		},
		{
			"displayName": "PUT /zones/{id_or_name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Replace Zone"
					]
				}
			}
		},
		{
			"displayName": "ID Or Name",
			"name": "id_or_name",
			"required": true,
			"description": "ID or Name of the Zone.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Replace Zone"
					]
				}
			}
		},
		{
			"displayName": "Labels",
			"name": "labels",
			"type": "json",
			"default": "{\n  \"environment\": \"prod\",\n  \"example.com/my\": \"label\",\n  \"just-a-key\": \"\"\n}",
			"description": "User-defined labels (`key/value` pairs) for the Resource.\nFor more information, see \"Labels\".\n | User-defined labels (`key/value` pairs) for the Resource.\n\nNote that the set of Labels provided in the request will overwrite the\nexisting one.\n\nFor more information, see \"Labels\".\n",
			"routing": {
				"send": {
					"property": "labels",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Replace Zone"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_apitoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for APIToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Replace Zone"
					]
				}
			}
		},
		{
			"displayName": "GET /zones/{id_or_name}/actions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Actions For Zone"
					]
				}
			}
		},
		{
			"displayName": "ID Or Name",
			"name": "id_or_name",
			"required": true,
			"description": "ID or Name of the Zone.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Actions For Zone"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort actions by field and direction. Can be used multiple times. For more\ninformation, see \"Sorting\".\n",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Actions For Zone"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "Filter the actions by status. Can be used multiple times. The response will only\ncontain actions matching the specified statuses.\n",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Actions For Zone"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Page number to return. For more information, see \"Pagination\".",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Actions For Zone"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"description": "Maximum number of entries returned per page. For more information, see \"Pagination\".",
			"default": 25,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "per_page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Actions For Zone"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_apitoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for APIToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Actions For Zone"
					]
				}
			}
		},
		{
			"displayName": "POST /zones/{id_or_name}/actions/change_primary_nameservers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Change Zones Primary Nameservers"
					]
				}
			}
		},
		{
			"displayName": "ID Or Name",
			"name": "id_or_name",
			"required": true,
			"description": "ID or Name of the Zone.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Change Zones Primary Nameservers"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Primary Nameservers",
			"name": "primary_nameservers",
			"type": "json",
			"default": "[\n  {\n    \"address\": \"198.51.100.1\",\n    \"port\": 53\n  },\n  {\n    \"address\": \"203.0.113.1\",\n    \"port\": 53\n  }\n]",
			"description": "Primary nameservers of the Zone.",
			"routing": {
				"send": {
					"property": "primary_nameservers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Change Zones Primary Nameservers"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_apitoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for APIToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Change Zones Primary Nameservers"
					]
				}
			}
		},
		{
			"displayName": "POST /zones/{id_or_name}/actions/change_protection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Change Zones Protection"
					]
				}
			}
		},
		{
			"displayName": "ID Or Name",
			"name": "id_or_name",
			"required": true,
			"description": "ID or Name of the Zone.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Change Zones Protection"
					]
				}
			}
		},
		{
			"displayName": "Delete",
			"name": "delete",
			"type": "boolean",
			"default": false,
			"description": "Prevents the Zone from being deleted.",
			"routing": {
				"send": {
					"property": "delete",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Change Zones Protection"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_apitoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for APIToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Change Zones Protection"
					]
				}
			}
		},
		{
			"displayName": "POST /zones/{id_or_name}/actions/change_ttl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Change Zones Default Ttl"
					]
				}
			}
		},
		{
			"displayName": "ID Or Name",
			"name": "id_or_name",
			"required": true,
			"description": "ID or Name of the Zone.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Change Zones Default Ttl"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ttl",
			"name": "ttl",
			"type": "number",
			"default": 10800,
			"description": "Default Time To Live (TTL) of the Zone.\n\nMust be in between 60s and 2147483647s.\n\nThis TTL is used for RRSets that do not explicitly define a TTL.\n",
			"routing": {
				"send": {
					"property": "ttl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Change Zones Default Ttl"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_apitoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for APIToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Change Zones Default Ttl"
					]
				}
			}
		},
		{
			"displayName": "POST /zones/{id_or_name}/actions/import_zonefile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Import Zone File"
					]
				}
			}
		},
		{
			"displayName": "ID Or Name",
			"name": "id_or_name",
			"required": true,
			"description": "ID or Name of the Zone.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Import Zone File"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Zonefile",
			"name": "zonefile",
			"type": "string",
			"default": "$ORIGIN\texample.com.\n$TTL\t3600\n\n@\tIN\tSOA\thydrogen.ns.hetzner.com. dns.hetzner.com. 2024010100 86400 10800 3600000 3600\n\n@\tIN\t10800\tNS\thydrogen.ns.hetzner.com. ; Some comment.\n@\tIN\t10800\tNS\toxygen.ns.hetzner.com.\n@\tIN\t10800\tNS\thelium.ns.hetzner.de.\n",
			"description": "Zone file to import.\n\nSee Zone file import for more details.\n",
			"routing": {
				"send": {
					"property": "zonefile",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Import Zone File"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_apitoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for APIToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Import Zone File"
					]
				}
			}
		},
		{
			"displayName": "GET /zones/{id_or_name}/actions/{action_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Get Action For Zone"
					]
				}
			}
		},
		{
			"displayName": "ID Or Name",
			"name": "id_or_name",
			"required": true,
			"description": "ID or Name of the Zone.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Get Action For Zone"
					]
				}
			}
		},
		{
			"displayName": "Action ID",
			"name": "action_id",
			"required": true,
			"description": "ID of the Action.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Get Action For Zone"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_apitoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for APIToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Get Action For Zone"
					]
				}
			}
		},
		{
			"displayName": "GET /zones/{id_or_name}/rrsets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Rrsets"
					]
				}
			}
		},
		{
			"displayName": "ID Or Name",
			"name": "id_or_name",
			"required": true,
			"description": "ID or Name of the Zone.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Rrsets"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Filter resources by their name. The response will only contain the resources\nmatching exactly the specified name.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Rrsets"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Filter resources by their type. Can be used multiple times. The response will only\ncontain resources matching the specified types.\n",
			"default": "[\n  \"A\"\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Rrsets"
					]
				}
			}
		},
		{
			"displayName": "Label Selector",
			"name": "label_selector",
			"description": "Filter resources by labels. The response will only contain resources matching the\nlabel selector. For more information, see \"Label Selector\".\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "label_selector",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Rrsets"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort resources by field and direction. Can be used multiple times. For more\ninformation, see \"Sorting\".\n",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Rrsets"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Page number to return. For more information, see \"Pagination\".",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Rrsets"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"description": "Maximum number of entries returned per page. For more information, see \"Pagination\".",
			"default": 25,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "per_page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Rrsets"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_apitoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for APIToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"List Rrsets"
					]
				}
			}
		},
		{
			"displayName": "POST /zones/{id_or_name}/rrsets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Create Rrset"
					]
				}
			}
		},
		{
			"displayName": "ID Or Name",
			"name": "id_or_name",
			"required": true,
			"description": "ID or Name of the Zone.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Create Rrset"
					]
				}
			}
		},
		{
			"displayName": "Labels",
			"name": "labels",
			"type": "json",
			"default": "{\n  \"environment\": \"prod\",\n  \"example.com/my\": \"label\",\n  \"just-a-key\": \"\"\n}",
			"description": "User-defined labels (`key/value` pairs) for the Resource.\nFor more information, see \"Labels\".\n | User-defined labels (`key/value` pairs) for the Resource.\n\nNote that the set of Labels provided in the request will overwrite the\nexisting one.\n\nFor more information, see \"Labels\".\n",
			"routing": {
				"send": {
					"property": "labels",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Create Rrset"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "www",
			"description": "Name of the RRSet.\n\nThe name must be in lower case, and must not end with a dot or the Zone\nname. Names containing non-ASCII characters must be transcribed to\n[Punycode](https://wikipedia.org/wiki/Punycode) representation with ACE prefix, e.g.\n`xn--4bi` (✉️).\n\nFor the Zone apex, use `@`.\n",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Create Rrset"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Records",
			"name": "records",
			"type": "json",
			"default": "[\n  {\n    \"comment\": \"My web server at Hetzner Cloud.\",\n    \"value\": \"198.51.100.1\"\n  }\n]",
			"description": "Records of the RRSet.\n\nMust not be empty and must only contain distinct record values.\nThe order of records returned in responses is not guaranteed to be consistent.\n",
			"routing": {
				"send": {
					"property": "records",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Create Rrset"
					]
				}
			}
		},
		{
			"displayName": "Ttl",
			"name": "ttl",
			"type": "number",
			"default": 3600,
			"description": "Time To Live (TTL) of the RRSet.\n\nMust be in between 60s and 2147483647s.\n\nIf not set, the Zone's Default TTL is used.\n",
			"routing": {
				"send": {
					"property": "ttl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Create Rrset"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "A",
			"description": "Type of the RRSet.\n",
			"options": [
				{
					"name": "A",
					"value": "A"
				},
				{
					"name": "AAAA",
					"value": "AAAA"
				},
				{
					"name": "CAA",
					"value": "CAA"
				},
				{
					"name": "CNAME",
					"value": "CNAME"
				},
				{
					"name": "DS",
					"value": "DS"
				},
				{
					"name": "HINFO",
					"value": "HINFO"
				},
				{
					"name": "HTTPS",
					"value": "HTTPS"
				},
				{
					"name": "MX",
					"value": "MX"
				},
				{
					"name": "NS",
					"value": "NS"
				},
				{
					"name": "PTR",
					"value": "PTR"
				},
				{
					"name": "RP",
					"value": "RP"
				},
				{
					"name": "SOA",
					"value": "SOA"
				},
				{
					"name": "SRV",
					"value": "SRV"
				},
				{
					"name": "SVCB",
					"value": "SVCB"
				},
				{
					"name": "TLSA",
					"value": "TLSA"
				},
				{
					"name": "TXT",
					"value": "TXT"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Create Rrset"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_apitoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for APIToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Create Rrset"
					]
				}
			}
		},
		{
			"displayName": "DELETE /zones/{id_or_name}/rrsets/{rr_name}/{rr_type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Delete Rrset"
					]
				}
			}
		},
		{
			"displayName": "ID Or Name",
			"name": "id_or_name",
			"required": true,
			"description": "ID or Name of the Zone.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Delete Rrset"
					]
				}
			}
		},
		{
			"displayName": "Rr Name",
			"name": "rr_name",
			"required": true,
			"default": "www",
			"type": "string",
			"description": "Name of the RRSet.\n\nThe name must be in lower case, and must not end with a dot or the Zone\nname. Names containing non-ASCII characters must be transcribed to\n[Punycode](https://wikipedia.org/wiki/Punycode) representation with ACE prefix, e.g.\n`xn--4bi` (✉️).\n\nFor the Zone apex, use `@`.\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Delete Rrset"
					]
				}
			}
		},
		{
			"displayName": "Rr Type",
			"name": "rr_type",
			"required": true,
			"default": "A",
			"type": "options",
			"description": "Type of the RRSet.\n",
			"options": [
				{
					"name": "A",
					"value": "A"
				},
				{
					"name": "AAAA",
					"value": "AAAA"
				},
				{
					"name": "CAA",
					"value": "CAA"
				},
				{
					"name": "CNAME",
					"value": "CNAME"
				},
				{
					"name": "DS",
					"value": "DS"
				},
				{
					"name": "HINFO",
					"value": "HINFO"
				},
				{
					"name": "HTTPS",
					"value": "HTTPS"
				},
				{
					"name": "MX",
					"value": "MX"
				},
				{
					"name": "NS",
					"value": "NS"
				},
				{
					"name": "PTR",
					"value": "PTR"
				},
				{
					"name": "RP",
					"value": "RP"
				},
				{
					"name": "SOA",
					"value": "SOA"
				},
				{
					"name": "SRV",
					"value": "SRV"
				},
				{
					"name": "SVCB",
					"value": "SVCB"
				},
				{
					"name": "TLSA",
					"value": "TLSA"
				},
				{
					"name": "TXT",
					"value": "TXT"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Delete Rrset"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_apitoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for APIToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Delete Rrset"
					]
				}
			}
		},
		{
			"displayName": "GET /zones/{id_or_name}/rrsets/{rr_name}/{rr_type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Get Rrset"
					]
				}
			}
		},
		{
			"displayName": "ID Or Name",
			"name": "id_or_name",
			"required": true,
			"description": "ID or Name of the Zone.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Get Rrset"
					]
				}
			}
		},
		{
			"displayName": "Rr Name",
			"name": "rr_name",
			"required": true,
			"default": "www",
			"type": "string",
			"description": "Name of the RRSet.\n\nThe name must be in lower case, and must not end with a dot or the Zone\nname. Names containing non-ASCII characters must be transcribed to\n[Punycode](https://wikipedia.org/wiki/Punycode) representation with ACE prefix, e.g.\n`xn--4bi` (✉️).\n\nFor the Zone apex, use `@`.\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Get Rrset"
					]
				}
			}
		},
		{
			"displayName": "Rr Type",
			"name": "rr_type",
			"required": true,
			"default": "A",
			"type": "options",
			"description": "Type of the RRSet.\n",
			"options": [
				{
					"name": "A",
					"value": "A"
				},
				{
					"name": "AAAA",
					"value": "AAAA"
				},
				{
					"name": "CAA",
					"value": "CAA"
				},
				{
					"name": "CNAME",
					"value": "CNAME"
				},
				{
					"name": "DS",
					"value": "DS"
				},
				{
					"name": "HINFO",
					"value": "HINFO"
				},
				{
					"name": "HTTPS",
					"value": "HTTPS"
				},
				{
					"name": "MX",
					"value": "MX"
				},
				{
					"name": "NS",
					"value": "NS"
				},
				{
					"name": "PTR",
					"value": "PTR"
				},
				{
					"name": "RP",
					"value": "RP"
				},
				{
					"name": "SOA",
					"value": "SOA"
				},
				{
					"name": "SRV",
					"value": "SRV"
				},
				{
					"name": "SVCB",
					"value": "SVCB"
				},
				{
					"name": "TLSA",
					"value": "TLSA"
				},
				{
					"name": "TXT",
					"value": "TXT"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Get Rrset"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_apitoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for APIToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Get Rrset"
					]
				}
			}
		},
		{
			"displayName": "PUT /zones/{id_or_name}/rrsets/{rr_name}/{rr_type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Replace Rrset"
					]
				}
			}
		},
		{
			"displayName": "ID Or Name",
			"name": "id_or_name",
			"required": true,
			"description": "ID or Name of the Zone.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Replace Rrset"
					]
				}
			}
		},
		{
			"displayName": "Rr Name",
			"name": "rr_name",
			"required": true,
			"default": "www",
			"type": "string",
			"description": "Name of the RRSet.\n\nThe name must be in lower case, and must not end with a dot or the Zone\nname. Names containing non-ASCII characters must be transcribed to\n[Punycode](https://wikipedia.org/wiki/Punycode) representation with ACE prefix, e.g.\n`xn--4bi` (✉️).\n\nFor the Zone apex, use `@`.\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Replace Rrset"
					]
				}
			}
		},
		{
			"displayName": "Rr Type",
			"name": "rr_type",
			"required": true,
			"default": "A",
			"type": "options",
			"description": "Type of the RRSet.\n",
			"options": [
				{
					"name": "A",
					"value": "A"
				},
				{
					"name": "AAAA",
					"value": "AAAA"
				},
				{
					"name": "CAA",
					"value": "CAA"
				},
				{
					"name": "CNAME",
					"value": "CNAME"
				},
				{
					"name": "DS",
					"value": "DS"
				},
				{
					"name": "HINFO",
					"value": "HINFO"
				},
				{
					"name": "HTTPS",
					"value": "HTTPS"
				},
				{
					"name": "MX",
					"value": "MX"
				},
				{
					"name": "NS",
					"value": "NS"
				},
				{
					"name": "PTR",
					"value": "PTR"
				},
				{
					"name": "RP",
					"value": "RP"
				},
				{
					"name": "SOA",
					"value": "SOA"
				},
				{
					"name": "SRV",
					"value": "SRV"
				},
				{
					"name": "SVCB",
					"value": "SVCB"
				},
				{
					"name": "TLSA",
					"value": "TLSA"
				},
				{
					"name": "TXT",
					"value": "TXT"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Replace Rrset"
					]
				}
			}
		},
		{
			"displayName": "Labels",
			"name": "labels",
			"type": "json",
			"default": "{\n  \"environment\": \"prod\",\n  \"example.com/my\": \"label\",\n  \"just-a-key\": \"\"\n}",
			"description": "User-defined labels (`key/value` pairs) for the Resource.\nFor more information, see \"Labels\".\n | User-defined labels (`key/value` pairs) for the Resource.\n\nNote that the set of Labels provided in the request will overwrite the\nexisting one.\n\nFor more information, see \"Labels\".\n",
			"routing": {
				"send": {
					"property": "labels",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Replace Rrset"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_apitoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for APIToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Replace Rrset"
					]
				}
			}
		},
		{
			"displayName": "POST /zones/{id_or_name}/rrsets/{rr_name}/{rr_type}/actions/add_records",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Add Records To Rrset"
					]
				}
			}
		},
		{
			"displayName": "ID Or Name",
			"name": "id_or_name",
			"required": true,
			"description": "ID or Name of the Zone.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Add Records To Rrset"
					]
				}
			}
		},
		{
			"displayName": "Rr Name",
			"name": "rr_name",
			"required": true,
			"default": "www",
			"type": "string",
			"description": "Name of the RRSet.\n\nThe name must be in lower case, and must not end with a dot or the Zone\nname. Names containing non-ASCII characters must be transcribed to\n[Punycode](https://wikipedia.org/wiki/Punycode) representation with ACE prefix, e.g.\n`xn--4bi` (✉️).\n\nFor the Zone apex, use `@`.\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Add Records To Rrset"
					]
				}
			}
		},
		{
			"displayName": "Rr Type",
			"name": "rr_type",
			"required": true,
			"default": "A",
			"type": "options",
			"description": "Type of the RRSet.\n",
			"options": [
				{
					"name": "A",
					"value": "A"
				},
				{
					"name": "AAAA",
					"value": "AAAA"
				},
				{
					"name": "CAA",
					"value": "CAA"
				},
				{
					"name": "CNAME",
					"value": "CNAME"
				},
				{
					"name": "DS",
					"value": "DS"
				},
				{
					"name": "HINFO",
					"value": "HINFO"
				},
				{
					"name": "HTTPS",
					"value": "HTTPS"
				},
				{
					"name": "MX",
					"value": "MX"
				},
				{
					"name": "NS",
					"value": "NS"
				},
				{
					"name": "PTR",
					"value": "PTR"
				},
				{
					"name": "RP",
					"value": "RP"
				},
				{
					"name": "SOA",
					"value": "SOA"
				},
				{
					"name": "SRV",
					"value": "SRV"
				},
				{
					"name": "SVCB",
					"value": "SVCB"
				},
				{
					"name": "TLSA",
					"value": "TLSA"
				},
				{
					"name": "TXT",
					"value": "TXT"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Add Records To Rrset"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Records",
			"name": "records",
			"type": "json",
			"default": "[\n  {\n    \"comment\": \"My web server at Hetzner Cloud.\",\n    \"value\": \"198.51.100.1\"\n  }\n]",
			"description": "Records to add to the RRSet.\n\nMust not be empty and must only contain distinct record values.\n",
			"routing": {
				"send": {
					"property": "records",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Add Records To Rrset"
					]
				}
			}
		},
		{
			"displayName": "Ttl",
			"name": "ttl",
			"type": "number",
			"default": 3600,
			"description": "Time To Live (TTL) of the RRSet.\n\nIf not set, the Zone's Default TTL is used.\nIf set, and the RRSet being updated already has a TTL, the values must be the same.\n",
			"routing": {
				"send": {
					"property": "ttl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Add Records To Rrset"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_apitoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for APIToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Add Records To Rrset"
					]
				}
			}
		},
		{
			"displayName": "POST /zones/{id_or_name}/rrsets/{rr_name}/{rr_type}/actions/change_protection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Change Rrsets Protection"
					]
				}
			}
		},
		{
			"displayName": "ID Or Name",
			"name": "id_or_name",
			"required": true,
			"description": "ID or Name of the Zone.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Change Rrsets Protection"
					]
				}
			}
		},
		{
			"displayName": "Rr Name",
			"name": "rr_name",
			"required": true,
			"default": "www",
			"type": "string",
			"description": "Name of the RRSet.\n\nThe name must be in lower case, and must not end with a dot or the Zone\nname. Names containing non-ASCII characters must be transcribed to\n[Punycode](https://wikipedia.org/wiki/Punycode) representation with ACE prefix, e.g.\n`xn--4bi` (✉️).\n\nFor the Zone apex, use `@`.\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Change Rrsets Protection"
					]
				}
			}
		},
		{
			"displayName": "Rr Type",
			"name": "rr_type",
			"required": true,
			"default": "A",
			"type": "options",
			"description": "Type of the RRSet.\n",
			"options": [
				{
					"name": "A",
					"value": "A"
				},
				{
					"name": "AAAA",
					"value": "AAAA"
				},
				{
					"name": "CAA",
					"value": "CAA"
				},
				{
					"name": "CNAME",
					"value": "CNAME"
				},
				{
					"name": "DS",
					"value": "DS"
				},
				{
					"name": "HINFO",
					"value": "HINFO"
				},
				{
					"name": "HTTPS",
					"value": "HTTPS"
				},
				{
					"name": "MX",
					"value": "MX"
				},
				{
					"name": "NS",
					"value": "NS"
				},
				{
					"name": "PTR",
					"value": "PTR"
				},
				{
					"name": "RP",
					"value": "RP"
				},
				{
					"name": "SOA",
					"value": "SOA"
				},
				{
					"name": "SRV",
					"value": "SRV"
				},
				{
					"name": "SVCB",
					"value": "SVCB"
				},
				{
					"name": "TLSA",
					"value": "TLSA"
				},
				{
					"name": "TXT",
					"value": "TXT"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Change Rrsets Protection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Change",
			"name": "change",
			"type": "boolean",
			"default": false,
			"description": "Prevent the Resource from being changed.",
			"routing": {
				"send": {
					"property": "change",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Change Rrsets Protection"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_apitoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for APIToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Change Rrsets Protection"
					]
				}
			}
		},
		{
			"displayName": "POST /zones/{id_or_name}/rrsets/{rr_name}/{rr_type}/actions/change_ttl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Change Rrsets Ttl"
					]
				}
			}
		},
		{
			"displayName": "ID Or Name",
			"name": "id_or_name",
			"required": true,
			"description": "ID or Name of the Zone.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Change Rrsets Ttl"
					]
				}
			}
		},
		{
			"displayName": "Rr Name",
			"name": "rr_name",
			"required": true,
			"default": "www",
			"type": "string",
			"description": "Name of the RRSet.\n\nThe name must be in lower case, and must not end with a dot or the Zone\nname. Names containing non-ASCII characters must be transcribed to\n[Punycode](https://wikipedia.org/wiki/Punycode) representation with ACE prefix, e.g.\n`xn--4bi` (✉️).\n\nFor the Zone apex, use `@`.\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Change Rrsets Ttl"
					]
				}
			}
		},
		{
			"displayName": "Rr Type",
			"name": "rr_type",
			"required": true,
			"default": "A",
			"type": "options",
			"description": "Type of the RRSet.\n",
			"options": [
				{
					"name": "A",
					"value": "A"
				},
				{
					"name": "AAAA",
					"value": "AAAA"
				},
				{
					"name": "CAA",
					"value": "CAA"
				},
				{
					"name": "CNAME",
					"value": "CNAME"
				},
				{
					"name": "DS",
					"value": "DS"
				},
				{
					"name": "HINFO",
					"value": "HINFO"
				},
				{
					"name": "HTTPS",
					"value": "HTTPS"
				},
				{
					"name": "MX",
					"value": "MX"
				},
				{
					"name": "NS",
					"value": "NS"
				},
				{
					"name": "PTR",
					"value": "PTR"
				},
				{
					"name": "RP",
					"value": "RP"
				},
				{
					"name": "SOA",
					"value": "SOA"
				},
				{
					"name": "SRV",
					"value": "SRV"
				},
				{
					"name": "SVCB",
					"value": "SVCB"
				},
				{
					"name": "TLSA",
					"value": "TLSA"
				},
				{
					"name": "TXT",
					"value": "TXT"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Change Rrsets Ttl"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ttl",
			"name": "ttl",
			"type": "number",
			"default": 3600,
			"description": "Time To Live (TTL) of the RRSet.\n\nMust be in between 60s and 2147483647s.\n\nIf not set, the Zone's Default TTL is used.\n",
			"routing": {
				"send": {
					"property": "ttl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Change Rrsets Ttl"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_apitoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for APIToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Change Rrsets Ttl"
					]
				}
			}
		},
		{
			"displayName": "POST /zones/{id_or_name}/rrsets/{rr_name}/{rr_type}/actions/remove_records",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Remove Records From Rrset"
					]
				}
			}
		},
		{
			"displayName": "ID Or Name",
			"name": "id_or_name",
			"required": true,
			"description": "ID or Name of the Zone.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Remove Records From Rrset"
					]
				}
			}
		},
		{
			"displayName": "Rr Name",
			"name": "rr_name",
			"required": true,
			"default": "www",
			"type": "string",
			"description": "Name of the RRSet.\n\nThe name must be in lower case, and must not end with a dot or the Zone\nname. Names containing non-ASCII characters must be transcribed to\n[Punycode](https://wikipedia.org/wiki/Punycode) representation with ACE prefix, e.g.\n`xn--4bi` (✉️).\n\nFor the Zone apex, use `@`.\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Remove Records From Rrset"
					]
				}
			}
		},
		{
			"displayName": "Rr Type",
			"name": "rr_type",
			"required": true,
			"default": "A",
			"type": "options",
			"description": "Type of the RRSet.\n",
			"options": [
				{
					"name": "A",
					"value": "A"
				},
				{
					"name": "AAAA",
					"value": "AAAA"
				},
				{
					"name": "CAA",
					"value": "CAA"
				},
				{
					"name": "CNAME",
					"value": "CNAME"
				},
				{
					"name": "DS",
					"value": "DS"
				},
				{
					"name": "HINFO",
					"value": "HINFO"
				},
				{
					"name": "HTTPS",
					"value": "HTTPS"
				},
				{
					"name": "MX",
					"value": "MX"
				},
				{
					"name": "NS",
					"value": "NS"
				},
				{
					"name": "PTR",
					"value": "PTR"
				},
				{
					"name": "RP",
					"value": "RP"
				},
				{
					"name": "SOA",
					"value": "SOA"
				},
				{
					"name": "SRV",
					"value": "SRV"
				},
				{
					"name": "SVCB",
					"value": "SVCB"
				},
				{
					"name": "TLSA",
					"value": "TLSA"
				},
				{
					"name": "TXT",
					"value": "TXT"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Remove Records From Rrset"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Records",
			"name": "records",
			"type": "json",
			"default": "[\n  {\n    \"comment\": \"My web server at Hetzner Cloud.\",\n    \"value\": \"198.51.100.1\"\n  }\n]",
			"description": "Records to remove from the RRSet.\n\nMust not be empty and must only contain distinct record values.\n",
			"routing": {
				"send": {
					"property": "records",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Remove Records From Rrset"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_apitoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for APIToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Remove Records From Rrset"
					]
				}
			}
		},
		{
			"displayName": "POST /zones/{id_or_name}/rrsets/{rr_name}/{rr_type}/actions/set_records",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Set Records Of Rrset"
					]
				}
			}
		},
		{
			"displayName": "ID Or Name",
			"name": "id_or_name",
			"required": true,
			"description": "ID or Name of the Zone.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Set Records Of Rrset"
					]
				}
			}
		},
		{
			"displayName": "Rr Name",
			"name": "rr_name",
			"required": true,
			"default": "www",
			"type": "string",
			"description": "Name of the RRSet.\n\nThe name must be in lower case, and must not end with a dot or the Zone\nname. Names containing non-ASCII characters must be transcribed to\n[Punycode](https://wikipedia.org/wiki/Punycode) representation with ACE prefix, e.g.\n`xn--4bi` (✉️).\n\nFor the Zone apex, use `@`.\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Set Records Of Rrset"
					]
				}
			}
		},
		{
			"displayName": "Rr Type",
			"name": "rr_type",
			"required": true,
			"default": "A",
			"type": "options",
			"description": "Type of the RRSet.\n",
			"options": [
				{
					"name": "A",
					"value": "A"
				},
				{
					"name": "AAAA",
					"value": "AAAA"
				},
				{
					"name": "CAA",
					"value": "CAA"
				},
				{
					"name": "CNAME",
					"value": "CNAME"
				},
				{
					"name": "DS",
					"value": "DS"
				},
				{
					"name": "HINFO",
					"value": "HINFO"
				},
				{
					"name": "HTTPS",
					"value": "HTTPS"
				},
				{
					"name": "MX",
					"value": "MX"
				},
				{
					"name": "NS",
					"value": "NS"
				},
				{
					"name": "PTR",
					"value": "PTR"
				},
				{
					"name": "RP",
					"value": "RP"
				},
				{
					"name": "SOA",
					"value": "SOA"
				},
				{
					"name": "SRV",
					"value": "SRV"
				},
				{
					"name": "SVCB",
					"value": "SVCB"
				},
				{
					"name": "TLSA",
					"value": "TLSA"
				},
				{
					"name": "TXT",
					"value": "TXT"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Set Records Of Rrset"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Records",
			"name": "records",
			"type": "json",
			"default": "[\n  {\n    \"comment\": \"My web server at Hetzner Cloud.\",\n    \"value\": \"198.51.100.1\"\n  }\n]",
			"description": "Records to set in the RRSet.\n\nMust not be empty and must only contain distinct record values.\n",
			"routing": {
				"send": {
					"property": "records",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Set Records Of Rrset"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_apitoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for APIToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Set Records Of Rrset"
					]
				}
			}
		},
		{
			"displayName": "POST /zones/{id_or_name}/rrsets/{rr_name}/{rr_type}/actions/update_records",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Update Records Of Rrset"
					]
				}
			}
		},
		{
			"displayName": "ID Or Name",
			"name": "id_or_name",
			"required": true,
			"description": "ID or Name of the Zone.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Update Records Of Rrset"
					]
				}
			}
		},
		{
			"displayName": "Rr Name",
			"name": "rr_name",
			"required": true,
			"default": "www",
			"type": "string",
			"description": "Name of the RRSet.\n\nThe name must be in lower case, and must not end with a dot or the Zone\nname. Names containing non-ASCII characters must be transcribed to\n[Punycode](https://wikipedia.org/wiki/Punycode) representation with ACE prefix, e.g.\n`xn--4bi` (✉️).\n\nFor the Zone apex, use `@`.\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Update Records Of Rrset"
					]
				}
			}
		},
		{
			"displayName": "Rr Type",
			"name": "rr_type",
			"required": true,
			"default": "A",
			"type": "options",
			"description": "Type of the RRSet.\n",
			"options": [
				{
					"name": "A",
					"value": "A"
				},
				{
					"name": "AAAA",
					"value": "AAAA"
				},
				{
					"name": "CAA",
					"value": "CAA"
				},
				{
					"name": "CNAME",
					"value": "CNAME"
				},
				{
					"name": "DS",
					"value": "DS"
				},
				{
					"name": "HINFO",
					"value": "HINFO"
				},
				{
					"name": "HTTPS",
					"value": "HTTPS"
				},
				{
					"name": "MX",
					"value": "MX"
				},
				{
					"name": "NS",
					"value": "NS"
				},
				{
					"name": "PTR",
					"value": "PTR"
				},
				{
					"name": "RP",
					"value": "RP"
				},
				{
					"name": "SOA",
					"value": "SOA"
				},
				{
					"name": "SRV",
					"value": "SRV"
				},
				{
					"name": "SVCB",
					"value": "SVCB"
				},
				{
					"name": "TLSA",
					"value": "TLSA"
				},
				{
					"name": "TXT",
					"value": "TXT"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Update Records Of Rrset"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Records",
			"name": "records",
			"type": "json",
			"default": "[\n  {\n    \"comment\": \"My web server at Hetzner Cloud.\",\n    \"value\": \"198.51.100.1\"\n  }\n]",
			"description": "Records to update in the RRSet.\n\nMust not be empty and must only contain distinct record values.\n",
			"routing": {
				"send": {
					"property": "records",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Update Records Of Rrset"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_apitoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for APIToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Update Records Of Rrset"
					]
				}
			}
		},
		{
			"displayName": "GET /zones/{id_or_name}/zonefile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Export Zone File"
					]
				}
			}
		},
		{
			"displayName": "ID Or Name",
			"name": "id_or_name",
			"required": true,
			"description": "ID or Name of the Zone.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Export Zone File"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_apitoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for APIToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zones"
					],
					"operation": [
						"Export Zone File"
					]
				}
			}
		},
];
