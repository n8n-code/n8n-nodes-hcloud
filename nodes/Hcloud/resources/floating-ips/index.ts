import type { INodeProperties } from 'n8n-workflow';

export const floatingIpsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					]
				}
			},
			"options": [
				{
					"name": "List Floating Ips",
					"value": "List Floating Ips",
					"action": "List Floating IPs",
					"description": "List multiple Floating IPs.\n\nUse the provided URI parameters to modify the result.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/floating_ips"
						}
					}
				},
				{
					"name": "Create Floating Ip",
					"value": "Create Floating Ip",
					"action": "Create a Floating IP",
					"description": "Create a Floating IP.\n\nProvide the `server` attribute to assign the Floating IP to that server or provide a `home_location` to locate the Floating IP at. Note that the Floating IP can be assigned to a Server in any Location later on. For optimal routing it is advised to use the Floating IP in the same Location it was created in.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/floating_ips"
						}
					}
				},
				{
					"name": "Delete Floating Ip",
					"value": "Delete Floating Ip",
					"action": "Delete a Floating IP",
					"description": "Deletes a Floating IP.\n\nIf assigned to a Server the Floating IP will be unassigned automatically until 1 May 2026. After this date, the Floating IP needs to be unassigned before it can be deleted.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `must_be_unassigned` | Error when IP is still assigned to a Resource. This error will appear as of 1 May 2026. |\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/floating_ips/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Floating Ip",
					"value": "Get Floating Ip",
					"action": "Get a Floating IP",
					"description": "Returns a single Floating IP.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/floating_ips/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Replace Floating Ip",
					"value": "Replace Floating Ip",
					"action": "Update a Floating IP",
					"description": "Update a Floating IP.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/floating_ips/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "List Actions For Floating Ip",
					"value": "List Actions For Floating Ip",
					"action": "List Actions for a Floating IP",
					"description": "Lists Actions for a Floating IP.\n\nUse the provided URI parameters to modify the result.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/floating_ips/{{$parameter[\"id\"]}}/actions"
						}
					}
				},
				{
					"name": "Get Action For Floating Ip",
					"value": "Get Action For Floating Ip",
					"action": "Get an Action for a Floating IP",
					"description": "Returns a specific Action for a Floating IP.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/floating_ips/{{$parameter[\"id\"]}}/actions/{{$parameter[\"action_id\"]}}"
						}
					}
				},
				{
					"name": "Assign Floating Ip To Server",
					"value": "Assign Floating Ip To Server",
					"action": "Assign a Floating IP to a Server",
					"description": "Assigns a Floating IP to a Server.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `floating_ip_assigned` | The Floating IP is already assigned |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/floating_ips/{{$parameter[\"id\"]}}/actions/assign"
						}
					}
				},
				{
					"name": "Change Reverse DNS Records For Floating Ip",
					"value": "Change Reverse DNS Records For Floating Ip",
					"action": "Change reverse DNS records for a Floating IP",
					"description": "Change the reverse DNS records for this Floating IP.\n\nAllows to modify the PTR records set for the IP address.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/floating_ips/{{$parameter[\"id\"]}}/actions/change_dns_ptr"
						}
					}
				},
				{
					"name": "Change Floating Ip Protection",
					"value": "Change Floating Ip Protection",
					"action": "Change Floating IP Protection",
					"description": "Changes the protection settings configured for the Floating IP.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/floating_ips/{{$parameter[\"id\"]}}/actions/change_protection"
						}
					}
				},
				{
					"name": "Unassign Floating Ip",
					"value": "Unassign Floating Ip",
					"action": "Unassign a Floating IP",
					"description": "Unassigns a Floating IP.\n\nResults in the IP being unreachable. Can be assigned to another resource again.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/floating_ips/{{$parameter[\"id\"]}}/actions/unassign"
						}
					}
				},
				{
					"name": "List Floating Ip Actions",
					"value": "List Floating Ip Actions",
					"action": "List Actions",
					"description": "Lists multiple Actions.\n\nUse the provided URI parameters to modify the result.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/floating_ips/actions"
						}
					}
				},
				{
					"name": "Get Floating Ip Action",
					"value": "Get Floating Ip Action",
					"action": "Get an Action",
					"description": "Returns a single Action.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/floating_ips/actions/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /floating_ips",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"List Floating Ips"
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
						"Floating Ips"
					],
					"operation": [
						"List Floating Ips"
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
						"Floating Ips"
					],
					"operation": [
						"List Floating Ips"
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
						"Floating Ips"
					],
					"operation": [
						"List Floating Ips"
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
						"Floating Ips"
					],
					"operation": [
						"List Floating Ips"
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
						"Floating Ips"
					],
					"operation": [
						"List Floating Ips"
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
						"Floating Ips"
					],
					"operation": [
						"List Floating Ips"
					]
				}
			}
		},
		{
			"displayName": "POST /floating_ips",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"Create Floating Ip"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "This describes my resource",
			"description": "Description of the Resource.",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"Create Floating Ip"
					]
				}
			}
		},
		{
			"displayName": "Home Location",
			"name": "home_location",
			"type": "string",
			"default": "fsn1",
			"description": "Home Location for the Floating IP.\n\nEither the ID or the name of the Location.\n\nOnly optional if no Server is provided. Routing is optimized for this Locations.\n",
			"routing": {
				"send": {
					"property": "home_location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"Create Floating Ip"
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
						"Floating Ips"
					],
					"operation": [
						"Create Floating Ip"
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
						"Floating Ips"
					],
					"operation": [
						"Create Floating Ip"
					]
				}
			}
		},
		{
			"displayName": "Server",
			"name": "server",
			"type": "number",
			"default": 42,
			"description": "Server the Floating IP is assigned to.\n\n`null` if not assigned.\n",
			"routing": {
				"send": {
					"property": "server",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"Create Floating Ip"
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
						"Floating Ips"
					],
					"operation": [
						"Create Floating Ip"
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
						"Floating Ips"
					],
					"operation": [
						"Create Floating Ip"
					]
				}
			}
		},
		{
			"displayName": "DELETE /floating_ips/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"Delete Floating Ip"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Floating IP.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"Delete Floating Ip"
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
						"Floating Ips"
					],
					"operation": [
						"Delete Floating Ip"
					]
				}
			}
		},
		{
			"displayName": "GET /floating_ips/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"Get Floating Ip"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Floating IP.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"Get Floating Ip"
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
						"Floating Ips"
					],
					"operation": [
						"Get Floating Ip"
					]
				}
			}
		},
		{
			"displayName": "PUT /floating_ips/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"Replace Floating Ip"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Floating IP.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"Replace Floating Ip"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "This describes my resource",
			"description": "Description of the Resource.",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"Replace Floating Ip"
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
						"Floating Ips"
					],
					"operation": [
						"Replace Floating Ip"
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
						"Floating Ips"
					],
					"operation": [
						"Replace Floating Ip"
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
						"Floating Ips"
					],
					"operation": [
						"Replace Floating Ip"
					]
				}
			}
		},
		{
			"displayName": "GET /floating_ips/{id}/actions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"List Actions For Floating Ip"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Floating IP.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"List Actions For Floating Ip"
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
						"Floating Ips"
					],
					"operation": [
						"List Actions For Floating Ip"
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
						"Floating Ips"
					],
					"operation": [
						"List Actions For Floating Ip"
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
						"Floating Ips"
					],
					"operation": [
						"List Actions For Floating Ip"
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
						"Floating Ips"
					],
					"operation": [
						"List Actions For Floating Ip"
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
						"Floating Ips"
					],
					"operation": [
						"List Actions For Floating Ip"
					]
				}
			}
		},
		{
			"displayName": "GET /floating_ips/{id}/actions/{action_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"Get Action For Floating Ip"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Floating IP.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"Get Action For Floating Ip"
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
						"Floating Ips"
					],
					"operation": [
						"Get Action For Floating Ip"
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
						"Floating Ips"
					],
					"operation": [
						"Get Action For Floating Ip"
					]
				}
			}
		},
		{
			"displayName": "POST /floating_ips/{id}/actions/assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"Assign Floating Ip To Server"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Floating IP.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"Assign Floating Ip To Server"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Server",
			"name": "server",
			"type": "number",
			"default": 42,
			"description": "Server the Floating IP is assigned to.\n\n`null` if not assigned.\n",
			"routing": {
				"send": {
					"property": "server",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"Assign Floating Ip To Server"
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
						"Floating Ips"
					],
					"operation": [
						"Assign Floating Ip To Server"
					]
				}
			}
		},
		{
			"displayName": "POST /floating_ips/{id}/actions/change_dns_ptr",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"Change Reverse DNS Records For Floating Ip"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Floating IP.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"Change Reverse DNS Records For Floating Ip"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "DNS Ptr",
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
						"Floating Ips"
					],
					"operation": [
						"Change Reverse DNS Records For Floating Ip"
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
						"Floating Ips"
					],
					"operation": [
						"Change Reverse DNS Records For Floating Ip"
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
						"Floating Ips"
					],
					"operation": [
						"Change Reverse DNS Records For Floating Ip"
					]
				}
			}
		},
		{
			"displayName": "POST /floating_ips/{id}/actions/change_protection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"Change Floating Ip Protection"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Floating IP.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"Change Floating Ip Protection"
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
						"Floating Ips"
					],
					"operation": [
						"Change Floating Ip Protection"
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
						"Floating Ips"
					],
					"operation": [
						"Change Floating Ip Protection"
					]
				}
			}
		},
		{
			"displayName": "POST /floating_ips/{id}/actions/unassign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"Unassign Floating Ip"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Floating IP.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"Unassign Floating Ip"
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
						"Floating Ips"
					],
					"operation": [
						"Unassign Floating Ip"
					]
				}
			}
		},
		{
			"displayName": "GET /floating_ips/actions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"List Floating Ip Actions"
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
						"Floating Ips"
					],
					"operation": [
						"List Floating Ip Actions"
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
						"Floating Ips"
					],
					"operation": [
						"List Floating Ip Actions"
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
						"Floating Ips"
					],
					"operation": [
						"List Floating Ip Actions"
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
						"Floating Ips"
					],
					"operation": [
						"List Floating Ip Actions"
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
						"Floating Ips"
					],
					"operation": [
						"List Floating Ip Actions"
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
						"Floating Ips"
					],
					"operation": [
						"List Floating Ip Actions"
					]
				}
			}
		},
		{
			"displayName": "GET /floating_ips/actions/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Floating Ips"
					],
					"operation": [
						"Get Floating Ip Action"
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
						"Floating Ips"
					],
					"operation": [
						"Get Floating Ip Action"
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
						"Floating Ips"
					],
					"operation": [
						"Get Floating Ip Action"
					]
				}
			}
		},
];
