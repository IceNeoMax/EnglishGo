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
  
  func setVocabs(_ vocabs: NSArray) {
    let vc = view().parentViewController
    if let orVC = vc, ((orVC as? ObjectRecognitionVC) != nil) {
      (orVC as! ObjectRecognitionVC).arrayOfVocabs = vocabs.map({return $0 as! String})
    }
  }
}

extension UIView {
  var parentViewController: UIViewController? {
    var parentResponder: UIResponder? = self
    while parentResponder != nil {
      parentResponder = parentResponder!.next
      if let viewController = parentResponder as? UIViewController {
        return viewController
      }
    }
    return nil
  }
}
