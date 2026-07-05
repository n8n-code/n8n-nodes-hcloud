import type { INodeProperties } from 'n8n-workflow';

export const certificatesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Certificates"
					]
				}
			},
			"options": [
				{
					"name": "List Certificates",
					"value": "List Certificates",
					"action": "List Certificates",
					"description": "Returns all Certificate objects.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/certificates"
						}
					}
				},
				{
					"name": "Create Certificate",
					"value": "Create Certificate",
					"action": "Create a Certificate",
					"description": "Creates a new Certificate.\n\nThe default type **uploaded** allows for uploading your existing `certificate` and `private_key` in PEM format. You have to monitor its expiration date and handle renewal yourself.\n\nIn contrast, type **managed** requests a new Certificate from *Let's Encrypt* for the specified `domain_names`. Only domains managed by *Hetzner DNS* are supported. We handle renewal and timely alert the project owner via email if problems occur.\n\nFor type `managed` Certificates the `action` key of the response contains the Action that allows for tracking the issuance process. For type `uploaded` Certificates the `action` is always null.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/certificates"
						}
					}
				},
				{
					"name": "Delete Certificate",
					"value": "Delete Certificate",
					"action": "Delete a Certificate",
					"description": "Deletes a Certificate.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/certificates/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Certificate",
					"value": "Get Certificate",
					"action": "Get a Certificate",
					"description": "Gets a specific Certificate object.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/certificates/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Replace Certificate",
					"value": "Replace Certificate",
					"action": "Update a Certificate",
					"description": "Updates the Certificate properties.\n\nNote: if the Certificate object changes during the request, the response will be a “conflict” error.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/certificates/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "List Actions For Certificate",
					"value": "List Actions For Certificate",
					"action": "List Actions for a Certificate",
					"description": "Returns all Action objects for a Certificate. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.\n\nOnly type `managed` Certificates can have Actions. For type `uploaded` Certificates the `actions` key will always contain an empty array.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/certificates/{{$parameter[\"id\"]}}/actions"
						}
					}
				},
				{
					"name": "Get Action For Certificate",
					"value": "Get Action For Certificate",
					"action": "Get an Action for a Certificate",
					"description": "Returns a specific Action for a Certificate. Only type `managed` Certificates have Actions.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/certificates/{{$parameter[\"id\"]}}/actions/{{$parameter[\"action_id\"]}}"
						}
					}
				},
				{
					"name": "Retry Issuance Or Renewal",
					"value": "Retry Issuance Or Renewal",
					"action": "Retry Issuance or Renewal",
					"description": "Retry a failed Certificate issuance or renewal.\n\nOnly applicable if the type of the Certificate is `managed` and the issuance or renewal status is `failed`.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n|  | `caa_record_does_not_allow_ca` | CAA record does not allow certificate authority |\n|  | `ca_dns_validation_failed` | Certificate Authority: DNS validation failed |\n|  | `ca_too_many_authorizations_failed_recently` | Certificate Authority: Too many authorizations failed recently |\n|  | `ca_too_many_certificates_issued_for_registered_domain` | Certificate Authority: Too many certificates issued for registered domain |\n|  | `ca_too_many_duplicate_certificates` | Certificate Authority: Too many duplicate certificates |\n|  | `could_not_verify_domain_delegated_to_zone` | Could not verify domain delegated to zone |\n|  | `dns_zone_not_found` | DNS zone not found |\n|  | `dns_zone_is_secondary_zone` | DNS zone is a secondary zone |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/certificates/{{$parameter[\"id\"]}}/actions/retry"
						}
					}
				},
				{
					"name": "List Certificate Actions",
					"value": "List Certificate Actions",
					"action": "List Actions",
					"description": "Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` and `id` parameter.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/certificates/actions"
						}
					}
				},
				{
					"name": "Get Certificate Action",
					"value": "Get Certificate Action",
					"action": "Get an Action",
					"description": "Returns a specific Action object.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/certificates/actions/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /certificates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Certificates"
					],
					"operation": [
						"List Certificates"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort resources by field and direction. May be used multiple times.\n\nFor more information, see \"Sorting\".\n",
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
						"Certificates"
					],
					"operation": [
						"List Certificates"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Filter resources by their name.\n\nThe response will only contain the resources\nmatching exactly the specified name.\n",
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
						"Certificates"
					],
					"operation": [
						"List Certificates"
					]
				}
			}
		},
		{
			"displayName": "Label Selector",
			"name": "label_selector",
			"description": "Filter resources by labels.\n\nThe response will only contain resources matching the label selector.\nFor more information, see \"Label Selector\".\n",
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
						"Certificates"
					],
					"operation": [
						"List Certificates"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Filter resources by type. May be used multiple times.\n\nThe response will only contain the resources with the specified type.\n",
			"default": "[\n  \"uploaded\"\n]",
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
						"Certificates"
					],
					"operation": [
						"List Certificates"
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
						"Certificates"
					],
					"operation": [
						"List Certificates"
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
						"Certificates"
					],
					"operation": [
						"List Certificates"
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
						"Certificates"
					],
					"operation": [
						"List Certificates"
					]
				}
			}
		},
		{
			"displayName": "POST /certificates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Certificates"
					],
					"operation": [
						"Create Certificate"
					]
				}
			}
		},
		{
			"displayName": "Certificate",
			"name": "certificate",
			"type": "string",
			"default": "-----BEGIN CERTIFICATE-----\n...",
			"description": "Certificate and chain in PEM format, in order so that each record directly certifies the one preceding. Required for type `uploaded` Certificates.",
			"routing": {
				"send": {
					"property": "certificate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Certificates"
					],
					"operation": [
						"Create Certificate"
					]
				}
			}
		},
		{
			"displayName": "Domain Names",
			"name": "domain_names",
			"type": "json",
			"default": "[\n  \"example.com\",\n  \"www.example.com\"\n]",
			"description": "Domains and subdomains that should be contained in the Certificate issued by *Let's Encrypt*. Required for type `managed` Certificates.",
			"routing": {
				"send": {
					"property": "domain_names",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Certificates"
					],
					"operation": [
						"Create Certificate"
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
						"Certificates"
					],
					"operation": [
						"Create Certificate"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "my website cert",
			"description": "Name of the Certificate.",
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
						"Certificates"
					],
					"operation": [
						"Create Certificate"
					]
				}
			}
		},
		{
			"displayName": "Private Key",
			"name": "private_key",
			"type": "string",
			"default": "-----BEGIN PRIVATE KEY-----\n...",
			"description": "Certificate key in PEM format. Required for type `uploaded` Certificates.",
			"routing": {
				"send": {
					"property": "private_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Certificates"
					],
					"operation": [
						"Create Certificate"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "uploaded",
			"description": "Choose between uploading a Certificate in PEM format or requesting a managed *Let's Encrypt* Certificate.",
			"options": [
				{
					"name": "Managed",
					"value": "managed"
				},
				{
					"name": "Uploaded",
					"value": "uploaded"
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
						"Certificates"
					],
					"operation": [
						"Create Certificate"
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
						"Certificates"
					],
					"operation": [
						"Create Certificate"
					]
				}
			}
		},
		{
			"displayName": "DELETE /certificates/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Certificates"
					],
					"operation": [
						"Delete Certificate"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Certificate.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Certificates"
					],
					"operation": [
						"Delete Certificate"
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
						"Certificates"
					],
					"operation": [
						"Delete Certificate"
					]
				}
			}
		},
		{
			"displayName": "GET /certificates/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Certificates"
					],
					"operation": [
						"Get Certificate"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Certificate.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Certificates"
					],
					"operation": [
						"Get Certificate"
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
						"Certificates"
					],
					"operation": [
						"Get Certificate"
					]
				}
			}
		},
		{
			"displayName": "PUT /certificates/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Certificates"
					],
					"operation": [
						"Replace Certificate"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Certificate.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Certificates"
					],
					"operation": [
						"Replace Certificate"
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
						"Certificates"
					],
					"operation": [
						"Replace Certificate"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "my website cert",
			"description": "New Certificate name.",
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
						"Certificates"
					],
					"operation": [
						"Replace Certificate"
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
						"Certificates"
					],
					"operation": [
						"Replace Certificate"
					]
				}
			}
		},
		{
			"displayName": "GET /certificates/{id}/actions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Certificates"
					],
					"operation": [
						"List Actions For Certificate"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Certificate.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Certificates"
					],
					"operation": [
						"List Actions For Certificate"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort actions by field and direction. May be used multiple times.\n\nFor more information, see \"Sorting\".\n",
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
						"Certificates"
					],
					"operation": [
						"List Actions For Certificate"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "Filter the actions by status. May be used multiple times.\n\nThe response will only contain actions matching the specified statuses.\n",
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
						"Certificates"
					],
					"operation": [
						"List Actions For Certificate"
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
						"Certificates"
					],
					"operation": [
						"List Actions For Certificate"
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
						"Certificates"
					],
					"operation": [
						"List Actions For Certificate"
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
						"Certificates"
					],
					"operation": [
						"List Actions For Certificate"
					]
				}
			}
		},
		{
			"displayName": "GET /certificates/{id}/actions/{action_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Certificates"
					],
					"operation": [
						"Get Action For Certificate"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Certificate.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Certificates"
					],
					"operation": [
						"Get Action For Certificate"
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
						"Certificates"
					],
					"operation": [
						"Get Action For Certificate"
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
						"Certificates"
					],
					"operation": [
						"Get Action For Certificate"
					]
				}
			}
		},
		{
			"displayName": "POST /certificates/{id}/actions/retry",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Certificates"
					],
					"operation": [
						"Retry Issuance Or Renewal"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Certificate.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Certificates"
					],
					"operation": [
						"Retry Issuance Or Renewal"
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
						"Certificates"
					],
					"operation": [
						"Retry Issuance Or Renewal"
					]
				}
			}
		},
		{
			"displayName": "GET /certificates/actions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Certificates"
					],
					"operation": [
						"List Certificate Actions"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"description": "Filter the actions by ID. May be used multiple times.\n\nThe response will only contain actions matching the specified IDs.\n",
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
						"Certificates"
					],
					"operation": [
						"List Certificate Actions"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort actions by field and direction. May be used multiple times.\n\nFor more information, see \"Sorting\".\n",
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
						"Certificates"
					],
					"operation": [
						"List Certificate Actions"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "Filter the actions by status. May be used multiple times.\n\nThe response will only contain actions matching the specified statuses.\n",
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
						"Certificates"
					],
					"operation": [
						"List Certificate Actions"
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
						"Certificates"
					],
					"operation": [
						"List Certificate Actions"
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
						"Certificates"
					],
					"operation": [
						"List Certificate Actions"
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
						"Certificates"
					],
					"operation": [
						"List Certificate Actions"
					]
				}
			}
		},
		{
			"displayName": "GET /certificates/actions/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Certificates"
					],
					"operation": [
						"Get Certificate Action"
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
						"Certificates"
					],
					"operation": [
						"Get Certificate Action"
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
						"Certificates"
					],
					"operation": [
						"Get Certificate Action"
					]
				}
			}
		},
];
