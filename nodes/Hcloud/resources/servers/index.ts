import type { INodeProperties } from 'n8n-workflow';

export const serversDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					]
				}
			},
			"options": [
				{
					"name": "List Servers",
					"value": "List Servers",
					"action": "List Servers",
					"description": "Returns all existing Server objects.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servers"
						}
					}
				},
				{
					"name": "Create Server",
					"value": "Create Server",
					"action": "Create a Server",
					"description": "Creates a new Server. Returns preliminary information about the Server as well as an Action that covers progress of creation.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `412` | `primary_ip_version_mismatch` | The specified Primary IP has the wrong IP Version |\n| `422` | `placement_error` | An error during the placement occurred |\n| `422` | `primary_ip_assigned` | The specified Primary IP is already assigned to a server |\n| `422` | `primary_ip_datacenter_mismatch` | he specified Primary IP is in a different datacenter |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servers"
						}
					}
				},
				{
					"name": "Delete Server",
					"value": "Delete Server",
					"action": "Delete a Server",
					"description": "Deletes a Server.\n\nThis immediately removes the Server from your account, and it is no longer\naccessible. Any resources attached to the server (like Volumes, Primary IPs,\nFloating IPs, Firewalls, Placement Groups) are detached while the server is deleted.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/servers/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Server",
					"value": "Get Server",
					"action": "Get a Server",
					"description": "Returns a specific Server object. The Server must exist inside the Project.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servers/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Replace Server",
					"value": "Replace Server",
					"action": "Update a Server",
					"description": "Updates a Server. You can update a Server’s name and a Server’s labels.\n\nPlease note that Server names must be unique per Project and valid hostnames as per RFC 1123 (i.e. may only contain letters, digits, periods, and dashes).\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/servers/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "List Actions For Server",
					"value": "List Actions For Server",
					"action": "List Actions for a Server",
					"description": "Returns all Action objects for a Server. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servers/{{$parameter[\"id\"]}}/actions"
						}
					}
				},
				{
					"name": "Get Action For Server",
					"value": "Get Action For Server",
					"action": "Get an Action for a Server",
					"description": "Returns a specific Action object for a Server.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servers/{{$parameter[\"id\"]}}/actions/{{$parameter[\"action_id\"]}}"
						}
					}
				},
				{
					"name": "Add Server To Placement Group",
					"value": "Add Server To Placement Group",
					"action": "Add a Server to a Placement Group",
					"description": "Adds a Server to a Placement Group.\n\nServer must be powered off for this command to succeed.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `server_not_stopped` | The action requires a stopped server |\n| `422` | `already_in_placement_group` | The server is already part of a placement group |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servers/{{$parameter[\"id\"]}}/actions/add_to_placement_group"
						}
					}
				},
				{
					"name": "Attach Iso To Server",
					"value": "Attach Iso To Server",
					"action": "Attach an ISO to a Server",
					"description": "Attaches an ISO to a Server. The Server will immediately see it as a new disk. An already attached ISO will automatically be detached before the new ISO is attached.\n\nServers with attached ISOs have a modified boot order: They will try to boot from the ISO first before falling back to hard disk.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servers/{{$parameter[\"id\"]}}/actions/attach_iso"
						}
					}
				},
				{
					"name": "Attach Server To Network",
					"value": "Attach Server To Network",
					"action": "Attach a Server to a Network",
					"description": "Attaches a Server to a network. This will complement the fixed public Server interface by adding an additional ethernet interface to the Server which is connected to the specified network.\n\nThe Server will get an IP auto assigned from a subnet of type `server` in the same `network_zone`.\n\nUsing the `alias_ips` attribute you can also define one or more additional IPs to the Servers. Please note that you will have to configure these IPs by hand on your Server since only the primary IP will be given out by DHCP.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `server_already_attached` | The server is already attached to the network |\n| `422` | `ip_not_available` | The provided Network IP is not available |\n| `422` | `no_subnet_available` | No Subnet or IP is available for the Server within the network |\n| `422` | `networks_overlap` | The network IP range overlaps with one of the server networks |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servers/{{$parameter[\"id\"]}}/actions/attach_to_network"
						}
					}
				},
				{
					"name": "Change Alias Ips Of Network",
					"value": "Change Alias Ips Of Network",
					"action": "Change alias IPs of a Network",
					"description": "Changes the alias IPs of an already attached Network. Note that the existing aliases for the specified Network will be replaced with these provided in the request body. So if you want to add an alias IP, you have to provide the existing ones from the Network plus the new alias IP in the request body.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servers/{{$parameter[\"id\"]}}/actions/change_alias_ips"
						}
					}
				},
				{
					"name": "Change Reverse DNS Entry For This Server",
					"value": "Change Reverse DNS Entry For This Server",
					"action": "Change reverse DNS entry for this Server",
					"description": "Changes the hostname that will appear when getting the hostname belonging to the primary IPs (IPv4 and IPv6) of this Server.\n\nFloating IPs assigned to the Server are not affected by this.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servers/{{$parameter[\"id\"]}}/actions/change_dns_ptr"
						}
					}
				},
				{
					"name": "Change Server Protection",
					"value": "Change Server Protection",
					"action": "Change Server Protection",
					"description": "Changes the protection configuration of the Server.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servers/{{$parameter[\"id\"]}}/actions/change_protection"
						}
					}
				},
				{
					"name": "Change Type Of Server",
					"value": "Change Type Of Server",
					"action": "Change the Type of a Server",
					"description": "Changes the type (Cores, RAM and disk sizes) of a Server.\n\nServer must be powered off for this command to succeed.\n\nThis copies the content of its disk, and starts it again.\n\nYou can only migrate to Server types with the same `storage_type` and equal or bigger disks. Shrinking disks is not possible as it might destroy data.\n\nIf the disk gets upgraded, the Server type can not be downgraded any more. If you plan to downgrade the Server type, set `upgrade_disk` to `false`.\n\n#### Operation specific errors\n\n| Status | Code | Description |\n| --- | --- | --- |\n| `422` | `invalid_server_type` | The server type does not fit for the given server or is deprecated |\n| `422` | `server_not_stopped` | The action requires a stopped server |\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servers/{{$parameter[\"id\"]}}/actions/change_type"
						}
					}
				},
				{
					"name": "Create Image From Server",
					"value": "Create Image From Server",
					"action": "Create Image from a Server",
					"description": "Creates an Image (snapshot) from a Server by copying the contents of its disks. This creates a snapshot of the current state of the disk and copies it into an Image. If the Server is currently running you must make sure that its disk content is consistent. Otherwise, the created Image may not be readable.\n\nTo make sure disk content is consistent, we recommend to shut down the Server prior to creating an Image.\n\nYou can either create a `backup` Image that is bound to the Server and therefore will be deleted when the Server is deleted, or you can create a `snapshot` Image which is completely independent of the Server it was created from and will survive Server deletion. Backup Images are only available when the backup option is enabled for the Server. Snapshot Images are billed on a per GB basis.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servers/{{$parameter[\"id\"]}}/actions/create_image"
						}
					}
				},
				{
					"name": "Detach Server From Network",
					"value": "Detach Server From Network",
					"action": "Detach a Server from a Network",
					"description": "Detaches a Server from a network. The interface for this network will vanish.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servers/{{$parameter[\"id\"]}}/actions/detach_from_network"
						}
					}
				},
				{
					"name": "Detach Iso From Server",
					"value": "Detach Iso From Server",
					"action": "Detach an ISO from a Server",
					"description": "Detaches an ISO from a Server. In case no ISO Image is attached to the Server, the status of the returned Action is immediately set to `success`.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servers/{{$parameter[\"id\"]}}/actions/detach_iso"
						}
					}
				},
				{
					"name": "Disable Backups For Server",
					"value": "Disable Backups For Server",
					"action": "Disable Backups for a Server",
					"description": "Disables the automatic backup option and deletes all existing Backups for a Server. No more additional charges for backups will be made.\n\nCaution: This immediately removes all existing backups for the Server!\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servers/{{$parameter[\"id\"]}}/actions/disable_backup"
						}
					}
				},
				{
					"name": "Disable Rescue Mode For Server",
					"value": "Disable Rescue Mode For Server",
					"action": "Disable Rescue Mode for a Server",
					"description": "Disables the Hetzner Rescue System for a Server. This makes a Server start from its disks on next reboot.\n\nRescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.\n\nDisabling rescue mode will not reboot your Server — you will have to do this yourself.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servers/{{$parameter[\"id\"]}}/actions/disable_rescue"
						}
					}
				},
				{
					"name": "Enable And Configure Backups For Server",
					"value": "Enable And Configure Backups For Server",
					"action": "Enable and Configure Backups for a Server",
					"description": "Enables and configures the automatic daily backup option for the Server. Enabling automatic backups will increase the price of the Server by 20%. In return, you will get seven slots where Images of type backup can be stored.\n\nBackups are automatically created daily.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servers/{{$parameter[\"id\"]}}/actions/enable_backup"
						}
					}
				},
				{
					"name": "Enable Rescue Mode For Server",
					"value": "Enable Rescue Mode For Server",
					"action": "Enable Rescue Mode for a Server",
					"description": "Enable the Hetzner Rescue System for this Server. The next time a Server with enabled rescue mode boots it will start a special minimal Linux distribution designed for repair and reinstall.\n\nIn case a Server cannot boot on its own you can use this to access a Server’s disks.\n\nRescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.\n\nEnabling rescue mode will not [reboot](https://docs.hetzner.cloud/#server-actions-soft-reboot-a-server) your Server — you will have to do this yourself.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servers/{{$parameter[\"id\"]}}/actions/enable_rescue"
						}
					}
				},
				{
					"name": "Power Off Server",
					"value": "Power Off Server",
					"action": "Power off a Server",
					"description": "Cuts power to the Server. This forcefully stops it without giving the Server operating system time to gracefully stop. May lead to data loss, equivalent to pulling the power cord. Power off should only be used when shutdown does not work.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servers/{{$parameter[\"id\"]}}/actions/poweroff"
						}
					}
				},
				{
					"name": "Power On Server",
					"value": "Power On Server",
					"action": "Power on a Server",
					"description": "Starts a Server by turning its power on.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servers/{{$parameter[\"id\"]}}/actions/poweron"
						}
					}
				},
				{
					"name": "Soft Reboot Server",
					"value": "Soft Reboot Server",
					"action": "Soft-reboot a Server",
					"description": "Reboots a Server gracefully by sending an ACPI request. The Server operating system must support ACPI and react to the request, otherwise the Server will not reboot.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servers/{{$parameter[\"id\"]}}/actions/reboot"
						}
					}
				},
				{
					"name": "Rebuild Server From Image",
					"value": "Rebuild Server From Image",
					"action": "Rebuild a Server from an Image",
					"description": "Rebuilds a Server overwriting its disk with the content of an Image, thereby **destroying all data** on the target Server\n\nThe Image can either be one you have created earlier (`backup` or `snapshot` Image) or it can be a completely fresh `system` Image provided by us. You can get a list of all available Images with `GET /images`.\n\nYour Server will automatically be powered off before the rebuild command executes.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servers/{{$parameter[\"id\"]}}/actions/rebuild"
						}
					}
				},
				{
					"name": "Remove From Placement Group",
					"value": "Remove From Placement Group",
					"action": "Remove from Placement Group",
					"description": "Removes a Server from a Placement Group.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servers/{{$parameter[\"id\"]}}/actions/remove_from_placement_group"
						}
					}
				},
				{
					"name": "Request Console For Server",
					"value": "Request Console For Server",
					"action": "Request Console for a Server",
					"description": "Requests credentials for remote access via VNC over websocket to keyboard, monitor, and mouse for a Server. The provided URL is valid for 1 minute, after this period a new url needs to be created to connect to the Server. How long the connection is open after the initial connect is not subject to this timeout.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servers/{{$parameter[\"id\"]}}/actions/request_console"
						}
					}
				},
				{
					"name": "Reset Server",
					"value": "Reset Server",
					"action": "Reset a Server",
					"description": "Cuts power to a Server and starts it again. This forcefully stops it without giving the Server operating system time to gracefully stop. This may lead to data loss, it’s equivalent to pulling the power cord and plugging it in again. Reset should only be used when reboot does not work.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servers/{{$parameter[\"id\"]}}/actions/reset"
						}
					}
				},
				{
					"name": "Reset Root Password Of Server",
					"value": "Reset Root Password Of Server",
					"action": "Reset root Password of a Server",
					"description": "Resets the root password. Only works for Linux systems that are running the qemu guest agent. Server must be powered on (status `running`) in order for this operation to succeed.\n\nThis will generate a new password for this Server and return it.\n\nIf this does not succeed you can use the rescue system to netboot the Server and manually change your Server password by hand.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servers/{{$parameter[\"id\"]}}/actions/reset_password"
						}
					}
				},
				{
					"name": "Shutdown Server",
					"value": "Shutdown Server",
					"action": "Shutdown a Server",
					"description": "Shuts down a Server gracefully by sending an ACPI shutdown request. The Server operating system must support ACPI\nand react to the request, otherwise the Server will not shut down. Please note that the `action` status in this case\nonly reflects whether the action was sent to the server. It does not mean that the server actually shut down\nsuccessfully. If you need to ensure that the server is off, use the `poweroff` action.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servers/{{$parameter[\"id\"]}}/actions/shutdown"
						}
					}
				},
				{
					"name": "Get Metrics For Server",
					"value": "Get Metrics For Server",
					"action": "Get Metrics for a Server",
					"description": "Get Metrics for specified Server.\n\nYou must specify the type of metric to get: cpu, disk or network. You can also specify more than one type by comma separation, e.g. cpu,disk.\n\nDepending on the type you will get different time series data\n\n| Type    | Timeseries              | Unit      | Description                                          |\n|---------|-------------------------|-----------|------------------------------------------------------|\n| cpu     | cpu                     | percent   | Percent CPU usage                                    |\n| disk    | disk.0.iops.read        | iop/s     | Number of read IO operations per second              |\n|         | disk.0.iops.write       | iop/s     | Number of write IO operations per second             |\n|         | disk.0.bandwidth.read   | bytes/s   | Bytes read per second                                |\n|         | disk.0.bandwidth.write  | bytes/s   | Bytes written per second                             |\n| network | network.0.pps.in        | packets/s | Public Network interface packets per second received |\n|         | network.0.pps.out       | packets/s | Public Network interface packets per second sent     |\n|         | network.0.bandwidth.in  | bytes/s   | Public Network interface bytes/s received            |\n|         | network.0.bandwidth.out | bytes/s   | Public Network interface bytes/s sent                |\n\nMetrics are available for the last 30 days only.\n\nIf you do not provide the step argument we will automatically adjust it so that a maximum of 200 samples are returned.\n\nWe limit the number of samples returned to a maximum of 500 and will adjust the step parameter accordingly.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servers/{{$parameter[\"id\"]}}/metrics"
						}
					}
				},
				{
					"name": "List Server Actions",
					"value": "List Server Actions",
					"action": "List Actions",
					"description": "Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` and `id` parameter.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servers/actions"
						}
					}
				},
				{
					"name": "Get Server Action",
					"value": "Get Server Action",
					"action": "Get an Action",
					"description": "Returns a specific Action object.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servers/actions/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /servers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"List Servers"
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
						"Servers"
					],
					"operation": [
						"List Servers"
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
						"Servers"
					],
					"operation": [
						"List Servers"
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
						"Servers"
					],
					"operation": [
						"List Servers"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "Filter resources by status. May be used multiple times.\n\nThe response will only contain the resources with the specified status.\n",
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
						"Servers"
					],
					"operation": [
						"List Servers"
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
						"Servers"
					],
					"operation": [
						"List Servers"
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
						"Servers"
					],
					"operation": [
						"List Servers"
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
						"Servers"
					],
					"operation": [
						"List Servers"
					]
				}
			}
		},
		{
			"displayName": "POST /servers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Create Server"
					]
				}
			}
		},
		{
			"displayName": "Automount",
			"name": "automount",
			"type": "boolean",
			"default": false,
			"description": "Auto-mount Volumes after attach.",
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
						"Servers"
					],
					"operation": [
						"Create Server"
					]
				}
			}
		},
		{
			"displayName": "Datacenter",
			"name": "datacenter",
			"type": "string",
			"default": "nbg1-dc3",
			"description": "**Deprecated**: This property is deprecated and will be removed after the 1 July 2026.\nUse the `location` property instead.\n\nID or name of the Data Center to create Server in (must not be used together with `location`).\n",
			"routing": {
				"send": {
					"property": "datacenter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Create Server"
					]
				}
			}
		},
		{
			"displayName": "Firewalls",
			"name": "firewalls",
			"type": "json",
			"default": "[\n  {\n    \"firewall\": 38\n  }\n]",
			"description": "Firewalls which should be applied on the Server's public network interface at creation time.",
			"routing": {
				"send": {
					"property": "firewalls",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Create Server"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Image",
			"name": "image",
			"type": "string",
			"default": "ubuntu-24.04",
			"description": "ID or name of the Image the Server is created from.",
			"routing": {
				"send": {
					"property": "image",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Create Server"
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
						"Servers"
					],
					"operation": [
						"Create Server"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "location",
			"type": "string",
			"default": "nbg1",
			"description": "ID or name of the Location to create the Server in (must not be used together with `datacenter`).",
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
						"Servers"
					],
					"operation": [
						"Create Server"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "my-server",
			"description": "Name of the Server to create (must be unique per Project and a valid hostname as per RFC 1123).",
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
						"Servers"
					],
					"operation": [
						"Create Server"
					]
				}
			}
		},
		{
			"displayName": "Networks",
			"name": "networks",
			"type": "json",
			"default": "[\n  456\n]",
			"description": "Network IDs which should be attached to the Server private network interface at the creation time.",
			"routing": {
				"send": {
					"property": "networks",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Create Server"
					]
				}
			}
		},
		{
			"displayName": "Placement Group",
			"name": "placement_group",
			"type": "number",
			"default": 1,
			"description": "ID of the Placement Group the Server should be in.",
			"routing": {
				"send": {
					"property": "placement_group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Create Server"
					]
				}
			}
		},
		{
			"displayName": "Public Net",
			"name": "public_net",
			"type": "json",
			"default": "{\n  \"enable_ipv4\": true,\n  \"enable_ipv6\": true\n}",
			"description": "Public Network options.",
			"routing": {
				"send": {
					"property": "public_net",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Create Server"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Server Type",
			"name": "server_type",
			"type": "string",
			"default": "cpx22",
			"description": "ID or name of the Server type this Server should be created with.",
			"routing": {
				"send": {
					"property": "server_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Create Server"
					]
				}
			}
		},
		{
			"displayName": "SSH Keys",
			"name": "ssh_keys",
			"type": "json",
			"default": "[\n  \"my-ssh-key\"\n]",
			"description": "SSH key IDs (`integer`) or names (`string`) which should be injected into the Server at creation time.",
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
						"Servers"
					],
					"operation": [
						"Create Server"
					]
				}
			}
		},
		{
			"displayName": "Start After Create",
			"name": "start_after_create",
			"type": "boolean",
			"default": true,
			"description": "This automatically triggers a Power on a Server-Server Action after the creation is finished and is returned in the `next_actions` response object.",
			"routing": {
				"send": {
					"property": "start_after_create",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Create Server"
					]
				}
			}
		},
		{
			"displayName": "User Data",
			"name": "user_data",
			"type": "string",
			"default": "#cloud-config\nruncmd:\n- [touch, /root/cloud-init-worked]\n",
			"description": "Cloud-Init user data to use during Server creation. This field is limited to 32KiB.",
			"routing": {
				"send": {
					"property": "user_data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Create Server"
					]
				}
			}
		},
		{
			"displayName": "Volumes",
			"name": "volumes",
			"type": "json",
			"default": "[\n  123\n]",
			"description": "Volume IDs which should be attached to the Server at the creation time. Volumes must be in the same Location.",
			"routing": {
				"send": {
					"property": "volumes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Create Server"
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
						"Servers"
					],
					"operation": [
						"Create Server"
					]
				}
			}
		},
		{
			"displayName": "DELETE /servers/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Delete Server"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Delete Server"
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
						"Servers"
					],
					"operation": [
						"Delete Server"
					]
				}
			}
		},
		{
			"displayName": "GET /servers/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Get Server"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Get Server"
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
						"Servers"
					],
					"operation": [
						"Get Server"
					]
				}
			}
		},
		{
			"displayName": "PUT /servers/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Replace Server"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Replace Server"
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
						"Servers"
					],
					"operation": [
						"Replace Server"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "my-server",
			"description": "New name to set.",
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
						"Servers"
					],
					"operation": [
						"Replace Server"
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
						"Servers"
					],
					"operation": [
						"Replace Server"
					]
				}
			}
		},
		{
			"displayName": "GET /servers/{id}/actions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"List Actions For Server"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"List Actions For Server"
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
						"Servers"
					],
					"operation": [
						"List Actions For Server"
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
						"Servers"
					],
					"operation": [
						"List Actions For Server"
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
						"Servers"
					],
					"operation": [
						"List Actions For Server"
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
						"Servers"
					],
					"operation": [
						"List Actions For Server"
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
						"Servers"
					],
					"operation": [
						"List Actions For Server"
					]
				}
			}
		},
		{
			"displayName": "GET /servers/{id}/actions/{action_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Get Action For Server"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Get Action For Server"
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
						"Servers"
					],
					"operation": [
						"Get Action For Server"
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
						"Servers"
					],
					"operation": [
						"Get Action For Server"
					]
				}
			}
		},
		{
			"displayName": "POST /servers/{id}/actions/add_to_placement_group",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Add Server To Placement Group"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Add Server To Placement Group"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Placement Group",
			"name": "placement_group",
			"type": "number",
			"default": 1,
			"description": "ID of Placement Group the Server should be added to.",
			"routing": {
				"send": {
					"property": "placement_group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Add Server To Placement Group"
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
						"Servers"
					],
					"operation": [
						"Add Server To Placement Group"
					]
				}
			}
		},
		{
			"displayName": "POST /servers/{id}/actions/attach_iso",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Attach Iso To Server"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Attach Iso To Server"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Iso",
			"name": "iso",
			"type": "string",
			"default": "FreeBSD-11.0-RELEASE-amd64-dvd1",
			"description": "ID or name of ISO to attach to the Server as listed in GET `/isos`.",
			"routing": {
				"send": {
					"property": "iso",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Attach Iso To Server"
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
						"Servers"
					],
					"operation": [
						"Attach Iso To Server"
					]
				}
			}
		},
		{
			"displayName": "POST /servers/{id}/actions/attach_to_network",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Attach Server To Network"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Attach Server To Network"
					]
				}
			}
		},
		{
			"displayName": "Alias Ips",
			"name": "alias_ips",
			"type": "json",
			"default": "[\n  \"10.0.1.2\"\n]",
			"description": "Additional IPs to be assigned to this Server.",
			"routing": {
				"send": {
					"property": "alias_ips",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Attach Server To Network"
					]
				}
			}
		},
		{
			"displayName": "Ip",
			"name": "ip",
			"type": "string",
			"default": "10.0.1.1",
			"description": "IP to request to be assigned to this Server; if you do not provide this then you will be auto assigned an IP address.",
			"routing": {
				"send": {
					"property": "ip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Attach Server To Network"
					]
				}
			}
		},
		{
			"displayName": "Ip Range",
			"name": "ip_range",
			"type": "string",
			"default": "10.0.1.0/24",
			"description": "IP range in CIDR block notation of the subnet to attach to.\n\nThis allows for auto assigning an IP address for a specific subnet.\nProviding `ip` that is not part of `ip_range` will result in an error.\n",
			"routing": {
				"send": {
					"property": "ip_range",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Attach Server To Network"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Network",
			"name": "network",
			"type": "number",
			"default": 4711,
			"description": "ID of an existing network to attach the Server to.",
			"routing": {
				"send": {
					"property": "network",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Attach Server To Network"
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
						"Servers"
					],
					"operation": [
						"Attach Server To Network"
					]
				}
			}
		},
		{
			"displayName": "POST /servers/{id}/actions/change_alias_ips",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Change Alias Ips Of Network"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Change Alias Ips Of Network"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Alias Ips",
			"name": "alias_ips",
			"type": "json",
			"default": "[\n  \"10.0.1.2\"\n]",
			"description": "New alias IPs to set for this Server.",
			"routing": {
				"send": {
					"property": "alias_ips",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Change Alias Ips Of Network"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Network",
			"name": "network",
			"type": "number",
			"default": 4711,
			"description": "ID of an existing Network already attached to the Server.",
			"routing": {
				"send": {
					"property": "network",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Change Alias Ips Of Network"
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
						"Servers"
					],
					"operation": [
						"Change Alias Ips Of Network"
					]
				}
			}
		},
		{
			"displayName": "POST /servers/{id}/actions/change_dns_ptr",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Change Reverse DNS Entry For This Server"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Change Reverse DNS Entry For This Server"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "DNS Ptr",
			"name": "dns_ptr",
			"type": "string",
			"default": "server01.example.com",
			"description": "Hostname to set as a reverse DNS PTR entry, reset to original value if `null`.",
			"routing": {
				"send": {
					"property": "dns_ptr",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Change Reverse DNS Entry For This Server"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ip",
			"name": "ip",
			"type": "string",
			"default": "1.2.3.4",
			"description": "Primary IP address for which the reverse DNS entry should be set.",
			"routing": {
				"send": {
					"property": "ip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Change Reverse DNS Entry For This Server"
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
						"Servers"
					],
					"operation": [
						"Change Reverse DNS Entry For This Server"
					]
				}
			}
		},
		{
			"displayName": "POST /servers/{id}/actions/change_protection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Change Server Protection"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Change Server Protection"
					]
				}
			}
		},
		{
			"displayName": "Delete",
			"name": "delete",
			"type": "boolean",
			"default": true,
			"description": "If true, prevents the Server from being deleted (currently delete and rebuild attribute needs to have the same value).",
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
						"Servers"
					],
					"operation": [
						"Change Server Protection"
					]
				}
			}
		},
		{
			"displayName": "Rebuild",
			"name": "rebuild",
			"type": "boolean",
			"default": true,
			"description": "If true, prevents the Server from being rebuilt (currently delete and rebuild attribute needs to have the same value).",
			"routing": {
				"send": {
					"property": "rebuild",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Change Server Protection"
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
						"Servers"
					],
					"operation": [
						"Change Server Protection"
					]
				}
			}
		},
		{
			"displayName": "POST /servers/{id}/actions/change_type",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Change Type Of Server"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Change Type Of Server"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Server Type",
			"name": "server_type",
			"type": "string",
			"default": "cpx22",
			"description": "ID or name of Server type the Server should migrate to.",
			"routing": {
				"send": {
					"property": "server_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Change Type Of Server"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Upgrade Disk",
			"name": "upgrade_disk",
			"type": "boolean",
			"default": true,
			"description": "If false, do not upgrade the disk (this allows downgrading the Server type later).",
			"routing": {
				"send": {
					"property": "upgrade_disk",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Change Type Of Server"
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
						"Servers"
					],
					"operation": [
						"Change Type Of Server"
					]
				}
			}
		},
		{
			"displayName": "POST /servers/{id}/actions/create_image",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Create Image From Server"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Create Image From Server"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "my image",
			"description": "Description of the Image, will be auto-generated if not set.",
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
						"Servers"
					],
					"operation": [
						"Create Image From Server"
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
						"Servers"
					],
					"operation": [
						"Create Image From Server"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "snapshot",
			"description": "Type of Image to create.",
			"options": [
				{
					"name": "Backup",
					"value": "backup"
				},
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
						"Servers"
					],
					"operation": [
						"Create Image From Server"
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
						"Servers"
					],
					"operation": [
						"Create Image From Server"
					]
				}
			}
		},
		{
			"displayName": "POST /servers/{id}/actions/detach_from_network",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Detach Server From Network"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Detach Server From Network"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Network",
			"name": "network",
			"type": "number",
			"default": 4711,
			"description": "ID of an existing network to detach the Server from.",
			"routing": {
				"send": {
					"property": "network",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Detach Server From Network"
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
						"Servers"
					],
					"operation": [
						"Detach Server From Network"
					]
				}
			}
		},
		{
			"displayName": "POST /servers/{id}/actions/detach_iso",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Detach Iso From Server"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Detach Iso From Server"
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
						"Servers"
					],
					"operation": [
						"Detach Iso From Server"
					]
				}
			}
		},
		{
			"displayName": "POST /servers/{id}/actions/disable_backup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Disable Backups For Server"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Disable Backups For Server"
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
						"Servers"
					],
					"operation": [
						"Disable Backups For Server"
					]
				}
			}
		},
		{
			"displayName": "POST /servers/{id}/actions/disable_rescue",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Disable Rescue Mode For Server"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Disable Rescue Mode For Server"
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
						"Servers"
					],
					"operation": [
						"Disable Rescue Mode For Server"
					]
				}
			}
		},
		{
			"displayName": "POST /servers/{id}/actions/enable_backup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Enable And Configure Backups For Server"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Enable And Configure Backups For Server"
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
						"Servers"
					],
					"operation": [
						"Enable And Configure Backups For Server"
					]
				}
			}
		},
		{
			"displayName": "POST /servers/{id}/actions/enable_rescue",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Enable Rescue Mode For Server"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Enable Rescue Mode For Server"
					]
				}
			}
		},
		{
			"displayName": "SSH Keys",
			"name": "ssh_keys",
			"type": "json",
			"default": "[\n  2323\n]",
			"description": "Array of SSH key IDs which should be injected into the rescue system.",
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
						"Servers"
					],
					"operation": [
						"Enable Rescue Mode For Server"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "linux64",
			"description": "Type of rescue system to boot.",
			"options": [
				{
					"name": "Linux 64",
					"value": "linux64"
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
						"Servers"
					],
					"operation": [
						"Enable Rescue Mode For Server"
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
						"Servers"
					],
					"operation": [
						"Enable Rescue Mode For Server"
					]
				}
			}
		},
		{
			"displayName": "POST /servers/{id}/actions/poweroff",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Power Off Server"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Power Off Server"
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
						"Servers"
					],
					"operation": [
						"Power Off Server"
					]
				}
			}
		},
		{
			"displayName": "POST /servers/{id}/actions/poweron",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Power On Server"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Power On Server"
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
						"Servers"
					],
					"operation": [
						"Power On Server"
					]
				}
			}
		},
		{
			"displayName": "POST /servers/{id}/actions/reboot",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Soft Reboot Server"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Soft Reboot Server"
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
						"Servers"
					],
					"operation": [
						"Soft Reboot Server"
					]
				}
			}
		},
		{
			"displayName": "POST /servers/{id}/actions/rebuild",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Rebuild Server From Image"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Rebuild Server From Image"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Image",
			"name": "image",
			"type": "string",
			"default": "ubuntu-24.04",
			"description": "ID or name of Image to rebuilt from.",
			"routing": {
				"send": {
					"property": "image",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Rebuild Server From Image"
					]
				}
			}
		},
		{
			"displayName": "User Data",
			"name": "user_data",
			"type": "string",
			"default": "#cloud-config\nruncmd:\n- [touch, /root/cloud-init-worked]\n",
			"description": "Cloud-Init user data to use during Server rebuild. This field is limited to 32KiB. If not specified, the Server's previous user_data value will be re-used (if any was set).",
			"routing": {
				"send": {
					"property": "user_data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Rebuild Server From Image"
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
						"Servers"
					],
					"operation": [
						"Rebuild Server From Image"
					]
				}
			}
		},
		{
			"displayName": "POST /servers/{id}/actions/remove_from_placement_group",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Remove From Placement Group"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Remove From Placement Group"
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
						"Servers"
					],
					"operation": [
						"Remove From Placement Group"
					]
				}
			}
		},
		{
			"displayName": "POST /servers/{id}/actions/request_console",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Request Console For Server"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Request Console For Server"
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
						"Servers"
					],
					"operation": [
						"Request Console For Server"
					]
				}
			}
		},
		{
			"displayName": "POST /servers/{id}/actions/reset",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Reset Server"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Reset Server"
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
						"Servers"
					],
					"operation": [
						"Reset Server"
					]
				}
			}
		},
		{
			"displayName": "POST /servers/{id}/actions/reset_password",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Reset Root Password Of Server"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Reset Root Password Of Server"
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
						"Servers"
					],
					"operation": [
						"Reset Root Password Of Server"
					]
				}
			}
		},
		{
			"displayName": "POST /servers/{id}/actions/shutdown",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Shutdown Server"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Shutdown Server"
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
						"Servers"
					],
					"operation": [
						"Shutdown Server"
					]
				}
			}
		},
		{
			"displayName": "GET /servers/{id}/metrics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Get Metrics For Server"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the Server.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Get Metrics For Server"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "Type of metrics to get.",
			"default": "[\n  null\n]",
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
						"Servers"
					],
					"operation": [
						"Get Metrics For Server"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"required": true,
			"description": "Start of period to get Metrics for (must be in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "start",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Get Metrics For Server"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "end",
			"required": true,
			"description": "End of period to get Metrics for (must be in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "end",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Get Metrics For Server"
					]
				}
			}
		},
		{
			"displayName": "Step",
			"name": "step",
			"description": "Resolution of results in seconds.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "step",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Get Metrics For Server"
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
						"Servers"
					],
					"operation": [
						"Get Metrics For Server"
					]
				}
			}
		},
		{
			"displayName": "GET /servers/actions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"List Server Actions"
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
						"Servers"
					],
					"operation": [
						"List Server Actions"
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
						"Servers"
					],
					"operation": [
						"List Server Actions"
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
						"Servers"
					],
					"operation": [
						"List Server Actions"
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
						"Servers"
					],
					"operation": [
						"List Server Actions"
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
						"Servers"
					],
					"operation": [
						"List Server Actions"
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
						"Servers"
					],
					"operation": [
						"List Server Actions"
					]
				}
			}
		},
		{
			"displayName": "GET /servers/actions/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Servers"
					],
					"operation": [
						"Get Server Action"
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
						"Servers"
					],
					"operation": [
						"Get Server Action"
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
						"Servers"
					],
					"operation": [
						"Get Server Action"
					]
				}
			}
		},
];
