//
//  MyButtonControl.m
//  testApp
//
//  Created by zhang kai on 16/8/11.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "MyButtonControl.h"


#import "RCTConvert.h"
#import "RCTEventDispatcher.h"
#import "RCTUtils.h"
#import "UIView+React.h"

@implementation MyButton
{
  
  UIButton *_button;
}
- (instancetype)init
{
  
  
  if(self=[super init])
  {
    _button = [[UIButton alloc] init];
    [_button addTarget:self action:@selector(btnClick:) forControlEvents:UIControlEventTouchUpInside];
    
    [self addSubview:_button];
  }
  return self;
}
- (void)layoutSubviews
{
  [super layoutSubviews];
  [_button addTarget:self action:@selector(btnClick:) forControlEvents:UIControlEventTouchUpInside];
  
  _button.frame = self.bounds;
}


- (void)setText:(NSString *)text
{
  [_button setTitle:text forState:UIControlStateNormal];
}



- (void)btnClick:(MyButton *)button
{
  [self.delegate myButtonClicked:self];
  // [_eventDispatcher sendInputEventWithName:@"onButtonPress" body:@{}];
}



@end
