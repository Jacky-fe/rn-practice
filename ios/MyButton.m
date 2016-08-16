//
//  MyButton.m
//  testApp
//
//  Created by zhang kai on 16/8/10.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTViewManager.h"
#import "MyButtonControl.h"
#import "UIView+React.h"
#import "MyButton.h"
#import "RCTBridge.h"

@interface MyButtonManager() <MyButtonDelegate>
@end

@implementation MyButtonManager
@synthesize bridge = _bridge;
RCT_EXPORT_MODULE()
RCT_EXPORT_VIEW_PROPERTY(onPress, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(text, NSString)
RCT_REMAP_VIEW_PROPERTY(clickable, enabled, BOOL)
/*
RCT_CUSTOM_VIEW_PROPERTY(text, NSString, UIButton)
{
  [view setTitle:json forState:UIControlStateNormal];
}*/
/*

- (NSArray *)customDirectEventTypes
{
  return @[
           @"onButtonPress"
           ];
}

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}*/

- (MyButton *)view
{
  MyButton *button = [[MyButton alloc] init];
  button.delegate = self;
  return button;
}


- (void)myButtonClicked:(MyButton *)button
{
  if (button.onPress)
  {
    button.onPress(@{});
  }
}

@end
