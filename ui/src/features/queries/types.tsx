
export interface Query {
    id: string;
    userId?: string;
    myCompanyId?: string;
    competitorCompanyId: string;
    searchEngineId: string;
    msg: string;
    includeTerms: string;
    excludeTerms: string;
    createdOn: Date;
  }
  