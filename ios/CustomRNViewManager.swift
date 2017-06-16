//
//  CustomRNViewManager.swift
//  EnglishGo
//
//  Created by Martin Lee on 6/16/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

import UIKit

@objc(CustomRNViewManager)
class CustomRNViewManager: RCTViewManager {
  override func view() -> UIView! {
    return ObjectRecognitionVC().view
  }
}
