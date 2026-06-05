import type { INodeProperties } from 'n8n-workflow';

export const sshKeysDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Ssh Keys"
					]
				}
			},
			"options": [
				{
					"name": "List Ssh Keys",
					"value": "List Ssh Keys",
					"action": "List SSH keys",
					"description": "Returns all SSH key objects.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ssh_keys"
						}
					}
				},
				{
					"name": "Create Ssh Key",
					"value": "Create Ssh Key",
					"action": "Create an SSH key",
					"description": "Creates a new SSH key with the given `name` and `public_key`. Once an SSH key is created, it can be used in other calls such as creating Servers.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/ssh_keys"
						}
					}
				},
				{
					"name": "Delete Ssh Key",
					"value": "Delete Ssh Key",
					"action": "Delete an SSH key",
					"description": "Deletes an SSH key. It cannot be used anymore.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/ssh_keys/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Ssh Key",
					"value": "Get Ssh Key",
					"action": "Get a SSH key",
					"description": "Returns a specific SSH key object.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ssh_keys/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Replace Ssh Key",
					"value": "Replace Ssh Key",
					"action": "Update an SSH key",
					"description": "Updates an SSH key. You can update an SSH key name and an SSH key labels.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/ssh_keys/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /ssh_keys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Ssh Keys"
					],
					"operation": [
						"List Ssh Keys"
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
						"Ssh Keys"
					],
					"operation": [
						"List Ssh Keys"
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
						"Ssh Keys"
					],
					"operation": [
						"List Ssh Keys"
					]
				}
			}
		},
		{
			"displayName": "Fingerprint",
			"name": "fingerprint",
			"description": "Can be used to filter SSH keys by their fingerprint. The response will only contain the SSH key matching the specified fingerprint.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fingerprint",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Ssh Keys"
					],
					"operation": [
						"List Ssh Keys"
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
						"Ssh Keys"
					],
					"operation": [
						"List Ssh Keys"
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
						"Ssh Keys"
					],
					"operation": [
						"List Ssh Keys"
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
						"Ssh Keys"
					],
					"operation": [
						"List Ssh Keys"
					]
				}
			}
		},
		{
			"displayName": "POST /ssh_keys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Ssh Keys"
					],
					"operation": [
						"Create Ssh Key"
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
						"Ssh Keys"
					],
					"operation": [
						"Create Ssh Key"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "My ssh key",
			"description": "Name of the SSH key.",
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
						"Ssh Keys"
					],
					"operation": [
						"Create Ssh Key"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Public Key",
			"name": "public_key",
			"type": "string",
			"default": "ssh-rsa AAAjjk76kgf...Xt",
			"description": "Public key.",
			"routing": {
				"send": {
					"property": "public_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Ssh Keys"
					],
					"operation": [
						"Create Ssh Key"
					]
				}
			}
		},
		{
			"displayName": "DELETE /ssh_keys/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Ssh Keys"
					],
					"operation": [
						"Delete Ssh Key"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the SSH Key.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Ssh Keys"
					],
					"operation": [
						"Delete Ssh Key"
					]
				}
			}
		},
		{
			"displayName": "GET /ssh_keys/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Ssh Keys"
					],
					"operation": [
						"Get Ssh Key"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the SSH Key.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Ssh Keys"
					],
					"operation": [
						"Get Ssh Key"
					]
				}
			}
		},
		{
			"displayName": "PUT /ssh_keys/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Ssh Keys"
					],
					"operation": [
						"Replace Ssh Key"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the SSH Key.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Ssh Keys"
					],
					"operation": [
						"Replace Ssh Key"
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
						"Ssh Keys"
					],
					"operation": [
						"Replace Ssh Key"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "My ssh key",
			"description": "New name Name to set.",
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
						"Ssh Keys"
					],
					"operation": [
						"Replace Ssh Key"
					]
				}
			}
		},
];
