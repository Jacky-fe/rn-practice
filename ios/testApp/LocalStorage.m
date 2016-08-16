//
//  FTPClient.m
//  hui10
//
//  Created by zhang kai on 16/7/18.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "LocalStorage.h"
#import "RCTLog.h"
@implementation LocalStorage

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(save:(NSString *)key value:(NSString *)value)
{
  RCTLogInfo(@"try to save %@ with key %@", value, key);
  NSUserDefaults * setting = [NSUserDefaults standardUserDefaults];

  [setting setObject:value forKey:key];
  [setting synchronize];
}

RCT_EXPORT_METHOD(load:(NSString *)key resolver:(RCTPromiseResolveBlock) resolve rejecter:(RCTPromiseRejectBlock) reject)
{
  NSUserDefaults * settings = [NSUserDefaults standardUserDefaults];
  NSString *value = [settings objectForKey:key];
  resolve(value);
}


@end
