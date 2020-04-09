#import "RNBugBattle.h"

static NSString* const ACTIVATION_NONE = @"NONE";
static NSString* const ACTIVATION_SHAKE = @"SHAKE";

@implementation RNBugBattle

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(initialise:(NSString *)apiKey withActivationMethod:(NSString *)method)
{
    if ([method isEqualToString: ACTIVATION_NONE]) {
        [BugBattle initWithToken:apiKey andActivationMethod: NONE];
    }
    
    else if ([method isEqualToString: ACTIVATION_SHAKE]) {
        [BugBattle initWithToken:apiKey andActivationMethod: SHAKE];
    }
}

RCT_EXPORT_METHOD(startBugReporting)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        [BugBattle startBugReporting];
    });
}

RCT_EXPORT_METHOD(setAppBarColor:(NSString *)hexColor)
{
    [BugBattle setNavigationBarTint: [UIColor colorWithHexString: hexColor]];
}

RCT_EXPORT_METHOD(setUserEmail:(NSString *)email)
{
    [BugBattle setCustomerEmail: email];
}

RCT_EXPORT_METHOD(attachCustomData: (NSDictionary *)data)
{
    [BugBattle attachCustomData: data];
}

RCT_EXPORT_METHOD(trackStep:(NSString *)type withData:(NSString *)data)
{
    [BugBattle trackStepWithType: type andData:data];
}

@end
