import { NativeModules } from "react-native";
const { RNBugBattle } = NativeModules;

export const BugBattleActivationMethod = {
    NONE: "NONE",
    SHAKE: "SHAKE"
}

const BugBattle = {
    /**
     * Initialises the BugBattle SDK with the provided options.
     * @param {string} apiKey The BugBattle API key, can be found on the online dashboard.
     * @param {string} activationMethod The activation method to use, can be either `NONE` or `SHAKE`. 
     */
    initialise: function(apiKey, activationMethod) {
        RNBugBattle.initialise(apiKey, activationMethod);
    },

    /**
     * Manually starts the bug reporting flow.
     */
    startBugReporting: function() {
        RNBugBattle.startBugReporting();
    },

    /**
     * Sets the primary color for the BugBattle UI.
     * @param {string} hexColor The primary color to use, in #AAAAAA format.
     */
    setAppBarColor: function(hexColor) {
        RNBugBattle.setAppBarColor(hexColor);
    },

    /**
     * Sets the current user email. Used to auto fill the `email` field in the BugBattle UI.
     * @param {string} email The current user email
     */
    setUserEmail: function(email) {
        RNBugBattle.setUserEmail(email);
    },

    /**
     * Attaches custom data to the current bug report, will show up in the BugBattle dashboar along with the report.
     * @param {object} data The custom data.
     */
    attachCustomData: function(data) {
        RNBugBattle.attachCustomData(data);
    },

    /**
     * Records a step. All the tracked steps will show up in the BugBattle dashboard as "Steps to Reproduce".
     * @param {string} type The name of the step to track.
     * @param {string} data The custom data to use for this step.
     */
    trackStep: function(type, data) {
        RNBugBattle.trackStep(type, data);
    }
}

export default BugBattle;