import type { INodeProperties } from 'n8n-workflow';

export const placementGroupsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Placement Groups"
					]
				}
			},
			"options": [
				{
					"name": "List Placement Groups",
					"value": "List Placement Groups",
					"action": "List Placement Groups",
					"description": "Returns all Placement Group objects.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/placement_groups"
						}
					}
				},
				{
					"name": "Create Placementgroup",
					"value": "Create Placementgroup",
					"action": "Create a PlacementGroup",
					"description": "Creates a new Placement Group.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/placement_groups"
						}
					}
				},
				{
					"name": "Delete Placementgroup",
					"value": "Delete Placementgroup",
					"action": "Delete a PlacementGroup",
					"description": "Deletes a Placement Group.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/placement_groups/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Placementgroup",
					"value": "Get Placementgroup",
					"action": "Get a PlacementGroup",
					"description": "Gets a specific Placement Group object.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/placement_groups/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Replace Placementgroup",
					"value": "Replace Placementgroup",
					"action": "Update a PlacementGroup",
					"description": "Updates the Placement Group properties.\n\nNote: if the Placement Group object changes during the request, the response will be a “conflict” error.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/placement_groups/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /placement_groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Placement Groups"
					],
					"operation": [
						"List Placement Groups"
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
						"Placement Groups"
					],
					"operation": [
						"List Placement Groups"
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
						"Placement Groups"
					],
					"operation": [
						"List Placement Groups"
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
						"Placement Groups"
					],
					"operation": [
						"List Placement Groups"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Filter resources by type. Can be used multiple times. The response will only\ncontain the resources with the specified type.\n",
			"default": "[\n  \"spread\"\n]",
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
						"Placement Groups"
					],
					"operation": [
						"List Placement Groups"
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
						"Placement Groups"
					],
					"operation": [
						"List Placement Groups"
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
						"Placement Groups"
					],
					"operation": [
						"List Placement Groups"
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
						"Placement Groups"
					],
					"operation": [
						"List Placement Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /placement_groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Placement Groups"
					],
					"operation": [
						"Create Placementgroup"
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
						"Placement Groups"
					],
					"operation": [
						"Create Placementgroup"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "my Placement Group",
			"description": "Name of the Placement Group.",
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
						"Placement Groups"
					],
					"operation": [
						"Create Placementgroup"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "spread",
			"description": "Define the Placement Group Type.",
			"options": [
				{
					"name": "Spread",
					"value": "spread"
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
						"Placement Groups"
					],
					"operation": [
						"Create Placementgroup"
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
						"Placement Groups"
					],
					"operation": [
						"Create Placementgroup"
					]
				}
			}
		},
		{
			"displayName": "DELETE /placement_groups/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Placement Groups"
					],
					"operation": [
						"Delete Placementgroup"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Placement Group.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Placement Groups"
					],
					"operation": [
						"Delete Placementgroup"
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
						"Placement Groups"
					],
					"operation": [
						"Delete Placementgroup"
					]
				}
			}
		},
		{
			"displayName": "GET /placement_groups/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Placement Groups"
					],
					"operation": [
						"Get Placementgroup"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Placement Group.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Placement Groups"
					],
					"operation": [
						"Get Placementgroup"
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
						"Placement Groups"
					],
					"operation": [
						"Get Placementgroup"
					]
				}
			}
		},
		{
			"displayName": "PUT /placement_groups/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Placement Groups"
					],
					"operation": [
						"Replace Placementgroup"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Placement Group.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Placement Groups"
					],
					"operation": [
						"Replace Placementgroup"
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
						"Placement Groups"
					],
					"operation": [
						"Replace Placementgroup"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "my Placement Group",
			"description": "New Placement Group name.",
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
						"Placement Groups"
					],
					"operation": [
						"Replace Placementgroup"
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
						"Placement Groups"
					],
					"operation": [
						"Replace Placementgroup"
					]
				}
			}
		},
];
