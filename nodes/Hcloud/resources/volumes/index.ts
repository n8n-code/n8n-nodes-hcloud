import type { INodeProperties } from 'n8n-workflow';

export const volumesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					]
				}
			},
			"options": [
				{
					"name": "List Volumes",
					"value": "List Volumes",
					"action": "List Volumes",
					"description": "Gets all existing Volumes that you have available.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/volumes"
						}
					}
				},
				{
					"name": "Create Volume",
					"value": "Create Volume",
					"action": "Create a Volume",
					"description": "Creates a new Volume attached to a Server. If you want to create a Volume that is not attached to a Server, you need to provide the `location` key instead of `server`. This can be either the ID or the name of the Location this Volume will be created in. Note that a Volume can be attached to a Server only in the same Location as the Volume itself.\n\nSpecifying the Server during Volume creation will automatically attach the Volume to that Server after it has been initialized. In that case, the `next_actions` key in the response is an array which contains a single `attach_volume` action.\n\nThe minimum Volume size is 10GB and the maximum size is 10TB (10240GB).\n\nA volume’s name can consist of alphanumeric characters, dashes, underscores, and dots, but has to start and end with an alphanumeric character. The total length is limited to 64 characters. Volume names must be unique per Project.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n|  | `no_space_left_in_location` | There is no volume space left in the given location |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/volumes"
						}
					}
				},
				{
					"name": "Delete Volume",
					"value": "Delete Volume",
					"action": "Delete a Volume",
					"description": "Deletes a volume. All Volume data is irreversibly destroyed. The Volume must not be attached to a Server and it must not have delete protection enabled.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/volumes/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Volume",
					"value": "Get Volume",
					"action": "Get a Volume",
					"description": "Gets a specific Volume object.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/volumes/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Replace Volume",
					"value": "Replace Volume",
					"action": "Update a Volume",
					"description": "Updates the Volume properties.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/volumes/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "List Actions For Volume",
					"value": "List Actions For Volume",
					"action": "List Actions for a Volume",
					"description": "Returns all Action objects for a Volume. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/volumes/{{$parameter[\"id\"]}}/actions"
						}
					}
				},
				{
					"name": "Get Action For Volume",
					"value": "Get Action For Volume",
					"action": "Get an Action for a Volume",
					"description": "Returns a specific Action for a Volume.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/volumes/{{$parameter[\"id\"]}}/actions/{{$parameter[\"action_id\"]}}"
						}
					}
				},
				{
					"name": "Attach Volume To Server",
					"value": "Attach Volume To Server",
					"action": "Attach Volume to a Server",
					"description": "Attaches a Volume to a Server. Works only if the Server is in the same Location as the Volume.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/volumes/{{$parameter[\"id\"]}}/actions/attach"
						}
					}
				},
				{
					"name": "Change Volume Protection",
					"value": "Change Volume Protection",
					"action": "Change Volume Protection",
					"description": "Changes the protection configuration of a Volume.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/volumes/{{$parameter[\"id\"]}}/actions/change_protection"
						}
					}
				},
				{
					"name": "Detach Volume",
					"value": "Detach Volume",
					"action": "Detach Volume",
					"description": "Detaches a Volume from the Server it’s attached to. You may attach it to a Server again at a later time.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/volumes/{{$parameter[\"id\"]}}/actions/detach"
						}
					}
				},
				{
					"name": "Resize Volume",
					"value": "Resize Volume",
					"action": "Resize Volume",
					"description": "Changes the size of a Volume. Note that downsizing a Volume is not possible.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/volumes/{{$parameter[\"id\"]}}/actions/resize"
						}
					}
				},
				{
					"name": "List Volume Actions",
					"value": "List Volume Actions",
					"action": "List Actions",
					"description": "Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` and `id` parameter.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/volumes/actions"
						}
					}
				},
				{
					"name": "Get Volume Action",
					"value": "Get Volume Action",
					"action": "Get an Action",
					"description": "Returns a specific Action object.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/volumes/actions/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /volumes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"List Volumes"
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
						"Volumes"
					],
					"operation": [
						"List Volumes"
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
						"Volumes"
					],
					"operation": [
						"List Volumes"
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
						"Volumes"
					],
					"operation": [
						"List Volumes"
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
						"Volumes"
					],
					"operation": [
						"List Volumes"
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
						"Volumes"
					],
					"operation": [
						"List Volumes"
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
						"Volumes"
					],
					"operation": [
						"List Volumes"
					]
				}
			}
		},
		{
			"displayName": "POST /volumes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Create Volume"
					]
				}
			}
		},
		{
			"displayName": "Automount",
			"name": "automount",
			"type": "boolean",
			"default": false,
			"description": "Auto-mount Volume after attach. `server` must be provided.",
			"routing": {
				"send": {
					"property": "automount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Create Volume"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"type": "string",
			"default": "xfs",
			"description": "Format Volume after creation. One of: `xfs`, `ext4`.",
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Create Volume"
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
						"Volumes"
					],
					"operation": [
						"Create Volume"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "location",
			"type": "string",
			"default": "nbg1",
			"description": "Location to create the Volume in (can be omitted if Server is specified).",
			"routing": {
				"send": {
					"property": "location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Create Volume"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "databases-storage",
			"description": "Name of the volume.",
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
						"Volumes"
					],
					"operation": [
						"Create Volume"
					]
				}
			}
		},
		{
			"displayName": "Server",
			"name": "server",
			"type": "number",
			"default": 0,
			"description": "Server to which to attach the Volume once it's created (Volume will be created in the same Location as the server).",
			"routing": {
				"send": {
					"property": "server",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Create Volume"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Size",
			"name": "size",
			"type": "number",
			"default": 42,
			"description": "Size of the Volume in GB.",
			"routing": {
				"send": {
					"property": "size",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Create Volume"
					]
				}
			}
		},
		{
			"displayName": "DELETE /volumes/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Delete Volume"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Volume.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Delete Volume"
					]
				}
			}
		},
		{
			"displayName": "GET /volumes/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Get Volume"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Volume.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Get Volume"
					]
				}
			}
		},
		{
			"displayName": "PUT /volumes/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Replace Volume"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Volume.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Replace Volume"
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
						"Volumes"
					],
					"operation": [
						"Replace Volume"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "database-storage",
			"description": "New Volume name.",
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
						"Volumes"
					],
					"operation": [
						"Replace Volume"
					]
				}
			}
		},
		{
			"displayName": "GET /volumes/{id}/actions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"List Actions For Volume"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Volume.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"List Actions For Volume"
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
						"Volumes"
					],
					"operation": [
						"List Actions For Volume"
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
						"Volumes"
					],
					"operation": [
						"List Actions For Volume"
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
						"Volumes"
					],
					"operation": [
						"List Actions For Volume"
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
						"Volumes"
					],
					"operation": [
						"List Actions For Volume"
					]
				}
			}
		},
		{
			"displayName": "GET /volumes/{id}/actions/{action_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Get Action For Volume"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Volume.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Get Action For Volume"
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
						"Volumes"
					],
					"operation": [
						"Get Action For Volume"
					]
				}
			}
		},
		{
			"displayName": "POST /volumes/{id}/actions/attach",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Attach Volume To Server"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Volume.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Attach Volume To Server"
					]
				}
			}
		},
		{
			"displayName": "Automount",
			"name": "automount",
			"type": "boolean",
			"default": false,
			"description": "Auto-mount the Volume after attaching it.",
			"routing": {
				"send": {
					"property": "automount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Attach Volume To Server"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Server",
			"name": "server",
			"type": "number",
			"default": 43,
			"description": "ID of the Server the Volume will be attached to.",
			"routing": {
				"send": {
					"property": "server",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Attach Volume To Server"
					]
				}
			}
		},
		{
			"displayName": "POST /volumes/{id}/actions/change_protection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Change Volume Protection"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Volume.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Change Volume Protection"
					]
				}
			}
		},
		{
			"displayName": "Delete",
			"name": "delete",
			"type": "boolean",
			"default": true,
			"description": "If true, prevents the Volume from being deleted.",
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
						"Volumes"
					],
					"operation": [
						"Change Volume Protection"
					]
				}
			}
		},
		{
			"displayName": "POST /volumes/{id}/actions/detach",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Detach Volume"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Volume.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Detach Volume"
					]
				}
			}
		},
		{
			"displayName": "POST /volumes/{id}/actions/resize",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Resize Volume"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Volume.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Resize Volume"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Size",
			"name": "size",
			"type": "number",
			"default": 50,
			"description": "New Volume size in GB (must be greater than current size).",
			"routing": {
				"send": {
					"property": "size",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Resize Volume"
					]
				}
			}
		},
		{
			"displayName": "GET /volumes/actions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"List Volume Actions"
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
						"Volumes"
					],
					"operation": [
						"List Volume Actions"
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
						"Volumes"
					],
					"operation": [
						"List Volume Actions"
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
						"Volumes"
					],
					"operation": [
						"List Volume Actions"
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
						"Volumes"
					],
					"operation": [
						"List Volume Actions"
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
						"Volumes"
					],
					"operation": [
						"List Volume Actions"
					]
				}
			}
		},
		{
			"displayName": "GET /volumes/actions/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Get Volume Action"
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
						"Volumes"
					],
					"operation": [
						"Get Volume Action"
					]
				}
			}
		},
];
