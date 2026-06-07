import type { INodeProperties } from 'n8n-workflow';

export const isosDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Isos"
					]
				}
			},
			"options": [
				{
					"name": "List Isos",
					"value": "List Isos",
					"action": "List ISOs",
					"description": "Returns all available ISO objects.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/isos"
						}
					}
				},
				{
					"name": "Get Iso",
					"value": "Get Iso",
					"action": "Get an ISO",
					"description": "Returns a specific ISO object.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/isos/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /isos",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Isos"
					],
					"operation": [
						"List Isos"
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
						"Isos"
					],
					"operation": [
						"List Isos"
					]
				}
			}
		},
		{
			"displayName": "Architecture",
			"name": "architecture",
			"description": "Filter resources by cpu architecture. The response will only contain the resources\nwith the specified cpu architecture.\n",
			"default": "x86",
			"type": "options",
			"options": [
				{
					"name": "X 86",
					"value": "x86"
				},
				{
					"name": "Arm",
					"value": "arm"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "architecture",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Isos"
					],
					"operation": [
						"List Isos"
					]
				}
			}
		},
		{
			"displayName": "Include Architecture Wildcard",
			"name": "include_architecture_wildcard",
			"description": "Include Images with wildcard architecture (architecture is null). Works only if architecture filter is specified.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_architecture_wildcard",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Isos"
					],
					"operation": [
						"List Isos"
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
						"Isos"
					],
					"operation": [
						"List Isos"
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
						"Isos"
					],
					"operation": [
						"List Isos"
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
						"Isos"
					],
					"operation": [
						"List Isos"
					]
				}
			}
		},
		{
			"displayName": "GET /isos/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Isos"
					],
					"operation": [
						"Get Iso"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the ISO.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Isos"
					],
					"operation": [
						"Get Iso"
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
						"Isos"
					],
					"operation": [
						"Get Iso"
					]
				}
			}
		},
];
