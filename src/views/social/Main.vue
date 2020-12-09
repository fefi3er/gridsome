<template>
    <div>
        <div class="el-card is-never-shadow" style="min-height: 400px; margin-bottom: 20px; padding: 0px 0px 20px;">
            <div class="el-card__body"><div class="el-tabs el-tabs--card el-tabs--top">
                <div class="el-tabs__header is-top"><div class="el-tabs__nav-wrap is-top"><div class="el-tabs__nav-scroll">
                <div role="tablist" class="el-tabs__nav" style="transform: translateX(0px);">
                    <div id="tab-followers" aria-controls="pane-followers" role="tab" tabindex="0" class="el-tabs__item is-top" aria-selected="true" @click="tabClick(0)" :class="tab==0?'is-active':''">粉丝 9</div><div :class="tab==1?'is-active':''" @click="tabClick(1)" id="tab-following" aria-controls="pane-following" role="tab" tabindex="-1" class="el-tabs__item is-top">关注 6</div></div></div></div></div><div class="el-tabs__content"  v-show="tab == 0" ><div role="tabpanel" id="pane-followers" aria-labelledby="tab-followers" class="el-tab-pane" style="padding: 5px;"><div class=""><div><div class="el-row" style="min-height: 200px;"><div class="el-col el-col-8" style="padding: 10px;">
                        <div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!---->
        <div class="el-card__body"><i class="el-icon-star-off"></i> 
        <a href="https://github.com/lililiwj" style="text-decoration: none; cursor: pointer;">lililiwj</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/lililiwj" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars1.githubusercontent.com/u/38744589?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/shuanghewuyanzu" style="text-decoration: none; cursor: pointer;">shuanghewuyanzu</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/shuanghewuyanzu" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars1.githubusercontent.com/u/38081886?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/royalosyin" style="text-decoration: none; cursor: pointer;">royalosyin</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/royalosyin" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars1.githubusercontent.com/u/18584202?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/lengxing" style="text-decoration: none; cursor: pointer;">lengxing</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/lengxing" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars0.githubusercontent.com/u/6905136?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/loachfighter" style="text-decoration: none; cursor: pointer;">loachfighter</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/loachfighter" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars1.githubusercontent.com/u/23497780?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/rocky-191" style="text-decoration: none; cursor: pointer;">rocky-191</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/rocky-191" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars0.githubusercontent.com/u/13551340?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/jh2k15" style="text-decoration: none; cursor: pointer;">jh2k15</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/jh2k15" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars0.githubusercontent.com/u/24727024?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/1309822767" style="text-decoration: none; cursor: pointer;">1309822767</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/1309822767" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars0.githubusercontent.com/u/34164741?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/Tarhyru" style="text-decoration: none; cursor: pointer;">Tarhyru</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/Tarhyru" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars1.githubusercontent.com/u/13960592?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div></div> <div style="text-align: center; margin-top: 10px;"></div></div><div class="el-loading-mask" style="display: none;"><div class="el-loading-spinner"><svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg></div></div></div></div> <div role="tabpanel" id="pane-following" aria-labelledby="tab-following" class="el-tab-pane" style="padding: 5px; display: none;" aria-hidden="true"><div class=""><div><div class="el-row" style="min-height: 200px;"><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/kazupon" style="text-decoration: none; cursor: pointer;">kazupon</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/kazupon" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars1.githubusercontent.com/u/72989?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/Jinjiang" style="text-decoration: none; cursor: pointer;">Jinjiang</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/Jinjiang" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars1.githubusercontent.com/u/206848?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/Justineo" style="text-decoration: none; cursor: pointer;">Justineo</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/Justineo" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars2.githubusercontent.com/u/1726061?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/chrisvfritz" style="text-decoration: none; cursor: pointer;">chrisvfritz</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/chrisvfritz" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars2.githubusercontent.com/u/2327556?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/defcc" style="text-decoration: none; cursor: pointer;">defcc</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/defcc" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars1.githubusercontent.com/u/2603918?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/Akryum" style="text-decoration: none; cursor: pointer;">Akryum</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/Akryum" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars0.githubusercontent.com/u/2798204?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/jkzing" style="text-decoration: none; cursor: pointer;">jkzing</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/jkzing" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars1.githubusercontent.com/u/2851517?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/HerringtonDarkholme" style="text-decoration: none; cursor: pointer;">HerringtonDarkholme</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/HerringtonDarkholme" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars2.githubusercontent.com/u/2883231?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/javoski" style="text-decoration: none; cursor: pointer;">javoski</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/javoski" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a><img src="https://avatars0.githubusercontent.com/u/5391892?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div></div> <div style="text-align: center; margin-top: 10px;"><div class="el-pagination is-background"><button type="button" disabled="disabled" class="btn-prev"><i class="el-icon el-icon-arrow-left"></i></button><ul class="el-pager"><li class="number active">1</li><!----><!----><li class="number">2</li></ul><button type="button" class="btn-next"><i class="el-icon el-icon-arrow-right"></i></button></div></div></div><div class="el-loading-mask" style="display: none;"><div class="el-loading-spinner"><!----></div></div>
    </div></div></div><div class="el-tabs__content"  v-show="tab == 1" ><div role="tabpanel" id="pane-followers" aria-labelledby="tab-followers" class="el-tab-pane" style="padding: 5px;"><div class=""><div><div class="el-row" style="min-height: 200px;"><div class="el-col el-col-8" style="padding: 10px;">
                        <div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!---->
        <div class="el-card__body"><i class="el-icon-star-off"></i> 
        <a href="https://github.com/lililiwj" style="text-decoration: none; cursor: pointer;">lililiwj</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/lililiwj" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars1.githubusercontent.com/u/38744589?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/loachfighter" style="text-decoration: none; cursor: pointer;">loachfighter</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/loachfighter" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars1.githubusercontent.com/u/23497780?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/rocky-191" style="text-decoration: none; cursor: pointer;">rocky-191</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/rocky-191" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars0.githubusercontent.com/u/13551340?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/jh2k15" style="text-decoration: none; cursor: pointer;">jh2k15</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/jh2k15" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars0.githubusercontent.com/u/24727024?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/1309822767" style="text-decoration: none; cursor: pointer;">1309822767</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/1309822767" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars0.githubusercontent.com/u/34164741?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/Tarhyru" style="text-decoration: none; cursor: pointer;">Tarhyru</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/Tarhyru" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars1.githubusercontent.com/u/13960592?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div></div> <div style="text-align: center; margin-top: 10px;"></div></div><div class="el-loading-mask" style="display: none;"><div class="el-loading-spinner"><svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg></div></div></div></div> <div role="tabpanel" id="pane-following" aria-labelledby="tab-following" class="el-tab-pane" style="padding: 5px; display: none;" aria-hidden="true"><div class=""><div><div class="el-row" style="min-height: 200px;"><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/kazupon" style="text-decoration: none; cursor: pointer;">kazupon</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/kazupon" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars1.githubusercontent.com/u/72989?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/Jinjiang" style="text-decoration: none; cursor: pointer;">Jinjiang</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/Jinjiang" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars1.githubusercontent.com/u/206848?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/Justineo" style="text-decoration: none; cursor: pointer;">Justineo</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/Justineo" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars2.githubusercontent.com/u/1726061?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/chrisvfritz" style="text-decoration: none; cursor: pointer;">chrisvfritz</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/chrisvfritz" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars2.githubusercontent.com/u/2327556?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/defcc" style="text-decoration: none; cursor: pointer;">defcc</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/defcc" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars1.githubusercontent.com/u/2603918?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/Akryum" style="text-decoration: none; cursor: pointer;">Akryum</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/Akryum" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars0.githubusercontent.com/u/2798204?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/jkzing" style="text-decoration: none; cursor: pointer;">jkzing</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/jkzing" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars1.githubusercontent.com/u/2851517?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/HerringtonDarkholme" style="text-decoration: none; cursor: pointer;">HerringtonDarkholme</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/HerringtonDarkholme" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a> <br> <img src="https://avatars2.githubusercontent.com/u/2883231?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div><div class="el-col el-col-8" style="padding: 10px;"><div class="el-card is-hover-shadow" style="font-size: 13px; color: rgb(96, 98, 102); line-height: 20px;"><!----><div class="el-card__body"><i class="el-icon-star-off"></i> 
                                    <a href="https://github.com/javoski" style="text-decoration: none; cursor: pointer;">javoski</a> <br> <i class="el-icon-message"></i> 
                                    <a href="https://github.com/javoski" target="_blank" style="text-decoration: none; cursor: pointer;">TA的主页</a><img src="https://avatars0.githubusercontent.com/u/5391892?v=4" style="width: 100%; border-radius: 5px; margin-top: 5px;"></div></div></div></div> <div style="text-align: center; margin-top: 10px;"><div class="el-pagination is-background"><button type="button" disabled="disabled" class="btn-prev"><i class="el-icon el-icon-arrow-left"></i></button><ul class="el-pager"><li class="number active">1</li><!----><!----><li class="number">2</li></ul><button type="button" class="btn-next"><i class="el-icon el-icon-arrow-right"></i></button></div></div></div><div class="el-loading-mask" style="display: none;"><div class="el-loading-spinner"><svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg><!----></div></div></div></div></div></div></div></div></div>

