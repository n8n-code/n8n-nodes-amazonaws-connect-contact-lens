import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class AmazonawsConnectContactLens implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'amazonaws-connect-contact-lens',
		name: 'N8nDevAmazonawsConnectContactLens',
		icon: { light: 'file:./amazonaws-connect-contact-lens.png', dark: 'file:./amazonaws-connect-contact-lens.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Contact Lens for Amazon Connect enables you to analyze conversations between customer and agents, by using speech transcription, natural language processing, and intelligent search capabilities...',
		defaults: { name: 'amazonaws-connect-contact-lens' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAmazonawsConnectContactLensApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...defaultDescription
		],
	};
}
