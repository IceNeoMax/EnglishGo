//
//  CustomRNView.h
//  EnglishGo
//
//  Created by Martin Lee on 6/16/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <React/RCTView.h>

@interface CustomRNView : RCTView
@property (nonatomic, strong) NSString *serverURL;
@property (nonatomic, strong) NSArray *vocabs;
@end
