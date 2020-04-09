
declare module "react-native-bugbattle" {
    interface BugBattleActivationMethodStatic {
        /**
        * When using this activation method, you will need to call `startBugReporting()` yourself.
        */
        NONE: "NONE";

        /**
         * When using this method, BugBattle will listen for shake gesture and trigger the
         * bug reporting UI automatically. You can still call `startBugReporting()` manually.
         */
        SHAKE: "SHAKE";
    }

    interface BugBattleStatic {
        /**
         * Initialises the BugBattle SDK with the provided options.
         * @param {string} apiKey The BugBattle API key, can be found on the online dashboard.
         * @param {string} activationMethod The activation method to use, can be either `NONE` or `SHAKE`. 
         */
        initialise(apiKey: string, activationMethod: "NONE" | "SHAKE"): void;

        /**
         * Manually starts the bug reporting flow.
         */
        startBugReporting(): void;

        /**
         * Sets the primary color for the BugBattle UI.
         * @param {string} hexColor The primary color to use, in #AAAAAA format.
         */
        setAppBarColor(hexColor: string): void;

        /**
         * Sets the current user email. Used to auto fill the `email` field in the BugBattle UI.
         * @param {string} email The current user email
         */
        setUserEmail(email: string): void;

        /**
         * Attaches custom data to the current bug report, will show up in the BugBattle dashboar along with the report.
         * @param {object} data The custom data.
         */
        attachCustomData(data: Record<string, any>): void;

        /**
         * Records a step. All the tracked steps will show up in the BugBattle dashboard as "Steps to Reproduce".
         * @param {string} type The name of the step to track.
         * @param {string} data The custom data to use for this step.
         */
        trackStep(type: string, data: string): void;
    }

    export const BugBattleActivationMethod: BugBattleActivationMethodStatic;

    const BugBattle: BugBattleStatic;
    export default BugBattle;
}