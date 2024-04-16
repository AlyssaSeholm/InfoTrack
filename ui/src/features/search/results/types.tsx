
export interface SearchResults {
    id: string;
    queryId: string;
    highestRank: number;
    top100Count: number;
    resultTypeCode: string;
    searchedOn: Date;
    msg: string;
    items: ResultItem[];
  }

export interface ResultItem {
    id: string;
    searchResultsId: string;
    url: string;
    resultTypeName: string;
    tags?: string[];
    msg: string;
    resultRank: number;
    breadCrumbs: ResultsBreadCrumbs;
}
  
export interface ResultsBreadCrumbs {
    text?: string;
    link?: string;
}