import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class HcloudApi implements ICredentialType {
	name = 'N8nDevHcloudApi';

	displayName = 'hcloud API';

	icon: Icon = { light: 'file:../nodes/Hcloud/hcloud.svg', dark: 'file:../nodes/Hcloud/hcloud.dark.svg' };

	documentationUrl = '';

	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'url',
			type: 'string',
			default: 'https://api.hetzner.cloud/v1',
			required: true,
			placeholder: 'https://api.hetzner.cloud/v1',
			description: 'The base URL of your hcloud API server',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.url}}',
			url: '/',
			method: 'GET',
		},
	};
}
