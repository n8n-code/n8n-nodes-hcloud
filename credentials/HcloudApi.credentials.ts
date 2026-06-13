import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class HcloudApi implements ICredentialType {
        name = 'N8nDevHcloudApi';

        displayName = 'Hcloud API';

        icon: Icon = { light: 'file:../nodes/Hcloud/hcloud.png', dark: 'file:../nodes/Hcloud/hcloud.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.hetzner.cloud/v1',
                        required: true,
                        placeholder: 'https://api.hetzner.cloud/v1',
                        description: 'The base URL of your Hcloud API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
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


}
