//
//  MyButtonControl.h
//  testApp
//
//  Created by zhang kai on 16/8/11.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

#import "RCTComponent.h"
#import "UIView+React.h"

@class MyButton, RCTEventDispatcher;

@protocol MyButtonDelegate <NSObject>

@optional

- (void)myButtonClicked:(MyButton * _Nonnull)button;

@end



@interface MyButton : UIView
{
  id<MyButtonDelegate> deleage;
}

@property (nonatomic, copy) RCTBubblingEventBlock onPress;

@property(nullable,nonatomic,weak) id<MyButtonDelegate> delegate;


@end




