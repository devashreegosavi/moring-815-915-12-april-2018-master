
export class Codes {
    admin_district: string;
    admin_county: string;
    admin_ward: string;
    parish: string;
    parliamentary_constituency: string;
    ccg: string;
    nuts: string;
}

export class Result {
    postcode: string;
    quality: number;
    eastings: number;
    northings: number;
    country: string;
    nhs_ha: string;
    longitude: number;
    latitude: number;
    european_electoral_region: string;
    primary_care_trust: string;
    region: string;
    lsoa: string;
    msoa: string;
    incode: string;
    outcode: string;
    parliamentary_constituency: string;
    admin_district: string;
    parish: string;
    admin_county?: any;
    admin_ward: string;
    ccg: string;
    nuts: string;
    codes: Codes;
}

export class PostCode {
    status: number;
    result: Result;
}


