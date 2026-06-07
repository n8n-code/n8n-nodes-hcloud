import type { INodeProperties } from 'n8n-workflow';

export const storageBoxTypesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Box Types"
					]
				}
			},
			"options": [
				{
					"name": "List Storage Box Types",
					"value": "List Storage Box Types",
					"action": "List Storage Box Types",
					"description": "Returns a paginated list of Storage Box Types.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/storage_box_types"
						}
					}
				},
				{
					"name": "Get Storage Box Type",
					"value": "Get Storage Box Type",
					"action": "Get a Storage Box Type",
					"description": "Returns a specific Storage Box Type.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/storage_box_types/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /storage_box_types",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Box Types"
					],
					"operation": [
						"List Storage Box Types"
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
						"Storage Box Types"
					],
					"operation": [
						"List Storage Box Types"
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
						"Storage Box Types"
					],
					"operation": [
						"List Storage Box Types"
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
						"Storage Box Types"
					],
					"operation": [
						"List Storage Box Types"
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
						"Storage Box Types"
					],
					"operation": [
						"List Storage Box Types"
					]
				}
			}
		},
		{
			"displayName": "GET /storage_box_types/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Box Types"
					],
					"operation": [
						"Get Storage Box Type"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box Type.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Box Types"
					],
					"operation": [
						"Get Storage Box Type"
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
						"Storage Box Types"
					],
					"operation": [
						"Get Storage Box Type"
					]
				}
			}
		},
];
