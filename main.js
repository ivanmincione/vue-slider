var app = new Vue (
    {
        el: "#root",
        data: {
            indexImg : 0,
            images : [ "https://img.freepik.com/free-photo/3d-render-abstract-background-with-flowing-particles_1048-12966.jpg?size=626&ext=jpg",
            "https://lh3.googleusercontent.com/proxy/7XVsAkcZq3NYXWdgI38JBNnKZtTV_NQYJDPdMHJqpfRNv-DRMvIlJDylADZ6-0VbRaHhvU4rU8QzG5BuGT312eA9DAsp2Zne-RZQEMMq_m4Jh-jDt8I2PZFFWZC5K9cQv18",
            "https://lh3.googleusercontent.com/proxy/XlLb0bC9N40X2cGyN6spX7iMFYYsRk9KDSYrF1tQwMN2jGOftZRwVe2uvnEYHcJf6iJYLnmEFFLZ0fAHUQqLLaNBiXC4bbnsBXAWU3_11TN2ytC40crjKAPZRs81iw",
            "https://us.123rf.com/450wm/maykal/maykal1902/maykal190200069/116883671-color-splashes-of-ink-isolated-on-black-background-abstract-paint-in-water.jpg?ver=6",
            "https://www.phaidon.com/resource/kandinsky-circles.jpg",
            "https://365psd.com/images/previews/f8b/abstract-music-design-background-vector-illustration-3357.jpg",
        ],

            timer: 0,
        },

        methods: {

            nextImg() {
                // incremento fino a raggiungere l'indice massimo
                this.indexImg ++ ;
                if( this.indexImg > this.images.length - 1 ) {
                    this.indexImg = 0;
                    this.resetPlay();
                }
            },

            prevImg() {
                //decremento fino al raggiungimento dell'indice minimo
                this.indexImg --;
                if( this.indexImg < 0) {
                    this.indexImg = this.images.length - 1;
                    this.resetPlay();
                }
            },

            // click sui circles e cambio di immagine corrispondente
            selectSlide: function(index) {
                this.indexImg = index;
                this.resetPlay();
            },

            // ------------------------- TEST ---------------------

// l'autoplay si avvia solo dopo aver cliccato su un circle o dopo aver scorso tutte le immagini .... ??? ....

            play() {
                let element = this;
                this.timer = setInterval(function() {
                element.nextImg();
                }, 2000);
            },

            resetPlay() {
                clearInterval(this.timer);
                this.play();
            },


//end methods
        },

//end Vue
    }
);
