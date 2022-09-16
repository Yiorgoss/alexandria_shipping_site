export interface IFrameType {
    title: string;
    yturl: string;
}
export interface linkType {
    title: string;
    path: string;
}

export  interface shipImageStyle {
    name: string;
    style: React.CSSProperties;
}
export interface shipType {
    name: string;
    type: string;
    year: number;
    flag: string;
    dwt: number;
    iframe?: IFrameType;
    images: shipImageStyle[];
    
}

export interface bannerType {
    image?: string;
    style?: React.CSSProperties;
}

export interface statementType {
    title: string;
    text: string;
    banner?: bannerType;
}

export interface serviceType {
    title: string;
    text: string;
    banner?: bannerType;
}

export interface serviceListType {
    [key: string]: serviceType;
}

export interface statementListType {
    [key: string]: statementType;
}
