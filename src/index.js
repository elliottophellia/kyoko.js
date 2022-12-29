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

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getAwoo(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getAwoo(result = 1) {
        const res = await fetch(`${BASE_URL}/awoo.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getBite(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getBite(result = 1) {
        const res = await fetch(`${BASE_URL}/bite.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getBully(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getBully(result = 1) {
        const res = await fetch(`${BASE_URL}/bully.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getCry(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getCry(result = 1) {
        const res = await fetch(`${BASE_URL}/cry.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getCuddle(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getCuddle(result = 1) {
        const res = await fetch(`${BASE_URL}/cuddle.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getDance(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getDance(result = 1) {
        const res = await fetch(`${BASE_URL}/dance.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getGlomp(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getGlomp(result = 1) {
        const res = await fetch(`${BASE_URL}/glomp.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getHandhold(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getHandhold(result = 1) {
        const res = await fetch(`${BASE_URL}/handhold.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getHappy(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getHappy(result = 1) {
        const res = await fetch(`${BASE_URL}/happy.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getHighfive(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getHighfive(result = 1) {
        const res = await fetch(`${BASE_URL}/highfive.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getKick(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getKick(result = 1) {
        const res = await fetch(`${BASE_URL}/kick.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getKill(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getKill(result = 1) {
        const res = await fetch(`${BASE_URL}/kill.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getLick(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getLick(result = 1) {
        const res = await fetch(`${BASE_URL}/lick.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getMAL('Yuru Yuri').then(res => console.log(res)).catch(err => console.log(err));
     */

    async getMAL(result) {
        const res = await fetch(`${BASE_URL}/myanimelist.php?q=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getTrace('https://i.ibb.co/981SG4x/yuru-yuri.png').then(res => console.log(res)).catch(err => console.log(err));
     */

    async getTrace(result) {
        const res = await fetch(`${BASE_URL}/trace.php?q=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getNom(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getNom(result = 1) {
        const res = await fetch(`${BASE_URL}/nom.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getPat(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getPat(result = 1) {
        const res = await fetch(`${BASE_URL}/pat.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getPoke(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getPoke(result = 1) {
        const res = await fetch(`${BASE_URL}/poke.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getNeko(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getNeko(result = 1) {
        const res = await fetch(`${BASE_URL}/sfwNeko.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getRandomAnime(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getRandomAnime(result = 1) {
        const res = await fetch(`${BASE_URL}/random.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getYeet(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getYeet(result = 1) {
        const res = await fetch(`${BASE_URL}/yeet.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getNsfw(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getNsfwWaifu(result = 1) {
        const res = await fetch(`${BASE_URL}/nsfw.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getNsfwTrap(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getNsfwTrap(result = 1) {
        const res = await fetch(`${BASE_URL}/trap.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }

    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getNsfwBlowjob(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getNsfwBlowjob(result = 1) {
        const res = await fetch(`${BASE_URL}/blowjob.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }
    
    /**
     * @param {Number} result
     * @returns {Promise<String>} 
     * @example kyoko.getNsfwNeko(5).then(res => console.log(res)).catch(err => console.log(err));
     */

    async getNsfwNeko(result = 1) {
        const res = await fetch(`${BASE_URL}/nsfwNeko.php?result=${result}`);
        const json = await res.json();
        return json.apiResult;
    }
}

export { Kyoko };