import { AppiumDriver, createDriver } from "nativescript-dev-appium";
import { Screen, driverDefaultWaitTime } from "./screen"
import {
    roots,
    modalFrameBackground,
    testSecondPageBackground,
    testSecondPageClose,
    testNestedModalFrameBackground,
    testNestedModalPageBackground,
    testDialogBackground
} from "./shared.e2e-spec"

describe("modal-layout:", () => {

    let driver: AppiumDriver;
    let screen: Screen;

    before(async () => {
        driver = await createDriver();
        driver.defaultWaitTime = driverDefaultWaitTime;
        screen = new Screen(driver);
    });

    roots.forEach(root => {
        describe(`${root} modal layout background scenarios:`, () => {

            before(async () => {
                if (driver.isAndroid) {
                    await driver.resetApp();
                }
                await screen[root]();
            });

            beforeEach(async function () {
                await screen.loadModalLayout();
            });

            afterEach(async function () {
                if (this.currentTest.state === "failed") {
                    await driver.logTestArtifacts(this.currentTest.title);
                    await driver.resetApp();
                    await screen[root]();
                }
            });

            after(async () => {
                await screen.closeModal();
                await screen.loadedHome();
            });

            it("should show dialog confirm, run in background", async () => {
                await testDialogBackground(driver, screen);
            });

            it("should run modal layout in background", async () => {
                await modalFrameBackground(driver, screen);
            });

            it("should navigate to second page, run in background, go back", async () => {
                await testSecondPageBackground(driver, screen);
            });

            it("should show nested modal page with frame, run in background, close", async () => {
                await testNestedModalFrameBackground(driver, screen);
            });

            it("should show nested modal page, run in background, close", async () => {
                await testNestedModalPageBackground(driver, screen);
            });

            it("should navigate to second page, close", async () => {
                await testSecondPageClose(driver, screen);
            });

            it("should navigate to second page, run in background, go back", async () => {
                await testSecondPageBackground(driver, screen);
            });
        });
    });
});
