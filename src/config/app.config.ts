interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Camp Manager'],
  customerRoles: ['Parent'],
  tenantRoles: ['Camp Manager', 'Transportation Coordinator', 'Group Manager', 'Staff Recruiter'],
  tenantName: 'Camp',
  applicationName: 'Summer camp Management',
  addOns: ['chat', 'notifications', 'file'],
};
