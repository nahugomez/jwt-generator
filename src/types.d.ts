export interface Token {
    expires_in: number;
    refresh_expires_in: number;
    access_token: string;
    refresh_token: string;
    token_type: string;
    session_date: string;
    scope: string;
}

export interface APIResponse {
    data: Token;
    status: number;
}

export interface APIError {
    message: string;
    status: number;
}
