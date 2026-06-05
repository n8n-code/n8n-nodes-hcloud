import type { INodeProperties } from 'n8n-workflow';

export const serverTypesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Server Types"
					]
				}
			},
			"options": [
				{
					"name": "List Server Types",
					"value": "List Server Types",
					"action": "List Server Types",
					"description": "Gets all Server type objects.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/server_types"
						}
					}
				},
				{
					"name": "Get Server Type",
					"value": "Get Server Type",
					"action": "Get a Server Type",
					"description": "Gets a specific Server type object.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/server_types/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /server_types",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Server Types"
					],
					"operation": [
						"List Server Types"
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
						"Server Types"
					],
					"operation": [
						"List Server Types"
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
						"Server Types"
					],
					"operation": [
						"List Server Types"
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
						"Server Types"
					],
					"operation": [
						"List Server Types"
					]
				}
			}
		},
		{
			"displayName": "GET /server_types/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Server Types"
					],
					"operation": [
						"Get Server Type"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Server Type.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Server Types"
					],
					"operation": [
						"Get Server Type"
					]
				}
			}
		},
];
