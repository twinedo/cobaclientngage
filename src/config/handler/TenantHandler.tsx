import { HandlerAPI } from '../service/HandlerAPI';

interface TenantInfoParams {
    id: string;
}

export const GetTenantInfo = async (id: string) => {
    try {
        const response = await HandlerAPI(
            'https://console.videoapi.liveprod.cloud/api/videoapi/VideoAPI/GetTenant',
            'post',
            { id }
        );
        console.log('response get Tenant', response);
    } catch (error) {
        console.log('error get tenant');
    }
};
