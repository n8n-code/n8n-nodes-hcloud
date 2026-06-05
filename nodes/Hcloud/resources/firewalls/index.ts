import type { INodeProperties } from 'n8n-workflow';

export const firewallsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					]
				}
			},
			"options": [
				{
					"name": "List Firewalls",
					"value": "List Firewalls",
					"action": "List Firewalls",
					"description": "Returns all Firewalls.\n\nUse the provided URI parameters to modify the result.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/firewalls"
						}
					}
				},
				{
					"name": "Create Firewall",
					"value": "Create Firewall",
					"action": "Create a Firewall",
					"description": "Create a Firewall.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `server_already_added` | The Server was applied more than once. |\n| `422` | `incompatible_network_type` | The resources network type is not supported by Firewalls. |\n| `422` | `firewall_resource_not_found` | The resource the Firewall should be attached to was not found. |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/firewalls"
						}
					}
				},
				{
					"name": "Delete Firewall",
					"value": "Delete Firewall",
					"action": "Delete a Firewall",
					"description": "Deletes the Firewall.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `resource_in_use` | Firewall still applied to a resource |\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/firewalls/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Firewall",
					"value": "Get Firewall",
					"action": "Get a Firewall",
					"description": "Returns a single Firewall.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/firewalls/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Replace Firewall",
					"value": "Replace Firewall",
					"action": "Update a Firewall",
					"description": "Update a Firewall.\n\nIn case of a parallel running change on the Firewall a `conflict` error will be returned.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/firewalls/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "List Actions For Firewall",
					"value": "List Actions For Firewall",
					"action": "List Actions for a Firewall",
					"description": "Returns all Actions for the Firewall.\n\nUse the provided URI parameters to modify the result.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/firewalls/{{$parameter[\"id\"]}}/actions"
						}
					}
				},
				{
					"name": "Get Action For Firewall",
					"value": "Get Action For Firewall",
					"action": "Get an Action for a Firewall",
					"description": "Returns a specific Action for a Firewall.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/firewalls/{{$parameter[\"id\"]}}/actions/{{$parameter[\"action_id\"]}}"
						}
					}
				},
				{
					"name": "Apply To Resources",
					"value": "Apply To Resources",
					"action": "Apply to Resources",
					"description": "Applies a Firewall to multiple resources.\n\nSupported resources:\n- Servers (with a public network interface)\n- Label Selectors\n\nA Server can be applied to [a maximum of 5 Firewalls](https://docs.hetzner.com/cloud/firewalls/overview#limits). This limit\napplies to Servers applied via a matching Label Selector as well.\n\nUpdates to resources matching or no longer matching a Label Selector can take up to a few seconds\nto be processed.\n\nA Firewall is applied to a resource once the related Action with command `apply_firewall` successfully finished.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `404` | `firewall_resource_not_found` | The resource the Firewall should be applied to was not found |\n| `422` | `firewall_already_applied` | Firewall is already applied to resource |\n| `422` | `incompatible_network_type` | The network type of the resource is not supported by Firewalls |\n| `422` | `private_net_only_server` | The Server the Firewall should be applied to has no public interface |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/firewalls/{{$parameter[\"id\"]}}/actions/apply_to_resources"
						}
					}
				},
				{
					"name": "Remove From Resources",
					"value": "Remove From Resources",
					"action": "Remove from Resources",
					"description": "Removes a Firewall from multiple resources.\n\nSupported resources:\n- Servers (with a public network interface)\n\nA Firewall is removed from a resource once the related Action with command `remove_firewall` successfully finished.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `404` | `firewall_resource_not_found` | The resource the Firewall should be removed from was not found |\n| `422` | `firewall_managed_by_label_selector` | Firewall is applied via a Label Selector and cannot be removed manually |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/firewalls/{{$parameter[\"id\"]}}/actions/remove_from_resources"
						}
					}
				},
				{
					"name": "Set Rules",
					"value": "Set Rules",
					"action": "Set Rules",
					"description": "Set the rules of a Firewall.\n\nOverwrites the existing rules with the given ones. Pass an empty array to remove all rules.\n\nRules are limited to 50 entries per Firewall and [500 effective rules](https://docs.hetzner.com/cloud/firewalls/overview#limits).\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/firewalls/{{$parameter[\"id\"]}}/actions/set_rules"
						}
					}
				},
				{
					"name": "List Firewall Actions",
					"value": "List Firewall Actions",
					"action": "List Actions",
					"description": "Returns all Actions for Firewalls.\n\nUse the provided URI parameters to modify the result.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/firewalls/actions"
						}
					}
				},
				{
					"name": "Get Firewall Action",
					"value": "Get Firewall Action",
					"action": "Get an Action",
					"description": "Returns the specific Action.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/firewalls/actions/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /firewalls",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					],
					"operation": [
						"List Firewalls"
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
						"Firewalls"
					],
					"operation": [
						"List Firewalls"
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
						"Firewalls"
					],
					"operation": [
						"List Firewalls"
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
						"Firewalls"
					],
					"operation": [
						"List Firewalls"
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
						"Firewalls"
					],
					"operation": [
						"List Firewalls"
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
						"Firewalls"
					],
					"operation": [
						"List Firewalls"
					]
				}
			}
		},
		{
			"displayName": "POST /firewalls",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					],
					"operation": [
						"Create Firewall"
					]
				}
			}
		},
		{
			"displayName": "Apply To",
			"name": "apply_to",
			"type": "json",
			"default": "[\n  {\n    \"label_selector\": {\n      \"selector\": \"env=prod\"\n    },\n    \"server\": {\n      \"id\": 42\n    }\n  }\n]",
			"description": "Resources to apply the Firewall to.\n\nResources added directly are taking precedence over those added via a Label Selector.\n",
			"routing": {
				"send": {
					"property": "apply_to",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					],
					"operation": [
						"Create Firewall"
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
						"Firewalls"
					],
					"operation": [
						"Create Firewall"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "new-name",
			"description": "Name of the Firewall.\n\nLimited to a maximum of 128 characters.\n\nMust be unique per Project.\n",
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
						"Firewalls"
					],
					"operation": [
						"Create Firewall"
					]
				}
			}
		},
		{
			"displayName": "Rules",
			"name": "rules",
			"type": "json",
			"default": "[\n  {\n    \"direction\": \"in\",\n    \"port\": \"80\",\n    \"protocol\": \"tcp\",\n    \"source_ips\": [\n      \"192.0.2.2/32\",\n      \"192.0.2.0/24\",\n      \"2001:0db8:9a3b:ee58:5ca:990c:8bc9:c03b/128\"\n    ]\n  }\n]",
			"description": "Array of rules.\n\nRules are limited to 50 entries per Firewall and [500 effective rules](https://docs.hetzner.com/cloud/firewalls/overview#limits).\n",
			"routing": {
				"send": {
					"property": "rules",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					],
					"operation": [
						"Create Firewall"
					]
				}
			}
		},
		{
			"displayName": "DELETE /firewalls/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					],
					"operation": [
						"Delete Firewall"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Firewall.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					],
					"operation": [
						"Delete Firewall"
					]
				}
			}
		},
		{
			"displayName": "GET /firewalls/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					],
					"operation": [
						"Get Firewall"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Firewall.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					],
					"operation": [
						"Get Firewall"
					]
				}
			}
		},
		{
			"displayName": "PUT /firewalls/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					],
					"operation": [
						"Replace Firewall"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Firewall.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					],
					"operation": [
						"Replace Firewall"
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
						"Firewalls"
					],
					"operation": [
						"Replace Firewall"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "new-name",
			"description": "Name of the Firewall.\n\nLimited to a maximum of 128 characters.\n\nMust be unique per Project.\n",
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
						"Firewalls"
					],
					"operation": [
						"Replace Firewall"
					]
				}
			}
		},
		{
			"displayName": "GET /firewalls/{id}/actions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					],
					"operation": [
						"List Actions For Firewall"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Firewall.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					],
					"operation": [
						"List Actions For Firewall"
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
						"Firewalls"
					],
					"operation": [
						"List Actions For Firewall"
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
						"Firewalls"
					],
					"operation": [
						"List Actions For Firewall"
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
						"Firewalls"
					],
					"operation": [
						"List Actions For Firewall"
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
						"Firewalls"
					],
					"operation": [
						"List Actions For Firewall"
					]
				}
			}
		},
		{
			"displayName": "GET /firewalls/{id}/actions/{action_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					],
					"operation": [
						"Get Action For Firewall"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Firewall.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					],
					"operation": [
						"Get Action For Firewall"
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
						"Firewalls"
					],
					"operation": [
						"Get Action For Firewall"
					]
				}
			}
		},
		{
			"displayName": "POST /firewalls/{id}/actions/apply_to_resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					],
					"operation": [
						"Apply To Resources"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Firewall.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					],
					"operation": [
						"Apply To Resources"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Apply To",
			"name": "apply_to",
			"type": "json",
			"default": "[\n  {\n    \"label_selector\": {\n      \"selector\": \"env=prod\"\n    },\n    \"server\": {\n      \"id\": 42\n    }\n  }\n]",
			"description": "Resources to apply the Firewall to.\n\nExtends existing resources.\n",
			"routing": {
				"send": {
					"property": "apply_to",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					],
					"operation": [
						"Apply To Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /firewalls/{id}/actions/remove_from_resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					],
					"operation": [
						"Remove From Resources"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Firewall.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					],
					"operation": [
						"Remove From Resources"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Remove From",
			"name": "remove_from",
			"type": "json",
			"default": "[\n  {\n    \"label_selector\": {\n      \"selector\": \"env=prod\"\n    },\n    \"server\": {\n      \"id\": 42\n    }\n  }\n]",
			"description": "Resources to remove the Firewall from.",
			"routing": {
				"send": {
					"property": "remove_from",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					],
					"operation": [
						"Remove From Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /firewalls/{id}/actions/set_rules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					],
					"operation": [
						"Set Rules"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Firewall.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					],
					"operation": [
						"Set Rules"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Rules",
			"name": "rules",
			"type": "json",
			"default": "[\n  {\n    \"destination_ips\": [],\n    \"direction\": \"in\",\n    \"port\": \"80\",\n    \"source_ips\": [\n      \"192.0.2.2/32\",\n      \"192.0.2.0/24\",\n      \"2001:0db8:9a3b:ee58:5ca:990c:8bc9:c03b/128\"\n    ]\n  }\n]",
			"description": "Array of rules.\n\nRules are limited to 50 entries per Firewall and [500 effective rules](https://docs.hetzner.com/cloud/firewalls/overview#limits).\n\nExisting rules will be replaced.\n",
			"routing": {
				"send": {
					"property": "rules",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					],
					"operation": [
						"Set Rules"
					]
				}
			}
		},
		{
			"displayName": "GET /firewalls/actions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					],
					"operation": [
						"List Firewall Actions"
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
						"Firewalls"
					],
					"operation": [
						"List Firewall Actions"
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
						"Firewalls"
					],
					"operation": [
						"List Firewall Actions"
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
						"Firewalls"
					],
					"operation": [
						"List Firewall Actions"
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
						"Firewalls"
					],
					"operation": [
						"List Firewall Actions"
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
						"Firewalls"
					],
					"operation": [
						"List Firewall Actions"
					]
				}
			}
		},
		{
			"displayName": "GET /firewalls/actions/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Firewalls"
					],
					"operation": [
						"Get Firewall Action"
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
						"Firewalls"
					],
					"operation": [
						"Get Firewall Action"
					]
				}
			}
		},
];
