import { AppiumDriver } from "nativescript-dev-appium";
import { assert } from "chai";

const layoutWithFrame = "Layout w/ frame";
const layoutWithMultiFrame = "Layout w/ multi frame";
const pageWithFrame = "Page w/ frame";
const pageWithMultiFrame = "Page w/ multi frame";
const pageTabTopWithFrames = "Page w/ tabs (top)";
const pageTabBottomWithFrames = "Page w/ tabs (bottom)";
const tabTopRootWithFrames = "Root tabs (top)";
const tabBottomRootWithFrames = "Root tabs (bottom)";
const layoutHome = "layout home page";
const layoutHomeSecondary = "layout home secondary page";
const frameHome = "frame home page";
const frameHomeSecondary = "multi frame home page";
const tabTopHome = "tab top page";
const tabBottomHome = "tab bottom page";
const tabRootTopHome = "tab root top home";
const tabRootBottomHome = "tab root bottom home";
const navigateToSomePageDefault = "navigate to some page (default transition)";
const navigateToSomePageNone = "navigate to some page (no transition)";
const navigateToSomePageSlide = "navigate to some page (slide transition)";
const navigateToSomePageFlip = "navigate to some page (flip transition)";
const navigateToOtherPageDefault = "navigate to other page (default transition)";
const navigateToOtherPageNone = "navigate to other page (no transition)";
const navigateToOtherPageSlide = "navigate to other page (slide transition)";
const navigateToOtherPageFlip = "navigate to other page (flip transition)";
const players = "Players";
const teams = "Teams";
const playerBack = "playerBack";
const somePageBack = "somePageBack";
const otherPageBack = "otherPageBack";
const teamBack = "teamBack";
const frameHomeBack = "frameHomeBack";
const tabTopBack = "tabTopBack";
const tabBottomBack = "tabBottomBack";
const resetApp = "reset app";

export const driverDefaultWaitTime = 10000;
export const home = "Home";
export const somePage = "some page";
export const otherPage = "other page";

export const playersData = {
    playerOneDefault: {
        name: "Player One (default transition)",
        description: "Goalkeeper",
        transition: "default"
    },
    playerTwoDefault: {
        name: "Player Two (default transition)",
        description: "Defender",
        transition: "default"
    },
    playerOneNone: {
        name: "Player One (no transition)",
        description: "Goalkeeper",
        transition: "none"
    },
    playerTwoNone: {
        name: "Player Two (no transition)",
        description: "Defender",
        transition: "none"
    },
    playerOneSlide: {
        name: "Player One (slide transition)",
        description: "Goalkeeper",
        transition: "slide"
    },
    playerTwoSlide: {
        name: "Player Two (slide transition)",
        description: "Defender",
        transition: "slide"
    },
    playerOneFlip: {
        name: "Player One (flip transition)",
        description: "Goalkeeper",
        transition: "flip"
    },
    playerTwoFlip: {
        name: "Player Two (flip transition)",
        description: "Defender",
        transition: "flip"
    }
}

export const teamsData = {
    teamOneDefault: {
        name: "Team One (default transition)",
        description: "u17",
        transition: "default"
    },
    teamTwoDefault: {
        name: "Team Two (default transition)",
        description: "u21",
        transition: "default"
    },
    teamOneNone: {
        name: "Team One (no transition)",
        description: "u17",
        transition: "none"
    },
    teamTwoNone: {
        name: "Team Two (no transition)",
        description: "u21",
        transition: "none"
    },
    teamOneSlide: {
        name: "Team One (slide transition)",
        description: "u17",
        transition: "slide"
    },
    teamTwoSlide: {
        name: "Team Two (slide transition)",
        description: "u21",
        transition: "slide"
    },
    teamOneFlip: {
        name: "Team One (flip transition)",
        description: "u17",
        transition: "flip"
    },
    teamTwoFlip: {
        name: "Team Two (flip transition)",
        description: "u21",
        transition: "flip"
    },
}
export interface Item {
    name: string;
    description: string;
}

export class Screen {

    private _driver: AppiumDriver

    public currentAnimation: string;

    constructor(driver: AppiumDriver) {
        this._driver = driver;
    }

    navigateToLayoutWithFrame = async () => {
        await this.navigateToPage(layoutWithFrame);
    };

    navigateToLayoutWithMultiFrame = async () => {
        await this.navigateToPage(layoutWithMultiFrame);
    }

    navigateToPageWithFrame = async () => {
        await this.navigateToPage(pageWithFrame);
    }

    navigateToPageWithMultiFrame = async () => {
        await this.navigateToPage(pageWithMultiFrame);
    }

    navigateToPageTabTopWithFrames = async () => {
        await this.navigateToPage(pageTabTopWithFrames);
    }

    navigateToPageTabBottomWithFrames = async () => {
        await this.navigateToPage(pageTabBottomWithFrames);
    }

    navigateToTabTopRootWithFrames = async () => {
        await this.navigateToPage(tabTopRootWithFrames);
    }

