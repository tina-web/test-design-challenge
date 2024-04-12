import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get cookiesAcceptBtn (){
        return  $('button.coi-banner__accept')
    }
    public get navInspiration () {
        return $('button*=Inspiration')
    }
    public get navBrands () {
        return $('a=Brands')
    }
    public get loadMoreBtn () {
        return $('div*=Indlæs flere')
    }
    public get followers () {
        return $('p*=følgere')
    }

    public category (category: string) {
        return $(`button=${category}`)
    }
    public brandTitle (brand: string) {
        return $(`h2=${brand}`)
    }

    public async selectBrandTitle (brand: string) {
       const brandCard = await this.brandTitle(brand).parentElement()
       return await brandCard.click()
    }

    public async getFollowersCount () {
        console.log(await this.brandTitle)
        console.log(await this.followers)
        const followersText = await this.followers.getText()
        console.log("followersText:", await followersText)
        return await followersText.replace("følgere", "").trim()
     }

    public open () {
        return super.open('');
    }
}

export default new HomePage();