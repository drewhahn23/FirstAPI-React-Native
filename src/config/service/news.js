// import { articles_url, _api_key, category, country_code } from '../src/config/rest_config';
export const articles_url = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7927fc5067b44eada1b68089c616edf8';
export const country_code = 'US';
export const category = 'business';
export const _api_key = '7927fc5067b44eada1b68089c616edf8';

export async function getArticles(){

    try {
        let articles = await fetch(`${articles_url}?country=${country_code}&category=${category}`, {
            headers: {
                'X-API-Key': _api_key
            }
        });

        let result = await articles.json();
        articles = null;

        return result.articles;
    }
    catch(error){
        throw error;
    }

}