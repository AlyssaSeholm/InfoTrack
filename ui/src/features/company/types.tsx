
export interface Company {
    id: string;
    primaryCompanyId?: string;
    relationshipType?: string;
    name: string;
    baseUrl: string;
    msg: string;
    includeTerms: string[];
    createdOn: Date;
    dateRemoved?: Date;

    icon?: string;
  }
