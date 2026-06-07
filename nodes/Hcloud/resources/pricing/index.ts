import type { INodeProperties } from 'n8n-workflow';

export const pricingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing"
					]
				}
			},
			"options": [
				{
					"name": "List Prices",
					"value": "List Prices",
					"action": "Get all prices",
					"description": "Returns prices for all resources available on the platform. VAT and currency of the Project owner are used for calculations.\n\nBoth net and gross prices are included in the response.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pricing"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /pricing",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing"
					],
					"operation": [
						"List Prices"
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
						"Pricing"
					],
					"operation": [
						"List Prices"
					]
				}
			}
		},
];
