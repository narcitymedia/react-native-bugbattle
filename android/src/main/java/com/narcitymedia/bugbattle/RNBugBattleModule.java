package com.narcitymedia.bugbattle;

import android.app.Activity;
import android.util.Log;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

import bugbattle.io.bugbattle.BugBattle;
import bugbattle.io.bugbattle.controller.BugBattleActivationMethod;
import bugbattle.io.bugbattle.controller.BugBattleNotInitialisedException;

public class RNBugBattleModule extends ReactContextBaseJavaModule {

    private static String NATIVE_MODULE_NAME = "RNBugBattle";

    public RNBugBattleModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return RNBugBattleModule.NATIVE_MODULE_NAME;
    }

    @ReactMethod
    public void initialise(String apiKey, String activationMethod) {
        Activity currentActivity = this.getCurrentActivity();

        if (currentActivity != null) {
            BugBattle.initialise(
                apiKey,
                BugBattleActivationMethod.valueOf(activationMethod),
                currentActivity.getApplication()
            );
        }

        else {
            Log.e(
                this.getName(),
                "Unable to retrieve current Application to initialise BugBattle"
            );
        }
    }

    @ReactMethod
    public void startBugReporting(Promise promise) throws BugBattleNotInitialisedException {
        BugBattle.startBugReporting();
    }

    @ReactMethod
    public void setAppBarColor(String hexColor) {
        BugBattle.setAppBarColor(hexColor);
    }

    @ReactMethod
    public void setUserEmail(String email) {
        BugBattle.setUserEmail(email);
    }

    @ReactMethod
    public void attachCustomData(ReadableMap data) {
        try {
            BugBattle.attachCustomData(JSONUtils.convertMapToJson(data));
        }

        catch (Exception e) {
            Log.e(
                this.getName(),
                String.format("Unable to parse custom data - %s", e.getMessage())
            );
        }
    }

    @ReactMethod
    public void trackStep(String type, String data) {
        BugBattle.trackStep(type, data);
    }
}
