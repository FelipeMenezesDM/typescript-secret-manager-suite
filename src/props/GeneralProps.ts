interface IGeneralProps {
    suite: string;
    accountId: string;
    projectId: string;
    region: string;
    endPoint: string;
}

const GeneralProps : IGeneralProps = {
    suite: process.env.APP_SUITE || 'default',
    accountId: process.env.AWS_ACCOUNT_ID || '',
    projectId: process.env.GCP_PROJECT_ID || '',
    region: process.env.AWS_DEFAULT_REGION || 'us-east-1',
    endPoint: process.env.AWS_ENDPOINT || ''
}

export default GeneralProps;
