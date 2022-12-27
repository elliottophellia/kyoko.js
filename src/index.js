import fetch from 'node-fetch';
const BASE_URL = `https://kyoko.rei.my.id/api/`;

export default class Kyoko {

    constructor() {
        this.BASE_URL = BASE_URL;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getWaifu(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getWaifu(result = 1) {
        const res = await fetch(`${BASE_URL}/sfw.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getNsfw(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getNsfw(result = 1) {
        const res = await fetch(`${BASE_URL}/nsfw.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getBlush(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getBlush(result = 1) {
        const res = await fetch(`${BASE_URL}/blush.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getBonk(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getBonk(result = 1) {
        const res = await fetch(`${BASE_URL}/bonk.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getHug(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getHug(result = 1) {
        const res = await fetch(`${BASE_URL}/hug.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getKiss(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getKiss(result = 1) {
        const res = await fetch(`${BASE_URL}/kiss.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getQuotes(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getQuote(result = 1) {
        const res = await fetch(`${BASE_URL}/quotes.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getSlap(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getSlap(result = 1) {
        const res = await fetch(`${BASE_URL}/slap.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getSmile(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getSmile(result = 1) {
        const res = await fetch(`${BASE_URL}/smile.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getSmug(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getSmug(result = 1) {
        const res = await fetch(`${BASE_URL}/smug.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getWave(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getWave(result = 1) {
        const res = await fetch(`${BASE_URL}/wave.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getWink(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getWink(result = 1) {
        const res = await fetch(`${BASE_URL}/wink.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }
}

export { Kyoko };