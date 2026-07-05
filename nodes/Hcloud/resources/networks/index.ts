import type { INodeProperties } from 'n8n-workflow';

export const networksDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					]
				}
			},
			"options": [
				{
					"name": "List Networks",
					"value": "List Networks",
					"action": "List Networks",
					"description": "List multiple Networks.\n\nUse the provided URI parameters to modify the result.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks"
						}
					}
				},
				{
					"name": "Create Network",
					"value": "Create Network",
					"action": "Create a Network",
					"description": "Creates a Network.\n\nThe provided `ip_range` can only be extended later on, but not reduced.\n\nSubnets can be added now or later on using the add subnet action. If you do not specify an `ip_range` for the subnet the first available /24 range will be used.\n\nRoutes can be added now or later by using the add route action.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks"
						}
					}
				},
				{
					"name": "Delete Network",
					"value": "Delete Network",
					"action": "Delete a Network",
					"description": "Deletes a Network.\n\nAttached resources will be detached automatically.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/networks/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Network",
					"value": "Get Network",
					"action": "Get a Network",
					"description": "Get a specific Network.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Replace Network",
					"value": "Replace Network",
					"action": "Update a Network",
					"description": "Update a Network.\n\nIf a change is currently being performed on this Network, a error response with code `conflict` will be returned.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "List Actions For Network",
					"value": "List Actions For Network",
					"action": "List Actions for a Network",
					"description": "Lists Actions for a Network.\n\nUse the provided URI parameters to modify the result.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"id\"]}}/actions"
						}
					}
				},
				{
					"name": "Get Action For Network",
					"value": "Get Action For Network",
					"action": "Get an Action for a Network",
					"description": "Returns a specific Action for a Network.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"id\"]}}/actions/{{$parameter[\"action_id\"]}}"
						}
					}
				},
				{
					"name": "Add Route To Network",
					"value": "Add Route To Network",
					"action": "Add a route to a Network",
					"description": "Adds a route entry to a Network.\n\nIf a change is currently being performed on this Network, a error response with code `conflict` will be returned.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"id\"]}}/actions/add_route"
						}
					}
				},
				{
					"name": "Add Subnet To Network",
					"value": "Add Subnet To Network",
					"action": "Add a subnet to a Network",
					"description": "Adds a new subnet to the Network.\n\nIf the subnet `ip_range` is not provided, the first available `/24` IP range will be used.\n\nIf a change is currently being performed on this Network, a error response with code `conflict` will be returned.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"id\"]}}/actions/add_subnet"
						}
					}
				},
				{
					"name": "Change Ip Range Of Network",
					"value": "Change Ip Range Of Network",
					"action": "Change IP range of a Network",
					"description": "Changes the IP range of a Network.\n\nThe following restrictions apply to changing the IP range:\n- IP ranges can only be extended and never shrunk.\n- IPs can only be added to the end of the existing range, therefore only the netmask is allowed to be changed.\n\nTo update the routes on the connected Servers, they need to be rebooted or the routes to be updated manually.\n\nFor example if the Network has a range of `10.0.0.0/16` to extend it the new range has to start with the IP `10.0.0.0` as well. The netmask `/16` can be changed to a smaller one then `16` therefore increasing the IP range. A valid entry would be `10.0.0.0/15`, `10.0.0.0/14` or `10.0.0.0/13` and so on.\n\nIf a change is currently being performed on this Network, a error response with code `conflict` will be returned.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"id\"]}}/actions/change_ip_range"
						}
					}
				},
				{
					"name": "Change Network Protection",
					"value": "Change Network Protection",
					"action": "Change Network Protection",
					"description": "Changes the protection settings of a Network.\n\nIf a change is currently being performed on this Network, a error response with code `conflict` will be returned.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"id\"]}}/actions/change_protection"
						}
					}
				},
				{
					"name": "Delete Route From Network",
					"value": "Delete Route From Network",
					"action": "Delete a route from a Network",
					"description": "Delete a route entry from a Network.\n\nIf a change is currently being performed on this Network, a error response with code `conflict` will be returned.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"id\"]}}/actions/delete_route"
						}
					}
				},
				{
					"name": "Delete Subnet From Network",
					"value": "Delete Subnet From Network",
					"action": "Delete a subnet from a Network",
					"description": "Deletes a single subnet entry from a Network.\n\nSubnets containing attached resources can not be deleted, they must be detached beforehand.\n\nIf a change is currently being performed on this Network, a error response with code `conflict` will be returned.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"id\"]}}/actions/delete_subnet"
						}
					}
				},
				{
					"name": "List Network Actions",
					"value": "List Network Actions",
					"action": "List Actions",
					"description": "Lists multiple Actions.\n\nUse the provided URI parameters to modify the result.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/actions"
						}
					}
				},
				{
					"name": "Get Network Action",
					"value": "Get Network Action",
					"action": "Get an Action",
					"description": "Returns a single Action.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/actions/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"List Networks"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort resources by field and direction. May be used multiple times.\n\nFor more information, see \"Sorting\".\n",
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
						"Networks"
					],
					"operation": [
						"List Networks"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Filter resources by their name.\n\nThe response will only contain the resources\nmatching exactly the specified name.\n",
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
						"Networks"
					],
					"operation": [
						"List Networks"
					]
				}
			}
		},
		{
			"displayName": "Label Selector",
			"name": "label_selector",
			"description": "Filter resources by labels.\n\nThe response will only contain resources matching the label selector.\nFor more information, see \"Label Selector\".\n",
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
						"Networks"
					],
					"operation": [
						"List Networks"
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
						"Networks"
					],
					"operation": [
						"List Networks"
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
						"Networks"
					],
					"operation": [
						"List Networks"
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
						"Networks"
					],
					"operation": [
						"List Networks"
					]
				}
			}
		},
		{
			"displayName": "POST /networks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Create Network"
					]
				}
			}
		},
		{
			"displayName": "Expose Routes To Vswitch",
			"name": "expose_routes_to_vswitch",
			"type": "boolean",
			"default": false,
			"description": "Toggle to expose routes to the Networks vSwitch.\n\nIndicates if the routes from this Network should be exposed to the vSwitch in this Network. Only takes effect if a [vSwitch is setup](https://docs.hetzner.com/cloud/networks/connect-dedi-vswitch) in this Network.\n",
			"routing": {
				"send": {
					"property": "expose_routes_to_vswitch",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Create Network"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ip Range",
			"name": "ip_range",
			"type": "string",
			"default": "10.0.0.0/16",
			"description": "IP range of the Network.\n\nUses CIDR notation.\n\nMust span all included subnets. Must be one of the private IPv4 ranges of RFC1918.\n\nMinimum network size is /24. We highly recommend that you pick a larger Network with a /16 netmask.\n",
			"routing": {
				"send": {
					"property": "ip_range",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Create Network"
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
						"Networks"
					],
					"operation": [
						"Create Network"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "mynet",
			"description": "Name of the Network.",
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
						"Networks"
					],
					"operation": [
						"Create Network"
					]
				}
			}
		},
		{
			"displayName": "Routes",
			"name": "routes",
			"type": "json",
			"default": "[\n  {\n    \"destination\": \"10.100.1.0/24\",\n    \"gateway\": \"10.0.1.1\"\n  }\n]",
			"description": "Array of routes set in this Network.",
			"routing": {
				"send": {
					"property": "routes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Create Network"
					]
				}
			}
		},
		{
			"displayName": "Subnets",
			"name": "subnets",
			"type": "json",
			"default": "[\n  {\n    \"ip_range\": \"10.0.1.0/24\",\n    \"network_zone\": \"eu-central\",\n    \"vswitch_id\": 1000\n  }\n]",
			"description": "Array of subnets to allocate.",
			"routing": {
				"send": {
					"property": "subnets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Create Network"
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
						"Networks"
					],
					"operation": [
						"Create Network"
					]
				}
			}
		},
		{
			"displayName": "DELETE /networks/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Delete Network"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Network.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Delete Network"
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
						"Networks"
					],
					"operation": [
						"Delete Network"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Get Network"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Network.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Get Network"
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
						"Networks"
					],
					"operation": [
						"Get Network"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Replace Network"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Network.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Replace Network"
					]
				}
			}
		},
		{
			"displayName": "Expose Routes To Vswitch",
			"name": "expose_routes_to_vswitch",
			"type": "boolean",
			"default": false,
			"description": "Toggle to expose routes to the Networks vSwitch.\n\nIndicates if the routes from this Network should be exposed to the vSwitch in this Network. Only takes effect if a [vSwitch is setup](https://docs.hetzner.com/cloud/networks/connect-dedi-vswitch) in this Network.\n",
			"routing": {
				"send": {
					"property": "expose_routes_to_vswitch",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Replace Network"
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
						"Networks"
					],
					"operation": [
						"Replace Network"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "new-name",
			"description": "New Network name.",
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
						"Networks"
					],
					"operation": [
						"Replace Network"
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
						"Networks"
					],
					"operation": [
						"Replace Network"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{id}/actions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"List Actions For Network"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Network.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"List Actions For Network"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort actions by field and direction. May be used multiple times.\n\nFor more information, see \"Sorting\".\n",
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
						"Networks"
					],
					"operation": [
						"List Actions For Network"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "Filter the actions by status. May be used multiple times.\n\nThe response will only contain actions matching the specified statuses.\n",
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
						"Networks"
					],
					"operation": [
						"List Actions For Network"
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
						"Networks"
					],
					"operation": [
						"List Actions For Network"
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
						"Networks"
					],
					"operation": [
						"List Actions For Network"
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
						"Networks"
					],
					"operation": [
						"List Actions For Network"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{id}/actions/{action_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Get Action For Network"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Network.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Get Action For Network"
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
						"Networks"
					],
					"operation": [
						"Get Action For Network"
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
						"Networks"
					],
					"operation": [
						"Get Action For Network"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{id}/actions/add_route",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Add Route To Network"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Network.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Add Route To Network"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Destination",
			"name": "destination",
			"type": "string",
			"default": "10.100.1.0/24",
			"description": "Destination network or host of the route.\n\nPackages addressed for IPs matching the destination IP prefix will be send to the specified gateway.\n\nMust be one of\n* private IPv4 ranges of RFC1918\n* or `0.0.0.0/0`.\n\nMust not overlap with\n* an existing ip_range in any subnets\n* or with any destinations in other routes\n* or with `172.31.1.1`.\n\n`172.31.1.1` is being used as a gateway for the public network interface of Servers.\n",
			"routing": {
				"send": {
					"property": "destination",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Add Route To Network"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Gateway",
			"name": "gateway",
			"type": "string",
			"default": "10.0.1.1",
			"description": "Gateway of the route.\n\nPackages addressed for the specified destination will be send to this IP address.\n\nCannot be\n* the first IP of the networks ip_range,\n* an IP behind a vSwitch or\n* `172.31.1.1`.\n\n`172.31.1.1` is being used as a gateway for the public network interface of Servers.\n",
			"routing": {
				"send": {
					"property": "gateway",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Add Route To Network"
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
						"Networks"
					],
					"operation": [
						"Add Route To Network"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{id}/actions/add_subnet",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Add Subnet To Network"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Network.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Add Subnet To Network"
					]
				}
			}
		},
		{
			"displayName": "Ip Range",
			"name": "ip_range",
			"type": "string",
			"default": "10.0.1.0/24",
			"description": "IP range of the subnet.\n\nUses CIDR notation.\n\nMust be a subnet of the parent Networks `ip_range`.\n\nMust not overlap with any other subnets or with any destinations in routes.\n\nMinimum network size is /30. We highly recommend that you pick a larger subnet with a /24 netmask.\n",
			"routing": {
				"send": {
					"property": "ip_range",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Add Subnet To Network"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Network Zone",
			"name": "network_zone",
			"type": "string",
			"default": "eu-central",
			"description": "Name of the Network Zone.\n\nThe Location contains the `network_zone` property it belongs to.\n | Name of the Network Zone.\n\nThe Location contains the `network_zone` it belongs to.\n",
			"routing": {
				"send": {
					"property": "network_zone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Add Subnet To Network"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "cloud",
			"description": "Type of subnet.\n",
			"options": [
				{
					"name": "Cloud",
					"value": "cloud"
				},
				{
					"name": "Server",
					"value": "server"
				},
				{
					"name": "Vswitch",
					"value": "vswitch"
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
						"Networks"
					],
					"operation": [
						"Add Subnet To Network"
					]
				}
			}
		},
		{
			"displayName": "Vswitch ID",
			"name": "vswitch_id",
			"type": "number",
			"default": 1000,
			"description": "ID of the robot vSwitch.\n\nMust only be supplied for subnets of type `vswitch`.\n | ID of the robot vSwitch.\n\nMust be supplied if the subnet is of type `vswitch`.\n",
			"routing": {
				"send": {
					"property": "vswitch_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Add Subnet To Network"
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
						"Networks"
					],
					"operation": [
						"Add Subnet To Network"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{id}/actions/change_ip_range",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Change Ip Range Of Network"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Network.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Change Ip Range Of Network"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ip Range",
			"name": "ip_range",
			"type": "string",
			"default": "10.0.0.0/16",
			"description": "IP range of the Network.\n\nUses CIDR notation.\n\nMust span all included subnets. Must be one of the private IPv4 ranges of RFC1918.\n\nMinimum network size is /24. We highly recommend that you pick a larger Network with a /16 netmask.\n",
			"routing": {
				"send": {
					"property": "ip_range",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Change Ip Range Of Network"
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
						"Networks"
					],
					"operation": [
						"Change Ip Range Of Network"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{id}/actions/change_protection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Change Network Protection"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Network.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Change Network Protection"
					]
				}
			}
		},
		{
			"displayName": "Delete",
			"name": "delete",
			"type": "boolean",
			"default": true,
			"description": "Delete protection setting.\n\nIf true, prevents the Network from being deleted.\n",
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
						"Networks"
					],
					"operation": [
						"Change Network Protection"
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
						"Networks"
					],
					"operation": [
						"Change Network Protection"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{id}/actions/delete_route",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Delete Route From Network"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Network.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Delete Route From Network"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Destination",
			"name": "destination",
			"type": "string",
			"default": "10.100.1.0/24",
			"description": "Destination network or host of the route.\n\nPackages addressed for IPs matching the destination IP prefix will be send to the specified gateway.\n\nMust be one of\n* private IPv4 ranges of RFC1918\n* or `0.0.0.0/0`.\n\nMust not overlap with\n* an existing ip_range in any subnets\n* or with any destinations in other routes\n* or with `172.31.1.1`.\n\n`172.31.1.1` is being used as a gateway for the public network interface of Servers.\n",
			"routing": {
				"send": {
					"property": "destination",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Delete Route From Network"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Gateway",
			"name": "gateway",
			"type": "string",
			"default": "10.0.1.1",
			"description": "Gateway of the route.\n\nPackages addressed for the specified destination will be send to this IP address.\n\nCannot be\n* the first IP of the networks ip_range,\n* an IP behind a vSwitch or\n* `172.31.1.1`.\n\n`172.31.1.1` is being used as a gateway for the public network interface of Servers.\n",
			"routing": {
				"send": {
					"property": "gateway",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Delete Route From Network"
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
						"Networks"
					],
					"operation": [
						"Delete Route From Network"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{id}/actions/delete_subnet",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Delete Subnet From Network"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Network.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Delete Subnet From Network"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ip Range",
			"name": "ip_range",
			"type": "string",
			"default": "10.0.1.0/24",
			"description": "IP range in CIDR block notation of the subnet to delete.",
			"routing": {
				"send": {
					"property": "ip_range",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Delete Subnet From Network"
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
						"Networks"
					],
					"operation": [
						"Delete Subnet From Network"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/actions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"List Network Actions"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"description": "Filter the actions by ID. May be used multiple times.\n\nThe response will only contain actions matching the specified IDs.\n",
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
						"Networks"
					],
					"operation": [
						"List Network Actions"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort actions by field and direction. May be used multiple times.\n\nFor more information, see \"Sorting\".\n",
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
						"Networks"
					],
					"operation": [
						"List Network Actions"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "Filter the actions by status. May be used multiple times.\n\nThe response will only contain actions matching the specified statuses.\n",
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
						"Networks"
					],
					"operation": [
						"List Network Actions"
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
						"Networks"
					],
					"operation": [
						"List Network Actions"
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
						"Networks"
					],
					"operation": [
						"List Network Actions"
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
						"Networks"
					],
					"operation": [
						"List Network Actions"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/actions/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Get Network Action"
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
						"Networks"
					],
					"operation": [
						"Get Network Action"
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
						"Networks"
					],
					"operation": [
						"Get Network Action"
					]
				}
			}
		},
];