</template>
<script>
    import { mapGetters } from 'vuex'
    import UserApi from '@/api/user'
    export default {
        data() {
            return {
                tab:0,
                activeTab: "followers",
                followers: {
                    query: {
                        page: 1,
                        pageSize: 9,
                        pageNumber: 1
                    },
                    loading: false,
                    list: []
                },
                following: {
                    query: {
                        page: 1,
                        pageSize: 9,
                        pageNumber: 1
                    },
                    loading: false,
                    list: []
                }
            }
        },
        computed: {
            ...mapGetters([
                'githubUsername',
                'followersTotal',
                'followingTotal'
            ])
        },
        mounted() {
            this.onSelect()

        },
        methods: {
            tabClick(value){
                this.tab = value
            },
            onSelect() {
                switch (this.activeTab) {
                    case "followers":
                        this.listFollowers()
                        break
                    case "following":
                        this.listFollowing()
                        break
                    default:
                        break
                }
            },
            listFollowers() {
                // this.followers.loading = true
                // UserApi.followers(this.followers.query).then((response) => {
                //     let result = response.data
                //     let pageNumber = this.$util.parseHeaders(response.headers)
                //     if (pageNumber) {
                //         this.followers.query.pageNumber = pageNumber
                //     }
                //     this.followers.list = []
                //     for (let i = 0; i < result.length; i++) {
                //         let data = {}
                //         data.name = result[i]['login']
                //         data.avatarUrl = result[i]['avatar_url']
                //         data.htmlUrl = result[i]['html_url']
                //         this.followers.list.push(data)
                //     }
                // }).then(() => this.followers.loading = false)
            },
            listFollowing() {
                // this.following.loading = true
                // UserApi.following(this.following.query).then((response) => {
                //     let result = response.data
                //     let pageNumber = this.$util.parseHeaders(response.headers)
                //     if (pageNumber) {
                //         this.following.query.pageNumber = pageNumber
                //     }
                //     this.following.list = []
                //     for (let i = 0; i < result.length; i++) {
                //         let data = {}
                //         data.name = result[i]['login']
                //         data.avatarUrl = result[i]['avatar_url']
                //         data.htmlUrl = result[i]['html_url']
                //         this.following.list.push(data)
                //     }
                // }).then(() => this.following.loading = false)
            },


        }
    }
</script>