class CoinsBar extends DrawableObject{
    IMAGES = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png',

    ];

    // percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 30;
        this.y = 80;
        this.width = 180;
        this.height = 40;
        this.setPercentage(0);
    }

    setPercentage(percentage) { 
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex(){     
        if (this.percentage == 0) {
            return 0;
        } else if (this.percentage == 20) {
            return 1;
        } else if (this.percentage == 40) {
            return 2;
        } else if (this.percentage == 60) {
            return 3;
        } else if (this.percentage == 80) {
            return 4;
        } else {
            return 5;
        }       
    }
}