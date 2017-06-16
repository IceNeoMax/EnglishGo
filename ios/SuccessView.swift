//
//  SuccessView.swift
//  AILearningEnglishForKids
//
//  Created by Martin Lee on 5/20/17.
//  Copyright © 2017 Tien Le. All rights reserved.
//

import UIKit

let NOTI_SUCESS_LEVEL = "FinishLevel"
class SuccessView: UIView {
    @IBOutlet var view: UIView!
    @IBOutlet weak var imageView: UIImageView!
    @IBOutlet weak var btnHome: UIButton!
    weak var parentController: UIViewController?
    override init(frame: CGRect) {
        super.init(frame: frame)
        nibSetup()
    }
    
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        nibSetup()
    }
    
    private func nibSetup() {
        view = loadViewFromNib()
        view.frame = bounds
        view.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        view.translatesAutoresizingMaskIntoConstraints = true
        addSubview(view)
        imageView.animationImages = [#imageLiteral(resourceName: "pikachu1"), #imageLiteral(resourceName: "pikachu2")]
        imageView.animationDuration = 0.5
        imageView.animationRepeatCount = 0
        imageView.startAnimating()
        view.backgroundColor = .clear
        self.backgroundColor = .clear
    }
    
    private func loadViewFromNib() -> UIView {
        let nib = UINib(nibName: "SuccessView", bundle: nil)
        let nibView = nib.instantiate(withOwner: self, options: nil).first as! UIView
        return nibView
    }
    @IBAction func btnHomeClicked(_ sender: Any) {
        
    }
}
