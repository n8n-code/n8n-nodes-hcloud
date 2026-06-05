import type { INodeProperties } from 'n8n-workflow';

export const loadBalancersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					]
				}
			},
			"options": [
				{
					"name": "List Load Balancers",
					"value": "List Load Balancers",
					"action": "List Load Balancers",
					"description": "Gets all existing Load Balancers that you have available.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/load_balancers"
						}
					}
				},
				{
					"name": "Create Load Balancer",
					"value": "Create Load Balancer",
					"action": "Create a Load Balancer",
					"description": "Creates a Load Balancer.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n|  | `cloud_resource_ip_not_allowed` | The IP you are trying to add as a target belongs to a Hetzner Cloud resource |\n|  | `ip_not_owned` | The IP is not owned by the owner of the project of the Load Balancer |\n|  | `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network |\n|  | `robot_unavailable` | Robot was not available. The caller may retry the operation after a short delay. |\n|  | `server_not_attached_to_network` | The server you are trying to add as a target is not attached to the same network as the Load Balancer |\n|  | `source_port_already_used` | The source port you are trying to add is already in use |\n|  | `missing_ipv4` | The server that you are trying to add as a public target does not have a public IPv4 address |\n|  | `target_already_defined` | The Load Balancer target you are trying to define is already defined |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/load_balancers"
						}
					}
				},
				{
					"name": "Delete Load Balancer",
					"value": "Delete Load Balancer",
					"action": "Delete a Load Balancer",
					"description": "Deletes a Load Balancer.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/load_balancers/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Load Balancer",
					"value": "Get Load Balancer",
					"action": "Get a Load Balancer",
					"description": "Gets a specific Load Balancer object.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/load_balancers/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Replace Load Balancer",
					"value": "Replace Load Balancer",
					"action": "Update a Load Balancer",
					"description": "Updates a Load Balancer. You can update a Load Balancer’s name and a Load Balancer’s labels.\n\nNote: if the Load Balancer object changes during the request, the response will be a “conflict” error.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/load_balancers/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "List Actions For Load Balancer",
					"value": "List Actions For Load Balancer",
					"action": "List Actions for a Load Balancer",
					"description": "Returns all Action objects for a Load Balancer. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/load_balancers/{{$parameter[\"id\"]}}/actions"
						}
					}
				},
				{
					"name": "Get Action For Load Balancer",
					"value": "Get Action For Load Balancer",
					"action": "Get an Action for a Load Balancer",
					"description": "Returns a specific Action for a Load Balancer.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/load_balancers/{{$parameter[\"id\"]}}/actions/{{$parameter[\"action_id\"]}}"
						}
					}
				},
				{
					"name": "Add Service",
					"value": "Add Service",
					"action": "Add Service",
					"description": "Adds a service to a Load Balancer.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n|  | `source_port_already_used` | The source port you are trying to add is already in use |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/load_balancers/{{$parameter[\"id\"]}}/actions/add_service"
						}
					}
				},
				{
					"name": "Add Target",
					"value": "Add Target",
					"action": "Add Target",
					"description": "Adds a target to a Load Balancer.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n|  | `cloud_resource_ip_not_allowed` | The IP you are trying to add as a target belongs to a Hetzner Cloud resource |\n|  | `ip_not_owned` | The IP you are trying to add as a target is not owned by the Project owner |\n|  | `load_balancer_public_interface_disabled` | The Load Balancer's public network interface is disabled |\n|  | `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network |\n|  | `robot_unavailable` | Robot was not available. The caller may retry the operation after a short delay. |\n|  | `server_not_attached_to_network` | The server you are trying to add as a target is not attached to the same network as the Load Balancer |\n|  | `missing_ipv4` | The server that you are trying to add as a public target does not have a public IPv4 address |\n|  | `target_already_defined` | The Load Balancer target you are trying to define is already defined |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/load_balancers/{{$parameter[\"id\"]}}/actions/add_target"
						}
					}
				},
				{
					"name": "Attach Load Balancer To Network",
					"value": "Attach Load Balancer To Network",
					"action": "Attach a Load Balancer to a Network",
					"description": "Attach a Load Balancer to a Network.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n|  | `load_balancer_already_attached` | The Load Balancer is already attached to a network |\n|  | `ip_not_available` | The provided Network IP is not available |\n|  | `no_subnet_available` | No Subnet or IP is available for the Load Balancer within the network |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/load_balancers/{{$parameter[\"id\"]}}/actions/attach_to_network"
						}
					}
				},
				{
					"name": "Change Algorithm",
					"value": "Change Algorithm",
					"action": "Change Algorithm",
					"description": "Change the algorithm that determines to which target new requests are sent.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/load_balancers/{{$parameter[\"id\"]}}/actions/change_algorithm"
						}
					}
				},
				{
					"name": "Change Reverse Dns Entry For This Load Balancer",
					"value": "Change Reverse Dns Entry For This Load Balancer",
					"action": "Change reverse DNS entry for this Load Balancer",
					"description": "Changes the hostname that will appear when getting the hostname belonging to the public IPs (IPv4 and IPv6) of this Load Balancer.\n\nFloating IPs assigned to the Server are not affected by this.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/load_balancers/{{$parameter[\"id\"]}}/actions/change_dns_ptr"
						}
					}
				},
				{
					"name": "Change Load Balancer Protection",
					"value": "Change Load Balancer Protection",
					"action": "Change Load Balancer Protection",
					"description": "Changes the protection configuration of a Load Balancer.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/load_balancers/{{$parameter[\"id\"]}}/actions/change_protection"
						}
					}
				},
				{
					"name": "Change Type Of Load Balancer",
					"value": "Change Type Of Load Balancer",
					"action": "Change the Type of a Load Balancer",
					"description": "Changes the type (Max Services, Max Targets and Max Connections) of a Load Balancer.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n|  | `invalid_load_balancer_type` | The Load Balancer type does not fit for the given Load Balancer |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/load_balancers/{{$parameter[\"id\"]}}/actions/change_type"
						}
					}
				},
				{
					"name": "Delete Service",
					"value": "Delete Service",
					"action": "Delete Service",
					"description": "Delete a service of a Load Balancer.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/load_balancers/{{$parameter[\"id\"]}}/actions/delete_service"
						}
					}
				},
				{
					"name": "Detach Load Balancer From Network",
					"value": "Detach Load Balancer From Network",
					"action": "Detach a Load Balancer from a Network",
					"description": "Detaches a Load Balancer from a network.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/load_balancers/{{$parameter[\"id\"]}}/actions/detach_from_network"
						}
					}
				},
				{
					"name": "Disable Public Interface Of Load Balancer",
					"value": "Disable Public Interface Of Load Balancer",
					"action": "Disable the public interface of a Load Balancer",
					"description": "Disable the public interface of a Load Balancer. The Load Balancer will be not accessible from the internet via its public IPs.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n|  | `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network |\n|  | `targets_without_use_private_ip` | The Load Balancer has targets that use the public IP instead of the private IP |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/load_balancers/{{$parameter[\"id\"]}}/actions/disable_public_interface"
						}
					}
				},
				{
					"name": "Enable Public Interface Of Load Balancer",
					"value": "Enable Public Interface Of Load Balancer",
					"action": "Enable the public interface of a Load Balancer",
					"description": "Enable the public interface of a Load Balancer. The Load Balancer will be accessible from the internet via its public IPs.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/load_balancers/{{$parameter[\"id\"]}}/actions/enable_public_interface"
						}
					}
				},
				{
					"name": "Remove Target",
					"value": "Remove Target",
					"action": "Remove Target",
					"description": "Removes a target from a Load Balancer.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/load_balancers/{{$parameter[\"id\"]}}/actions/remove_target"
						}
					}
				},
				{
					"name": "Update Service",
					"value": "Update Service",
					"action": "Update Service",
					"description": "Updates a Load Balancer Service.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n|  | `source_port_already_used` | The source port you are trying to add is already in use |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/load_balancers/{{$parameter[\"id\"]}}/actions/update_service"
						}
					}
				},
				{
					"name": "Get Metrics For Loadbalancer",
					"value": "Get Metrics For Loadbalancer",
					"action": "Get Metrics for a LoadBalancer",
					"description": "You must specify the type of metric to get: `open_connections`, `connections_per_second`, `requests_per_second` or `bandwidth`. You can also specify more than one type by comma separation, e.g. `requests_per_second,bandwidth`.\n\nDepending on the type you will get different time series data:\n\n|Type | Timeseries | Unit | Description |\n|---- |------------|------|-------------|\n| open_connections | open_connections | number | Open connections |\n| connections_per_second | connections_per_second | connections/s | Connections per second |\n| requests_per_second | requests_per_second | requests/s | Requests per second |\n| bandwidth | bandwidth.in | bytes/s | Ingress bandwidth |\n|| bandwidth.out | bytes/s | Egress bandwidth |\n\nMetrics are available for the last 30 days only.\n\nIf you do not provide the step argument we will automatically adjust it so that 200 samples are returned.\n\nWe limit the number of samples to a maximum of 500 and will adjust the step parameter accordingly.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/load_balancers/{{$parameter[\"id\"]}}/metrics"
						}
					}
				},
				{
					"name": "List Load Balancer Actions",
					"value": "List Load Balancer Actions",
					"action": "List Actions",
					"description": "Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` and `id` parameter.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/load_balancers/actions"
						}
					}
				},
				{
					"name": "Get Load Balancer Action",
					"value": "Get Load Balancer Action",
					"action": "Get an Action",
					"description": "Returns a specific Action object.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/load_balancers/actions/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /load_balancers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"List Load Balancers"
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
						"Load Balancers"
					],
					"operation": [
						"List Load Balancers"
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
						"Load Balancers"
					],
					"operation": [
						"List Load Balancers"
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
						"Load Balancers"
					],
					"operation": [
						"List Load Balancers"
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
						"Load Balancers"
					],
					"operation": [
						"List Load Balancers"
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
						"Load Balancers"
					],
					"operation": [
						"List Load Balancers"
					]
				}
			}
		},
		{
			"displayName": "POST /load_balancers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Create Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "Algorithm",
			"name": "algorithm",
			"type": "json",
			"default": "{\n  \"type\": \"round_robin\"\n}",
			"description": "Algorithm of the Load Balancer.",
			"routing": {
				"send": {
					"property": "algorithm",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Create Load Balancer"
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
						"Load Balancers"
					],
					"operation": [
						"Create Load Balancer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Load Balancer Type",
			"name": "load_balancer_type",
			"type": "string",
			"default": "lb11",
			"description": "ID or name of the Load Balancer type this Load Balancer should be created with.",
			"routing": {
				"send": {
					"property": "load_balancer_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Create Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "location",
			"type": "string",
			"default": "fsn1",
			"description": "ID or name of Location to create Load Balancer in.",
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
						"Load Balancers"
					],
					"operation": [
						"Create Load Balancer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Web Frontend",
			"description": "Name of the Load Balancer.",
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
						"Load Balancers"
					],
					"operation": [
						"Create Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "Network",
			"name": "network",
			"type": "number",
			"default": 123,
			"description": "ID of the network the Load Balancer should be attached to on creation.",
			"routing": {
				"send": {
					"property": "network",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Create Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "Network Zone",
			"name": "network_zone",
			"type": "string",
			"default": "eu-central",
			"description": "Name of network zone.",
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
						"Load Balancers"
					],
					"operation": [
						"Create Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "Public Interface",
			"name": "public_interface",
			"type": "boolean",
			"default": true,
			"description": "Enable or disable the public interface of the Load Balancer.",
			"routing": {
				"send": {
					"property": "public_interface",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Create Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "Services",
			"name": "services",
			"type": "json",
			"default": "[\n  {\n    \"destination_port\": 80,\n    \"health_check\": {\n      \"http\": {\n        \"domain\": \"example.com\",\n        \"path\": \"/\",\n        \"response\": \"{\\\"status\\\": \\\"ok\\\"}\",\n        \"status_codes\": [\n          \"2??\",\n          \"3??\"\n        ],\n        \"tls\": false\n      },\n      \"interval\": 15,\n      \"port\": 4711,\n      \"protocol\": \"http\",\n      \"retries\": 3,\n      \"timeout\": 10\n    },\n    \"http\": {\n      \"certificates\": [\n        897\n      ],\n      \"cookie_lifetime\": 300,\n      \"cookie_name\": \"HCLBSTICKY\",\n      \"redirect_http\": true,\n      \"sticky_sessions\": true\n    },\n    \"listen_port\": 443,\n    \"protocol\": \"https\",\n    \"proxyprotocol\": false\n  }\n]",
			"description": "Array of services.",
			"routing": {
				"send": {
					"property": "services",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Create Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "Targets",
			"name": "targets",
			"type": "json",
			"default": "[\n  {\n    \"ip\": {\n      \"ip\": \"203.0.113.1\"\n    },\n    \"label_selector\": {\n      \"selector\": \"env=prod\"\n    },\n    \"server\": {\n      \"id\": 42\n    },\n    \"use_private_ip\": true\n  }\n]",
			"description": "Array of targets.",
			"routing": {
				"send": {
					"property": "targets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Create Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "DELETE /load_balancers/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Delete Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Load Balancer.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Delete Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "GET /load_balancers/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Get Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Load Balancer.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Get Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "PUT /load_balancers/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Replace Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Load Balancer.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Replace Load Balancer"
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
						"Load Balancers"
					],
					"operation": [
						"Replace Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "new-name",
			"description": "New Load Balancer name.",
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
						"Load Balancers"
					],
					"operation": [
						"Replace Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "GET /load_balancers/{id}/actions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"List Actions For Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Load Balancer.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"List Actions For Load Balancer"
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
						"Load Balancers"
					],
					"operation": [
						"List Actions For Load Balancer"
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
						"Load Balancers"
					],
					"operation": [
						"List Actions For Load Balancer"
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
						"Load Balancers"
					],
					"operation": [
						"List Actions For Load Balancer"
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
						"Load Balancers"
					],
					"operation": [
						"List Actions For Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "GET /load_balancers/{id}/actions/{action_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Get Action For Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Load Balancer.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Get Action For Load Balancer"
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
						"Load Balancers"
					],
					"operation": [
						"Get Action For Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "POST /load_balancers/{id}/actions/add_service",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Add Service"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Load Balancer.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Add Service"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Destination Port",
			"name": "destination_port",
			"type": "number",
			"default": 80,
			"description": "Port the Load Balancer will balance to.",
			"routing": {
				"send": {
					"property": "destination_port",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Add Service"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Health Check",
			"name": "health_check",
			"type": "json",
			"default": "{\n  \"http\": {\n    \"domain\": \"example.com\",\n    \"path\": \"/\",\n    \"response\": \"{\\\"status\\\": \\\"ok\\\"}\",\n    \"status_codes\": [\n      \"2??\",\n      \"3??\"\n    ],\n    \"tls\": false\n  },\n  \"interval\": 15,\n  \"port\": 4711,\n  \"protocol\": \"http\",\n  \"retries\": 3,\n  \"timeout\": 10\n}",
			"description": "Service health check.",
			"routing": {
				"send": {
					"property": "health_check",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Add Service"
					]
				}
			}
		},
		{
			"displayName": "Http",
			"name": "http",
			"type": "json",
			"default": "{\n  \"certificates\": [\n    897\n  ],\n  \"cookie_lifetime\": 300,\n  \"cookie_name\": \"HCLBSTICKY\",\n  \"redirect_http\": true,\n  \"sticky_sessions\": true\n}",
			"description": "Configuration option for protocols http and https.",
			"routing": {
				"send": {
					"property": "http",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Add Service"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Listen Port",
			"name": "listen_port",
			"type": "number",
			"default": 443,
			"description": "Port the Load Balancer listens on.",
			"routing": {
				"send": {
					"property": "listen_port",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Add Service"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Protocol",
			"name": "protocol",
			"type": "options",
			"default": "https",
			"description": "Protocol of the Load Balancer.",
			"options": [
				{
					"name": "Http",
					"value": "http"
				},
				{
					"name": "Https",
					"value": "https"
				},
				{
					"name": "Tcp",
					"value": "tcp"
				}
			],
			"routing": {
				"send": {
					"property": "protocol",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Add Service"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Proxyprotocol",
			"name": "proxyprotocol",
			"type": "boolean",
			"default": false,
			"description": "Is Proxyprotocol enabled or not.",
			"routing": {
				"send": {
					"property": "proxyprotocol",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Add Service"
					]
				}
			}
		},
		{
			"displayName": "POST /load_balancers/{id}/actions/add_target",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Add Target"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Load Balancer.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Add Target"
					]
				}
			}
		},
		{
			"displayName": "Ip",
			"name": "ip",
			"type": "json",
			"default": "{\n  \"ip\": \"203.0.113.1\"\n}",
			"description": "IP target where the traffic should be routed to. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well. Only present for target type `ip`. | Configuration for an IP target. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well. Only valid and required if type is `ip`.",
			"routing": {
				"send": {
					"property": "ip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Add Target"
					]
				}
			}
		},
		{
			"displayName": "Label Selector",
			"name": "label_selector",
			"type": "json",
			"default": "{\n  \"selector\": \"env=prod\"\n}",
			"description": "Configuration for type LabelSelector, required if type is `label_selector`",
			"routing": {
				"send": {
					"property": "label_selector",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Add Target"
					]
				}
			}
		},
		{
			"displayName": "Server",
			"name": "server",
			"type": "json",
			"default": "{\n  \"id\": 42\n}",
			"description": "ID of the Resource",
			"routing": {
				"send": {
					"property": "server",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Add Target"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "ip",
			"description": "Type of the resource.",
			"options": [
				{
					"name": "Ip",
					"value": "ip"
				},
				{
					"name": "Label Selector",
					"value": "label_selector"
				},
				{
					"name": "Server",
					"value": "server"
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
						"Load Balancers"
					],
					"operation": [
						"Add Target"
					]
				}
			}
		},
		{
			"displayName": "Use Private Ip",
			"name": "use_private_ip",
			"type": "boolean",
			"default": true,
			"description": "Use the private network IP instead of the public IP of the Server, requires the Server and Load Balancer to be in the same network. Only valid for target types `server` and `label_selector`.",
			"routing": {
				"send": {
					"property": "use_private_ip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Add Target"
					]
				}
			}
		},
		{
			"displayName": "POST /load_balancers/{id}/actions/attach_to_network",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Attach Load Balancer To Network"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Load Balancer.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Attach Load Balancer To Network"
					]
				}
			}
		},
		{
			"displayName": "Ip",
			"name": "ip",
			"type": "string",
			"default": "10.0.1.1",
			"description": "IP to request to be assigned to this Load Balancer; if you do not provide this then you will be auto assigned an IP address.",
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
						"Load Balancers"
					],
					"operation": [
						"Attach Load Balancer To Network"
					]
				}
			}
		},
		{
			"displayName": "Ip Range",
			"name": "ip_range",
			"type": "string",
			"default": "10.0.1.0/24",
			"description": "IP range in CIDR block notation of the subnet to attach to.\n\nThis allows for auto assigning an IP address for a specific subnet.\nProviding `ip` that is not part of `ip_range` will result in an error.\n",
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
						"Load Balancers"
					],
					"operation": [
						"Attach Load Balancer To Network"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Network",
			"name": "network",
			"type": "number",
			"default": 4711,
			"description": "ID of an existing network to attach the Load Balancer to.",
			"routing": {
				"send": {
					"property": "network",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Attach Load Balancer To Network"
					]
				}
			}
		},
		{
			"displayName": "POST /load_balancers/{id}/actions/change_algorithm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Change Algorithm"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Load Balancer.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Change Algorithm"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "round_robin",
			"description": "Type of the algorithm.",
			"options": [
				{
					"name": "Least Connections",
					"value": "least_connections"
				},
				{
					"name": "Round Robin",
					"value": "round_robin"
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
						"Load Balancers"
					],
					"operation": [
						"Change Algorithm"
					]
				}
			}
		},
		{
			"displayName": "POST /load_balancers/{id}/actions/change_dns_ptr",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Change Reverse Dns Entry For This Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Load Balancer.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Change Reverse Dns Entry For This Load Balancer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Dns Ptr",
			"name": "dns_ptr",
			"type": "string",
			"default": "lb1.example.com",
			"description": "Hostname to set as a reverse DNS PTR entry.",
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
						"Load Balancers"
					],
					"operation": [
						"Change Reverse Dns Entry For This Load Balancer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ip",
			"name": "ip",
			"type": "string",
			"default": "1.2.3.4",
			"description": "Public IP address for which the reverse DNS entry should be set.",
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
						"Load Balancers"
					],
					"operation": [
						"Change Reverse Dns Entry For This Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "POST /load_balancers/{id}/actions/change_protection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Change Load Balancer Protection"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Load Balancer.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Change Load Balancer Protection"
					]
				}
			}
		},
		{
			"displayName": "Delete",
			"name": "delete",
			"type": "boolean",
			"default": true,
			"description": "If true, prevents the Load Balancer from being deleted.",
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
						"Load Balancers"
					],
					"operation": [
						"Change Load Balancer Protection"
					]
				}
			}
		},
		{
			"displayName": "POST /load_balancers/{id}/actions/change_type",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Change Type Of Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Load Balancer.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Change Type Of Load Balancer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Load Balancer Type",
			"name": "load_balancer_type",
			"type": "string",
			"default": "lb21",
			"description": "ID or name of Load Balancer type the Load Balancer should migrate to.",
			"routing": {
				"send": {
					"property": "load_balancer_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Change Type Of Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "POST /load_balancers/{id}/actions/delete_service",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Delete Service"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Load Balancer.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Delete Service"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Listen Port",
			"name": "listen_port",
			"type": "number",
			"default": 443,
			"description": "The listen port of the service you want to delete.",
			"routing": {
				"send": {
					"property": "listen_port",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Delete Service"
					]
				}
			}
		},
		{
			"displayName": "POST /load_balancers/{id}/actions/detach_from_network",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Detach Load Balancer From Network"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Load Balancer.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Detach Load Balancer From Network"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Network",
			"name": "network",
			"type": "number",
			"default": 4711,
			"description": "ID of an existing network to detach the Load Balancer from.",
			"routing": {
				"send": {
					"property": "network",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Detach Load Balancer From Network"
					]
				}
			}
		},
		{
			"displayName": "POST /load_balancers/{id}/actions/disable_public_interface",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Disable Public Interface Of Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Load Balancer.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Disable Public Interface Of Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "POST /load_balancers/{id}/actions/enable_public_interface",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Enable Public Interface Of Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Load Balancer.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Enable Public Interface Of Load Balancer"
					]
				}
			}
		},
		{
			"displayName": "POST /load_balancers/{id}/actions/remove_target",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Remove Target"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Load Balancer.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Remove Target"
					]
				}
			}
		},
		{
			"displayName": "Ip",
			"name": "ip",
			"type": "json",
			"default": "{\n  \"ip\": \"203.0.113.1\"\n}",
			"description": "IP target where the traffic should be routed to. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well. Only present for target type `ip`. | Configuration for an IP target. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well. Only valid and required if type is `ip`.",
			"routing": {
				"send": {
					"property": "ip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Remove Target"
					]
				}
			}
		},
		{
			"displayName": "Label Selector",
			"name": "label_selector",
			"type": "json",
			"default": "{\n  \"selector\": \"env=prod\"\n}",
			"description": "Configuration for type LabelSelector, required if type is `label_selector`",
			"routing": {
				"send": {
					"property": "label_selector",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Remove Target"
					]
				}
			}
		},
		{
			"displayName": "Server",
			"name": "server",
			"type": "json",
			"default": "{\n  \"id\": 42\n}",
			"description": "ID of the Resource",
			"routing": {
				"send": {
					"property": "server",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Remove Target"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "ip",
			"description": "Type of the resource.",
			"options": [
				{
					"name": "Ip",
					"value": "ip"
				},
				{
					"name": "Label Selector",
					"value": "label_selector"
				},
				{
					"name": "Server",
					"value": "server"
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
						"Load Balancers"
					],
					"operation": [
						"Remove Target"
					]
				}
			}
		},
		{
			"displayName": "POST /load_balancers/{id}/actions/update_service",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Update Service"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Load Balancer.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Update Service"
					]
				}
			}
		},
		{
			"displayName": "Destination Port",
			"name": "destination_port",
			"type": "number",
			"default": 80,
			"description": "Port the Load Balancer will balance to.",
			"routing": {
				"send": {
					"property": "destination_port",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Update Service"
					]
				}
			}
		},
		{
			"displayName": "Health Check",
			"name": "health_check",
			"type": "json",
			"default": "{\n  \"http\": {\n    \"domain\": \"example.com\",\n    \"path\": \"/\",\n    \"response\": \"{\\\"status\\\": \\\"ok\\\"}\",\n    \"status_codes\": [\n      \"2??\",\n      \"3??\"\n    ],\n    \"tls\": false\n  },\n  \"interval\": 15,\n  \"port\": 4711,\n  \"protocol\": \"http\",\n  \"retries\": 3,\n  \"timeout\": 10\n}",
			"description": "Service health check.",
			"routing": {
				"send": {
					"property": "health_check",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Update Service"
					]
				}
			}
		},
		{
			"displayName": "Http",
			"name": "http",
			"type": "json",
			"default": "{\n  \"certificates\": [\n    897\n  ],\n  \"cookie_lifetime\": 300,\n  \"cookie_name\": \"HCLBSTICKY\",\n  \"redirect_http\": true,\n  \"sticky_sessions\": true\n}",
			"description": "Configuration option for protocols http and https.",
			"routing": {
				"send": {
					"property": "http",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Update Service"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Listen Port",
			"name": "listen_port",
			"type": "number",
			"default": 443,
			"description": "Port the Load Balancer listens on.",
			"routing": {
				"send": {
					"property": "listen_port",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Update Service"
					]
				}
			}
		},
		{
			"displayName": "Protocol",
			"name": "protocol",
			"type": "options",
			"default": "https",
			"description": "Protocol of the Load Balancer.",
			"options": [
				{
					"name": "Http",
					"value": "http"
				},
				{
					"name": "Https",
					"value": "https"
				},
				{
					"name": "Tcp",
					"value": "tcp"
				}
			],
			"routing": {
				"send": {
					"property": "protocol",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Update Service"
					]
				}
			}
		},
		{
			"displayName": "Proxyprotocol",
			"name": "proxyprotocol",
			"type": "boolean",
			"default": false,
			"description": "Is Proxyprotocol enabled or not.",
			"routing": {
				"send": {
					"property": "proxyprotocol",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Update Service"
					]
				}
			}
		},
		{
			"displayName": "GET /load_balancers/{id}/metrics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Get Metrics For Loadbalancer"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Load Balancer.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Get Metrics For Loadbalancer"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "Type of metrics to get.",
			"default": "[\n  null\n]",
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
						"Load Balancers"
					],
					"operation": [
						"Get Metrics For Loadbalancer"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"required": true,
			"description": "Start of period to get Metrics for (in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "start",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Get Metrics For Loadbalancer"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "end",
			"required": true,
			"description": "End of period to get Metrics for (in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "end",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Get Metrics For Loadbalancer"
					]
				}
			}
		},
		{
			"displayName": "Step",
			"name": "step",
			"description": "Resolution of results in seconds.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "step",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Get Metrics For Loadbalancer"
					]
				}
			}
		},
		{
			"displayName": "GET /load_balancers/actions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"List Load Balancer Actions"
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
						"Load Balancers"
					],
					"operation": [
						"List Load Balancer Actions"
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
						"Load Balancers"
					],
					"operation": [
						"List Load Balancer Actions"
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
						"Load Balancers"
					],
					"operation": [
						"List Load Balancer Actions"
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
						"Load Balancers"
					],
					"operation": [
						"List Load Balancer Actions"
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
						"Load Balancers"
					],
					"operation": [
						"List Load Balancer Actions"
					]
				}
			}
		},
		{
			"displayName": "GET /load_balancers/actions/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancers"
					],
					"operation": [
						"Get Load Balancer Action"
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
						"Load Balancers"
					],
					"operation": [
						"Get Load Balancer Action"
					]
				}
			}
		},
];
