// cspell:ignore keycloak hasurauser, hasura
import axios, { AxiosError } from "axios";
import { APIResponse, PostParameters } from "../types";

export const ObtainJWT = async (Parameters: PostParameters): Promise<APIResponse> => {
    try {
        const KeycloakURL = process.env.KEYCLOAK_URL;
        const { data } = await axios<APIResponse>({
            method: "post",
            url: KeycloakURL,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            data: {
                username: Parameters.user,
                password: Parameters.password,
                client_id: Parameters.client,
                grant_type: "password",
            },
        });
        return data;
    } catch (err) {
        const error = err as AxiosError;
        throw new Error(error.code);
    }
};
