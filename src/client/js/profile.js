import { Btn, BtnActive } from "./btn";

// CLASS

class Profile {
    constructor() {
        this.jsSearch = document.querySelector("#jsSearch");
        this.jsSearchProfile = this.jsSearch ? this.jsSearch.querySelector("#jsSearchProfile") : null;
        this.jsSearchFriends = this.jsSearch ? this.jsSearch.querySelector("#jsSearchFriends") : null;
        
        this.jsSearchBox = this.jsSearch ? this.jsSearch.querySelector("#jsSearchBox") : null;
        this.jsSearchBoxInput = this.jsSearchBox ? this.jsSearchBox.querySelector("#jsSearchBoxInput") : null;
        this.jsSearchBoxBtn = this.jsSearchBox ? this.jsSearchBox.querySelector("#jsSearchBoxBtn") : null;
        
        this.jsSearchResult = this.jsSearch.querySelector("#jsSearchResult");
        this.jsSearchResultContainer = this.jsSearchResult ? this.jsSearchResult.querySelector("#jsSearchResultContainer") : null;
        this.jsSearchResultContainerCard = this.jsSearchResultContainer ? this.jsSearchResultContainer.querySelectorAll("search-result__card") : null;

        if (this.jsSearchProfile) {
            // Btn Styling
            new Btn(this.jsSearchProfile);
            new Btn(this.jsSearchFriends);
            new Btn(this.jsSearchBox);
            new Btn(this.jsSearchBoxInput);
            
            // BtnActive Styling
            new BtnActive(this.jsSearchBoxBtn);
            this.jsSearchResultContainerCard.forEach(card => {
                new BtnActive(card);
            })
        }   
    }
}

new Profile();