import type { INodeProperties } from 'n8n-workflow';

export const imagesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					]
				}
			},
			"options": [
				{
					"name": "List Images",
					"value": "List Images",
					"action": "List Images",
					"description": "Returns all Image objects. You can select specific Image types only and sort the results by using URI parameters.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/images"
						}
					}
				},
				{
					"name": "Delete Image",
					"value": "Delete Image",
					"action": "Delete an Image",
					"description": "Deletes an Image. Only Images of type `snapshot` and `backup` can be deleted.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/images/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Image",
					"value": "Get Image",
					"action": "Get an Image",
					"description": "Returns a specific Image object.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/images/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Replace Image",
					"value": "Replace Image",
					"action": "Update an Image",
					"description": "Updates the Image. You may change the description, convert a Backup Image to a Snapshot Image or change the Image labels. Only Images of type `snapshot` and `backup` can be updated.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/images/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "List Actions For Image",
					"value": "List Actions For Image",
					"action": "List Actions for an Image",
					"description": "Returns all Action objects for an Image. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/images/{{$parameter[\"id\"]}}/actions"
						}
					}
				},
				{
					"name": "Get Action For Image",
					"value": "Get Action For Image",
					"action": "Get an Action for an Image",
					"description": "Returns a specific Action for an Image.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/images/{{$parameter[\"id\"]}}/actions/{{$parameter[\"action_id\"]}}"
						}
					}
				},
				{
					"name": "Change Image Protection",
					"value": "Change Image Protection",
					"action": "Change Image Protection",
					"description": "Changes the protection configuration of the Image. Can only be used on snapshots.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/images/{{$parameter[\"id\"]}}/actions/change_protection"
						}
					}
				},
				{
					"name": "List Image Actions",
					"value": "List Image Actions",
					"action": "List Actions",
					"description": "Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` and `id` parameter.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/images/actions"
						}
					}
				},
				{
					"name": "Get Image Action",
					"value": "Get Image Action",
					"action": "Get an Action",
					"description": "Returns a specific Action object.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/images/actions/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /images",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"List Images"
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
						"Images"
					],
					"operation": [
						"List Images"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Filter resources by type. Can be used multiple times. The response will only\ncontain the resources with the specified type.\n",
			"default": "[\n  \"snapshot\"\n]",
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
						"Images"
					],
					"operation": [
						"List Images"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "Filter resources by status. Can be used multiple times. The response will only\ncontain the resources with the specified status.\n",
			"default": "[\n  \"available\"\n]",
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
						"Images"
					],
					"operation": [
						"List Images"
					]
				}
			}
		},
		{
			"displayName": "Bound To",
			"name": "bound_to",
			"description": "Can be used multiple times. Server ID linked to the Image. Only available for Images of type `backup`.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "bound_to",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"List Images"
					]
				}
			}
		},
		{
			"displayName": "Include Deprecated",
			"name": "include_deprecated",
			"description": "Can be used multiple times.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_deprecated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"List Images"
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
						"Images"
					],
					"operation": [
						"List Images"
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
						"Images"
					],
					"operation": [
						"List Images"
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
						"Images"
					],
					"operation": [
						"List Images"
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
						"Images"
					],
					"operation": [
						"List Images"
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
						"Images"
					],
					"operation": [
						"List Images"
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
						"Images"
					],
					"operation": [
						"List Images"
					]
				}
			}
		},
		{
			"displayName": "DELETE /images/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Delete Image"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Image.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Delete Image"
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
						"Images"
					],
					"operation": [
						"Delete Image"
					]
				}
			}
		},
		{
			"displayName": "GET /images/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Get Image"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Image.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Get Image"
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
						"Images"
					],
					"operation": [
						"Get Image"
					]
				}
			}
		},
		{
			"displayName": "PUT /images/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Replace Image"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Image.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Replace Image"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "My new Image description",
			"description": "New description of Image.",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Replace Image"
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
						"Images"
					],
					"operation": [
						"Replace Image"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "snapshot",
			"description": "Destination Image type to convert to.",
			"options": [
				{
					"name": "Snapshot",
					"value": "snapshot"
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
						"Images"
					],
					"operation": [
						"Replace Image"
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
						"Images"
					],
					"operation": [
						"Replace Image"
					]
				}
			}
		},
		{
			"displayName": "GET /images/{id}/actions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"List Actions For Image"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Image.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"List Actions For Image"
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
						"Images"
					],
					"operation": [
						"List Actions For Image"
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
						"Images"
					],
					"operation": [
						"List Actions For Image"
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
						"Images"
					],
					"operation": [
						"List Actions For Image"
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
						"Images"
					],
					"operation": [
						"List Actions For Image"
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
						"Images"
					],
					"operation": [
						"List Actions For Image"
					]
				}
			}
		},
		{
			"displayName": "GET /images/{id}/actions/{action_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Get Action For Image"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Image.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Get Action For Image"
					]
				}
			}
		},
		{
			"displayName": "Action ID",
			"name": "action_id",
			"required": true,
			"description": "ID of the Action.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Get Action For Image"
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
						"Images"
					],
					"operation": [
						"Get Action For Image"
					]
				}
			}
		},
		{
			"displayName": "POST /images/{id}/actions/change_protection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Change Image Protection"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Image.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Change Image Protection"
					]
				}
			}
		},
		{
			"displayName": "Delete",
			"name": "delete",
			"type": "boolean",
			"default": true,
			"description": "If true, prevents the snapshot from being deleted.",
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
						"Images"
					],
					"operation": [
						"Change Image Protection"
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
						"Images"
					],
					"operation": [
						"Change Image Protection"
					]
				}
			}
		},
		{
			"displayName": "GET /images/actions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"List Image Actions"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Images"
					],
					"operation": [
						"List Image Actions"
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
						"Images"
					],
					"operation": [
						"List Image Actions"
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
						"Images"
					],
					"operation": [
						"List Image Actions"
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
						"Images"
					],
					"operation": [
						"List Image Actions"
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
						"Images"
					],
					"operation": [
						"List Image Actions"
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
						"Images"
					],
					"operation": [
						"List Image Actions"
					]
				}
			}
		},
		{
			"displayName": "GET /images/actions/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Get Image Action"
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
						"Images"
					],
					"operation": [
						"Get Image Action"
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
						"Images"
					],
					"operation": [
						"Get Image Action"
					]
				}
			}
		},
];
