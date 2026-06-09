import type { INodeProperties } from 'n8n-workflow';

export const actionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Actions"
					]
				}
			},
			"options": [
				{
					"name": "Get Multiple Actions",
					"value": "Get Multiple Actions",
					"action": "Get multiple Actions",
					"description": "Returns multiple Action objects specified by the `id` parameter.\n\n**Note**: This endpoint previously allowed listing all actions in the project. This functionality was deprecated in July 2023 and removed on 30 January 2025.\n\n- Announcement: https://docs.hetzner.cloud/changelog#2023-07-20-actions-list-endpoint-is-deprecated\n- Removal: https://docs.hetzner.cloud/changelog#2025-01-30-listing-arbitrary-actions-in-the-actions-list-endpoint-is-removed\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/actions"
						}
					}
				},
				{
					"name": "Get Action",
					"value": "Get Action",
					"action": "Get an Action",
					"description": "Returns a specific Action object.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/actions/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /actions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Actions"
					],
					"operation": [
						"Get Multiple Actions"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
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
						"Actions"
					],
					"operation": [
						"Get Multiple Actions"
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
						"Actions"
					],
					"operation": [
						"Get Multiple Actions"
					]
				}
			}
		},
		{
			"displayName": "GET /actions/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Actions"
					],
					"operation": [
						"Get Action"
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
						"Actions"
					],
					"operation": [
						"Get Action"
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
						"Actions"
					],
					"operation": [
						"Get Action"
					]
				}
			}
		},
];
