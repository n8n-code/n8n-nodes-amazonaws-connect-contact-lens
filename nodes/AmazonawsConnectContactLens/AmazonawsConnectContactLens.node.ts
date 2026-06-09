import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class AmazonawsConnectContactLens implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Amazonaws Connect Contact Lens',
		name: 'N8nDevAmazonawsConnectContactLens',
		icon: { light: 'file:./amazonaws-connect-contact-lens.png', dark: 'file:./amazonaws-connect-contact-lens.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Contact Lens analyzes customer-agent conversations via speech transcription, NLP, and intelligent search.',
		defaults: { name: 'Amazonaws Connect Contact Lens' },
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
