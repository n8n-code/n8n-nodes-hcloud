import type { INodeProperties } from 'n8n-workflow';

export const loadBalancerTypesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancer Types"
					]
				}
			},
			"options": [
				{
					"name": "List Load Balancer Types",
					"value": "List Load Balancer Types",
					"action": "List Load Balancer Types",
					"description": "Gets all Load Balancer type objects.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/load_balancer_types"
						}
					}
				},
				{
					"name": "Get Load Balancer Type",
					"value": "Get Load Balancer Type",
					"action": "Get a Load Balancer Type",
					"description": "Gets a specific Load Balancer type object.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/load_balancer_types/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /load_balancer_types",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancer Types"
					],
					"operation": [
						"List Load Balancer Types"
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
						"Load Balancer Types"
					],
					"operation": [
						"List Load Balancer Types"
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
						"Load Balancer Types"
					],
					"operation": [
						"List Load Balancer Types"
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
						"Load Balancer Types"
					],
					"operation": [
						"List Load Balancer Types"
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
						"Load Balancer Types"
					],
					"operation": [
						"List Load Balancer Types"
					]
				}
			}
		},
		{
			"displayName": "GET /load_balancer_types/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancer Types"
					],
					"operation": [
						"Get Load Balancer Type"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Load Balancer Type.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Load Balancer Types"
					],
					"operation": [
						"Get Load Balancer Type"
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
						"Load Balancer Types"
					],
					"operation": [
						"Get Load Balancer Type"
					]
				}
			}
		},
];
