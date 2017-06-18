//
//  CustomRNView.m
//  EnglishGo
//
//  Created by Martin Lee on 6/16/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "CustomRNView.h"
#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(CustomRNViewManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(message, NSString)
RCT_EXPORT_VIEW_PROPERTY(vocabs, NSArray);
@end
