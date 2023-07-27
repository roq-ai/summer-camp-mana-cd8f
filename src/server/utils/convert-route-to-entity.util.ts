const mapping: Record<string, string> = {
  attendances: 'attendance',
  camps: 'camp',
  registrations: 'registration',
  staff: 'staff',
  'time-reports': 'time_report',
  transportation: 'transportation',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
