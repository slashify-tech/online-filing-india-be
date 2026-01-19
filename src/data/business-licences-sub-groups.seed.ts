/**
 * Sub-service groups mapping for business-licences-registration
 * These services are organized into sub-groups under the main business-licences-registration service
 */

import { SubServiceGroup } from '../types/sub-service-group.types';

export const businessLicencesSubGroups: SubServiceGroup[] = [
    {
        groupName: 'Trademark Services',
        groupSlug: 'trademark-services',
        description: 'Protect your brand name, logo & tagline with complete registration, objection handling and renewal support.',
        parentServiceSlug: 'business-licences-registration',
        serviceSlugs: [
            'trademark-registration',
            'trademark-objection',
            'trademark-renewal',
            'trademark-watch-services',
            'trademark-opposition',
            'trademark-hearing',
            'trademark-transfer-assignment',
            'trademark-rectification',
            'tm-infringement-notice',
            'trademark-search-report',
            'logo-designing',
            'copyright-registration',
            'patent-registration',
        ],
    },
    {
        groupName: 'FSSAI Services',
        groupSlug: 'fssai-services',
        description: 'Obtain Basic/State/Central licenses plus lab testing for legal food business operations nationwide.',
        parentServiceSlug: 'business-licences-registration',
        serviceSlugs: [
            'fssai-basic-registration',
            'fssai-state-licence',
            'fssai-central-licence',
            'eating-house-licence',
            'lab-test-reports',
            'health-trade-licence',
        ],
    },
    {
        groupName: 'Export & Import Services',
        groupSlug: 'export-import-services',
        description: 'Get IEC, AD Code, RCMC and customs clearance to start seamless international trade without delays.',
        parentServiceSlug: 'business-licences-registration',
        serviceSlugs: [
            'import-export-code',
            'ad-code-registration',
            'icegate-registration',
            'port-registration',
            'rcmc-registration',
            'iec-renewal',
            'certificate-of-origin',
            'freight-forwarding-services',
            'phytosanitary-services',
        ],
    },
    {
        groupName: 'NGO Registration',
        groupSlug: 'ngo-registration',
        description: 'Secure 12A, 80G, FCRA & CSR-1 approvals to unlock tax exemptions and government/corporate funding.',
        parentServiceSlug: 'business-licences-registration',
        serviceSlugs: [
            '12a-registration',
            '80g-registration',
            'ngo-darpan',
            'e-anudaan',
            'csr-registration',
            'csr-exchange-registration',
            'project-report',
            'fcra-registration',
            '12a-80g-renewal',
        ],
    },
];

/**
 * Get all service slugs for business-licences-registration
 */
export function getAllBusinessLicenceServiceSlugs(): string[] {
    return businessLicencesSubGroups.flatMap((group) => group.serviceSlugs);
}

/**
 * Get sub-group by slug
 */
export function getSubGroupBySlug(groupSlug: string): SubServiceGroup | undefined {
    return businessLicencesSubGroups.find((group) => group.groupSlug === groupSlug);
}

/**
 * Get sub-group for a specific service slug
 */
export function getSubGroupForService(serviceSlug: string): SubServiceGroup | undefined {
    return businessLicencesSubGroups.find((group) => group.serviceSlugs.includes(serviceSlug));
}

/**
 * Get all sub-groups for a parent service slug
 */
export function getSubGroupsByParentService(parentServiceSlug: string): SubServiceGroup[] {
    return businessLicencesSubGroups.filter((group) => group.parentServiceSlug === parentServiceSlug);
}
