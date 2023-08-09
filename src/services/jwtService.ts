// cspell:ignore keycloak hasurauser, hasura
import axios, { AxiosError } from "axios";
import { APIResponse } from "../types";

export const ObtainJWT = async (): Promise<APIResponse> => {
    try {
        const KeycloakURL = "http://localhost:8081/auth/realms/master/protocol/openid-connect/token";
        const { data } = await axios<APIResponse>({
            method: "post",
            url: KeycloakURL,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            data: {
                username: "hasurauser",
                password: 1234,
                grant_type: "password",
                client_id: "hasura",
            },
        });
        return data;
    } catch (err) {
        const error = err as AxiosError;
        throw error.cause;
    }
};
