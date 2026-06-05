import type { INodeProperties } from 'n8n-workflow';

export const storageBoxesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					]
				}
			},
			"options": [
				{
					"name": "List Storage Boxes",
					"value": "List Storage Boxes",
					"action": "List Storage Boxes",
					"description": "Returns a paginated list of Storage Boxes.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/storage_boxes"
						}
					}
				},
				{
					"name": "Create Storage Box",
					"value": "Create Storage Box",
					"action": "Create a Storage Box",
					"description": "Creates a Storage Box.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/storage_boxes"
						}
					}
				},
				{
					"name": "List Storage Box Actions",
					"value": "List Storage Box Actions",
					"action": "List Actions",
					"description": "Returns all Action objects.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/storage_boxes/actions"
						}
					}
				},
				{
					"name": "Get Storage Box Action",
					"value": "Get Storage Box Action",
					"action": "Get an Action",
					"description": "Returns a specific Action object.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/storage_boxes/actions/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete Storage Box",
					"value": "Delete Storage Box",
					"action": "Delete a Storage Box",
					"description": "Deletes a Storage Box.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Storage Box",
					"value": "Get Storage Box",
					"action": "Get a Storage Box",
					"description": "Returns a specific Storage Box.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Replace Storage Box",
					"value": "Replace Storage Box",
					"action": "Update a Storage Box",
					"description": "Updates a Storage Box.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "List Actions For Storage Box",
					"value": "List Actions For Storage Box",
					"action": "List Actions for a Storage Box",
					"description": "List all Actions related to a specific Storage Box.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}/actions"
						}
					}
				},
				{
					"name": "Change Protection",
					"value": "Change Protection",
					"action": "Change Protection",
					"description": "Changes the protection configuration of a Storage Box.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}/actions/change_protection"
						}
					}
				},
				{
					"name": "Change Type",
					"value": "Change Type",
					"action": "Change Type",
					"description": "Changes the type of a Storage Box.\n\nUpgrades or downgrades a Storage Box to another Storage Box Type.\n\nIt is not possible to downgrade to a Storage Box Type that offers less disk space\nthan you are currently using.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}/actions/change_type"
						}
					}
				},
				{
					"name": "Disable Snapshot Plan",
					"value": "Disable Snapshot Plan",
					"action": "Disable Snapshot Plan",
					"description": "Disables the active Snapshot Plan of a Storage Box.\n\nExisting Storage Box Snapshots created by the Snapshot\nPlan will not be delete, they must be removed manually.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}/actions/disable_snapshot_plan"
						}
					}
				},
				{
					"name": "Enable Snapshot Plan",
					"value": "Enable Snapshot Plan",
					"action": "Enable Snapshot Plan",
					"description": "Enables a Snapshot Plan for a Storage Box.\n\nOnce enabled, a Snapshot Plan will create Snapshots at predefined intervals.\nThere can only ever be one Snapshot Plan. The existing Snapshot Plan will be deleted before a new one is set up.\n\nAutomatic Snapshots are retained until explicitly deleted by the user or the maximum snapshot count for the plan (\"max_snapshots\") is exceeded.\n\nYou can choose the specific time (UTC timezone), day of the week, and day of the month. The time-related options are cron like. Some typical use cases include:\n\n| Interval                                   | Request body                                                  |\n| ------------------------------------------ | ------------------------------------------------------------- |\n| Every day at 3 o'clock                     | `{\"max_snapshots\":10,\"minute\":0,\"hour\":3}`                    |\n| Every Friday at 3 o'clock                  | `{\"max_snapshots\":10,\"minute\":0,\"hour\":3,\"day_of_week\": 5}`   |\n| On the first of every month at half past 6 | `{\"max_snapshots\":10,\"minute\":30,\"hour\":6,\"day_of_month\": 1}` |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}/actions/enable_snapshot_plan"
						}
					}
				},
				{
					"name": "Reset Storage Box Password",
					"value": "Reset Storage Box Password",
					"action": "Reset Password",
					"description": "Reset the password of a Storage Box.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}/actions/reset_password"
						}
					}
				},
				{
					"name": "Rollback Snapshot",
					"value": "Rollback Snapshot",
					"action": "Rollback Snapshot",
					"description": "Rolls back a Storage Box to the given Storage Box Snapshot.\n\nThis will remove all newer Storage Box Snapshot and\nirrevocably delete all data that was since written to the Storage Box.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}/actions/rollback_snapshot"
						}
					}
				},
				{
					"name": "Update Storage Box Access Settings",
					"value": "Update Storage Box Access Settings",
					"action": "Update Access Settings",
					"description": "Update access settings of a primary Storage Box account.\n\nThis endpoints supports partial updates. Omitted optional parameters do not result in any changes to the respective properties.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}/actions/update_access_settings"
						}
					}
				},
				{
					"name": "Get Action For Storage Box",
					"value": "Get Action For Storage Box",
					"action": "Get an Action for a Storage Box",
					"description": "Returns a specific Action object for a Storage Box.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}/actions/{{$parameter[\"action_id\"]}}"
						}
					}
				},
				{
					"name": "List Folders Of Storage Box",
					"value": "List Folders Of Storage Box",
					"action": "List folders of a Storage Box",
					"description": "Returns a list of (sub)folders in a Storage Box.\n\nThe folder location is specified by the `path` query parameter.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}/folders"
						}
					}
				},
				{
					"name": "List Snapshots",
					"value": "List Snapshots",
					"action": "List Snapshots",
					"description": "Returns a list of Storage Box Snapshot.\n\nBoth snapshots created manually and by the snapshot plan are returned.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}/snapshots"
						}
					}
				},
				{
					"name": "Create Snapshot",
					"value": "Create Snapshot",
					"action": "Create a Snapshot",
					"description": "Creates a Storage Box Snapshot.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}/snapshots"
						}
					}
				},
				{
					"name": "Delete Snapshot",
					"value": "Delete Snapshot",
					"action": "Delete a Snapshot",
					"description": "Deletes a Storage Box Snapshot.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}/snapshots/{{$parameter[\"snapshot_id\"]}}"
						}
					}
				},
				{
					"name": "Get Snapshot",
					"value": "Get Snapshot",
					"action": "Get a Snapshot",
					"description": "Returns a specific Storage Box Snapshot.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}/snapshots/{{$parameter[\"snapshot_id\"]}}"
						}
					}
				},
				{
					"name": "Replace Snapshot",
					"value": "Replace Snapshot",
					"action": "Update a Snapshot",
					"description": "Updates a Storage Box Snapshot.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}/snapshots/{{$parameter[\"snapshot_id\"]}}"
						}
					}
				},
				{
					"name": "List Subaccounts",
					"value": "List Subaccounts",
					"action": "List Subaccounts",
					"description": "Returns a list of Storage Box Subaccount.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}/subaccounts"
						}
					}
				},
				{
					"name": "Create Subaccount",
					"value": "Create Subaccount",
					"action": "Create a Subaccount",
					"description": "Creates a Storage Box Subaccount.\n\nA Storage Box Subaccount will use a separate home directory.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}/subaccounts"
						}
					}
				},
				{
					"name": "Delete Subaccount",
					"value": "Delete Subaccount",
					"action": "Delete a Subaccount",
					"description": "Deletes a Storage Box Subaccount.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}/subaccounts/{{$parameter[\"subaccount_id\"]}}"
						}
					}
				},
				{
					"name": "Get Subaccount",
					"value": "Get Subaccount",
					"action": "Get a Subaccount",
					"description": "Returns a specific Storage Box Subaccount.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}/subaccounts/{{$parameter[\"subaccount_id\"]}}"
						}
					}
				},
				{
					"name": "Replace Subaccount",
					"value": "Replace Subaccount",
					"action": "Update a Subaccount",
					"description": "Updates a Storage Box Subaccount.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}/subaccounts/{{$parameter[\"subaccount_id\"]}}"
						}
					}
				},
				{
					"name": "Change Home Directory",
					"value": "Change Home Directory",
					"action": "Change Home Directory",
					"description": "Change the home directory of a Storage Box Subaccount.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}/subaccounts/{{$parameter[\"subaccount_id\"]}}/actions/change_home_directory"
						}
					}
				},
				{
					"name": "Reset Storage Box Subaccount Password",
					"value": "Reset Storage Box Subaccount Password",
					"action": "Reset Password",
					"description": "Reset the password of a Storage Box Subaccount.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}/subaccounts/{{$parameter[\"subaccount_id\"]}}/actions/reset_subaccount_password"
						}
					}
				},
				{
					"name": "Update Storage Box Subaccount Access Settings",
					"value": "Update Storage Box Subaccount Access Settings",
					"action": "Update Access Settings",
					"description": "Updates the access settings of a Storage Box Subaccount.\n\nThis endpoints supports partial updates. Omitted optional parameters do not result in any changes to the respective properties.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/storage_boxes/{{$parameter[\"id\"]}}/subaccounts/{{$parameter[\"subaccount_id\"]}}/actions/update_access_settings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /storage_boxes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"List Storage Boxes"
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
						"Storage Boxes"
					],
					"operation": [
						"List Storage Boxes"
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
						"Storage Boxes"
					],
					"operation": [
						"List Storage Boxes"
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
						"Storage Boxes"
					],
					"operation": [
						"List Storage Boxes"
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
						"Storage Boxes"
					],
					"operation": [
						"List Storage Boxes"
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
						"Storage Boxes"
					],
					"operation": [
						"List Storage Boxes"
					]
				}
			}
		},
		{
			"displayName": "POST /storage_boxes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Create Storage Box"
					]
				}
			}
		},
		{
			"displayName": "Access Settings",
			"name": "access_settings",
			"type": "json",
			"default": "{}",
			"description": "Access settings of the Storage Box.",
			"routing": {
				"send": {
					"property": "access_settings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Create Storage Box"
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
						"Storage Boxes"
					],
					"operation": [
						"Create Storage Box"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Location",
			"name": "location",
			"type": "string",
			"default": "fsn1",
			"description": "ID or Name of Location.",
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
						"Storage Boxes"
					],
					"operation": [
						"Create Storage Box"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Name of the Storage Box.\n",
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
						"Storage Boxes"
					],
					"operation": [
						"Create Storage Box"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"description": "Password of the Storage Box.\n\nFor more details, see the Storage Boxes password policy.\n",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Create Storage Box"
					]
				}
			}
		},
		{
			"displayName": "Ssh Keys",
			"name": "ssh_keys",
			"type": "json",
			"default": "[\n  \"ssh-rsa AAAjjk76kgf...Xt\"\n]",
			"description": "SSH public keys in OpenSSH format to inject into the Storage Box.",
			"routing": {
				"send": {
					"property": "ssh_keys",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Create Storage Box"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Storage Box Type",
			"name": "storage_box_type",
			"type": "string",
			"default": "bx20",
			"description": "ID or Name of the Storage Box Type.",
			"routing": {
				"send": {
					"property": "storage_box_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Create Storage Box"
					]
				}
			}
		},
		{
			"displayName": "GET /storage_boxes/actions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"List Storage Box Actions"
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
						"Storage Boxes"
					],
					"operation": [
						"List Storage Box Actions"
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
						"Storage Boxes"
					],
					"operation": [
						"List Storage Box Actions"
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
						"Storage Boxes"
					],
					"operation": [
						"List Storage Box Actions"
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
						"Storage Boxes"
					],
					"operation": [
						"List Storage Box Actions"
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
						"Storage Boxes"
					],
					"operation": [
						"List Storage Box Actions"
					]
				}
			}
		},
		{
			"displayName": "GET /storage_boxes/actions/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Get Storage Box Action"
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
						"Storage Boxes"
					],
					"operation": [
						"Get Storage Box Action"
					]
				}
			}
		},
		{
			"displayName": "DELETE /storage_boxes/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Delete Storage Box"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Delete Storage Box"
					]
				}
			}
		},
		{
			"displayName": "GET /storage_boxes/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Get Storage Box"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Get Storage Box"
					]
				}
			}
		},
		{
			"displayName": "PUT /storage_boxes/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Replace Storage Box"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Replace Storage Box"
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
						"Storage Boxes"
					],
					"operation": [
						"Replace Storage Box"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Name of the Storage Box.\n",
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
						"Storage Boxes"
					],
					"operation": [
						"Replace Storage Box"
					]
				}
			}
		},
		{
			"displayName": "GET /storage_boxes/{id}/actions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"List Actions For Storage Box"
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
						"Storage Boxes"
					],
					"operation": [
						"List Actions For Storage Box"
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
						"Storage Boxes"
					],
					"operation": [
						"List Actions For Storage Box"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"List Actions For Storage Box"
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
						"Storage Boxes"
					],
					"operation": [
						"List Actions For Storage Box"
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
						"Storage Boxes"
					],
					"operation": [
						"List Actions For Storage Box"
					]
				}
			}
		},
		{
			"displayName": "POST /storage_boxes/{id}/actions/change_protection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Change Protection"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Change Protection"
					]
				}
			}
		},
		{
			"displayName": "Delete",
			"name": "delete",
			"type": "boolean",
			"default": false,
			"description": "Prevent the Resource from being deleted.",
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
						"Storage Boxes"
					],
					"operation": [
						"Change Protection"
					]
				}
			}
		},
		{
			"displayName": "POST /storage_boxes/{id}/actions/change_type",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Change Type"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Change Type"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Storage Box Type",
			"name": "storage_box_type",
			"type": "string",
			"default": "bx20",
			"description": "ID or Name of the Storage Box Type.",
			"routing": {
				"send": {
					"property": "storage_box_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Change Type"
					]
				}
			}
		},
		{
			"displayName": "POST /storage_boxes/{id}/actions/disable_snapshot_plan",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Disable Snapshot Plan"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Disable Snapshot Plan"
					]
				}
			}
		},
		{
			"displayName": "POST /storage_boxes/{id}/actions/enable_snapshot_plan",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Enable Snapshot Plan"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Enable Snapshot Plan"
					]
				}
			}
		},
		{
			"displayName": "Day Of Month",
			"name": "day_of_month",
			"type": "number",
			"default": null,
			"description": "Day of the month when the Snapshot Plan is executed.\n\nNull means every day.\n",
			"routing": {
				"send": {
					"property": "day_of_month",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Enable Snapshot Plan"
					]
				}
			}
		},
		{
			"displayName": "Day Of Week",
			"name": "day_of_week",
			"type": "number",
			"default": 7,
			"description": "Day of the week when the Snapshot Plan is executed.\n\nStarts at 1 for Monday til 7 for Sunday. Null means every day.\n",
			"routing": {
				"send": {
					"property": "day_of_week",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Enable Snapshot Plan"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Hour",
			"name": "hour",
			"type": "number",
			"default": 3,
			"description": "Hour when the Snapshot Plan is executed (UTC).\n",
			"routing": {
				"send": {
					"property": "hour",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Enable Snapshot Plan"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Max Snapshots",
			"name": "max_snapshots",
			"type": "number",
			"default": 10,
			"description": "Maximum amount of Snapshots that will be created by this Snapshot Plan.\n\nOlder Snapshots will be deleted.\n",
			"routing": {
				"send": {
					"property": "max_snapshots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Enable Snapshot Plan"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Minute",
			"name": "minute",
			"type": "number",
			"default": 30,
			"description": "Minute when the Snapshot Plan is executed (UTC).\n",
			"routing": {
				"send": {
					"property": "minute",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Enable Snapshot Plan"
					]
				}
			}
		},
		{
			"displayName": "POST /storage_boxes/{id}/actions/reset_password",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Reset Storage Box Password"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Reset Storage Box Password"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"description": "Password of the Storage Box Subaccount.\n\nFor more details, see the Storage Boxes password policy.\n",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Reset Storage Box Password"
					]
				}
			}
		},
		{
			"displayName": "POST /storage_boxes/{id}/actions/rollback_snapshot",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Rollback Snapshot"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Rollback Snapshot"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Snapshot",
			"name": "snapshot",
			"type": "string",
			"default": "my-snapshot",
			"description": "ID or Name of the Storage Box Snapshot.",
			"routing": {
				"send": {
					"property": "snapshot",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Rollback Snapshot"
					]
				}
			}
		},
		{
			"displayName": "POST /storage_boxes/{id}/actions/update_access_settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Update Storage Box Access Settings"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Update Storage Box Access Settings"
					]
				}
			}
		},
		{
			"displayName": "Reachable Externally",
			"name": "reachable_externally",
			"type": "boolean",
			"default": true,
			"description": "Whether access from outside the Hetzner network is allowed.",
			"routing": {
				"send": {
					"property": "reachable_externally",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Update Storage Box Access Settings"
					]
				}
			}
		},
		{
			"displayName": "Readonly",
			"name": "readonly",
			"type": "boolean",
			"default": true,
			"description": "Whether the Subaccount is read-only.",
			"routing": {
				"send": {
					"property": "readonly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Update Storage Box Access Settings"
					]
				}
			}
		},
		{
			"displayName": "Samba Enabled",
			"name": "samba_enabled",
			"type": "boolean",
			"default": true,
			"description": "Whether the Samba subsystem is enabled.",
			"routing": {
				"send": {
					"property": "samba_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Update Storage Box Access Settings"
					]
				}
			}
		},
		{
			"displayName": "Ssh Enabled",
			"name": "ssh_enabled",
			"type": "boolean",
			"default": true,
			"description": "Whether the SSH subsystem is enabled.",
			"routing": {
				"send": {
					"property": "ssh_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Update Storage Box Access Settings"
					]
				}
			}
		},
		{
			"displayName": "Webdav Enabled",
			"name": "webdav_enabled",
			"type": "boolean",
			"default": true,
			"description": "Whether the WebDAV subsystem is enabled.",
			"routing": {
				"send": {
					"property": "webdav_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Update Storage Box Access Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /storage_boxes/{id}/actions/{action_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Get Action For Storage Box"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Get Action For Storage Box"
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
						"Storage Boxes"
					],
					"operation": [
						"Get Action For Storage Box"
					]
				}
			}
		},
		{
			"displayName": "GET /storage_boxes/{id}/folders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"List Folders Of Storage Box"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"List Folders Of Storage Box"
					]
				}
			}
		},
		{
			"displayName": "Path",
			"name": "path",
			"description": "Relative path for which the listing is to be made.",
			"default": "./documents",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "path",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"List Folders Of Storage Box"
					]
				}
			}
		},
		{
			"displayName": "GET /storage_boxes/{id}/snapshots",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"List Snapshots"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"List Snapshots"
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
						"Storage Boxes"
					],
					"operation": [
						"List Snapshots"
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
						"Storage Boxes"
					],
					"operation": [
						"List Snapshots"
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
						"Storage Boxes"
					],
					"operation": [
						"List Snapshots"
					]
				}
			}
		},
		{
			"displayName": "Is Automatic",
			"name": "is_automatic",
			"description": "Filter wether a Storage Box Snapshot is automatic.\n",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "is_automatic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"List Snapshots"
					]
				}
			}
		},
		{
			"displayName": "POST /storage_boxes/{id}/snapshots",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Create Snapshot"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Create Snapshot"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "snapshot-0001",
			"description": "Description of the Storage Box Snapshot.",
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
						"Storage Boxes"
					],
					"operation": [
						"Create Snapshot"
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
						"Storage Boxes"
					],
					"operation": [
						"Create Snapshot"
					]
				}
			}
		},
		{
			"displayName": "DELETE /storage_boxes/{id}/snapshots/{snapshot_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Delete Snapshot"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Delete Snapshot"
					]
				}
			}
		},
		{
			"displayName": "Snapshot Id",
			"name": "snapshot_id",
			"required": true,
			"description": "ID of the Storage Box Snapshot.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Delete Snapshot"
					]
				}
			}
		},
		{
			"displayName": "GET /storage_boxes/{id}/snapshots/{snapshot_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Get Snapshot"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Get Snapshot"
					]
				}
			}
		},
		{
			"displayName": "Snapshot Id",
			"name": "snapshot_id",
			"required": true,
			"description": "ID of the Storage Box Snapshot.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Get Snapshot"
					]
				}
			}
		},
		{
			"displayName": "PUT /storage_boxes/{id}/snapshots/{snapshot_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Replace Snapshot"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Replace Snapshot"
					]
				}
			}
		},
		{
			"displayName": "Snapshot Id",
			"name": "snapshot_id",
			"required": true,
			"description": "ID of the Storage Box Snapshot.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Replace Snapshot"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "snapshot-0001",
			"description": "Description of the Storage Box Snapshot.",
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
						"Storage Boxes"
					],
					"operation": [
						"Replace Snapshot"
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
						"Storage Boxes"
					],
					"operation": [
						"Replace Snapshot"
					]
				}
			}
		},
		{
			"displayName": "GET /storage_boxes/{id}/subaccounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"List Subaccounts"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"List Subaccounts"
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
						"Storage Boxes"
					],
					"operation": [
						"List Subaccounts"
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
						"Storage Boxes"
					],
					"operation": [
						"List Subaccounts"
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
						"Storage Boxes"
					],
					"operation": [
						"List Subaccounts"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"description": "Filter Storage Box Subaccounts by username. The response will only contain the resources\nmatching exactly the specified username.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "username",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"List Subaccounts"
					]
				}
			}
		},
		{
			"displayName": "POST /storage_boxes/{id}/subaccounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Create Subaccount"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Create Subaccount"
					]
				}
			}
		},
		{
			"displayName": "Access Settings",
			"name": "access_settings",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "access_settings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Create Subaccount"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "my-backup-server01",
			"description": "A description of Storage Box Subaccount.\n",
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
						"Storage Boxes"
					],
					"operation": [
						"Create Subaccount"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Home Directory",
			"name": "home_directory",
			"type": "string",
			"default": "my-backup/server01",
			"description": "Home directory of the Storage Box Subaccount.\n\nThe directory will be created if it doesn't exist yet.\n",
			"routing": {
				"send": {
					"property": "home_directory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Create Subaccount"
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
						"Storage Boxes"
					],
					"operation": [
						"Create Subaccount"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "my-name",
			"description": "Name of the Storage Box Subaccount.\n\nDefaults to the Storage Box Subaccount `username`.\n",
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
						"Storage Boxes"
					],
					"operation": [
						"Create Subaccount"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"description": "Password of the Storage Box Subaccount.\n\nFor more details, see the Storage Boxes password policy.\n",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Create Subaccount"
					]
				}
			}
		},
		{
			"displayName": "DELETE /storage_boxes/{id}/subaccounts/{subaccount_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Delete Subaccount"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Delete Subaccount"
					]
				}
			}
		},
		{
			"displayName": "Subaccount Id",
			"name": "subaccount_id",
			"required": true,
			"description": "ID of the Storage Box Subaccount.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Delete Subaccount"
					]
				}
			}
		},
		{
			"displayName": "GET /storage_boxes/{id}/subaccounts/{subaccount_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Get Subaccount"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Get Subaccount"
					]
				}
			}
		},
		{
			"displayName": "Subaccount Id",
			"name": "subaccount_id",
			"required": true,
			"description": "ID of the Storage Box Subaccount.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Get Subaccount"
					]
				}
			}
		},
		{
			"displayName": "PUT /storage_boxes/{id}/subaccounts/{subaccount_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Replace Subaccount"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Replace Subaccount"
					]
				}
			}
		},
		{
			"displayName": "Subaccount Id",
			"name": "subaccount_id",
			"required": true,
			"description": "ID of the Storage Box Subaccount.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Replace Subaccount"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "my-backup-server01",
			"description": "A description of Storage Box Subaccount.\n",
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
						"Storage Boxes"
					],
					"operation": [
						"Replace Subaccount"
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
						"Storage Boxes"
					],
					"operation": [
						"Replace Subaccount"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "my-name",
			"description": "Name of the Storage Box Subaccount.\n",
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
						"Storage Boxes"
					],
					"operation": [
						"Replace Subaccount"
					]
				}
			}
		},
		{
			"displayName": "POST /storage_boxes/{id}/subaccounts/{subaccount_id}/actions/change_home_directory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Change Home Directory"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Change Home Directory"
					]
				}
			}
		},
		{
			"displayName": "Subaccount Id",
			"name": "subaccount_id",
			"required": true,
			"description": "ID of the Storage Box Subaccount.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Change Home Directory"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Home Directory",
			"name": "home_directory",
			"type": "string",
			"default": "my-backup/server01",
			"description": "Home directory of the Storage Box Subaccount.\n\nThe directory will be created if it doesn't exist yet.\n",
			"routing": {
				"send": {
					"property": "home_directory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Change Home Directory"
					]
				}
			}
		},
		{
			"displayName": "POST /storage_boxes/{id}/subaccounts/{subaccount_id}/actions/reset_subaccount_password",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Reset Storage Box Subaccount Password"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Reset Storage Box Subaccount Password"
					]
				}
			}
		},
		{
			"displayName": "Subaccount Id",
			"name": "subaccount_id",
			"required": true,
			"description": "ID of the Storage Box Subaccount.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Reset Storage Box Subaccount Password"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"description": "Password of the Storage Box Subaccount.\n\nFor more details, see the Storage Boxes password policy.\n",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Reset Storage Box Subaccount Password"
					]
				}
			}
		},
		{
			"displayName": "POST /storage_boxes/{id}/subaccounts/{subaccount_id}/actions/update_access_settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Update Storage Box Subaccount Access Settings"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Storage Box.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Update Storage Box Subaccount Access Settings"
					]
				}
			}
		},
		{
			"displayName": "Subaccount Id",
			"name": "subaccount_id",
			"required": true,
			"description": "ID of the Storage Box Subaccount.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Update Storage Box Subaccount Access Settings"
					]
				}
			}
		},
		{
			"displayName": "Reachable Externally",
			"name": "reachable_externally",
			"type": "boolean",
			"default": true,
			"description": "Whether access from outside the Hetzner network is allowed.",
			"routing": {
				"send": {
					"property": "reachable_externally",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Update Storage Box Subaccount Access Settings"
					]
				}
			}
		},
		{
			"displayName": "Readonly",
			"name": "readonly",
			"type": "boolean",
			"default": true,
			"description": "Whether the Subaccount is read-only.",
			"routing": {
				"send": {
					"property": "readonly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Update Storage Box Subaccount Access Settings"
					]
				}
			}
		},
		{
			"displayName": "Samba Enabled",
			"name": "samba_enabled",
			"type": "boolean",
			"default": true,
			"description": "Whether the Samba subsystem is enabled.",
			"routing": {
				"send": {
					"property": "samba_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Update Storage Box Subaccount Access Settings"
					]
				}
			}
		},
		{
			"displayName": "Ssh Enabled",
			"name": "ssh_enabled",
			"type": "boolean",
			"default": true,
			"description": "Whether the SSH subsystem is enabled.",
			"routing": {
				"send": {
					"property": "ssh_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Update Storage Box Subaccount Access Settings"
					]
				}
			}
		},
		{
			"displayName": "Webdav Enabled",
			"name": "webdav_enabled",
			"type": "boolean",
			"default": true,
			"description": "Whether the WebDAV subsystem is enabled.",
			"routing": {
				"send": {
					"property": "webdav_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Boxes"
					],
					"operation": [
						"Update Storage Box Subaccount Access Settings"
					]
				}
			}
		},
];
