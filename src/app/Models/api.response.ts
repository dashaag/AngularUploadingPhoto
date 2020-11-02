export class ApiResponse {
    isSuccessFull: boolean;
    message: string;
}

export class ApiCollectionResponse extends ApiResponse {
    result: Array<any>
}

export class ApiSingleResponse extends ApiResponse {
    result: any
}

export class ApiLoginResponse extends ApiResponse{
    token: string;
}