    navigateToTabBottomRootWithFrames = async () => {
        await this.navigateToPage(tabBottomRootWithFrames);
    }

    navigateToSomePageDefault = async () => {
        await this.navigateToPage(navigateToSomePageDefault);
    };

    navigateToSomePageNone = async () => {
        await this.navigateToPage(navigateToSomePageNone);
    };

    navigateToSomePageSlide = async () => {
        await this.navigateToPage(navigateToSomePageSlide);
    };

    navigateToSomePageFlip = async () => {
        await this.navigateToPage(navigateToSomePageFlip);
    };

    navigateToOtherPageDefault = async () => {
        await this.navigateToPage(navigateToOtherPageDefault);
    }

    navigateToOtherPageNone = async () => {
        await this.navigateToPage(navigateToOtherPageNone);
    }

    navigateToOtherPageSlide = async () => {
        await this.navigateToPage(navigateToOtherPageSlide);
    }

    navigateToOtherPageFlip = async () => {
        await this.navigateToPage(navigateToOtherPageFlip);
    }

    navigateToPlayerDetails = async (player: Item) => {
        await this.navigateToItem(player);
    };

    navigateToTeamDetails = async (team: Item) => {
        await this.navigateToItem(team);
    };

    resetToHome = async () => {
        const btnReset = await this._driver.waitForElement(resetApp);
        await btnReset.tap();
    };

    goBackToPlayersList = async () => {
        await this.goBack(playerBack);
    };

    goBackToTeamsList = async () => {
        await this.goBack(teamBack);
    };

    goBackFromSomePage = async () => {
        await this.goBack(somePageBack);
    }

    goBackFromOtherPage = async () => {
        await this.goBack(otherPageBack);
    }

    goBackFromFrameHome = async () => {
        await this.goBack(frameHomeBack);
    }

    goBackFromTabTopPage = async () => {
        await this.goBack(tabTopBack);
    }

    goBackFromTabBottomPage = async () => {
        await this.goBack(tabBottomBack);
    }

    togglePlayersTab = async () => {
        const lblPlayers = await this._driver.waitForElement(players);
        await lblPlayers.tap();
    }

    toggleTeamsTab = async () => {
        const lblTeams = await this._driver.waitForElement(teams);
        await lblTeams.tap();
    }

    loadedHome = async () => {
        const lblHome = await this._driver.waitForElement(home);
        assert.isNotNull(lblHome);
        console.log(home + " loaded!");
    };

    loadedLayoutWithFrame = async () => {
        await this.loadedPage(layoutHome);
    };

    loadedLayoutWithMultiFrame = async () => {
        await this.loadedPage(layoutHome);
        await this.loadedPage(layoutHomeSecondary);
    };

    loadedPageWithFrame = async () => {
        await this.loadedPage(frameHome);
    }

    loadedPageWithMultiFrame = async () => {
        await this.loadedPage(frameHomeSecondary);
    }

    loadedPageTabTopWithFrames = async () => {
        await this.loadedPage(tabTopHome);
    }

    loadedPageTabBottomWithFrames = async () => {
        await this.loadedPage(tabBottomHome);
    }

    loadedTabTopRootWithFrames = async () => {
        await this.loadedPage(tabRootTopHome);
    }

    loadedTabBottomRootWithFrames = async () => {
        await this.loadedPage(tabRootBottomHome);
    } 

    loadedSomePage = async () => {
        await this.loadedPage(somePage);
    }

    loadedOtherPage = async () => {
        await this.loadedPage(otherPage);
    }

    loadedPlayersList = async () => {
        const lblPlayerOne = await this._driver.waitForElement(playersData["playerOneDefault"].name);
        assert.isNotNull(lblPlayerOne);
        console.log(players + " loaded!");
    }

    loadedPlayerDetails = async (player: Item) => {
        await this.loadedItem(player);
    }

    loadedTeamsList = async () => {
        const lblTeamOne = await this._driver.waitForElement(teamsData["teamOneDefault"].name);
        assert.isNotNull(lblTeamOne);
        console.log(teams + " loaded!");
    }

    loadedTeamDetails = async (team: Item) => {
        await this.loadedItem(team);
    }

    private navigateToPage = async (page: string) => {
        const btnPage = await this._driver.waitForElement(page);
        await btnPage.tap();
    };

    private loadedPage = async (page: string) => {
        const lblPage = await this._driver.waitForElement(page);
        assert.isNotNull(lblPage);
        console.log(page + " loaded!");
    };

    private navigateToItem = async (item: Item) => {
        const lblItem = await this._driver.waitForElement(item.name);
        await lblItem.tap();
    }

    private loadedItem = async (item: Item) => {
        const lblItemName = await this._driver.waitForElement(item.name);
        assert.isNotNull(lblItemName);

        const lblItemDescription = await this._driver.waitForElement(item.description);
        assert.isNotNull(lblItemDescription);

        console.log(item.name + " loaded!");
    }

    private goBack = async (accessibilityId: string) => {
        const btnBack = await this._driver.waitForElement(accessibilityId);
        await btnBack.tap();
    }
}