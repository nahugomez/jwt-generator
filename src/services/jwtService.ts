// cspell:ignore keycloak
import axios from "axios";
import { APIResponse, APIError } from "../types";

export const ObtainJWT = async (): Promise<APIResponse | APIError> => {
    try {
        const KeycloakURL = "http://localhost:8081/auth/realms/master/protocol/openid-connect/token";
        const { data } = await axios.post<APIResponse>(KeycloakURL);
        return data as APIResponse;
    } catch (error) {
        return {
            message: error.message,
            status: error.response.status,
        };
    }
};
