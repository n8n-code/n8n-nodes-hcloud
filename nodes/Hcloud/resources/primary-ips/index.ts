import type { INodeProperties } from 'n8n-workflow';

export const primaryIpsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					]
				}
			},
			"options": [
				{
					"name": "List Primary Ips",
					"value": "List Primary Ips",
					"action": "List Primary IPs",
					"description": "List multiple Primary IPs.\n\nUse the provided URI parameters to modify the result.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/primary_ips"
						}
					}
				},
				{
					"name": "Create Primary Ip",
					"value": "Create Primary Ip",
					"action": "Create a Primary IP",
					"description": "Create a new Primary IP.\n\nCan optionally be assigned to a resource by providing an `assignee_id` and `assignee_type`.\n\nIf not assigned to a resource the `location` key needs to be provided. This can be either the ID or the name of the Location this Primary IP shall be created in.\n\nA Primary IP can only be assigned to resource in the same Location later on.\n\nThe `datacenter` key is deprecated in favor of `location` and will be removed after 01 July 2026.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `server_not_stopped` | The specified Server is running, but needs to be powered off |\n| `422` | `server_has_ipv4` | The Server already has an ipv4 address |\n| `422` | `server_has_ipv6` | The Server already has an ipv6 address |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/primary_ips"
						}
					}
				},
				{
					"name": "Delete Primary Ip",
					"value": "Delete Primary Ip",
					"action": "Delete a Primary IP",
					"description": "Deletes a Primary IP.\n\nThe Server must be powered off (status `off`) in order for this operation to succeed.\nIf assigned to a Server the Primary IP will be unassigned automatically until 1 May 2026. After this date, the Primary IP needs to be unassigned before it can be deleted.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `must_be_unassigned` | Error when IP is still assigned to a Resource. This error will appear as of 1 May 2026. |\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/primary_ips/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Primary Ip",
					"value": "Get Primary Ip",
					"action": "Get a Primary IP",
					"description": "Returns a Primary IP.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/primary_ips/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Replace Primary Ip",
					"value": "Replace Primary Ip",
					"action": "Update a Primary IP",
					"description": "Update a Primary IP.\n\nIf another change is concurrently performed on this Primary IP, a error response with code `conflict` will be returned.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/primary_ips/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "List Actions For Primary Ip",
					"value": "List Actions For Primary Ip",
					"action": "List Actions for a Primary IP",
					"description": "Returns all Actions for a Primary IP.\n\nUse the provided URI parameters to modify the result.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/primary_ips/{{$parameter[\"id\"]}}/actions"
						}
					}
				},
				{
					"name": "Get Action For Primary Ip",
					"value": "Get Action For Primary Ip",
					"action": "Get an Action for a Primary IP",
					"description": "Returns a specific Action for a Primary IP.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/primary_ips/{{$parameter[\"id\"]}}/actions/{{$parameter[\"action_id\"]}}"
						}
					}
				},
				{
					"name": "Assign Primary Ip To Resource",
					"value": "Assign Primary Ip To Resource",
					"action": "Assign a Primary IP to a resource",
					"description": "Assign a Primary IP to a resource.\n\nA Server can only have one Primary IP of type `ipv4` and one of type `ipv6` assigned. If you need more IPs use Floating IPs.\n\nA Server must be powered off (status `off`) in order for this operation to succeed.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `server_not_stopped` | The Server is running, but needs to be powered off |\n| `422` | `primary_ip_already_assigned` | Primary IP is already assigned to a different Server |\n| `422` | `server_has_ipv4` | The Server already has an IPv4 address |\n| `422` | `server_has_ipv6` | The Server already has an IPv6 address |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/primary_ips/{{$parameter[\"id\"]}}/actions/assign"
						}
					}
				},
				{
					"name": "Change Reverse Dns Records For Primary Ip",
					"value": "Change Reverse Dns Records For Primary Ip",
					"action": "Change reverse DNS records for a Primary IP",
					"description": "Change the reverse DNS records for this Primary IP.\n\nAllows to modify the PTR records set for the IP address.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/primary_ips/{{$parameter[\"id\"]}}/actions/change_dns_ptr"
						}
					}
				},
				{
					"name": "Change Primary Ip Protection",
					"value": "Change Primary Ip Protection",
					"action": "Change Primary IP Protection",
					"description": "Changes the protection configuration of a Primary IP.\n\nA Primary IPs deletion protection can only be enabled if its `auto_delete` property is set to `false`.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/primary_ips/{{$parameter[\"id\"]}}/actions/change_protection"
						}
					}
				},
				{
					"name": "Unassign Primary Ip From Resource",
					"value": "Unassign Primary Ip From Resource",
					"action": "Unassign a Primary IP from a resource",
					"description": "Unassign a Primary IP from a resource.\n\nA Server must be powered off (status `off`) in order for this operation to succeed.\n\nA Server requires at least one network interface (public or private) to be powered on.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `server_not_stopped` | The Server is running, but needs to be powered off |\n| `422` | `server_is_load_balancer_target` | The Server IPv4 address is a loadbalancer target |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/primary_ips/{{$parameter[\"id\"]}}/actions/unassign"
						}
					}
				},
				{
					"name": "List Primary Ip Actions",
					"value": "List Primary Ip Actions",
					"action": "List Actions",
					"description": "Lists multiple Actions.\n\nUse the provided URI parameters to modify the result.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/primary_ips/actions"
						}
					}
				},
				{
					"name": "Get Primary Ip Action",
					"value": "Get Primary Ip Action",
					"action": "Get an Action",
					"description": "Returns a single Action.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/primary_ips/actions/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /primary_ips",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"List Primary Ips"
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
						"Primary Ips"
					],
					"operation": [
						"List Primary Ips"
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
						"Primary Ips"
					],
					"operation": [
						"List Primary Ips"
					]
				}
			}
		},
		{
			"displayName": "Ip",
			"name": "ip",
			"description": "Filter results by IP address.",
			"default": "127.0.0.1",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"List Primary Ips"
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
						"Primary Ips"
					],
					"operation": [
						"List Primary Ips"
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
						"Primary Ips"
					],
					"operation": [
						"List Primary Ips"
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
						"Primary Ips"
					],
					"operation": [
						"List Primary Ips"
					]
				}
			}
		},
		{
			"displayName": "POST /primary_ips",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Create Primary Ip"
					]
				}
			}
		},
		{
			"displayName": "Assignee Id",
			"name": "assignee_id",
			"type": "number",
			"default": 17,
			"description": "ID of resource to assign the Primary IP to.\n\nOmitted if the Primary IP should not get assigned.\n",
			"routing": {
				"send": {
					"property": "assignee_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Create Primary Ip"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Assignee Type",
			"name": "assignee_type",
			"type": "options",
			"default": "server",
			"description": "Type of resource the Primary IP can get assigned to.\n\nCurrently Primary IPs can only be assigned to Servers,\ntherefore this field must be set to `server`.\n",
			"options": [
				{
					"name": "Server",
					"value": "server"
				}
			],
			"routing": {
				"send": {
					"property": "assignee_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Create Primary Ip"
					]
				}
			}
		},
		{
			"displayName": "Auto Delete",
			"name": "auto_delete",
			"type": "boolean",
			"default": false,
			"description": "Auto deletion state.\n\nIf enabled the Primary IP will be deleted once the assigned resource gets deleted.\n",
			"routing": {
				"send": {
					"property": "auto_delete",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Create Primary Ip"
					]
				}
			}
		},
		{
			"displayName": "Datacenter",
			"name": "datacenter",
			"type": "string",
			"default": "fsn1-dc8",
			"description": "**Deprecated**: This property is deprecated and will be removed after 1 July 2026.\nUse the `location` key instead.\n\nData Center ID or name.\n\nThe Primary IP will be bound to this Data Center.\nOmit if `assignee_id`/`assignee_type` or `location` are provided.\n",
			"routing": {
				"send": {
					"property": "datacenter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Create Primary Ip"
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
						"Primary Ips"
					],
					"operation": [
						"Create Primary Ip"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "location",
			"type": "string",
			"default": "fsn1",
			"description": "Location ID or name the Primary IP will be bound to.\n\nOmit if `assignee_id`/`assignee_type` or `datacenter` are provided.\n",
			"routing": {
				"send": {
					"property": "location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Create Primary Ip"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "my-resource",
			"description": "Name of the Resource. Must be unique per Project.",
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
						"Primary Ips"
					],
					"operation": [
						"Create Primary Ip"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "ipv6",
			"description": "The Floating IP type. | Type of Primary IP the price is for. | Type of Floating IP the price is for. | Primary IP type.",
			"options": [
				{
					"name": "Ipv 4",
					"value": "ipv4"
				},
				{
					"name": "Ipv 6",
					"value": "ipv6"
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
						"Primary Ips"
					],
					"operation": [
						"Create Primary Ip"
					]
				}
			}
		},
		{
			"displayName": "DELETE /primary_ips/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Delete Primary Ip"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Primary IP.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Delete Primary Ip"
					]
				}
			}
		},
		{
			"displayName": "GET /primary_ips/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Get Primary Ip"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Primary IP.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Get Primary Ip"
					]
				}
			}
		},
		{
			"displayName": "PUT /primary_ips/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Replace Primary Ip"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Primary IP.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Replace Primary Ip"
					]
				}
			}
		},
		{
			"displayName": "Auto Delete",
			"name": "auto_delete",
			"type": "boolean",
			"default": true,
			"description": "Auto deletion state.\n\nIf enabled the Primary IP will be deleted once the assigned resource gets deleted.\n",
			"routing": {
				"send": {
					"property": "auto_delete",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Replace Primary Ip"
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
						"Primary Ips"
					],
					"operation": [
						"Replace Primary Ip"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "my-resource",
			"description": "Name of the Resource. Must be unique per Project.",
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
						"Primary Ips"
					],
					"operation": [
						"Replace Primary Ip"
					]
				}
			}
		},
		{
			"displayName": "GET /primary_ips/{id}/actions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"List Actions For Primary Ip"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Primary IP.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"List Actions For Primary Ip"
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
						"Primary Ips"
					],
					"operation": [
						"List Actions For Primary Ip"
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
						"Primary Ips"
					],
					"operation": [
						"List Actions For Primary Ip"
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
						"Primary Ips"
					],
					"operation": [
						"List Actions For Primary Ip"
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
						"Primary Ips"
					],
					"operation": [
						"List Actions For Primary Ip"
					]
				}
			}
		},
		{
			"displayName": "GET /primary_ips/{id}/actions/{action_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Get Action For Primary Ip"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Primary IP.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Get Action For Primary Ip"
					]
				}
			}
		},
		{
			"displayName": "Action Id",
			"name": "action_id",
			"required": true,
			"description": "ID of the Action.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Get Action For Primary Ip"
					]
				}
			}
		},
		{
			"displayName": "POST /primary_ips/{id}/actions/assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Assign Primary Ip To Resource"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Primary IP.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Assign Primary Ip To Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Assignee Id",
			"name": "assignee_id",
			"type": "number",
			"default": 4711,
			"description": "ID of a resource of type `assignee_type`.",
			"routing": {
				"send": {
					"property": "assignee_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Assign Primary Ip To Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Assignee Type",
			"name": "assignee_type",
			"type": "options",
			"default": "server",
			"description": "Type of resource assigning the Primary IP to.",
			"options": [
				{
					"name": "Server",
					"value": "server"
				}
			],
			"routing": {
				"send": {
					"property": "assignee_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Assign Primary Ip To Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /primary_ips/{id}/actions/change_dns_ptr",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Change Reverse Dns Records For Primary Ip"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Primary IP.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Change Reverse Dns Records For Primary Ip"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Dns Ptr",
			"name": "dns_ptr",
			"type": "string",
			"default": "server.example.com",
			"description": "Domain Name to point to.\n\nPTR record content used for reverse DNS.\n | DNS pointer for the specific IP address.",
			"routing": {
				"send": {
					"property": "dns_ptr",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Change Reverse Dns Records For Primary Ip"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ip",
			"name": "ip",
			"type": "string",
			"default": "2001:db8::1",
			"description": "Single IPv4 or IPv6 address to create pointer for.\n | Single IPv6 address of this Server for which the reverse DNS entry has been set up.",
			"routing": {
				"send": {
					"property": "ip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Change Reverse Dns Records For Primary Ip"
					]
				}
			}
		},
		{
			"displayName": "POST /primary_ips/{id}/actions/change_protection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Change Primary Ip Protection"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Primary IP.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Change Primary Ip Protection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Delete",
			"name": "delete",
			"type": "boolean",
			"default": false,
			"description": "Prevent the Resource from being deleted.",
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
						"Primary Ips"
					],
					"operation": [
						"Change Primary Ip Protection"
					]
				}
			}
		},
		{
			"displayName": "POST /primary_ips/{id}/actions/unassign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Unassign Primary Ip From Resource"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Primary IP.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Unassign Primary Ip From Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /primary_ips/actions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"List Primary Ip Actions"
					]
				}
			}
		},
		{
			"displayName": "Id",
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
						"Primary Ips"
					],
					"operation": [
						"List Primary Ip Actions"
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
						"Primary Ips"
					],
					"operation": [
						"List Primary Ip Actions"
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
						"Primary Ips"
					],
					"operation": [
						"List Primary Ip Actions"
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
						"Primary Ips"
					],
					"operation": [
						"List Primary Ip Actions"
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
						"Primary Ips"
					],
					"operation": [
						"List Primary Ip Actions"
					]
				}
			}
		},
		{
			"displayName": "GET /primary_ips/actions/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Get Primary Ip Action"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Action.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Primary Ips"
					],
					"operation": [
						"Get Primary Ip Action"
					]
				}
			}
		},
];
