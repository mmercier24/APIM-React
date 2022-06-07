import * as Constants from '../constants';

export async function getCharities(searchTerm = '') {

    try {
        const response = await fetch(Constants.API_URL + '?searchTerm=' + searchTerm, {
            method: "GET",
            headers: {
                "Ocp-Apim-Subscription-Key": Constants.API_Key
            }
        });
        return await response.json();
    } catch (error) {
        return [];
    }
}