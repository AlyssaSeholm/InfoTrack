
export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    selectedTheme?: string;
    createdOn: Date;
    lastModifiedOn: Date;
    msg?: string;
  }
  