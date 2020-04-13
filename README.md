![BugBattle logo](https://www.bugbattle.io/static/bb-logo-b72b747af3869800cc360db793f6fc68.png)

# React Native BugBattle
React Native wrapper around the native [BugBattle](https://www.bugbattle.io) SDKs

## Installation

### via `yarn`

```bash
$ yarn add react-native-bugbattle
```

### via `npm`

```bash
$ npm install react-native-bugbattle
```

## Linking

- React Native 0.60+

Since version 0.60, React Native supports auto linking. This means no additional step is needed on your end.

- React Native <= 0.59

```bash
$ react-native link react-native-bugbattle
```

Special note for iOS using `cocoapods`, run:

```bash
$ cd ios && pod install && cd ..
```

## Usage

This library exposes all the native BugBattle SDK methods to JS with included TypeScript declaration files.

### Import

```js
import BugBattle, { BugBattleActivationMethod } from 'react-native-bugbattle';
```

### Common scenarios

#### Initialising the SDK

```js
BugBattle.initialise("YOUR_API_KEY", BugBattleActivationMethod.SHAKE);
```

#### Manually starting the bug reporting flow

```js
BugBattle.startBugReporting();
```

#### Changing the bug reporting UI color

```js
BugBattle.setAppBarColor("#AAAAAA");
```

#### Prefilling the user email in the bug reporting UI

```js
BugBattle.setUserEmail("example@domain.com");
```

#### Attaching custom data to a report

```js
BugBattle.attachCustomData({
    userId : "YOUR_USER_ID",
    age : 21
    // ... 
});
```

#### Tracking custom steps

```js
BugBattle.trackStep("SCREEN_VIEW", "HOME SCREEN");
```




