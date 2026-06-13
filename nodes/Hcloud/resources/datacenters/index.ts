import type { INodeProperties } from 'n8n-workflow';

export const datacentersDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Datacenters"
					]
				}
			},
			"options": [
				{
					"name": "List Data Centers",
					"value": "List Data Centers",
					"action": "List Data Centers",
					"description": "Returns all Data Centers.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/datacenters"
						}
					}
				},
				{
					"name": "Get Data Center",
					"value": "Get Data Center",
					"action": "Get a Data Center",
					"description": "Returns a single Data Center.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/datacenters/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /datacenters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Datacenters"
					],
					"operation": [
						"List Data Centers"
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
						"Datacenters"
					],
					"operation": [
						"List Data Centers"
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
						"Datacenters"
					],
					"operation": [
						"List Data Centers"
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
						"Datacenters"
					],
					"operation": [
						"List Data Centers"
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
						"Datacenters"
					],
					"operation": [
						"List Data Centers"
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
						"Datacenters"
					],
					"operation": [
						"List Data Centers"
					]
				}
			}
		},
		{
			"displayName": "GET /datacenters/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Datacenters"
					],
					"operation": [
						"Get Data Center"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Data Center.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Datacenters"
					],
					"operation": [
						"Get Data Center"
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
						"Datacenters"
					],
					"operation": [
						"Get Data Center"
					]
				}
			}
		},
];
