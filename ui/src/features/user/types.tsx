
export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    createdOn: Date;
    lastModifiedOn: Date;
    msg?: string;

    avatarImg?: string;
    role?: string;
    selectedTheme?: string;
    city?: string;
    state?: string;
    about?: string;
    language?: string;
    timezone?: string;
  }
  